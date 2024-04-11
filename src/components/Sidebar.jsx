import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
 const isMenuOpen=useSelector((store)=>store.app.isMenuOpen)

 if(!isMenuOpen){
  return null;
 }
  return (
    <div className="w-48 p-5 shadow-lg">
      <h1 className="font-bold"><Link to='/'>Home</Link></h1>
      <ul>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold mt-2">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold mt-2">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
