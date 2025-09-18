import { Skeleton } from "@/components/ui/skeleton"
import { Fragment } from "react"
import { TableCell, TableRow } from "../ui/table"

export function TableSkeleton({ table }) {
  return (
  <Fragment>
            {/* Render 10 skeleton rows as a placeholder while loading */}
            {Array.from(new Array(10)).map((_, index) => (
                <TableRow key={index} className="min-w-24 px-0 h-13">
                    {/* Render skeleton cells for each visible column */}
                    {table.getVisibleLeafColumns().map((column) => (
                        <TableCell key={column.id}>
                            <Skeleton className="bg-gray-500 h-4 " />
                        </TableCell>
                    ))}
                </TableRow>
            ))}
        </Fragment>
  )
}