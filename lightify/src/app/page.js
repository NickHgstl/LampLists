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
  
  

  useEffect(() => {
    let token = sessionStorage.getItem("Token")

    if(token){
      router.push("/dashboard")
    }
  })


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


  return (
    <div className='Home'>
      <header>
        <h1>Lightify</h1>
        <button onClick={handleGoogleLogin}>SIGN UP WITH GOOGLE</button>

      </header>
      
    </div>
    )
}
