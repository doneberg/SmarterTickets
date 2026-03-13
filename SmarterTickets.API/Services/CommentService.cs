using Microsoft.EntityFrameworkCore;
using SmarterTickets.API.Data;
using SmarterTickets.Core.DTOs;
using SmarterTickets.Core.Interfaces;
using SmarterTickets.Core.Models;

namespace SmarterTickets.API.Services;

public class CommentService(AppDbContext context) : ICommentService
{

    public async Task<IEnumerable<CommentDto>> GetCommentsByTicketIdAsync(int ticketId)
    {
        return await context.Comments
            .Include(c => c.User)
            .Where(c => c.TicketId == ticketId)
            .Select(c => new CommentDto
            {
                Id = c.Id,
                Content = c.Content,
                CreatedAt = c.CreatedAt,
                TicketId = c.TicketId,
                UserId = c.UserId,
                CreatedByName = $"{c.User.FirstName} {c.User.LastName}"
            })
            .ToListAsync();
    }

    public async Task<CommentDto> CreateCommentAsync(CreateCommentDto createCommentDto)
    {
        var comment = new Comment
        {
            Content = createCommentDto.Content,
            TicketId = createCommentDto.TicketId,
            UserId = createCommentDto.UserId
        };

        context.Comments.Add(comment);
        await context.SaveChangesAsync();

        var created = await context.Comments
            .Include(c => c.User)
            .FirstOrDefaultAsync(c => c.Id == comment.Id);

        return new CommentDto
        {
            Id = created!.Id,
            Content = created.Content,
            CreatedAt = created.CreatedAt,
            TicketId = created.TicketId,
            UserId = created.UserId,
            CreatedByName = $"{created.User.FirstName} {created.User.LastName}"
        };
    }

    public async Task<bool> DeleteCommentAsync(int id)
    {
        var comment = await context.Comments.FindAsync(id);
        if (comment == null) return false;

        context.Comments.Remove(comment);
        await context.SaveChangesAsync();
        return true;
    }
}