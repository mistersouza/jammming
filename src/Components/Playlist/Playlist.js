import TrackList from '../TrackList/TrackList'
import './Playlist.css'

export default function Playlist(props) {

    function handleNameChange({target}) {
        props.onNameChange(target.value);
    }

    return (<>
        <div className="Playlist">
            My Play list
            {console.log("play list in playlist", props.playlistTracks)}
            <input value={props.playlistName} onChange={handleNameChange} />
            <TrackList tracks={props.playlistTracks} onRemove={props.onRemove} isRemoval={true} />
            <button onClick={props.savePlaylist} className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    </>);
}
