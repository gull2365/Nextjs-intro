import Seo from "../components/Seo";
import { useEffect, useState } from "react";

const API_KEY = "bb6ebdfb8b5c1d36f84647f19cb4ce79";

export default function Home() {
  const [movies, setMovies] = useState();
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
    })();
  }, []);
  return (
    <div>
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movies) => (
        <div key={movies.id}>
          <h3>{movies.original_title}</h3>
        </div>
      ))}
    </div>
  );
}
