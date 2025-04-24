
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup, 
    DropdownMenuRadioItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Button } from '../ui/button'

const TodoFilter = ({priority,setPriority}) => {
  return (
    <DropdownMenu>
    <DropdownMenuTrigger>
   <Button>Filter</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>Filter by priority</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuRadioGroup value={priority} onValueChange={setPriority}>
      <DropdownMenuRadioItem value='high'>High</DropdownMenuRadioItem>
      <DropdownMenuRadioItem value='medium'>Medium</DropdownMenuRadioItem>
      <DropdownMenuRadioItem value='low'>Low</DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
     
     
    </DropdownMenuContent>
  </DropdownMenu>
  

)
}

export default TodoFilter