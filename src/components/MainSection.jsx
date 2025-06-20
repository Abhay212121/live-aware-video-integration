import { Skeleton } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { VideoBox } from "./VideoBox";
import { serverAdress } from "../constants/serverAdress";

export function MainSection() {
  const { category } = useParams();
  const [active, setActive] = useState(false);
  const [videosArr, setVideosArr] = useState([]);
  const [searchQuery, setSearchQuery] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const serverLoadedCheck = async () => {
      try {
        const response = await axios.get(`${serverAdress}`);
        console.log(response);
        if (response.data.status == 200) {
          setLoaded(true);
        }
      } catch (error) {
        console.log(error);
      }
    };

    serverLoadedCheck();
  }, []);

  useEffect(() => {
    setActive(false);
    switch (category) {
      case "ikigai-philosophy":
        setSearchQuery("Ikigai,philosophy");
        break;
      case "growth-mindset":
        setSearchQuery("Growth mindset");
        break;
      case "habits-routine":
        setSearchQuery("Good habbits and Good Routine!");
        break;
      case "bucketlist-mindset":
        setSearchQuery("Bucketlist, life bucket list, must do experiences");
        break;
      case "manageyoursleep":
        setSearchQuery(
          "healthy sleep habits, improve sleep quality,how to sleep better"
        );
        break;
    }
  }, [category]);

  const handleGetRequest = async () => {
    setActive((prev) => !prev);
    try {
      const res = await axios.get(`${serverAdress}videos`, {
        params: {
          searchQuery: searchQuery,
        },
      });
      console.log("Request Sent!");
      console.log(res.data.msg);
      setVideosArr(res.data.resultArr);
    } catch (error) {
      console.log("ERR:", error);
    }
  };

  return (
    <div className="w-[75%] min-h-140 mt-5 mx-10">
      {!loaded && (
        <div className="border-2 w-[80%] p-4 mx-auto rounded-2xl font-body text-xl">
          <p>
            This is a mockup webpage just to display the integration of youtube
            API with NodeJS and the backend is hosted on render.com which is a
            free hosting service provider, So it usually takes around 30 secs to
            start the server.
          </p>
          <p>Please be patient and wait.....</p>
        </div>
      )}
      <div className="w-200 mx-auto my-15 flex flex-col gap-8">
        <Skeleton active={true} />
        {category == undefined && <Skeleton active={true} />}
      </div>
      {category == undefined ? (
        <div className="w-200 mx-auto text-3xl font-cursive bg-[#903237d3] px-4 py-6 rounded-xl text-white text-center group ">
          <p>Select a category!</p>
        </div>
      ) : (
        <div
          onClick={handleGetRequest}
          className="w-200 mx-auto text-3xl font-cursive bg-[#903237d3] py-6 rounded-xl text-white text-center group cursor-pointer"
        >
          <p className="group-hover:scale-105 duration-300">
            {!active ? "Get some reference videos!" : "Hide the videos!"}
          </p>
        </div>
      )}
      <div className="flex flex-wrap">
        {active &&
          videosArr.slice(0, 4).map((videoData) => (
            <VideoBox
              key={videoData.id.videoId}
              videoData={videoData}
            />
          ))}
      </div>
    </div>
  );
}
