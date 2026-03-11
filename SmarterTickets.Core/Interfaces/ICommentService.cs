using SmarterTickets.Core.DTOs;

namespace SmarterTickets.Core.Interfaces;

public interface ICommentService
{
    Task<IEnumerable<CommentDto>> GetCommentsByTicketIdAsync(int ticketId);
    Task<CommentDto> CreateCommentAsync(CreateCommentDto createCommentDto);
    Task<bool> DeleteCommentAsync(int id);
}