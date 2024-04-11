import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info)
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="" />
      <ul>
        <li className="font-bold py-2 truncate">{title}</li>
        <li className="text-gray-600">{channelTitle}</li>
        <li className="text-gray-600">{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = (VideoCard) => {
  return ({ info }) => {
    return (
      <div className="relative">
        <h3 className="absolute text-white bg-black rounded p-2 left-4 top-4">
          {" "}
          Promoted Card
        </h3>
        <VideoCard info={info} />
      </div>
    );
  };
};

export default VideoCard;
