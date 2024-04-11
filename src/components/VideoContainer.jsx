import React, { useEffect, useState } from "react";
import { youtubeApi } from "../utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [curentPage, setCurrentPage] = useState(1);
  // const [isLoading, setLoading] = useState(true);

  const PromotedCard = AdVideoCard(VideoCard);

  ///Pagination
  const recordsPerPage = 10;
  const lastIndex = curentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  const noOfPages = Math.ceil(videos.length / recordsPerPage);
  const records = videos.slice(firstIndex, lastIndex - 1);

  const numbers = [...Array(noOfPages + 1).keys()].slice(1);

  const nextPage = () => {
    setCurrentPage(curentPage + 1);
  };
  const currPage = (page) => {
    setCurrentPage(page);
  };
  const prevPage = () => {
    setCurrentPage(curentPage - 1);
  };

  // const handleScroll = () => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop + 1 >=
  //     document.documentElement.scrollHeight
  //   ) {
  //     nextPage();
  //     setLoading(true);
  //   }
  // };

  useEffect(() => {
    getVideos();
    // window.addEventListener("scroll", handleScroll);

    // return () => window.removeEventListener("scroll", handleScroll);
  }, [
    
      // curentPage
    
  ]);

  const getVideos = async () => {
    const data = await fetch(youtubeApi);
    const json = await data.json();
    // console.log(json)
    setVideos(json.items);
  };
  return (
    <div>
      <div className="flex flex-wrap ">
        {videos[0] && <PromotedCard info={videos[0]} />}
        {records.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            {" "}
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
      <div className="bg-red-400 p-2 m-2 ">
        <ul className="flex justify-center">
          {curentPage >= 2 && (
            <li
              onClick={prevPage}
              className="border p-1  cursor-pointer  border-black rounded"
            >
              Prev
            </li>
          )}

          {numbers.map((item, i) => (
            <li
              onClick={() => currPage(item)}
              key={i}
              className={"py-1 px-2 mx-2 cursor-pointer  hover:bg-green-400 " +  (curentPage===item?'bg-yellow-300':'')}
            >
              {item}
            </li>
          ))}
          {curentPage <= noOfPages - 1 && (
            <li
              onClick={nextPage}
              className="border cursor-pointer p-1 border-black rounded"
            >
              Next
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default VideoContainer;
