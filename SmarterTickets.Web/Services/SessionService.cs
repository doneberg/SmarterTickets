using SmarterTickets.Core.DTOs;
using SmarterTickets.Core.Enums;

namespace SmarterTickets.Services;

public class SessionService
{
    public UserDto? CurrentUser { get; private set; }
    public bool IsLoggedIn => CurrentUser != null;
    public bool IsAdmin => CurrentUser?.Role == UserRole.Admin;

    // Event so components can react when login state changes
    public event Action? OnChange;

    public void Login(UserDto user)
    {
        CurrentUser = user;
        NotifyStateChanged();
    }

    public void Logout()
    {
        CurrentUser = null;
        NotifyStateChanged();
    }

    private void NotifyStateChanged() => OnChange?.Invoke();
}