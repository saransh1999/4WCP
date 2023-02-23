
using LoginAPI2.Models;
using Microsoft.EntityFrameworkCore;

namespace LoginAPI2
{
	public class Program
	{
		public static void Main(string[] args)
		{
			var builder = WebApplication.CreateBuilder(args);

			// Add services to the container.

			builder.Services.AddControllers();
			// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle

			builder.Services.AddDbContext<TimeSheetMsContext>(options =>
			options.UseSqlServer(builder.Configuration.GetConnectionString("dbconn")),ServiceLifetime.Singleton);

			builder.Services.AddEndpointsApiExplorer();
			builder.Services.AddSwaggerGen();

			

			var app = builder.Build();

			// Configure the HTTP request pipeline.
			if (app.Environment.IsDevelopment())
			{
				app.UseSwagger();
				app.UseSwaggerUI();
			}

			app.UseHttpsRedirection();

			app.UseAuthorization();


			app.MapControllers();

			app.Run();
		}
	}
}