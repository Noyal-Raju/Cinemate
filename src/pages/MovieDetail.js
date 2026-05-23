import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Backup from "../assests/backup.png";

export const MovieDetail = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}?api_key=648f5c139edba9708500ea15ec6cd1a6`
    : Backup;

  useEffect(()=>{
    document.title=`${movie.title} / Cinemate`
  },[])


  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=648f5c139edba9708500ea15ec6cd1a6`,
      );
      const data = await res.json();
      setMovie(data);
    };

    fetchData();
  }, []);
  return (
    <main>
      <section className="flex justify-around flex-wrap py-5 gap-20">
        <div className="max-w-sm">
          <img
            className="rounded shadow-2xl dark:shadow-xl"
            src={image}
            alt={movie.title}
          />
        </div>
        <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
          <h1 className="text-4xl font-bold my-3 text-center lg:text-left">
            {movie.title}
          </h1>
          <p className="my-4">{movie.overview}</p>
          {movie.genres ? (
            <p className="my-7 flex flex-wrap gap-2">
              {movie.genres.map((genre) => (
                <span
                  className="mr-2 border border-gray-200 rounded dark:border-gray-600 p-2"
                  key={genre.id}
                >
                  {genre.name}
                </span>
              ))}
            </p>
          ) : (
            ""
          )}

          <div className="flex items-center">
            <svg
              className="w-5 h-5 text-yellow-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
            </svg>
            <p className="ms-2 font-bold  text-heading">{movie.vote_average}</p>
            <span className="w-1 h-1 mx-1.5 bg-neutral-quaternary rounded-full"></span>
            <span className="font-medium">
              {movie.vote_count} reviews
            </span>
          </div>

          <p className="my-4">
            <span className="mr-2 font-bold">Runtime:</span>
            <span>{movie.runtime} min.</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">Budget:</span>
            <span>{movie.budget}</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">Revenue:</span>
            <span>{movie.revenue}</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">Release Date:</span>
            <span>{movie.release_date}</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">IMDB Code:</span>
            <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank" rel="noreferrer">{movie.imdb_id}</a>
          </p>

        </div>

        
      </section>
    </main>
  );
};
