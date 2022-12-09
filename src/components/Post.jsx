import React from 'react';
import './Post.css'
import {Link} from "react-router-dom";

function Post({title, link, comments, ups, subreddit}) {

  return (
    <>
      <div className="post-wrapper">
        <Link to={`/subreddit/${subreddit}`}><h3 className="title">{title}</h3></Link>
        <div className="bottom-wrapper">
          <Link to={'/'}><span className="postLink">{link}</span></Link>
          <span className="comments-ups">Comments {comments} - Ups {ups}</span>
        </div>
      </div>
    </>
  );
}

export default Post;