import React, { useState } from 'react'
import { TodoCard } from './TodoCard'

import TodoFilter from './TodoFilter'
import AddtodoModal from './AddtodoModal'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useAppSelector } from '@/redux/hooks'
import { useGetTodosQuery } from '@/redux/api/Api'

export const Todocontainer = () => {

  const [priority,setPrioity]=useState('')

 //const{todos}=useAppSelector((state)=>state.todos)

 const {data:todos,isLoading,isError}=useGetTodosQuery(priority)
if(isLoading)
{
  <p>loading.....</p>
}


  return (
    <div>
       <div >
       <div className='flex justify-between mb-5'>
           <AddtodoModal/>
           <div>
          <TodoFilter priority={priority} setPriority={setPrioity}/>
        </div>
        </div>
        
       </div>
        <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full h-full rounded-xl p-[5px] '>
        <div className='bg-white w-full h-full rounded-lg  space-y-1'>
       {
        todos?.data?.map((item)=>
          <TodoCard {...item} />
        )
       }
        </div>
        </div>
    </div>
  )
}
