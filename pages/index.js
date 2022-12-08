import Seo from "../components/Seo";
import { useEffect, useState } from "react";

export default function Home() {
  const [movies, setMovies] = useState();
  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(`/api/movies`)).json();
      setMovies(results);
    })();
  }, []);
  return (
    <div className="container">
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movies) => (
        <div className="movies" key={movies.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} />
          <h4>{movies.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movies img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movies:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movies h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
