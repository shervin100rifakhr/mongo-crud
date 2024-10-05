"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

const EditTopicForm = ({id , title , description}) => {

  const [newTitle , setNewTitle] = useState(title);
  const [newDescription , setNewDescription] = useState(description)
  const router = useRouter()

  const updateHandler = async  (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}` , {
        method : "PUT" , 
        headers : {
          'Content-Type': 'application/json'
        } , 
        body : JSON.stringify({newTitle ,newDescription })
      })
        if(!res.ok){
          throw new Error("failed to update topic")
        }
      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error.message);
      
    }
  }

  return (
    <form className='flex flex-col gap-3' onSubmit={updateHandler}>
    <input type="text" placeholder='Add Topic' className='border border-slate-300 py-2 px-8' onChange={((e) => e.target.value)} value={newTitle}/>
    <input type="text" placeholder='Add Description' className='border border-slate-300 py-2 px-8' onChange={((e) => e.target.value)} value={newDescription}/>
    <button type='onSubmit' className='border border-slate-300 bg-green-600 font-bold text-white py-3 px-6 w-fit'>Update Topic</button>
  </form>
  )
}

export default EditTopicForm
