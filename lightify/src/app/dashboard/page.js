"use client"
import { useState, useEffect } from "react";
import axios from "axios"
import Modal from "./modal";
import Sparkmodal from "./spark_modal";
import { addDoc, doc, getDoc, setDoc, collection, getDocs} from 'firebase/firestore'
import { database } from "../firebaseConfig";
import { useRouter } from "next/router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../firebaseConfig";



export default function Navbar(){

    const auth = getAuth();
    const CLIENT_ID = "e0b423264c9746428e28129fc08fead9"
    const REDIRECT_URI = "http://localhost:3000/dashboard"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
    const [data, setData] = useState({})
    const [token, setToken] = useState("")
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
    const [spark4, setSpark4] = useState([])
    const [spark5, setSpark5] = useState([])
    const [spark6, setSpark6] = useState([])
    const [spark7, setSpark7] = useState([])
    const [spark8, setSpark8] = useState([])
    const [spark9, setSpark9] = useState([])
    const [spark10, setSpark10] = useState([])
    const [tempSpark, setTempSpark] = useState([])
    const [showCustomSpark1, setShowCustomSpark1] = useState("Spark 4")
    const [showCustomSpark2, setShowCustomSpark2] = useState("Spark 5")
    const [showCustomSpark3, setShowCustomSpark3] = useState("Spark 6")
    const [showCustomSpark4, setShowCustomSpark4] = useState("Spark 7")
    const [showCustomSpark5, setShowCustomSpark5] = useState("Spark 8")
    const [showCustomSpark6, setShowCustomSpark6] = useState("Spark 9")
    const [showCustomSpark7, setShowCustomSpark7] = useState("Spark 10")
    //const collectionRef = collection(database, 'CRUD Data')
    const urlSearchParams = new URLSearchParams(window.location.hash.slice(1));
    const accessToken = urlSearchParams.get("access_token");
    let userToken = sessionStorage.getItem('Token')
   


    const [userId, setUserId] = useState(null);


  
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user){
                const uid = user.uid
                setUserId(uid)
                console.log(uid)
            } else {
                console.log("ERROR")
            }
        })
    })


        const fetchData = async () => {
            let list = []
            const docRef = doc(db, "users", userId);
            const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            list = docSnap.data()
            setSpark1(list.spark1)
            console.log(spark1)
        } 
        else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
        }}
    

    const addData = () => {
        console.log(userId)

        addDoc(collectionRef, {
            uid:userId,
            spark1:spark1,
            spark2:spark2,
            spark3:spark3,
            spark4:spark4,
            spark5:spark5,
            spark6:spark6,
            spark7:spark7,
            spark8:spark8,
            spark9:spark9,
            spark10:spark10,       
        })
        .then(() => {
            alert('Data sent')
        })
        .catch((err) => {
            console.log(err)
        })
    }    

    useEffect(() => {
        
        console.log(userToken)
        if(token){
            
        }    
        if(!userToken){
            window.open("localhost:3000")
        }
      }, [])

    function checkLogin() {
        if (!accessToken) {
            
            window.open(`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=%20playlist-modify-private%20playlist-modify-public`)        
        }       
      }
    

    const getData = async () => {
        
        const docRef = doc(database, "CRUD Data");
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
    }

/*const getData = async () => {
    await getDocs(collectionRef)
    .then((response) => {
        setFireData(response.docs.map((data) => {
            return {...data.data(), id: data.id}
        }))
    })
}*/

const logout = () => {
    sessionStorage.setItem("Token", "")
    window.open("http://localhost:3000/")
    setToken("")
    window.localStorage.removeItem("token")
  }


const searchArtists = async (e) => {

    setTracks([])
    e.preventDefault()
    const {data} = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
            Authorization: `Bearer ${accessToken}`
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

    fetchData()
    console.log(accessToken)
    setArtists([])
    e.preventDefault()
    const {data} = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
        params: {
            q: searchKey,
            type: "track",
            limit: 5,
        }
    })
    setTracks(data.tracks.items)
    
}

