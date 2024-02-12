using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace GPQassim.Models;

public partial class GpContext : DbContext
{
    public GpContext()
    {
    }

    public GpContext(DbContextOptions<GpContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Question> Questions { get; set; }

    public virtual DbSet<Questionnaire> Questionnaires { get; set; }

    public virtual DbSet<Student> Students { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    #warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source =DESKTOP-9O5DVEI\\MSSQLSERVER03;Initial Catalog=GP; User Id =qasim13; Password=qasim13;TrustServerCertificate=True");
    //
    //Data Source=SQL8005.site4now.net;Initial Catalog=db_aa51c9_gp;User Id=db_aa51c9_gp_admin;Password=qasim133;TrustServerCertificate=True
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.UseCollation("Arabic_CI_AS");

        modelBuilder.Entity<Question>(entity =>
        {
            entity.HasKey(e => e.QId).HasName("PK__Question__F4FD2B66ACFC7CB6");

            entity.Property(e => e.QId).HasColumnName("Q_id");
            entity.Property(e => e.A)
                .HasMaxLength(200)
                .IsUnicode(false);
            entity.Property(e => e.B)
                .HasMaxLength(200)
                .IsUnicode(false);
            entity.Property(e => e.C)
                .HasMaxLength(200)
                .IsUnicode(false);
            entity.Property(e => e.D)
                .HasMaxLength(200)
                .IsUnicode(false);
            entity.Property(e => e.QuestionText)
                .HasMaxLength(200)
                .IsUnicode(false)
                .HasColumnName("question_text");
        });

        modelBuilder.Entity<Questionnaire>(entity =>
        {
            entity.HasKey(e => e.Number).HasName("PK__Question__78A1A19C5912713E");

            entity.ToTable("Questionnaire");

            entity.Property(e => e.AStatus).HasColumnName("A_status");
            entity.Property(e => e.BStatus).HasColumnName("B_status");
            entity.Property(e => e.CStatus).HasColumnName("C_status");
            entity.Property(e => e.DStatus).HasColumnName("D_status");
            entity.Property(e => e.QId).HasColumnName("Q_id");
            entity.Property(e => e.StId).HasColumnName("St_id");

            entity.HasOne(d => d.QIdNavigation).WithMany(p => p.Questionnaires)
                .HasForeignKey(d => d.QId)
                .HasConstraintName("fk_Questionnaire_Questions");

            entity.HasOne(d => d.St).WithMany(p => p.Questionnaires)
                .HasForeignKey(d => d.StId)
                .HasConstraintName("fk_Questionnaire_STUDENTS");
        });

        modelBuilder.Entity<Student>(entity =>
        {
            entity.HasKey(e => e.StId);

            entity.ToTable("STUDENTS");

            entity.Property(e => e.StId)
                .ValueGeneratedNever()
                .HasColumnName("ST_ID");
            entity.Property(e => e.Department).HasMaxLength(255);
            entity.Property(e => e.Division).HasMaxLength(255);
            entity.Property(e => e.PhoneNumber).HasMaxLength(255);
            entity.Property(e => e.StName)
                .HasMaxLength(255)
                .HasColumnName("ST_NAME");
        });

        OnModelCreatingPartial(modelBuilder);
    }
    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
