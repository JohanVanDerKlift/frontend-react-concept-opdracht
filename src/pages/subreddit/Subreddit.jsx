import React from 'react';
import {useParams} from "react-router-dom";

function Subreddit(props) {
  const {subreddit} = useParams();

  return (
    <h1>Subreddit {subreddit}</h1>
  );
}

export default Subreddit;