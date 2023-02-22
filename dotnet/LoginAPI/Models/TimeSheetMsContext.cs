using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace LoginAPI2.Models;

public partial class TimeSheetMsContext : DbContext
{
    public TimeSheetMsContext()
    {
    }

	//protected override void OnModelCreating(DbModelBuilder dbModelBuilder)
	//{
	//	dbModelBuilder.Conventions.Remove<pul>();
	//	dbModelBuilder.Conventions.Remove<IncludeMetadataConvention>();
	//}

	public TimeSheetMsContext(DbContextOptions<TimeSheetMsContext> options)
        : base(options)
    {
    }

	protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
		=> optionsBuilder.UseSqlServer("Server= G1-HPS2MQ3-L; Database= TimeSheet_MS; Trusted_Connection=True;TrustServerCertificate=True;");


	public virtual DbSet<EmployeeList> EmployeeLists { get; set; }

    public virtual DbSet<TsSample> TsSamples { get; set; }

    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<EmployeeList>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("employeeList");

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

        modelBuilder.Entity<TsSample>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("TS Sample");

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
