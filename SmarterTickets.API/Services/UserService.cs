using Microsoft.EntityFrameworkCore;
using SmarterTickets.API.Data;
using SmarterTickets.Core.DTOs;
using SmarterTickets.Core.Interfaces;
using SmarterTickets.Core.Models;

namespace SmarterTickets.API.Services;

public class UserService(AppDbContext context) : IUserService
{
    public async Task<IEnumerable<UserDto>> GetAllUsersAsync()
    {
        var users = await context.Users.ToListAsync();
        
        return users.Select(u => new UserDto
        {
            Id = u.Id,
            FirstName = u.FirstName,
            LastName = u.LastName,
            Email = u.Email,
            Role = u.Role
        });
    }

    public async Task<UserDto?> GetUserByIdAsync(int id)
    {
        var user = await context.Users.FindAsync(id);
        if (user == null) return null;

        return new UserDto
        {
            Id = user.Id,
            FirstName = user.FirstName,
            LastName = user.LastName,
            Email = user.Email,
            Role = user.Role
        };
    }

    public async Task<UserDto> CreateUserAsync(CreateUserDto createUserDto)
    {
        var user = new User
        {
            FirstName = createUserDto.FirstName,
            LastName = createUserDto.LastName,
            Email = createUserDto.Email,
            PasswordHash = BCrypt.Net.BCrypt.HashPassword(createUserDto.Password),
            Role = createUserDto.Role
        };

        context.Users.Add(user);
        await context.SaveChangesAsync();
        await context.Entry(user).ReloadAsync();

        return new UserDto
        {
            Id = user.Id,
            FirstName = user.FirstName,
            LastName = user.LastName,
            Email = user.Email,
            Role = user.Role
        };
    }

    public async Task<bool> DeleteUserAsync(int id)
    {
        var user = await context.Users.FindAsync(id);
        if (user == null) return false;

        context.Users.Remove(user);
        await context.SaveChangesAsync();
        return true;
    }
}