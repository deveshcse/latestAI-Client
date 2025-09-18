import { Edit, Trash } from "lucide-react";
import { Button } from "../ui/button";
import { BookFormDialog } from "../BookFormDialog";

export function EditRow({ row }) {
  return (
    <BookFormDialog
      defaultValues={row.original}
      trigger={
        <Button
          variant="ghost"
          size="icon"
          className="text-green-500 cursor-pointer hover:text-green-500"
        >
          <Edit size={16} />
        </Button>
      }
    />
  );
}
