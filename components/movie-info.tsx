import { API_URL } from "../app/(home)/page";
import style from "../styles/movie-info.module.css";

const getMovie = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}`);
  const json = await response.json();
  return json;
};

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={style.container}>
      <img className={style.poster} src={movie.poster_path} alt={movie.title} />
      <div className={style.info}>
        <h1 className={style.title}>{movie.title}</h1>
        <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
