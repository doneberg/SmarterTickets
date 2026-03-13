using Microsoft.EntityFrameworkCore;
using SmarterTickets.API.Data;
using SmarterTickets.API.Services;
using SmarterTickets.Core.Interfaces;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Register the database context with SQLite
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));

// Register services for dependency injection
// When a controller asks for ITicketService, it gets TicketService
builder.Services.AddScoped<ITicketService, TicketService>();
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<ICommentService, CommentService>();
// Allow Blazor and React to call the API without CORS errors
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader();
    });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("AllowAll");
app.UseAuthorization();
app.MapControllers();

// First: recreate all tables from migrations
using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    context.Database.Migrate();
}

// Second: seed demo users if none exist
using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    
    if (!context.Users.Any())
    {
        context.Users.AddRange(
            new SmarterTickets.Core.Models.User
            {
                FirstName = "Demo",
                LastName = "User",
                Email = "user@demo.com",
                PasswordHash = BCrypt.Net.BCrypt.HashPassword("demo123"),
                Role = SmarterTickets.Core.Enums.UserRole.User,
                CreatedAt = DateTime.UtcNow
            },
            new SmarterTickets.Core.Models.User
            {
                FirstName = "Demo",
                LastName = "Admin",
                Email = "admin@demo.com",
                PasswordHash = BCrypt.Net.BCrypt.HashPassword("demo123"),
                Role = SmarterTickets.Core.Enums.UserRole.Admin,
                CreatedAt = DateTime.UtcNow
            }
        );
        context.SaveChanges();
    }
}

app.Run();