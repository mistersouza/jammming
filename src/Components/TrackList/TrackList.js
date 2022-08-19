import Track from '../Track/Track'
import './TrackList.css'

export default function TrackList(props) {
    console.log(props)
    return (<>
        <div className="TrackList">
        {console.log("in tracklist",props.tracks)}
            {props.tracks.map(track =>
                     <Track 
                        key={track.id}
                        track={track}
                         onAdd={props.onAdd}
                        onRemove={props.onRemove}
                        isRemoval={props.isRemoval} 
                        />
                )}
        </div> 
    </>);
    
}