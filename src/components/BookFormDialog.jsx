"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { BookForm } from "./BookForm"

export function BookFormDialog({ trigger, defaultValues }) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{defaultValues ? "Edit Book" : "Add Book"}</DialogTitle>
        </DialogHeader>
        <BookForm
          defaultValues={defaultValues}
          onSuccess={() => setOpen(false)} // close dialog on success
        />
      </DialogContent>
    </Dialog>
  )
}
