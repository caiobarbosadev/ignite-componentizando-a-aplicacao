import { Header } from "./Header";
import { MovieCard } from "./MovieCard";

interface ContentProps {
  movies: MovieProps[]
  selectedGenre: GenreProps
}

interface MovieProps {
  imdbID: string
  Title: string
  Poster: string
  Runtime: string
  Ratings: RatingProps[]
}

interface RatingProps {
  Source: string
  Value: string
}

interface GenreProps {
  title: string
}

export function Content({ movies, selectedGenre }: ContentProps) {
  return (
    <div className="container">

      <Header selectedGenre={selectedGenre} />

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>

    </div>
  );
}