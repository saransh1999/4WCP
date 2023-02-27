using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace authtest.DirModels;

public partial class Team2dbContext : DbContext
{
    public Team2dbContext()
    {
    }

    public Team2dbContext(DbContextOptions<Team2dbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Decodemanager> Decodemanagers { get; set; }

    public virtual DbSet<Timesheettable> Timesheettables { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=43.204.27.26;Initial Catalog=team2db;Persist Security Info=False;User ID=sa;Password=Incedo@1234;MultipleActiveResultSets=True;Encrypt=True;TrustServerCertificate=True;Connection Timeout=30;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Decodemanager>(entity =>
        {
            entity.HasKey(e => e.ResourceId).HasName("PK__decodema__3EB4176257496F5C");

            entity.ToTable("decodemanager");

            entity.Property(e => e.ResourceId)
                .ValueGeneratedNever()
                .HasColumnName("Resource_ID");
            entity.Property(e => e.IsManager)
                .HasMaxLength(50)
                .HasColumnName("isManager");
            entity.Property(e => e.Passwords).HasMaxLength(50);
            entity.Property(e => e.ResourceName)
                .HasMaxLength(50)
                .HasColumnName("Resource_Name");
        });

        modelBuilder.Entity<Timesheettable>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__timeshee__3214EC274AF561A1");

            entity.ToTable("timesheettable");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.ApprovalStatus)
                .HasMaxLength(50)
                .HasColumnName("Approval_Status");
            entity.Property(e => e.CustomerId)
                .HasMaxLength(50)
                .HasColumnName("Customer_ID");
            entity.Property(e => e.CustomerName)
                .HasMaxLength(50)
                .HasColumnName("Customer_Name");
            entity.Property(e => e.Horizontal).HasMaxLength(50);
            entity.Property(e => e.HoursDone).HasColumnName("Hours_Done");
            entity.Property(e => e.HoursRequired).HasColumnName("Hours_Required");
            entity.Property(e => e.PeriodEnd)
                .HasColumnType("date")
                .HasColumnName("Period_End");
            entity.Property(e => e.PeriodStart)
                .HasColumnType("date")
                .HasColumnName("Period_Start");
            entity.Property(e => e.ProjectId)
                .HasMaxLength(50)
                .HasColumnName("Project_ID");
            entity.Property(e => e.ProjectManager)
                .HasMaxLength(50)
                .HasColumnName("Project_Manager");
            entity.Property(e => e.ProjectName)
                .HasMaxLength(50)
                .HasColumnName("Project_Name");
            entity.Property(e => e.ResourceId).HasColumnName("Resource_ID");
            entity.Property(e => e.ResourceName)
                .HasMaxLength(50)
                .HasColumnName("Resource_Name");
            entity.Property(e => e.SubHorizontal)
                .HasMaxLength(50)
                .HasColumnName("Sub_Horizontal");
            entity.Property(e => e.TimesheetNumber)
                .HasMaxLength(50)
                .HasColumnName("Timesheet_Number");
            entity.Property(e => e.Vertical).HasMaxLength(50);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
