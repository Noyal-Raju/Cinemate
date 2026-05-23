import { useSearchParams } from "react-router-dom";
import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();

  const queryTerm = searchParams.get("q");
  console.log(queryTerm);
  const { data: movies } = useFetch(apiPath, queryTerm);

  useTitle(`Search result for ${queryTerm}`)

  return (
    <main className="w-full">
      <section className="max-w-7xl w-full mx-auto py-7">
        <p className="flex items-start justify-start dark:text-white text-3xl">
          {movies.length === 0
            ? `Results Not Found For '${queryTerm}'`
            : `Results For '${queryTerm}'`}
        </p>
        <div className="flex justify-start flex-wrap ">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
