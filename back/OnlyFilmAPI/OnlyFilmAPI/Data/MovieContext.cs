using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Movie.Models;

namespace Movie.Data;

public partial class MovieContext : DbContext
{
    public MovieContext(DbContextOptions<MovieContext> options)
        : base(options)
    {
    }

    public virtual DbSet<MovieEntity> Movies { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_general_ci")
            .HasCharSet("utf8mb4");

        modelBuilder.Entity<MovieEntity>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("movie");

            entity.Property(e => e.Id)
                .HasColumnType("int(11)")
                .HasColumnName("id");
            entity.Property(e => e.Cast)
                .HasMaxLength(1000)
                .HasColumnName("cast");
            entity.Property(e => e.Director)
                .HasMaxLength(100)
                .HasColumnName("director");
            entity.Property(e => e.Genres)
                .HasMaxLength(50)
                .HasColumnName("genres");
            entity.Property(e => e.ImdbId)
                .HasMaxLength(25)
                .HasColumnName("imdb_id");
            entity.Property(e => e.MoviePoster)
                .HasMaxLength(4000)
                .HasColumnName("movie_poster");
            entity.Property(e => e.Rating)
                .HasMaxLength(50)
                .HasColumnName("rating");
            entity.Property(e => e.Runtime)
                .HasMaxLength(10)
                .HasColumnName("runtime");
            entity.Property(e => e.ShortSummary)
                .HasMaxLength(512)
                .HasColumnName("short_summary");
            entity.Property(e => e.Summary)
                .HasMaxLength(4000)
                .HasColumnName("summary");
            entity.Property(e => e.Title)
                .HasMaxLength(256)
                .HasColumnName("title");
            entity.Property(e => e.Writers)
                .HasMaxLength(100)
                .HasColumnName("writers");
            entity.Property(e => e.Year)
                .HasColumnType("int(11)")
                .HasColumnName("year");
            entity.Property(e => e.YoutubeTrailer)
                .HasMaxLength(256)
                .HasColumnName("youtube_trailer");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
