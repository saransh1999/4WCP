using Microsoft.AspNetCore.Authentication;

namespace authtest.Extras
{
    // Interface for authentication
    public interface Ijwtauth
    {
        string Authentication(string username, string password);
    }
}
