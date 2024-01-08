using Microsoft.EntityFrameworkCore;

namespace OnlyFilm.Models
{
    public class AppDbContext : DbContext
    {
        public DbSet<Movies> Movies { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySQL("server=127.0.0.1;database=ptut;user=root;password=;");
        }

    }
}
