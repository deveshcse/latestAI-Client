import { Plus } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { DataTable } from "./DataTable/DataTable";
import { columns } from "./book table/Columns";
import { useBooks } from "@/hooks/useBooks";


export const Dashboard = () => {
  const { data: books, isLoading } = useBooks();
  return (
    <div className="w-full h-screen">
      <div className="w-full h-12 flex items-center justify-between px-4 border-b bg-blue-50 shadow-md">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Button variant="outline"><Plus />Add Book</Button>
      </div>

     {books && <DataTable data={books} columns={columns} />}
    </div>
  );
};
