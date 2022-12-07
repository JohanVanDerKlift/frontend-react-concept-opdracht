import React from 'react';
import './Post.css'

function Post({title, link, comments, ups}) {
  return (
    <>
      <div className="post-wrapper">
        <h3 className="title">{title}</h3>
        <div className="bottom-wrapper">
          <span className="postLink">{link}</span>
          <span className="comments-ups">Comments {comments} - Ups {ups}</span>
        </div>
      </div>
    </>
  );
}

export default Post;