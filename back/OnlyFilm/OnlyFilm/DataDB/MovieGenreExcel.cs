using System;
using System.Collections.Generic;

namespace OnlyFilm.DataDB;

public partial class MovieGenreExcel
{
    public string? Title { get; set; }

    public int? Year { get; set; }

    public string? Summary { get; set; }

    public string? ShortSummary { get; set; }

    public string? Genres { get; set; }

    public string? ImdbId { get; set; }

    public int? Runtime { get; set; }

    public string? YoutubeTrailer { get; set; }

    public string? MoviePoster { get; set; }

    public string? Director { get; set; }

    public string? Writers { get; set; }

    public string? Cast { get; set; }

    public string? Rating { get; set; }
}
