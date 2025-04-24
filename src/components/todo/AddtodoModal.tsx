import  { FormEvent, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import {
   
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '../ui/button'
import { DialogClose } from '@radix-ui/react-dialog'
//import { useAppDispatch } from '@/redux/hooks'
//import { addTodo } from '@/redux/Features/Todoslice'
import { useAddTodosMutation } from '@/redux/api/Api'

const AddtodoModal = () => {
    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    const [priority,setPriority]=useState('');
    console.log(priority);
    //const dispatch=useAppDispatch(); //for local server

    //for server
    const [addtodo,{data,isLoading,isError,isSuccess}]=useAddTodosMutation()
console.log({data,isError,isLoading,isSuccess})
    const onSubmit = (e: FormEvent) => {
      e.preventDefault();
     // const randomString=Math.random().toString(36);
      const taskDetails={
      title: task,
      description,
      priority,
      isCompleted:false,
      }
      console.log('inside modal',taskDetails)
     // dispatch(addTodo(taskDetails))
     addtodo(taskDetails)
    
    }
   
  return (
    <Dialog>
    <DialogTrigger asChild>
      <Button>Add todo</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Add new task</DialogTitle>
      </DialogHeader>
      <form onSubmit={onSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Task
              </Label>
              <Input
                onBlur={(e) => setTask(e.target.value)}
                id="task"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                onBlur={(e) => setDescription(e.target.value)}
                id="description"
                className="col-span-3"
              />
            </div>
        <div className='grid grid-cols-4 items-center gap-4'>
        <Label htmlFor="description" className="text-right">
                Priority
        </Label>
        <Select onValueChange={(value)=>setPriority(value)}>
        <SelectTrigger className="col-span-3">
        <SelectValue placeholder="Select a priority" />
      </SelectTrigger>
        <SelectContent>
        <SelectGroup>
          <SelectItem value="high">High</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="low">Low</SelectItem>
        </SelectGroup> 
        </SelectContent>
        </Select>
            </div>
          </div>
          <div className="flex justify-end">
            <DialogClose asChild>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </div>
        </form>
      
     
    </DialogContent>
  </Dialog>
  )
}

export default AddtodoModal