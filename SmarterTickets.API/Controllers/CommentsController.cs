using Microsoft.AspNetCore.Mvc;
using SmarterTickets.Core.DTOs;
using SmarterTickets.Core.Interfaces;

namespace SmarterTickets.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CommentsController : ControllerBase
{
    private readonly ICommentService _commentService;

    public CommentsController(ICommentService commentService)
    {
        _commentService = commentService;
    }

    [HttpGet("ticket/{ticketId}")]
    public async Task<ActionResult<IEnumerable<CommentDto>>> GetByTicketId(int ticketId)
    {
        var comments = await _commentService.GetCommentsByTicketIdAsync(ticketId);
        return Ok(comments);
    }

    [HttpPost]
    public async Task<ActionResult<CommentDto>> Create(CreateCommentDto createCommentDto)
    {
        var comment = await _commentService.CreateCommentAsync(createCommentDto);
        return Ok(comment);
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> Delete(int id)
    {
        var result = await _commentService.DeleteCommentAsync(id);
        if (!result) return NotFound();
        return NoContent();
    }
}