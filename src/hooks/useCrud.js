import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner"; // or your preferred toast lib

export const createCrudHooks = (key, service) => {
  const useGetAll = () =>
    useQuery({
      queryKey: [key],
      queryFn: service.getAll,
      onError: (error) => {
        toast.error(error.message || `Failed to fetch ${key}`);
      },
    });

  const useGetById = (id) =>
    useQuery({
      queryKey: [key, id],
      queryFn: () => service.getById(id),
      enabled: !!id,
      onError: (error) => {
        toast.error(error.message || `Failed to fetch ${key} with id ${id}`);
      },
    });

  const useCreate = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: service.create,
      onSuccess: () => {
        queryClient.invalidateQueries([key]);
        toast.success(`${key} created successfully`);
      },
      onError: (error) => {
        toast.error(error.message || `Failed to create ${key}`);
      },
    });
  };

  const useUpdate = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: service.update,
      onSuccess: (_, { id }) => {
        queryClient.invalidateQueries([key]);
        queryClient.invalidateQueries([key, id]);
        toast.success(`${key} updated successfully`);
      },
      onError: (error) => {
        toast.error(error.message || `Failed to update ${key}`);
      },
    });
  };

  const useDelete = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: service.delete,
      onSuccess: () => {
        queryClient.invalidateQueries([key]);
        toast.success(`${key} deleted successfully`);
      },
      onError: (error) => {
        toast.error(error.message || `Failed to delete ${key}`);
      },
    });
  };

  return { useGetAll, useGetById, useCreate, useUpdate, useDelete };
};
