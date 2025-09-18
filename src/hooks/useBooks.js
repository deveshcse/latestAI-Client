import { bookService } from "@/services/bookService";
import { createCrudHooks } from "./useCrud";

export const {
  useGetAll: useBooks,
  useGetById: useBook,
  useCreate: useCreateBook,
  useUpdate: useUpdateBook,
  useDelete: useDeleteBook,
} = createCrudHooks("books", bookService);
