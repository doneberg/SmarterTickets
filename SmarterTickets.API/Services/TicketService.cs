using Microsoft.EntityFrameworkCore;
using SmarterTickets.API.Data;
using SmarterTickets.Core.DTOs;
using SmarterTickets.Core.Interfaces;
using SmarterTickets.Core.Models;

namespace SmarterTickets.API.Services;

public class TicketService : ITicketService
{
    private readonly AppDbContext _context;

    public TicketService(AppDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<TicketDto>> GetAllTicketsAsync()
    {
        var tickets = await _context.Tickets
            .Include(t => t.User)
            .ToListAsync();

        return tickets.ToList().Select(t => new TicketDto
        {
            Id = t.Id,
            Title = t.Title,
            Description = t.Description,
            Status = t.Status,
            Priority = t.Priority,
            CreatedAt = t.CreatedAt,
            UpdatedAt = t.UpdatedAt,
            ResolvedAt = t.ResolvedAt,
            UserId = t.UserId,
            CreatedByName = $"{t.User.FirstName} {t.User.LastName}"
        });
    }

    public async Task<TicketDto?> GetTicketByIdAsync(int id)
    {
        var ticket = await _context.Tickets
            .Include(t => t.User)
            .FirstOrDefaultAsync(t => t.Id == id);

        if (ticket == null) return null;

        return new TicketDto
        {
            Id = ticket.Id,
            Title = ticket.Title,
            Description = ticket.Description,
            Status = ticket.Status,
            Priority = ticket.Priority,
            CreatedAt = ticket.CreatedAt,
            UpdatedAt = ticket.UpdatedAt,
            ResolvedAt = ticket.ResolvedAt,
            UserId = ticket.UserId,
            CreatedByName = $"{ticket.User.FirstName} {ticket.User.LastName}"
        };
    }

    public async Task<TicketDto> CreateTicketAsync(CreateTicketDto createTicketDto)
    {
        var ticket = new Ticket
        {
            Title = createTicketDto.Title,
            Description = createTicketDto.Description,
            Priority = createTicketDto.Priority,
            UserId = createTicketDto.UserId,
            CreatedAt = DateTime.UtcNow
        };

        _context.Tickets.Add(ticket);
        await _context.SaveChangesAsync();

        return await GetTicketByIdAsync(ticket.Id) ?? throw new Exception("Failed to create ticket");
    }

    public async Task<TicketDto?> UpdateTicketAsync(int id, UpdateTicketDto updateTicketDto)
    {
        var ticket = await _context.Tickets.FindAsync(id);
        if (ticket == null) return null;

        ticket.Title = updateTicketDto.Title;
        ticket.Description = updateTicketDto.Description;
        ticket.Status = updateTicketDto.Status;
        ticket.Priority = updateTicketDto.Priority;
        ticket.UpdatedAt = DateTime.UtcNow;

        await _context.SaveChangesAsync();
        return await GetTicketByIdAsync(id);
    }

    public async Task<bool> DeleteTicketAsync(int id)
    {
        var ticket = await _context.Tickets.FindAsync(id);
        if (ticket == null) return false;

        _context.Tickets.Remove(ticket);
        await _context.SaveChangesAsync();
        return true;
    }
}