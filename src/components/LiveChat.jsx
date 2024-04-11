import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";

const LiveChat = () => {
    const [liveMessage,setLiveMessage]=useState('')
  const dispatch = useDispatch();
  const newMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const time = setInterval(() => {
      //Api polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: "THis is a dispatched data",
        })
      );
      console.log("Api POllng");
    }, 2000);

    return () => clearInterval(time);
    }, []);

  const SendMessage = () => {
    console.log(liveMessage);
    dispatch(addMessage({
        name:"Sharad Patel",
        message:liveMessage
    }))
    setLiveMessage("")
  };
  return (
    <div>
      <div className="p-2 ml-2 w-full h-[550px] border border-black bg-slate-100 rounded overflow-y-scroll flex flex-col-reverse">
        {newMessages.map((msg, index) => (
          <ChatMessage
            key={index}
            name={msg.name}
            message={msg.message}
          />
        ))}
      </div>
      <div className="w-full ">
        <input
          type="text"
          className="w-2/3 m-2 p-2 border rounded-lg border-black"
          value={liveMessage}
          onChange={(e)=>setLiveMessage(e.target.value)}
        />
        <button
          onClick={SendMessage}
          className="w-18 p-2 m-2 border rounded-lg border-black bg-green-500"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default LiveChat;
