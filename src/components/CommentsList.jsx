import React from "react";
import Comment from "./Comment";

const CommentsList = ({comments}) => {
  return (
      comments.map((comment,i) => (
        <div key={i+'comment'}>
            <Comment data={comment} />
            <div className="ml-9 pl-5 border border-l-black">
                <CommentsList  comments={comment.replies}/>
            </div>
        </div>
      ))
  );
};

export default CommentsList;
