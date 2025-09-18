
import { Plus, X } from "lucide-react"
import { DataTableFacetedFilter } from "../book table/DataTableFacetedFilter" 
import { Input } from "../ui/input"
import { Button } from "../ui/button"

export function DataTableToolbar({ table}) {

  return (
    <div className=" w-full flex items-center justify-between gap-2">
      <div className="flex items-center gap-2 flex-1">
        
             </div>
      <Button size="sm" variant="outline">
        <Plus /> Add Book
      </Button>
    </div>
  )
}
