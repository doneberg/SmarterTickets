using Microsoft.AspNetCore.Mvc;
using SmarterTickets.Core.DTOs;
using SmarterTickets.Core.Interfaces;

namespace SmarterTickets.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TicketsController : ControllerBase
{
    private readonly ITicketService _ticketService;

    public TicketsController(ITicketService ticketService)
    {
        _ticketService = ticketService;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<TicketDto>>> GetAll()
    {
        var tickets = await _ticketService.GetAllTicketsAsync();
        return Ok(tickets);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<TicketDto>> GetById(int id)
    {
        var ticket = await _ticketService.GetTicketByIdAsync(id);
        if (ticket == null) return NotFound();
        return Ok(ticket);
    }

    [HttpPost]
    public async Task<ActionResult<TicketDto>> Create(CreateTicketDto createTicketDto)
    {
        var ticket = await _ticketService.CreateTicketAsync(createTicketDto);
        // Returns a 201 Created with the location of the new resource
        return CreatedAtAction(nameof(GetById), new { id = ticket.Id }, ticket);
    }

    [HttpPut("{id}")]
    public async Task<ActionResult<TicketDto>> Update(int id, UpdateTicketDto updateTicketDto)
    {
        var ticket = await _ticketService.UpdateTicketAsync(id, updateTicketDto);
        if (ticket == null) return NotFound();
        return Ok(ticket);
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> Delete(int id)
    {
        var result = await _ticketService.DeleteTicketAsync(id);
        if (!result) return NotFound();
        return NoContent();
    }
}