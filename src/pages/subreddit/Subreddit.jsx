import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

function Subreddit(props) {
  const [subredditPost, setSubredditPost] = useState({});
  const {subreddit} = useParams();

  useEffect(() => {
    async function fetchPost() {
      try {
        const result = await axios.get(`https://www.reddit.com/r/${subreddit}/about.json`);
        console.log(result.data);
        setSubredditPost(result.data);
      } catch (e) {
        console.error(e);
      }
    }

    if (subreddit) {
      fetchPost();
    }

  }, [])

  console.log(subredditPost.title)

  return (
    <>
      {Object.keys(subredditPost).length > 0 &&
        <>
          <h1>Subreddit {subreddit}</h1>

          <h2>Title</h2>
          <div>{subredditPost.data.title}</div>

          <h2>Description</h2>
          <div>{subredditPost.data.public_description}</div>

          <h2>Number of subscribers</h2>
          <div>{subredditPost.data.subscribers}</div>
        </>
      }
    </>
  );
}

export default Subreddit;