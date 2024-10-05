"use client"
import React, { useEffect, useState } from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import EditBtn from './EditBtn'
import {HiPencilAlt} from "react-icons/hi"


// const getTopics = async () => {
//     try{
//         const res = await fetch("http://http://localhost:3000/api/topics" , {
//             cache : "no-store"
//         })
//         if(!res.ok){
//             throw new Error("failed to fetch topics")
//         }
//         return res.json()
//     }catch(error){
//         console.log(error.message);   
//     }
// }


const TopicsList =  () => {
    // const {topics} = await getTopics()
    // console.log(topics);
    const [data , setData] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:3000/api/topics")
            if(!response.ok){
                throw new Error("Failed to fetch topics")
            }
            const result = await response.json();
            setData(result)
            console.log(data);
            
        }
        fetchData().catch((error) => {
            console.error("something went wrong")
        })
    } , [])
    
     console.log(data);
     
  return (
        <>
        {data.topics && data.topics.map((t)=> (
        <div className='border border-slate-300 p-4 my-4 flex justify-between gap-5 items-start' key={t.index}> 
            <div>
                <h2 className='font-bold text-2xl'>{t.title}</h2>
                <div>{t.description}</div>
            </div>
            <div className='flex gap-2'>
                <RemoveBtn id={t._id} />
                <Link href={`/edit-topic/${t._id}`}>
                <HiPencilAlt size={24} /> 
                </Link>
            </div>
        </div>
        ))}
        </>
  )
}

export default TopicsList
