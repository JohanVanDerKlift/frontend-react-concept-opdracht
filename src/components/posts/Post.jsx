import React from 'react';
import './Post.css'
import {Link} from "react-router-dom";
import numberFormat from "../../helpers/numberFormat";
import numberOfCharacters from "../../helpers/numberOfCharacters";

function Post({title, link, comments, ups, subreddit, url}) {

  return (
    <>
      <div className="post-wrapper">
        <Link to={`/subreddit/${subreddit}`} className="link"><h3 className="title">{numberOfCharacters(title)}</h3></Link>
        <div className="bottom-wrapper">
          <a href={url} className="post-link"><span>{link}</span></a>
          <span className="comments-ups">Comments {numberFormat(comments)} - Ups {numberFormat(ups)}</span>
        </div>
      </div>
    </>
  );
}

export default Post;