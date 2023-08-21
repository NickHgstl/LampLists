"use client"
import { useState, useEffect, useRouter } from "react";
import axios from "axios"
import Modal from "./modal";
import Sparkmodal from "./spark_modal";
import { addDoc, doc, getDoc, setDoc, collection, getDocs} from 'firebase/firestore'
import { database } from "../firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../firebaseConfig";
import SparkListModal from "./sparkListModal";



export default function Navbar(){
    const database = db
    const auth = getAuth();
    const CLIENT_ID = "e0b423264c9746428e28129fc08fead9"    
    const REDIRECT_URI = "https://lamplists.org/dashboard"
    //const REDIRECT_URI = "http://localhost:3000/dashboard"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
    const [data, setData] = useState({})
    const [token, setToken] = useState("")
    const [searchKey, setSearchKey] = useState("")
    const [artists, setArtists] = useState([])
    const [tracks, setTracks] = useState([])
    const [isModal1Open, setIsModal1Open] = useState(false)
    const [isModal2open, setIsModal2Open] = useState(false)
    const [isModal4open, setIsModal4Open] = useState(false)
    const [playlists, setPlaylists] = useState([])
    const [songId, setSongId] = useState("")
    const [songName, setSongName] = useState("")
    const [spark1SongNames, setSpark1SongNames] = useState([])
    const [spark1, setSpark1] = useState([])
    const [spark2SongNames, setSpark2SongNames] = useState([])
    const [spark2, setSpark2] = useState([])
    const [spark3SongNames, setSpark3SongNames] = useState([])
    const [spark3, setSpark3] = useState([])
    const [spark4SongNames, setSpark4SongNames] = useState([])
    const [spark4, setSpark4] = useState([])
    const [spark5SongNames, setSpark5SongNames] = useState([])
    const [spark5, setSpark5] = useState([])
    const [spark6SongNames, setSpark6SongNames] = useState([])
    const [spark6, setSpark6] = useState([])
    const [spark7SongNames, setSpark7SongNames] = useState([])
    const [spark7, setSpark7] = useState([])
    const [spark8SongNames, setSpark8SongNames] = useState([])
    const [spark8, setSpark8] = useState([])
    const [spark9SongNames, setSpark9SongNames] = useState([])
    const [spark9, setSpark9] = useState([])
    const [spark10SongNames, setSpark10SongNames] = useState([])
    const [spark10, setSpark10] = useState([])
    const [tempSpark, setTempSpark] = useState([])
    const [showCustomSpark1, setShowCustomSpark1] = useState("Spark 4")
    const [showCustomSpark2, setShowCustomSpark2] = useState("Spark 5")
    const [showCustomSpark3, setShowCustomSpark3] = useState("Spark 6")
    const [showCustomSpark4, setShowCustomSpark4] = useState("Spark 7")
    const [showCustomSpark5, setShowCustomSpark5] = useState("Spark 8")
    const [showCustomSpark6, setShowCustomSpark6] = useState("Spark 9")
    const [showCustomSpark7, setShowCustomSpark7] = useState("Spark 10")
    const [userToken, setUserToken] = useState("")
    
   


    const [userId, setUserId] = useState(null);


  
    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.hash.slice(1));
        let accessToken = urlSearchParams.get("access_token")
        console.log(accessToken)

        setUserToken(accessToken)
    }, [])

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user){
                const uid = user.uid
                setUserId(uid)
                console.log(uid)
            } else {
                
            }
        })
    }, [])

    const setUserData = async () => {
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
            showCustomSpark1:showCustomSpark1,
            showCustomSpark2:showCustomSpark2,
            showCustomSpark3:showCustomSpark3,
            showCustomSpark4:showCustomSpark4,
            showCustomSpark5:showCustomSpark5,
            showCustomSpark6:showCustomSpark6,
            showCustomSpark7:showCustomSpark7,
            spark1SongNames:spark1SongNames,
            spark2SongNames:spark2SongNames,
            spark3SongNames:spark3SongNames,
            spark4SongNames:spark4SongNames,
            spark5SongNames:spark5SongNames,
            spark6SongNames:spark6SongNames,
            spark7SongNames:spark7SongNames,
            spark8SongNames:spark8SongNames,
            spark9SongNames:spark9SongNames,
            spark10SongNames:spark10SongNames,


    })
    }

    const fetchData = async () => {

       
        let list = []
        const docRef = doc(database, "users", userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log(data)
            console.log("Document data:", docSnap.data());
            list = docSnap.data()
            setSpark1(list.spark1)
            setSpark2(list.spark2)
            setSpark3(list.spark3)
            setSpark4(list.spark4)
            setSpark5(list.spark5)
            setSpark6(list.spark6)
            setSpark7(list.spark7)
            setSpark8(list.spark8)
            setSpark9(list.spark9)
            setSpark10(list.spark10)
            setShowCustomSpark1(list.showCustomSpark1)
            setShowCustomSpark2(list.showCustomSpark2)
            setShowCustomSpark3(list.showCustomSpark3)
            setShowCustomSpark4(list.showCustomSpark4)
            setShowCustomSpark5(list.showCustomSpark5)
            setShowCustomSpark6(list.showCustomSpark6)
            setShowCustomSpark7(list.showCustomSpark7)
            setSpark1SongNames(list.spark1SongNames)
            setSpark2SongNames(list.spark2SongNames)
            setSpark3SongNames(list.spark3SongNames)
            setSpark4SongNames(list.spark4SongNames)
            setSpark5SongNames(list.spark5SongNames)
            setSpark6SongNames(list.spark6SongNames)
            setSpark7SongNames(list.spark7SongNames)
            setSpark8SongNames(list.spark8SongNames)
            setSpark9SongNames(list.spark9SongNames)
            setSpark10SongNames(list.spark10SongNames)
            


        } 
        else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
        }
    }
    



    useEffect(() => {

        if(token){
            
        }    
      })

    function checkLogin() {
        if (!userToken) {
            
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
    window.open("https://lamplists.org/")
    setToken("")
    window.localStorage.removeItem("token")
  }


const searchArtists = async (e) => {
    if(!userToken) {
        alert("LOG IN TO SPOTIFY FIRST")
    }

    setTracks([])
    e.preventDefault()
    const {data} = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
            Authorization: `Bearer ${userToken}`
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
    console.log(userToken)
    setArtists([])
    e.preventDefault()
    const {data} = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
            Authorization: `Bearer ${userToken}`
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

const   getPlaylists = async () => {
    setPlaylists([])
    const {data} = await axios.get("https://api.spotify.com/v1/me/playlists", {
        headers: {
            Authorization: `Bearer ${userToken}`
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
            {track.name} by {track.artists[0].name}
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
          'Authorization': `Bearer ${userToken}`,
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
    setIsModal1Open(false)
  }



function openModal(e) {
    setIsModal2Open(true)
    setSongId(e.target.id)
    setSongName(e.target.innerHTML)
    console.log(spark1SongNames)

}

function openModal4(e) {
    console.log(userToken)
    fetchData()
    getPlaylists()
    setIsModal4Open(true)

}

const  closeModal2 = async (e) => {
    setIsModal2Open(false)
    console.log(spark1)
    setUserData()

    
    
}



function addSpark1toPlaylist(){
    fetchData()
    setTempSpark(spark1)
    setIsModal4Open(false)
    setIsModal1Open(true)
    console.log(tempSpark)
}

function addSpark2toPlaylist(){
    setTempSpark(spark2)
    setIsModal4Open(false)
    setIsModal1Open(true)
    console.log(tempSpark)
}

function addSpark3toPlaylist(){
    setTempSpark(spark3)
    setIsModal4Open(false)
    setIsModal1Open(true)
    console.log(tempSpark)
}

function addSpark4toPlaylist(){
    setTempSpark(spark4)
    setIsModal4Open(false)
    setIsModal1Open(true)
    console.log(tempSpark)
}

function addSpark5toPlaylist(){
    setTempSpark(spark5)
    setIsModal4Open(false)
    setIsModal1Open(true)
    console.log(tempSpark)
}

function addSpark6toPlaylist(){
    setTempSpark(spark6)
    setIsModal4Open(false)
    setIsModal1Open(true)
    console.log(tempSpark)
}

function addSpark7toPlaylist(){
    setTempSpark(spark7)
    setIsModal4Open(false)
    setIsModal1Open(true)
    console.log(tempSpark)
}

function addSpark8toPlaylist(){
    setTempSpark(spark8)
    setIsModal4Open(false)
    setIsModal1Open(true)
    console.log(tempSpark)
}

function addSpark9toPlaylist(){
    setTempSpark(spark9)
    setIsModal4Open(false)
    setIsModal1Open(true)
    console.log(tempSpark)
}

function addSpark10toPlaylist(){
    setTempSpark(spark10)
    setIsModal4Open(false)
    setIsModal1Open(true)
    console.log(tempSpark)
}



const  addSpark = async (e) => {
    if (e.target.id === "spark 1"){
        console.log("added to spark 1")
        setSpark1(spark1.concat(songId))
        setSpark1SongNames(spark1SongNames.concat(songName))
        console.log(spark1)
        setIsModal2Open(false)
        

       
    }

    else if (e.target.id === "spark 2"){
        console.log("added to spark 2")
        setSpark2(spark2.concat(songId))
        setSpark2SongNames(spark2SongNames.concat(songName))
        console.log(spark2)
        setIsModal2Open(false)

    }

    else if (e.target.id === "spark 3"){
        console.log("added to spark 3")
        setSpark3(spark3.concat(songId))
        setSpark3SongNames(spark3SongNames.concat(songName))
        console.log(spark3)
        setIsModal2Open(false)

    }

    else if (e.target.id === "spark 4"){
        console.log("added to spark 4")
        setSpark4(spark4.concat(songId))
        setSpark4SongNames(spark4SongNames.concat(songName))
        console.log(spark4)
        setIsModal2Open(false)

    }

    else if (e.target.id === "spark 5"){
        console.log("added to spark 5")
        setSpark5(spark5.concat(songId))
        setSpark5SongNames(spark5SongNames.concat(songName))
        console.log(spark5)
        setIsModal2Open(false)

    }

    else if (e.target.id === "spark 6"){
        console.log("added to spark 6")
        setSpark6(spark6.concat(songId))
        setSpark6SongNames(spark6SongNames.concat(songName))
        console.log(spark6)
        setIsModal2Open(false)

    }

    else if (e.target.id === "spark 7"){
        console.log("added to spark 7")
        setSpark7(spark7.concat(songId))
        setSpark7SongNames(spark7SongNames.concat(songName))
        console.log(spark7)
        setIsModal2Open(false)

    }

    else if (e.target.id === "spark 8"){
        console.log("added to spark 8")
        setSpark8(spark8.concat(songId))
        setSpark8SongNames(spark8SongNames.concat(songName))
        console.log(spark8)
        setIsModal2Open(false)

    }

    else if (e.target.id === "spark 9"){
        console.log("added to spark 9")
        setSpark9(spark9.concat(songId))
        setSpark9SongNames(spark9SongNames.concat(songName))
        console.log(spark9)
        setIsModal2Open(false)

    }

    else if (e.target.id === "spark 10"){
        console.log("added to spark 10")
        setSpark10(spark10.concat(songId))
        setSpark10SongNames(spark10SongNames.concat(songName))
        console.log(spark10)
        setIsModal2Open(false)

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
    setSpark1SongNames([])
    setSpark2SongNames([])
    setSpark3SongNames([])
    setSpark4SongNames([])
    setSpark5SongNames([])
    setSpark6SongNames([])
    setSpark7SongNames([])
    setSpark8SongNames([])
    setSpark9SongNames([])
    setSpark10SongNames([])

}
function test(){
    console.log(songNames)
}
  return (
    <div>
        {fetchData}
        <button onClick={logout}>LOG OUT</button>
        {userToken ? <a>You have linked your Spotify account</a> : <a onClick={checkLogin}>Login to spotify</a>}

        <div className="dashboard">
            <div onClick={openModal4}>ADD SPARKS TO PLAYLIST</div>

            
      
            <form onSubmit={searchTracks}>
                <input type='text' onChange={e => setSearchKey(e.target.value)}/>
                <button type={"submit"}>search</button>
            </form>
            {isModal1Open && <Modal 
                userToken={userToken}
                setIsModal1Open={setIsModal1Open}
                onButtonClick={getPlaylists}
                renderPlaylists={renderPlaylists}
                addSpark={addSpark}
                clearSparks={clearSparks}
            />}

            {isModal2open && <Sparkmodal
                token={userToken}
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
                spark1SongNames={spark1SongNames}
                spark2SongNames={spark2SongNames}
                spark3SongNames={spark3SongNames}
                spark4SongNames={spark4SongNames}
                spark5SongNames={spark5SongNames}
                spark6SongNames={spark6SongNames}
                spark7SongNames={spark7SongNames}
                spark8SongNames={spark8SongNames}
                spark9SongNames={spark9SongNames}
                spark10SongNames={spark10SongNames}

            />}

            {isModal4open && <SparkListModal
                token={userToken}
                isModal1Open={isModal1Open}
                setIsModal4Open={setIsModal4Open}
                addSpark1toPlaylist={addSpark1toPlaylist}
                addSpark2toPlaylist={addSpark2toPlaylist}
                addSpark3toPlaylist={addSpark3toPlaylist}
                addSpark4toPlaylist={addSpark4toPlaylist}
                addSpark5toPlaylist={addSpark5toPlaylist}
                addSpark6toPlaylist={addSpark6toPlaylist}
                addSpark7toPlaylist={addSpark7toPlaylist}
                addSpark8toPlaylist={addSpark8toPlaylist}
                addSpark9toPlaylist={addSpark9toPlaylist}
                addSpark10toPlaylist={addSpark10toPlaylist}
                showCustomSpark1={showCustomSpark1}
                showCustomSpark2={showCustomSpark2}
                showCustomSpark3={showCustomSpark3}
                showCustomSpark4={showCustomSpark4}
                showCustomSpark5={showCustomSpark5}
                showCustomSpark6={showCustomSpark6}
                showCustomSpark7={showCustomSpark7}
            
            
            />}

                       
            {renderArtists()}
            {renderTracks()}
        </div>
    </div>
    )
}