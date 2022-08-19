import { useState } from 'react';
import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Spotify from '../../util/Spotify';

function App() {
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [searchResults, setSearchResults ] = useState([]);
  
  function search(term) {
    Spotify.search(term)
    .then(searchResults => {
      setSearchResults(searchResults) 
    })
  }

  function savePlaylist(){
    Spotify.savePlaylist(playlistTracks)
  }
  function updatePlaylistName(name) {
    setPlaylistName(name);
  }

  function addTrack(track) {
    if (!playlistTracks) {
      return;
        } else {
          setPlaylistTracks(prevState=>[
              ...prevState,
              track
          ])
          console.log(playlistTracks)
    }
  }

  function removeTrack(track) {
        let tracks = playlistTracks.filter(currentTrack => currentTrack.id !== track.id);
        setPlaylistTracks([
          ...tracks
        ])
  }

  return (<>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
      <SearchBar 
        onSearch={search} 
        />
      <div className="App-playlist">
      <SearchResults 
        searchResults={searchResults} 
        onAdd={addTrack} 
        />
      <Playlist 
        playlistName={playlistName} 
        playlistTracks={playlistTracks} 
        onRemove={removeTrack} 
        onNameChange={updatePlaylistName} 
        onSave={savePlaylist}
        />
      </div>
      </div>
  </>);

}

export default App;