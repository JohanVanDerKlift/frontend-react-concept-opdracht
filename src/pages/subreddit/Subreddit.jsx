import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {Link} from "react-router-dom";
import './Subreddit.css'
import Header from "../../components/header/Header";
import numberFormat from "../../helpers/numberFormat";

function Subreddit() {
  const [subredditPost, setSubredditPost] = useState({});
  const [header, setHeader] = useState(null);
  const [loading, toggleLoading] = useState(false);
  const {subreddit} = useParams();

  useEffect(() => {
    async function fetchPost() {
      try {
        toggleLoading(true);
        const result = await axios.get(`https://www.reddit.com/r/${subreddit}/about.json`);
        console.log(result.data);
        setSubredditPost(result.data);
        setHeader(result.data.data.display_name_prefixed);
      } catch (e) {
        console.error(e);
      }
      toggleLoading(false);
    }

    if (subreddit) {
      fetchPost();
    }
  }, [])

  return (
    <>
      <Header header={header}></Header>
      {loading && <span>Loading...</span>}
      {Object.keys(subredditPost).length > 0 &&
        <>
          <article className="subreddit-container">
            <h3>Title</h3>
            <div>{subredditPost.data.title}</div>

            <h3>Description</h3>
            <div>{subredditPost.data.public_description}</div>

            <h3>Number of subscribers</h3>
            <div>{numberFormat(subredditPost.data.subscribers)}</div>

            <Link to={'/'} className="subreddit-container__link">&lt; Take me back</Link>
          </article>
        </>
      }
    </>
  );
}

export default Subreddit;