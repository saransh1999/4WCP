using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace authtest.Extras
{
    // Class implementation of Interface
    public class Jwtauth : Ijwtauth
    {
        private readonly IDictionary<string, string> users = new Dictionary<string, string>
    {{ "1","password1" },{ "2","password2"}};

        private readonly string key;

        public Jwtauth(string key)
        {
            this.key = key;
        }

        // Function to generate Token
        public string Authentication(string username, string password)
        {
            // Authentication is done using username and password
            if (!users.Any(u => u.Key == username && u.Value == password))
            {
                return null;
            }
            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenKey = Encoding.ASCII.GetBytes(key);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, username),
                }),
                Expires = DateTime.UtcNow.AddHours(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(tokenKey),
                SecurityAlgorithms.HmacSha256Signature)
            };
            // Token is generated
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);

        }

    }
}

