import { API_URL } from "../app/constants";
import style from "../styles/movie-videos.module.css";

const getVideos = async (id: string) => {
  //   await new Promise((resolve) => setTimeout(resolve, 2000));
  //   throw new Error("Something broken...");
  const res = await fetch(`${API_URL}/${id}/videos`);
  const json = await res.json();
  return json;
};

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div className={style.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={video.name}
        />
      ))}
    </div>
  );
}
