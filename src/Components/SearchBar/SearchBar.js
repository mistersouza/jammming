import { useState } from 'react'
import './SearchBar.css'

export default function SearchBar(props) {
    const [term, setTerm] = useState('');


    function handleTermChange({target}) {
        setTerm(target.value);
    }
    return (<>
        <div className="SearchBar">
            <input 
                placeholder="Enter A Song, Album, or Artist" 
                onChange={handleTermChange}
                />
            <button onClick={()=>props.onSearch(term)} className="SearchButton">SEARCH</button>
        </div>
    </>)
    
}