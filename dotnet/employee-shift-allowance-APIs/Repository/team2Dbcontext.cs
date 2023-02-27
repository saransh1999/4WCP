using System;
using System.Collections.Generic;
using authtest.DirModels;
using Microsoft.EntityFrameworkCore;

namespace authtest.Repository;

public partial class team2Dbcontext : DbContext
{
    public team2Dbcontext()
    {
    }

    public team2Dbcontext(DbContextOptions<team2Dbcontext> options)
        : base(options)
    {
    }

    public virtual DbSet<Decodemanager> Decodemanagers { get; set; }

    public virtual DbSet<Timesheettable> Timesheettables { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=43.204.27.26;Initial Catalog=team2db;Encrypt=false;User ID=sa;Password=Incedo@1234");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Decodemanager>(entity =>
        {
            entity.HasKey(e => e.ResourceId).HasName("PK__decodema__3EB4176257496F5C");

            entity.Property(e => e.ResourceId).ValueGeneratedNever();
        });

        modelBuilder.Entity<Timesheettable>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__timeshee__3214EC274AF561A1");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
