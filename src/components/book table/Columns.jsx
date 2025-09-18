import { EditRow } from "./EditRow";
import { DeleteRow } from "./DeleteRow";
import { DataTableColumnHeader } from "./DataTableColumnHeader";
import { DataTableFacetedFilter } from "./DataTableFacetedFilter";
export const columns = [
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: (row) => row.getValue("title"),
    enableSorting: false,
    enableHiding: false,

  },
  {
    accessorKey: "author",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Author" />
    ),
    cell: (row) => row.getValue("author"),
     enableSorting: false,
  },
  {
    accessorKey: "genre",
    header: ({ column }) => (
      <div className="flex items-center gap-2">
        Genre
        <DataTableFacetedFilter column={column} title="Genre"  enableFilter  />
      </div>
    ),
    cell: (row) => row.getValue("genre"),
    enableSorting: false,
    filterFn: (row, id, value) => value.includes(row.getValue(id)),
     enableGlobalFilter: false,
  },
  {
    accessorKey: "publishedYear",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Published Year" />
    ),
    cell: (row) => row.getValue("publishedYear"),
     enableGlobalFilter: false,
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <div className="flex items-center gap-2">
        Status
        <DataTableFacetedFilter column={column} title="Status" enableFilter />
      </div>
    ),
    cell: (row) => row.getValue("status"),
    enableSorting: false,
    filterFn: (row, id, value) => value.includes(row.getValue(id)),
     enableGlobalFilter: false,
  },
  {
    id: "edit",
    header: "Edit",
    cell: ({ row }) => <EditRow row={row} />,
  },
  {
    id: "delete",
    header: "Delete",
    cell: ({ row }) => <DeleteRow row={row} />,
  },
];
