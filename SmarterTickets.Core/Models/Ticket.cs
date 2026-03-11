using SmarterTickets.Core.Enums;

namespace SmarterTickets.Core.Models;

public class Ticket
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public TicketStatus Status { get; set; } = TicketStatus.Open;
    public TicketPriority Priority { get; set; } = TicketPriority.Medium;
    public DateTime CreatedAt { get; set; }
    public DateTime? UpdatedAt { get; set; }
    public DateTime? ResolvedAt { get; set; }
    
    public int UserId { get; set; }
    public User User { get; set; } = null!;

    public ICollection<Comment> Comments { get; set; } = new List<Comment>();
}