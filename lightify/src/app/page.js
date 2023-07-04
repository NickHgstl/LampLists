"use client"

import { useRouter } from 'next/navigation';
import { useState, useEffect} from 'react';
import Navbar from './dashboard/page';
import { app } from './firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup , } from "firebase/auth";
import { auth } from './firebaseConfig';


export default function Home() {
  let googleProvider = new GoogleAuthProvider()
  const router = useRouter()
  const CLIENT_ID = "e0b423264c9746428e28129fc08fead9"
  const REDIRECT_URI = "http://localhost:3000/dashboard"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"


  const [token, setToken] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  useEffect(() => {
    let userToken = sessionStorage.getItem('Token')

    if(userToken){
        router.push('/dashboard')
    }
  }, [])

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
  
  
const handleEmailSignUp = (e) =>{
  e.preventDefault()

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
      router.push("/dashboard")
    })
    .catch((err) => {
      alert(err.message)
    })
}

const handleEmailLogin = (e) =>{
  e.preventDefault()
  signInWithEmailAndPassword(auth, email, password)
  .then((response) => {
    console.log(response.user)
  })
  .catch((err) => {
    alert(err.message)
  })
}

const handleGoogleLogin = (e) =>{
  e.preventDefault()
  signInWithPopup(auth, googleProvider)
  .then((response) => {
    console.log(response.user)
    sessionStorage.setItem('Token', response.user.accessToken)
    router.push('/dashboard')
  })
  .catch((err) => {
    alert(err.message)
  })
}

  function checkLogin() {

    if (!token) {
        
        window.open(`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=%20playlist-modify-private%20playlist-modify-public`)        
    }
    
  }

  return (
    <div className='Home'>
      <header>
        <h1>Lightify</h1>
        <a onClick={checkLogin}>Login to spotify</a>

        <form onSubmit={handleEmailSignUp} name=''>
          <h1>SIGN UP</h1>
            <label for="email">email</label>
            <input name='email' className='emailInput' placeholder='email' onChange={e => setEmail(e.target.value)}></input>
            
            <label for="password">password</label>
            <input name='password' className='passwordInput' placeholder='password' onChange={e => setPassword(e.target.value)}></input>
            <button type={"submit"}>SUBMIT</button>          
        </form>

        <form onSubmit={handleEmailLogin} name=''>
          <h1>LOG IN</h1>
            <label for="email">email</label>
            <input name='email' className='emailInput' placeholder='email' ></input>
            
            <label for="password">password</label>
            <input name='password' className='passwordInput' placeholder='password' type='password'></input>
            <button type={"submit"}>SUBMIT</button>          
        </form>
        <button onClick={handleGoogleLogin}>SIGN UP WITH GOOGLE</button>

      </header>
      
    </div>
    )
}
