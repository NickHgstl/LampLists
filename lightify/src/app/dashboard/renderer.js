import { useState, useEffect } from "react";
import axios from "axios"

export default function renderer() {
    const [token, setToken] = useState("")
    const [searchKey, setSearchKey] = useState("")
    const [artists, setArtists] = useState([])
    const [tracks, setTracks] = useState([])
    const [isOpen, setIsOpen] = useState(false)
      
      useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")
    
        if(!token && hash) {
            let token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token"))?.split("=")[1]
    
            window.location.hash = ""
            window.localStorage.setItem("token", token)
        } 
        setToken(token)
    }, [])
    
     
      const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
      }
    
      const searchArtists = async (e) => {
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
        console.log(data)
        setTracks(data.tracks.items)
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
                 onClick={() => setIsOpen(true)}
                 key={track.id}
                 id={track.id}        
                >
                {track.name}
                </div>
            </>
           
            
            
        ))
    }
}