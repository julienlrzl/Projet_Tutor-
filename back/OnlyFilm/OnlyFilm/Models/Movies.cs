using System.ComponentModel.DataAnnotations;

namespace OnlyFilm.Models
{
    public class Movies
    {

        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public int? Year { get; set; }
        public string Summary { get; set; }
        public string ShortSummary { get; set; }
        public string Genres { get; set; }
        public string ImdbId { get; set; }
        public string Runtime { get; set; }
        public string YoutubeTrailer { get; set; }
        public string MoviePoster { get; set; }
        public string Director { get; set; }
        public string Writers { get; set; }
        public string Cast { get; set; }
        public string Rating { get; set; }

    }
}
