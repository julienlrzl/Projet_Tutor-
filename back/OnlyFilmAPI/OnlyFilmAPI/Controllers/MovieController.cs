using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Movie.Data;
using Movie.Models;

namespace OnlyFilmAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private readonly MovieContext _context;

        public MovieController(MovieContext context)
        {
            _context = context;
        }

        // GET: api/Movie
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MovieEntity>>> GetMovies()
        {
          if (_context.Movies == null)
          {
              return NotFound();
          }
            return await _context.Movies.ToListAsync();
        }

        // GET: api/Movie/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MovieEntity>> GetMovieEntity(int id)
        {
          if (_context.Movies == null)
          {
              return NotFound();
          }
            var movieEntity = await _context.Movies.FindAsync(id);

            if (movieEntity == null)
            {
                return NotFound();
            }

            return movieEntity;
        }

        [HttpGet("ByTitle/{title}")]
        public async Task<ActionResult<IEnumerable<MovieEntity>>> GetMoviesByTitle(string title)
        {
            if (_context.Movies == null)
            {
                return NotFound();
            }

            var movies = await _context.Movies
                .Where(m => m.Title.ToLower().Contains(title.ToLower()))
                .Take(5)
                .ToListAsync();

            if (movies == null || !movies.Any())
            {
                return NotFound();
            }

            return movies;
        }

        [HttpGet("ByImdbId/{imdbId}")]
        public async Task<ActionResult<MovieEntity>> GetMovieByImdbId(string imdbId)
        {
            if (_context.Movies == null)
            {
                return NotFound();
            }

            var movieEntity = await _context.Movies.FirstOrDefaultAsync(m => m.ImdbId == imdbId);

            if (movieEntity == null)
            {
                return NotFound();
            }

            return movieEntity;
        }

        [HttpGet("Recommendations/{id}")]
        public async Task<ActionResult<IEnumerable<MovieEntity>>> GetRecommendations(string id)
        {
            var sourceMovie = await _context.Movies.FirstOrDefaultAsync(m => m.ImdbId == id);

            if (sourceMovie == null)
            {
                return NotFound();
            }

            var sqlQuery = $"SELECT m2.* " + // Modifié pour sélectionner toutes les colonnes
               $"FROM movie m1 " +
               $"JOIN movie m2 ON m1.id != m2.id AND m2.genres LIKE CONCAT('%', m1.genres, '%') " +
               $"WHERE m1.imdb_id = '{id}' " +
               $"LIMIT 7";


            var recommendedMovies = await _context.Movies
                .FromSqlRaw(sqlQuery)
                .ToListAsync();

            if (recommendedMovies == null || !recommendedMovies.Any())
            {
                return NotFound();
            }

            return recommendedMovies;
        }





        private bool MovieEntityExists(int id)
        {
            return (_context.Movies?.Any(e => e.Id == id)).GetValueOrDefault();
        }

        
    }
}
