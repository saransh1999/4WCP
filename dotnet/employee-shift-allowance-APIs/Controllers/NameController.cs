using System.Data.SqlClient;
using System.IdentityModel.Tokens.Jwt;
using System.Net;
using System.Net.Mail;
using System.Security.Claims;

using MailKit.Net.Smtp;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Primitives;
using Microsoft.IdentityModel.Tokens;
using authtest.DirModels;
using MimeKit;
using MimeKit.Text;
using Microsoft.EntityFrameworkCore;
using System.Xml;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace authtest.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class NameController : ControllerBase
    {/*
        private readonly Ijwtauth jwtauth;

        public NameController(Ijwtauth jwtauth)
        {
            this.jwtauth = jwtauth;
        }

        [AllowAnonymous]
        [HttpPost ("Login")]
        public IActionResult Login([FromBody] UserCred userCred) 
        {
            
            var token = jwtauth.Authentication(userCred.Username, userCred.Password);
            if(token == null) 
                return Unauthorized();
            return Ok(token);
        }
        
        */

        
      
        Team2dbContext db = new Team2dbContext();
        

        [AllowAnonymous]
        [HttpPost("EmployeeDashboard")]
        public IActionResult GetDatafromexcel(TokenModel request)
        {

            var jwt = new JwtSecurityTokenHandler().ReadJwtToken(request.Token);
            string id = jwt.Claims.First(c => c.Type == ClaimTypes.Name).Value;

            var employee = db.Timesheettables.Where(e => e.ResourceId.ToString() == id).ToList();
            return Ok(employee);
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("Authorize")]
        [Authorize(Roles = "Employee")]
        public IActionResult Authorize(TokenModel request)
        {
            var jwt = new JwtSecurityTokenHandler().ReadJwtToken(request.Token);
            string role = jwt.Claims.First(c => c.Type == ClaimTypes.Role).Value;
            return Ok($"Welcome {role}");
        }

        
       
        //Team2dbContext Mdb = new Team2dbContext();
        [AllowAnonymous]
        [HttpPost("MID")]
        public IActionResult Get(UpdateModel request)
        {
            var m = db.Timesheettables.
                 Where(e => e.Id == request.id).First();
           
           
            if (m.ApprovalStatus != "Approved")
            {

                m.ApprovalStatus = request.status;
                db.SaveChanges();

            }
          


            MailAddress to = new MailAddress("employeeofincedo@gmail.com");
             MailAddress from = new MailAddress("incedomanager@gmail.com");
             MailMessage message = new MailMessage(from, to);
             message.Subject = "status updated";
             message.Body = m.ApprovalStatus;
             System.Net.Mail.SmtpClient client = new System.Net.Mail.SmtpClient("smtp.gmail.com")
             {
                 Credentials = new NetworkCredential("incedomanager@gmail.com", "sfdbqiypukyxxoru"),
                 EnableSsl = true
             };
             // code in brackets above needed if authentication required
             try
             {
                 client.Send(message);

             }
             catch (SmtpException ex)
             {
                 Console.WriteLine(ex.ToString());


             }


 


            // Mdb.SaveChanges();


            return Ok(m);
        }

        //Team2dbContext dmdb = new Team2dbContext();
        [AllowAnonymous]
        [HttpPost("ManagerDashboard")]
        public IActionResult GetMD(TokenModel request) {

            var jwt = new JwtSecurityTokenHandler().ReadJwtToken(request.Token);
            var rid = jwt.Claims.First(c => c.Type == ClaimTypes.Name).Value;
            var m = db.Decodemanagers.Where(d => d.ResourceId.ToString() == rid).First();

            var rname = m.ResourceName;

            var data = db.Timesheettables.Where(d => d.ProjectManager == rname).ToList();

            return Ok(data);
        }




        

    }
}