const   getPlaylists = async () => {
    
    setPlaylists([])
    const {data} = await axios.get("https://api.spotify.com/v1/me/playlists", {
        headers: {
            Authorization: `Bearer ${accessToken}`
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
          'Authorization': `Bearer ${accessToken}`,
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

const  closeModal2 = async (e) => {
    setIsModal2Open(false)
    console.log(spark1)
    await setDoc(doc(db, "users", userId), {
        spark1:spark1,
        spark2:spark2,
        spark3:spark3,
        spark4:spark4,
        spark5:spark5,
        spark6:spark6,
        spark7:spark7,
        spark8:spark8,
        spark9:spark9,
        spark10:spark10, 
})
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

function addSpark4toPlaylist(){
    setTempSpark(spark4)
    setIsModal1Open(true)
    console.log(tempSpark)
}

function addSpark5toPlaylist(){
    setTempSpark(spark5)
    setIsModal1Open(true)
    console.log(tempSpark)
}

function addSpark6toPlaylist(){
    setTempSpark(spark6)
    setIsModal1Open(true)
    console.log(tempSpark)
}

function addSpark7toPlaylist(){
    setTempSpark(spark7)
    setIsModal1Open(true)
    console.log(tempSpark)
}

function addSpark8toPlaylist(){
    setTempSpark(spark8)
    setIsModal1Open(true)
    console.log(tempSpark)
}

function addSpark9toPlaylist(){
    setTempSpark(spark9)
    setIsModal1Open(true)
    console.log(tempSpark)
}

function addSpark10toPlaylist(){
    setTempSpark(spark10)
    setIsModal1Open(true)
    console.log(tempSpark)
}



const  addSpark = async (e) => {
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

    else if (e.target.id === "spark 4"){
        console.log("added to spark 4")
        setSpark4(spark4.concat(songId))
        console.log(spark4)
    }

    else if (e.target.id === "spark 5"){
        console.log("added to spark 5")
        setSpark5(spark5.concat(songId))
        console.log(spark5)
    }

    else if (e.target.id === "spark 6"){
        console.log("added to spark 6")
        setSpark6(spark6.concat(songId))
        console.log(spark6)
    }

    else if (e.target.id === "spark 7"){
        console.log("added to spark 7")
        setSpark7(spark7.concat(songId))
        console.log(spark7)
    }

    else if (e.target.id === "spark 8"){
        console.log("added to spark 8")
        setSpark8(spark8.concat(songId))
        console.log(spark8)
    }

    else if (e.target.id === "spark 9"){
        console.log("added to spark 9")
        setSpark9(spark9.concat(songId))
        console.log(spark9)
    }

    else if (e.target.id === "spark 10"){
        console.log("added to spark 10")
        setSpark10(spark10.concat(songId))
        console.log(spark10)
    }
}

function showSparkHandler() {
    if(showCustomSpark1 == false) {
        setShowCustomSpark1((prevShow) => prevShow = true)
    }
    else if(showCustomSpark2 == false) {
        setShowCustomSpark2(true)
    }
    else if(showCustomSpark3 == false) {
        setShowCustomSpark3(true)
    }
    else if(showCustomSpark4 == false) {
        setShowCustomSpark4(true)
    }
    else if(showCustomSpark5 == false) {
        setShowCustomSpark5(true)
    }
    else if(showCustomSpark6 == false) {
        setShowCustomSpark6(true)
    }
    else if(showCustomSpark7 == false) {
        setShowCustomSpark7(true)
        setShowAddSparkButton(false)
    }
}

function clearSparks() {
    setSpark1([])
    setSpark2([])
    setSpark3([])
    setSpark4([])
    setSpark5([])
    setSpark6([])
    setSpark7([])
    setSpark8([])
    setSpark9([])
    setSpark10([])
}

  return (
    <div>
        <button onClick={getData}>handleTest</button>
        <button onClick={logout}>LOG OUT</button>
        <a onClick={checkLogin}>Login to spotify</a>

        <div className="dashboard">
        <button className="sparkButton" id="spark1" onClick={addSpark1toPlaylist}>Add Spark 1 to playlist</button>
        <button className="sparkButton" id="spark2" onClick={addSpark2toPlaylist}>Add spark 2 to playlist</button>
        <button className="sparkButton" id="spark3" onClick={addSpark3toPlaylist}>Add spark 3 to playlist</button>
        <button className="sparkButton" id="spark3" onClick={addSpark4toPlaylist}>Add {showCustomSpark1} to playlist</button>
        <button className="sparkButton" id="spark3" onClick={addSpark5toPlaylist}>Add {showCustomSpark2} to playlist</button>
        <button className="sparkButton" id="spark3" onClick={addSpark6toPlaylist}>Add {showCustomSpark3} to playlist</button>
        <button className="sparkButton" id="spark3" onClick={addSpark7toPlaylist}>Add {showCustomSpark4} to playlist</button>
        <button className="sparkButton" id="spark3" onClick={addSpark8toPlaylist}>Add {showCustomSpark5} to playlist</button>
        <button className="sparkButton" id="spark3" onClick={addSpark9toPlaylist}>Add {showCustomSpark6} to playlist</button>
        <button className="sparkButton" id="spark3" onClick={addSpark10toPlaylist}>Add {showCustomSpark7} to playlist</button>


            
        <form onSubmit={searchArtists} className="search">
                <input type='text' onChange={e => setSearchKey(e.target.value)}/>
                <button type={"submit"}>search</button>
            </form>
            <form onSubmit={searchTracks}>
                <input type='text' onChange={e => setSearchKey(e.target.value)}/>
                <button type={"submit"}>search</button>
            </form>
            {isModal1Open && <Modal 
                accessToken={accessToken}
                setIsModal1Open={setIsModal1Open}
                onButtonClick={getPlaylists}
                renderPlaylists={renderPlaylists}
                addSpark={addSpark}
                clearSparks={clearSparks}
            />}

            {isModal2open && <Sparkmodal
                token={accessToken}
                setIsModal2Open={setIsModal2Open}
                showCustomSpark1={showCustomSpark1}
                showCustomSpark2={showCustomSpark2}
                showCustomSpark3={showCustomSpark3}
                showCustomSpark4={showCustomSpark4}
                showCustomSpark5={showCustomSpark5}
                showCustomSpark6={showCustomSpark6}
                showCustomSpark7={showCustomSpark7}
                onButtonClick={getPlaylists}
                renderPlaylists={renderPlaylists}
                addSpark={addSpark}
                clearSparks={clearSparks}
                closeModal2={closeModal2}
                showSparkHandler={showSparkHandler}
                setShowCustomSpark1={setShowCustomSpark1}
                setShowCustomSpark2={setShowCustomSpark2}
                setShowCustomSpark3={setShowCustomSpark3}
                setShowCustomSpark4={setShowCustomSpark4}
                setShowCustomSpark5={setShowCustomSpark5}
                setShowCustomSpark6={setShowCustomSpark6}
                setShowCustomSpark7={setShowCustomSpark7}


            />}
                       
            {renderArtists()}
            {renderTracks()}
        </div>
    </div>
    )
}