"use client"

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Navbar from './dashboard/page';

export default function Home() {
  const CLIENT_ID = "e0b423264c9746428e28129fc08fead9"
  const REDIRECT_URI = "http://localhost:3000/dashboard"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  const [token, setToken] = useState("")
  
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

        <form onSubmit={console.log("")}>
          <label for="email">email</label>
          <input name='email' className='emailInput' placeholder='email'></input>
          <label for="password">password</label>
          <input name='password' className='passwordInput' placeholder='password'></input>
          <button type={"submit"}>SUBMIT</button>        
        </form>

      </header>
      
    </div>
    )
}
