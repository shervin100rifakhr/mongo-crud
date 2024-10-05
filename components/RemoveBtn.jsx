"use client"

import { HiOutlineTrash } from "react-icons/hi"
import { useRouter } from "next/navigation"


const RemoveBtn = ({id}) => {
  const router = useRouter();
  const deleteHandler = async () => {
    console.log(`this is remove button with ${id} id`);
    const confirmed = confirm("are you sure ?") 
    if(confirmed){
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}` , {
        method : "DELETE" , 
      })
      if(res.ok){
        router.refresh()
      }
    }
  }
  return (
    <button onClick={deleteHandler}>
        <HiOutlineTrash size={24} color="red"/>
    </button>
  )
}

export default RemoveBtn
