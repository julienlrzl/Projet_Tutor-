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

        // PUT: api/Movie/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMovieEntity(int id, MovieEntity movieEntity)
        {
            if (id != movieEntity.Id)
            {
                return BadRequest();
            }

            _context.Entry(movieEntity).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MovieEntityExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Movie
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<MovieEntity>> PostMovieEntity(MovieEntity movieEntity)
        {
          if (_context.Movies == null)
          {
              return Problem("Entity set 'MovieContext.Movies'  is null.");
          }
            _context.Movies.Add(movieEntity);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMovieEntity", new { id = movieEntity.Id }, movieEntity);
        }

        // DELETE: api/Movie/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMovieEntity(int id)
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

            _context.Movies.Remove(movieEntity);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MovieEntityExists(int id)
        {
            return (_context.Movies?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
