import React, { useState } from 'react'
import './Joke.css'
import Button from './button';

const Joke = () => {

    const [joke,setJoke] = useState("");
    const fetchApi = () => {
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
            .then((res) => res.json())
            .then((data) => setJoke(data.joke));
    };

    function clickHandler(){
        fetchApi();
    }
    return (
        <div>
            <Button clickHandler={clickHandler}/>
            <div className='joke'>{joke}</div>
        </div>
    )
}

export default Joke