import { Edit, Trash } from "lucide-react";
import { Button } from "../ui/button";
import { BookFormDialog } from "../BookFormDialog";

export function EditRow({ row }) {
  return (
    <BookFormDialog
      defaultValues={row.original}
      trigger={
        <Button variant="ghost" size="icon">
          <Edit size={16} />
        </Button>
      }
    />
  );
}
