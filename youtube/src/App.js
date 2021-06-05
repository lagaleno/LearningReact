import logo from './logo.svg';
import './App.css';
import Video from './components/Video.js';
import Answer from './components/Answer';

// https://developers.google.com/youtube/player_parameters
// hide video title: https://stackoverflow.com/posts/60228328/revisions
// https://www.amblemedia.com/disable-suggested-videos-on-youtube-embeds/
function App() {
  return (
    <div className="App">
      <Video />
      <Answer />
    </div>
  );
}

export default App;
