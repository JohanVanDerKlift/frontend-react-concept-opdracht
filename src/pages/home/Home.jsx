import React, {useEffect, useState} from 'react';
import axios from "axios";

function Home(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchPosts() {
      try {
        const result = await axios.get('https://www.reddit.com/hot.json?limit=15', {
          signal: controller.signal,
        });
        setPosts(result.data.data.children);
      } catch (e) {
        console.error(e);
      }
    }

    Object.keys(posts).length > 0 && console.log(posts);

    fetchPosts();

    return function cleanup() {
      controller.abort();
    }

  }, [])

  return (
    <>
      <h1>Home</h1>

      {posts.map((post) => (
        <div>{post.data.title}</div>
      ))}
    </>
  );
}

export default Home;