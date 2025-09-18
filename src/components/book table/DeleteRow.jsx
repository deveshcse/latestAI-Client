import { Edit, Trash } from "lucide-react";
import { Button } from "../ui/button";
import { useDeleteBook } from "@/hooks/useBooks";

export function DeleteRow({ row }) {
  const deleteBook = useDeleteBook();
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => deleteBook.mutate(row.original.id)}
      className="text-destructive cursor-pointer hover:text-destructive"
    >
      <Trash />
    </Button>
  );
}
