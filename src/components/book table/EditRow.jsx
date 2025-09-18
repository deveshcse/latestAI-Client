
import { Edit, Trash } from "lucide-react"
import { Button } from "../ui/button"

export function EditRow({ row }) {
  return (
      <Button
        variant="ghost"
        size="icon"
        onClick={() => alert(`Edit book: ${row.original.title}`)}
      >
        <Edit size={16} />
      </Button>
      
  )
}
