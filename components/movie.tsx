"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import style from "../styles/movie.module.css";

interface IMovieProps {
  title: string;
  id: string;
  poster_path: string;
}

export default function Movie({ id, title, poster_path }: IMovieProps) {
  const router = useRouter();
  const onClick = () => router.push(`/movies/${id}`);
  return (
    <div className={style.movie}>
      <img src={poster_path} alt={title} onClick={onClick} />
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  );
}
