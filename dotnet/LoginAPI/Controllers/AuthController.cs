using LoginAPI2.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Linq;
using System.Security.Cryptography;

namespace LoginAPI2.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class AuthController : ControllerBase
	{
		public static User user = new User();
		TimeSheetMsContext ts = new TimeSheetMsContext();

		private readonly IConfiguration _configuration;
		private readonly TimeSheetMsContext _context;

		public AuthController(IConfiguration configuration, TimeSheetMsContext context)
		{
			_configuration = configuration;
			_context = context;
		}

		[HttpPost]
		public async Task<ActionResult<string>> Login(UserLogin request)
		{

			/*var employee1 = ts.EmployeeLists.ToList();*/

			var employee = ts.EmployeeLists.
				FirstOrDefault(e => e.ResourceId.Contains(request.employee_id));


			if (employee == null)
			{
				return BadRequest("User not found.");
			}
			/*if (request.employee_id != el.ResourceId)
			{
				return BadRequest("User not found.");
			}*/

			if (request.Password != employee.Passwords)
			{
				return BadRequest("Wrong password.");
			}
			user.accessToken = CreateToken(employee.ResourceId, employee.IsManager);

			user.refreshToken = Convert.ToBase64String(RandomNumberGenerator.GetBytes(64));

			return Ok(new { employee.IsManager, user.accessToken, user.refreshToken });
		}

		private string CreateToken(string name, string role)
		{
			List<Claim> claims = new List<Claim>
		{
			new Claim(ClaimTypes.Name, name),
				new Claim(ClaimTypes.Role, role)
			};

			var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(_configuration.GetSection("AppSettings:Token").Value));
			var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

			var token = new JwtSecurityToken(
				claims: claims,
				expires: DateTime.Now.AddMinutes(15),
				signingCredentials: creds);

			var jwt = new JwtSecurityTokenHandler().WriteToken(token);
			return jwt;
		}


	}
}


