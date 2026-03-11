using Microsoft.EntityFrameworkCore;
using SmarterTickets.API.Data;
using SmarterTickets.Core.DTOs;
using SmarterTickets.Core.Interfaces;
using SmarterTickets.Core.Models;

namespace SmarterTickets.API.Services;

public class CommentService : ICommentService
{
    private readonly AppDbContext _context;

    public CommentService(AppDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<CommentDto>> GetCommentsByTicketIdAsync(int ticketId)
    {
        return await _context.Comments
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

        _context.Comments.Add(comment);
        await _context.SaveChangesAsync();

        var created = await _context.Comments
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
        var comment = await _context.Comments.FindAsync(id);
        if (comment == null) return false;

        _context.Comments.Remove(comment);
        await _context.SaveChangesAsync();
        return true;
    }
}