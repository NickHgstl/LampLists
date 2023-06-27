"use client"
import { useState, useEffect } from "react";
import axios from "axios"
import ReactModal from "react-modal";
import Modal from "./modal";



export default function Navbar({data}){
    
const [searchKey, setSearchKey] = useState("")
const [artists, setArtists] = useState([])
const [tracks, setTracks] = useState([])
const [isOpen, setIsOpen] = useState(false)
const [playlists, setPlaylists] = useState([])
const [songUri, setSongUri] = useState("")
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
             id={track.id}        
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
            key ={playlist.id}
            onClick={postPlaylist}
            id={playlist.id}
            >
            {playlist.name}
            </div>
        </>
        
    ))
}

const postPlaylist = async (e) => {
    const playlist = (e.target.id)
    console.log(playlist)
    console.log(songUri)
    const url = `https://api.spotify.com/v1/playlists/${playlist}/tracks`

    axios({
        method: 'post',
        url: url,
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: {
                uris: [`spotify:track:${songUri}`]
            }
    })
}


function openModal(e) {
    setIsOpen(true)
    getPlaylists()
    setSongUri(e.target.id)
}




  return (
    <div>
        <div className="dashboard">
        <button onClick={getPlaylists}>gggg</button>
            
        <form onSubmit={searchArtists} className="search">
                {token && <input type='text' onChange={e => setSearchKey(e.target.value)}/>}
                {token && <button type={"submit"}>search</button>}
            </form>
            <form onSubmit={searchTracks}>
                {token && <input type='text' onChange={e => setSearchKey(e.target.value)}/>}
                {token &&<button type={"submit"}>search</button>}
            </form>
            {isOpen && <Modal token={token} setIsOpen={setIsOpen} onButtonClick={getPlaylists} renderPlaylists={renderPlaylists}/>}

            
           
            {renderArtists()}
            {renderTracks()}
        </div>
    </div>
    )
}