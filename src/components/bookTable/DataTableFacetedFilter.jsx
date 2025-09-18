import { useMemo } from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { MoreVertical, X } from "lucide-react";

export function DataTableFacetedFilter({ column }) {
  const options = useMemo(() => {
    if (!column?.getFacetedUniqueValues) return [];
    return Array.from(column.getFacetedUniqueValues().keys()).sort();
  }, [column, column.getFacetedUniqueValues?.()]);

  const selectedValues = new Set(column.getFilterValue() ?? []);


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-accent"
        >
          <MoreVertical className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-40">
        <DropdownMenuItem
          onClick={() => column.setFilterValue(undefined)}
          className="font-medium text-red-500"
        >
          <X className="mr-2 h-4 w-4" />
          Clear Filter
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        {options.map((option) => {
          const isSelected = selectedValues.has(option);
          return (
            <DropdownMenuCheckboxItem
              onSelect={(e) => e.preventDefault()}
              key={option}
              checked={isSelected}
              onCheckedChange={(checked) => {
                if (checked) {
                  column.setFilterValue([...selectedValues, option]);
                } else {
                  column.setFilterValue(
                    [...selectedValues].filter((v) => v !== option)
                  );
                }
              }}
            >
              {option}
            </DropdownMenuCheckboxItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
