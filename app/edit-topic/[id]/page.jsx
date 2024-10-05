import EditTopicForm from '@/components/EditTopicForm'
import React from 'react'

const getTopicById = async (id) => {
  //dar tabe zir cache ra no store mikonim chon ke mikhahim data ye update shode ra dashte bashim
  try{
    const res = await fetch(`http://localhost:3000/api/topics/${id}` , {cache : "no-store"})
    if(!res.ok){
      throw new Error("failed to fetch  topic")
    }
    return res.json();
  }catch(error){
    console.log(error.message)
  }
}

const page = async  ({params}) => {
  const {id} = params
  console.log(`id is ${id}`);
   const {topic} = await getTopicById(id)
   const {title , description} = await topic
  return (
    <EditTopicForm id={id} title={title} description={description}/>
  )
}

export default page
