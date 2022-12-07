import {Route, Routes} from "react-router-dom";
import './App.css';
import Home from './pages/home/Home'
import Subreddit from './pages/subreddit/Subreddit'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/subreddit/:subreddit' element={<Subreddit />}></Route>
      </Routes>
    </div>
  );
}

export default App;
