using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace OnlyFilm.DataDB;

public partial class ProjetPolytechContext : DbContext
{
    public ProjetPolytechContext()
    {
    }

    public ProjetPolytechContext(DbContextOptions<ProjetPolytechContext> options)
        : base(options)
    {
    }

    public virtual DbSet<MovieGenreExcel> MovieGenreExcels { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=LAPTOP-RCSHQ6AK\\SQLEXPRESS;Database=ProjetPolytech;Trusted_Connection=True;TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<MovieGenreExcel>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("MovieGenreExcel");

            entity.Property(e => e.Cast)
                .HasColumnType("text")
                .HasColumnName("cast");
            entity.Property(e => e.Director)
                .HasColumnType("text")
                .HasColumnName("director");
            entity.Property(e => e.Genres)
                .HasColumnType("text")
                .HasColumnName("genres");
            entity.Property(e => e.ImdbId)
                .HasColumnType("text")
                .HasColumnName("imdb_id");
            entity.Property(e => e.MoviePoster)
                .HasColumnType("text")
                .HasColumnName("movie_poster");
            entity.Property(e => e.Rating)
                .HasColumnType("text")
                .HasColumnName("rating");
            entity.Property(e => e.Runtime).HasColumnName("runtime");
            entity.Property(e => e.ShortSummary)
                .HasColumnType("text")
                .HasColumnName("short_summary");
            entity.Property(e => e.Summary)
                .HasColumnType("text")
                .HasColumnName("summary");
            entity.Property(e => e.Title)
                .HasColumnType("text")
                .HasColumnName("title");
            entity.Property(e => e.Writers)
                .HasColumnType("text")
                .HasColumnName("writers");
            entity.Property(e => e.Year).HasColumnName("year");
            entity.Property(e => e.YoutubeTrailer)
                .HasColumnType("text")
                .HasColumnName("youtube_trailer");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
