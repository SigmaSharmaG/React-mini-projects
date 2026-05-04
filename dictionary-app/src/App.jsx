import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Axios from 'axios'
import { FaSearch } from "react-icons/fa";
import { FcSpeaker } from "react-icons/fc";

function App() {
  const [data,setData] = useState("");
  const [searchWord,setSearchWord] = useState("");
  const [loading,setLoading] = useState(false);

  function getMeaning(){
    setLoading(true);
    setData("")
    Axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`)

    .then((response)=>{
      setData(response.data[0])
      setLoading(false);
    })
    
  }

  function playAudio(){
    let audio = new Audio(data.phonetics[0].audio);
    audio.play();
  }
  

  return (
    <>
      <div className="App">
        {/* <div className="image">

        </div> */}
        <div className="dic-container">
          <h1 className='title'>Free Dictionary</h1>

          <div className="search-bar">
            <input type="text" placeholder='Search here' onChange={(e)=> {setSearchWord(e.target.value)}}/>
            <button onClick={()=>{getMeaning()}}><FaSearch size="18px" color='white'/></button>
          </div>

          {
            loading && (
              <div className="loader"></div>
            )
          }

          {
            data && (
              <div className="content">
                <div className='word'>
                  <h2 className='search-word'>{data.word}</h2>
                  <button className='audio-bt' onClick={()=>{playAudio()}}> <FcSpeaker size="26px"/></button>
                </div>
                
                <h4 className="heading">Parts of Speech</h4>
                <p>{data.meanings[0].partOfSpeech}</p>
                <h4 className="heading">Definition</h4>
                <p>{data.meanings[0].definitions[0].definition}</p>

                <h4 className="heading">Example</h4>
                <p>{data.meanings[0].definitions[0].example}</p>

              </div>
            )
          }

        </div>


      </div>
    </>
  )
}

export default App
