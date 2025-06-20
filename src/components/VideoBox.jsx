import ReactPlayer from "react-player";

export function VideoBox({ videoData }) {
  return (
    <div className="w-[40%] min-h-55 p-5 mx-auto my-10 bg-gradient-to-b from-[#C1242B] via-[#C1242B] to-[#c1242c83] rounded-2xl ">
      <div className="w-full max-w-3xl mx-auto aspect-video">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoData.id.videoId}`}
          width="100%"
          controls={true}
          playing={false}
          volume={0.5}
          loop={false}
          muted={false}
        ></ReactPlayer>
      </div>
      <p className="font-head text-xl text-center my-5 line-clamp-2 min-h-15 text-white">
        {videoData.snippet.title}
      </p>
      <p className="font-cursive text-2xl border-b-2 w-fit">
        By {videoData.snippet.channelTitle}
      </p>
    </div>
  );
}
