"use client"

import Image from 'next/image'
import styles from './page.module.css'
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';


export default function Home() {
  const CLIENT_ID = "e0b423264c9746428e28129fc08fead9"
  const REDIRECT_URI = "http://localhost:3000/dashboard"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  const [token, setToken] = useState("")
  const router = useRouter();

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
        
        window.open(`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`)
        
    }
    else {
      router.push('/dashboard')
    }
  }

  return (
    <div className='Home'>
      <header>
        <h1>Lightify</h1>
        <a onClick={checkLogin}>Login to spotify</a>
      </header>
      
    </div>
    )
}
