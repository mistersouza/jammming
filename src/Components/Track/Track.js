import { render } from '@testing-library/react';
import { useState } from 'react'
import './Track.css'

export default function Track(props) {
    const [isRemoval, SetIsRemoval] = useState(false);
    
    function addTrack(event) {
        props.onAdd(props.track);
    }

    function removeTrack(event) {
        props.onRemove(props.track  )
    }

    function renderAction() {
        return (
            props.isRemoval
            ? <button className="Track-action" onClick={removeTrack}>-</button>
            :<button className="Track-action" onClick={addTrack}>+</button>
        );
    }


    return (<>
        <div className="Track">
            <div className="Track-information">
                {console.log("in track",props.tracks)}
                <h3>{props.track.name}</h3>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
            {props.isRemoval
            ? <button className="Track-action" onClick={removeTrack}>-</button>
            :<button className="Track-action" onClick={addTrack}>+</button>}
        </div>
    </>)
}