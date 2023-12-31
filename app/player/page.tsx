"use client";
import "../../app/globals.css";
import ReactPlayer from "react-player";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  console.log(searchParams); // Logs "search"
  console.log(searchParams.get("url")); // Logs "search"
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="video_container">
        <div>
          <h2 className="text-4xl font-extrabold dark:text-white">Shakir OTT Flix - Media player</h2>
        </div>
        <div className="player__wrapper">
          <ReactPlayer
            url="/NextJs in 7 Minutes.mp4"
            light={true}
            controls={true}
          />
        </div>
      </div>
    </main>
  );
}
