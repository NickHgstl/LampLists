"use client"
import { useState, useEffect } from "react";
import axios from "axios"
import ReactModal from "react-modal";
import Modal from "./modal";
import Sparkmodal from "./spark_modal";


export default function Navbar({data}){
    
const [searchKey, setSearchKey] = useState("")
const [artists, setArtists] = useState([])
const [tracks, setTracks] = useState([])
const [isModal1Open, setIsModal1Open] = useState(false)
const [isModal2open, setIsModal2Open] = useState(false)
const [playlists, setPlaylists] = useState([])
const [songId, setSongId] = useState("")
const [spark1, setSpark1] = useState([])
const [spark2, setSpark2] = useState([])
const [spark3, setSpark3] = useState([])
const [tempSpark, setTempSpark] = useState([])

let token = data  

  const searchArtists = async (e) => {

    setTracks([])
    e.preventDefault()
    const {data} = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            q: searchKey,
            type: "artist",
            limit: 5
        }
    })

    setArtists(data.artists.items)
}

const searchTracks = async (e) => {

    setArtists([])
    e.preventDefault()
    const {data} = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            q: searchKey,
            type: "track",
            limit: 5,
        }
    })
    setTracks(data.tracks.items)
    
}

const getPlaylists = async () => {
    
    setPlaylists([])
    const {data} = await axios.get("https://api.spotify.com/v1/me/playlists", {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            limit: 20,
            
        }
    })
    setPlaylists(data.items)
}

const renderArtists = () => {
    return artists.map(artist => (
        <div key={artist.id}>
            {artist.images.length ? <img width={"100"} src={artist.images[0].url} alt=''/>: <div>No Image</div>}
            {artist.name}
        </div>
    ))
}

const renderTracks = () => {
    
    return tracks.map((track) => (
        <>
             <div
             onClick={openModal}
             key={track.id}
             id={track.uri}        
            >
            {track.name}
            </div>
        </>       
    ))
}

const renderPlaylists = () => {    
    return playlists.map((playlist) => (
        <>
            <div
            key={playlist.id}
            onClick={postPlaylist}
            id={playlist.id}
            >
            {playlist.name}
            </div>
        </>        
    ))
}




async function postPlaylist(e) {
    console.log(tempSpark)
    const playlist = (e.target.id)
    const url = `https://api.spotify.com/v1/playlists/${playlist}/tracks`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ uris: tempSpark })
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Items added to the playlist:', data);
      } else {
        console.error('Error adding items to the playlist:', response.status);
      }
    } catch (error) {
      console.error('Error adding items to the playlist:', error);
    }
  }



function openModal(e) {
    setIsModal2Open(true)
    getPlaylists()
    setSongId(e.target.id)
}

function closeModal2(e){
    setIsModal2Open(false)
    console.log(spark1)
}

function addSpark1toPlaylist(){
    setTempSpark(spark1)
    setIsModal1Open(true)
    console.log(tempSpark)
}

function addSpark2toPlaylist(){
    setTempSpark(spark2)
    setIsModal1Open(true)
    console.log(tempSpark)
}

function addSpark3toPlaylist(){
    setTempSpark(spark3)
    setIsModal1Open(true)
    console.log(tempSpark)
}


/*function addSparktoPlaylist(){
    setIsModal1Open(true)

    if(e.target.id == "spark 1") {
        setTempSpark(spark1)
    }

    else if(e.target.id == "spark 2") {
        console.log("spark2")
        setTempSpark(spark2)
    }

    else if(e.target.id == "spark 3") {
        setTempSpark(spark3)
    }
console.log(tempSpark)
}*/

function addSpark(e){
    if (e.target.id === "spark 1"){
        console.log("added to spark 1")
        setSpark1(spark1.concat(songId))
        console.log(spark1)
    }

    else if (e.target.id === "spark 2"){
        console.log("added to spark 2")
        setSpark2(spark2.concat(songId))
        console.log(spark2)
    }

    else if (e.target.id === "spark 3"){
        console.log("added to spark 3")
        setSpark3(spark3.concat(songId))
        console.log(spark3)
    }
}

function clearSparks() {
    setSpark1("")
    setSpark2("")
    setSpark3("")
}
  return (
    <div>
        <div className="dashboard">
        <button className="sparkButton" id="spark1" onClick={addSpark1toPlaylist}>Add Spark 1 to playlist</button>
        <button className="sparkButton" id="spark2" onClick={addSpark2toPlaylist}>Add spark 2 to playlist</button>
        <button className="sparkButton" id="spark3" onClick={addSpark3toPlaylist}>Add spark 3 to playlist</button>
            
        <form onSubmit={searchArtists} className="search">
                {token && <input type='text' onChange={e => setSearchKey(e.target.value)}/>}
                {token && <button type={"submit"}>search</button>}
            </form>
            <form onSubmit={searchTracks}>
                {token && <input type='text' onChange={e => setSearchKey(e.target.value)}/>}
                {token &&<button type={"submit"}>search</button>}
            </form>
            {isModal1Open && <Modal token={token} setIsModal1Open={setIsModal1Open} onButtonClick={getPlaylists} renderPlaylists={renderPlaylists} addSpark={addSpark} clearSparks={clearSparks}/>}
            {isModal2open && <Sparkmodal token={token} setIsModal2Open={setIsModal2Open} onButtonClick={getPlaylists} renderPlaylists={renderPlaylists} addSpark={addSpark} clearSparks={clearSparks} closeModal2={closeModal2}/>}
                       
            {renderArtists()}
            {renderTracks()}
        </div>
    </div>
    )
}