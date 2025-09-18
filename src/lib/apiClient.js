import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://crudcrud.com/api/74ee6246a83a4104b3010a6afa731e7a", 
  headers: {
    "Content-Type": "application/json",
  },
});