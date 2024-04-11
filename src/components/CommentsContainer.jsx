import React from "react";
import CommentsList from "./CommentsList";

const commentsData = [
  {
    name: "Sharad Patel",
    text: "lorem ipsumm jdhjfdsjfdsjgdsgdf fddsds",
    replies: [],
  },
  {
    name: "Sharad Patel",
    text: "lorem ipsumm jdhjfdsjfdsjgdsgdf fddsds",
    replies: [],
  },
  {
    name: "Sharad Patel",
    text: "lorem ipsumm jdhjfdsjfdsjgdsgdf fddsds",
    replies: [
      {
        name: "Sharad Patel",
        text: "lorem ipsumm jdhjfdsjfdsjgdsgdf fddsds",
        replies: [
          {
            name: "Sharad Patel",
            text: "lorem ipsumm jdhjfdsjfdsjgdsgdf fddsds",
            replies: [],
          },
          {
            name: "Sharad Patel",
            text: "lorem ipsumm jdhjfdsjfdsjgdsgdf fddsds",
            replies: [],
          },
          {
            name: "Sharad Patel",
            text: "lorem ipsumm jdhjfdsjfdsjgdsgdf fddsds",
            replies: [
              {
                name: "Sharad Patel",
                text: "lorem ipsumm jdhjfdsjfdsjgdsgdf fddsds",
                replies: [
                  {
                    name: "Sharad Patel",
                    text: "lorem ipsumm jdhjfdsjfdsjgdsgdf fddsds",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Sharad Patel",
        text: "lorem ipsumm jdhjfdsjfdsjgdsgdf fddsds",
        replies: [],
      },
      {
        name: "Sharad Patel",
        text: "lorem ipsumm jdhjfdsjfdsjgdsgdf fddsds",
        replies: [],
      },
      {
        name: "Sharad Patel",
        text: "lorem ipsumm jdhjfdsjfdsjgdsgdf fddsds",
        replies: [],
      },
    ],
  },
  {
    name: "Sharad Patel",
    text: "lorem ipsumm jdhjfdsjfdsjgdsgdf fddsds",
    replies: [],
  },
  {
    name: "Sharad Patel",
    text: "lorem ipsumm jdhjfdsjfdsjgdsgdf fddsds",
    replies: [],
  },
];
const CommentsContainer = () => {
  return (
    <div className="p-2 m-2 w-[920px]">
      <h1 className="font-bold text-xl">Comments:</h1>

      {/* {
       commentsData.map((comment,i)=> <Comment key={i+'comment'} data={comment}/>)
      } */}
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
