"use client"

import { useState } from "react"
import { useRouter } from "next/navigation";

const page = () => {

  const [title , setTitle] = useState("");
  const [description , setDescription] = useState("")
  const router = useRouter();


  const submitHandler = async (e) => {
    if(!title || !description){
      alert("title and description are required")
      return;
    }
    e.preventDefault()
    console.log("this is submit handler");
    let response = await fetch("http://localhost:3000/api/topics" , {
      method : "POST" , 
      headers : {
        "Content-Type": "application/json"
      } , 
      body : JSON.stringify({title , description})
    })  
    response = await response.json();
    router.push("/")
  }

  return (
    <form className='flex flex-col gap-3'onSubmit={submitHandler}>
      <input type="text" placeholder='Add Topic title' value={title} className='border border-slate-300 py-2 px-8' onChange={((e) => setTitle(e.target.value))}/>
      <input type="text" placeholder='Add Topic Description' value={description} className='border border-slate-300 py-2 px-8' onChange={((e) => setDescription(e.target.value))}/>
      <button type='submit' className='border border-slate-300 bg-green-600 font-bold text-white py-3 px-6 w-fit'>Add Topic</button>
    </form>
  )
}

export default page
