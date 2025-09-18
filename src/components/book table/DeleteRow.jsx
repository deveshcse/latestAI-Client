import { Edit, Trash } from "lucide-react";
import { Button } from "../ui/button";

export function DeleteRow({ row }) {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => alert(`Delete book: ${row.original.title}`)}
    >
      <Trash />
    </Button>
  );
}
