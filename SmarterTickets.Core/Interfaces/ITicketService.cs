using SmarterTickets.Core.DTOs;

namespace SmarterTickets.Core.Interfaces;

public interface ITicketService
{
    Task<IEnumerable<TicketDto>> GetAllTicketsAsync();
    Task<TicketDto?> GetTicketByIdAsync(int id);
    Task<TicketDto> CreateTicketAsync(CreateTicketDto createTicketDto);
    Task<TicketDto?> UpdateTicketAsync(int id, UpdateTicketDto updateTicketDto);
    Task<bool> DeleteTicketAsync(int id);
}