import { Plus } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { DataTable } from "./DataTable/DataTable";
import { columns } from "./book table/Columns";


export const Dashboard = () => {
  const data = [
    {
      id: 1,
      title: "The Lost Kingdom",
      author: "Arthur Blake",
      genre: "Fantasy",
      publishedYear: 1995,
      status: "Available",
    },
    {
      id: 2,
      title: "Shadows of Time",
      author: "Maya Harper",
      genre: "Science Fiction",
      publishedYear: 2001,
      status: "Issued",
    },
    {
      id: 3,
      title: "Echoes of Silence",
      author: "Daniel Cross",
      genre: "Mystery",
      publishedYear: 2010,
      status: "Available",
    },
    {
      id: 4,
      title: "Winds of Destiny",
      author: "Sophia Lane",
      genre: "Adventure",
      publishedYear: 2005,
      status: "Issued",
    },
    {
      id: 5,
      title: "Whispers in the Dark",
      author: "Henry Cole",
      genre: "Horror",
      publishedYear: 1998,
      status: "Available",
    },
    {
      id: 6,
      title: "The Eternal Flame",
      author: "Olivia Stone",
      genre: "Fantasy",
      publishedYear: 2015,
      status: "Available",
    },
    {
      id: 7,
      title: "Beyond the Horizon",
      author: "James Wright",
      genre: "Adventure",
      publishedYear: 1999,
      status: "Issued",
    },

    {
      id: 1,
      title: "The Lost Kingdom",
      author: "Arthur Blake",
      genre: "Fantasy",
      publishedYear: 1995,
      status: "Available",
    },
    {
      id: 2,
      title: "Shadows of Time",
      author: "Maya Harper",
      genre: "Science Fiction",
      publishedYear: 2001,
      status: "Issued",
    },
    {
      id: 3,
      title: "Echoes of Silence",
      author: "Daniel Cross",
      genre: "Mystery",
      publishedYear: 2010,
      status: "Available",
    },
    {
      id: 4,
      title: "Winds of Destiny",
      author: "Sophia Lane",
      genre: "Adventure",
      publishedYear: 2005,
      status: "Issued",
    },
    {
      id: 5,
      title: "Whispers in the Dark",
      author: "Henry Cole",
      genre: "Horror",
      publishedYear: 1998,
      status: "Available",
    },
    {
      id: 6,
      title: "The Eternal Flame",
      author: "Olivia Stone",
      genre: "Fantasy",
      publishedYear: 2015,
      status: "Available",
    },
    {
      id: 7,
      title: "Beyond the Horizon",
      author: "James Wright",
      genre: "Adventure",
      publishedYear: 1999,
      status: "Issued",
    },
  ];
  return (
    <div className="w-full h-screen">
      <div className="w-full h-12 flex items-center justify-between px-4 border-b bg-blue-50 shadow-md">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>

      <DataTable data={data} columns={columns} />
    </div>
  );
};
