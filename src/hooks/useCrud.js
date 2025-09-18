import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export const createCrudHooks = (key, service) => {
  const useGetAll = () =>
    useQuery({
      queryKey: [key],
      queryFn: service.getAll,
    });

  const useGetById = (id) =>
    useQuery({
      queryKey: [key, id],
      queryFn: () => service.getById(id),
      enabled: !!id,
    });

  const useCreate = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: service.create,
      onSuccess: () => queryClient.invalidateQueries([key]),
    });
  };

  const useUpdate = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: service.update,
      onSuccess: (_, { id }) => {
        queryClient.invalidateQueries([key]);
        queryClient.invalidateQueries([key, id]);
      },
    });
  };

  const useDelete = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: service.delete,
      onSuccess: () => queryClient.invalidateQueries([key]),
    });
  };

  return { useGetAll, useGetById, useCreate, useUpdate, useDelete };
};
