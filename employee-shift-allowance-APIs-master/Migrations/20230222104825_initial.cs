using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace authtest.Migrations
{
    /// <inheritdoc />
    public partial class initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "decodemanager",
                columns: table => new
                {
                    Resource_Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Resource_ID = table.Column<int>(type: "int", nullable: false),
                    Passwords = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    isManager = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "timesheettable",
                columns: table => new
                {
                    ID = table.Column<double>(type: "float", nullable: false),
                    Resource_Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Resource_ID = table.Column<double>(type: "float", nullable: false),
                    Period_Start = table.Column<DateTime>(type: "date", nullable: false),
                    Period_End = table.Column<DateTime>(type: "date", nullable: false),
                    Hours_Done = table.Column<double>(type: "float", nullable: false),
                    Timesheet_Number = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Hours_Required = table.Column<TimeSpan>(type: "time", nullable: false),
                    Approval_Status = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    Vertical = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Horizontal = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Sub_Horizontal = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Customer_ID = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    Customer_Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    Project_ID = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Project_Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Project_Manager = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "decodemanager");

            migrationBuilder.DropTable(
                name: "timesheettable");
        }
    }
}
