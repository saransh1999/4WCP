using System.Drawing.Printing;
using System.IdentityModel.Tokens.Jwt;
using authtest.DirModels;
using authtest.Extras;

using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer;
using Microsoft.IdentityModel.Tokens;

namespace authtest
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddDbContext<Team2dbContext>(options =>
                options.UseSqlServer(builder.Configuration.GetConnectionString("decodeManagerDB")));




            // Add services to the container.


            builder.Services.AddControllers();


            // Token is being Authenticated
            var key = "my top secret key";
            builder.Services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;

            }).AddJwtBearer(x =>
            {
                x.RequireHttpsMetadata = false;
                x.SaveToken = true;
                x.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(System.Text.Encoding.ASCII.GetBytes(key)),
                    ValidateIssuer = false,
                    ValidateAudience = false
                };
            });
            builder.Services.AddSingleton<Ijwtauth>(new Jwtauth(key));





            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            var internalApppolicy = "internalApp";
            builder.Services.AddCors(options =>
            {
                options.AddPolicy(name: internalApppolicy,
                policy =>
                {
                    policy.WithOrigins("https://localhost:3000", "http://localhost:3000").AllowAnyHeader()
     .AllowAnyMethod();
                });
            });




            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }
            app.UseCors(internalApppolicy);

            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseAuthentication();    
            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}