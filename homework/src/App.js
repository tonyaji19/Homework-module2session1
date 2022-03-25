
import './App.css';
import data from './data-Spotify';
import Album from './albumcom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div class="header">
      <h1>Create Playlist</h1>
      </div>

      <div className="songSection">
      <Album/>
      </div>
      </header>
    </div>
  );
}

export default App;
