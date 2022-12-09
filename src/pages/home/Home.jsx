import React, {useEffect, useState} from 'react';
import axios from "axios";
import Post from "../../components/Post";
import './Home.css';

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, toggleLoading] = useState(true);
  const [error, toggleError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchPosts() {
      toggleError(false);
      try {
        toggleLoading(true);
        const result = await axios.get('https://www.reddit.com/hot.json?limit=15', {
          signal: controller.signal,
        });
        console.log(result.data.data.children);
        setPosts(result.data.data.children);
      } catch (e) {
        toggleError(true);
        console.error(e);
      }
      toggleLoading(false);
    }

    fetchPosts();

    return function cleanup() {
      controller.abort();
    }

  }, [])

  return (
    <>
      <h1>Hottest posts</h1>
      <span>On reddit right now</span>
      {loading && <span>Loading...</span>}
      {error && <span>An error occurred while loading the page</span>}

      <div className="posts-container">
        {posts.map((post) => (
          <Post
            key={post.data.created}
            title={post.data.title}
            link={post.data.subreddit_name_prefixed}
            comments={post.data.num_comments}
            ups={post.data.ups}
            subreddit={post.data.subreddit}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
