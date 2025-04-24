import { Todocontainer } from '@/components/todo/todocontainer'
import Container from '@/components/ui/Container'

export const Todo = () => {
  return (
   <Container>
   <h1 className='text-center text-white my-5 text-3xl font-semibold bg-gradient-to-r from-violet-500 to-fuchsia-500 py-5'> My todos</h1>
   <Todocontainer />
   </Container> 
  )
}
