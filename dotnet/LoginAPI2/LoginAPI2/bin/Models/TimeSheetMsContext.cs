using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace LoginAPI2.Models;

public partial class TimeSheetMsContext : DbContext
{


	//protected override void OnModelCreating(DbModelBuilder dbModelBuilder)
	//{
	//	dbModelBuilder.Conventions.Remove<pul>();
	//	dbModelBuilder.Conventions.Remove<IncludeMetadataConvention>();
	//}

	public TimeSheetMsContext(DbContextOptions<TimeSheetMsContext> options)
        : base(options)
    {
    }

//	protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
//		=> optionsBuilder.UseSqlServer("Data Source=43.204.27.26;Initial Catalog=team2db;User ID=sa;Passowrd: Incedo@1234;");


	public virtual DbSet<decodemanager> Decodemanagers { get; set; }

    public virtual DbSet<timesheettable> Timesheettables { get; set; }

    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<decodemanager>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("decodemanager");

            entity.Property(e => e.IsManager)
                .HasMaxLength(50)
                .HasColumnName("isManager");
            entity.Property(e => e.Passwords).HasMaxLength(50);
            entity.Property(e => e.ResourceId)
                .HasMaxLength(6)
                .HasColumnName("Resource_ID");
            entity.Property(e => e.ResourceName)
                .HasMaxLength(50)
                .HasColumnName("Resource_Name");
        });

        modelBuilder.Entity<timesheettable>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("timesheettable");

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
            entity.Property(e => e.PeriodEnd).HasColumnName("Period_End");
            entity.Property(e => e.PeriodStart).HasColumnName("Period_Start");
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
