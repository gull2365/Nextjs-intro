import Seo from "../components/Seo";
import { useEffect, useState } from "react";

const API_KEY = "bb6ebdfb8b5c1d36f84647f19cb4ce79";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      );
      const json = await response.json();
    };
  }, []);
  return (
    <div>
      <Seo title="Home" />
      <h2>HELLO NEXT</h2>
    </div>
  );
}
