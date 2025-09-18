import { apiClient } from "@/lib/apiClient";

export const createCrudService = (resource) => {
  return {
    getAll: async () => {
      const { data } = await apiClient.get(`/${resource}`);
      return data;
    },
    getById: async (id) => {
      const { data } = await apiClient.get(`/${resource}/${id}`);
      return data;
    },
    create: async (payload) => {
      const { data } = await apiClient.post(`/${resource}`, payload);
      return data;
    },
    update: async ({ id, ...updates }) => {
      const { data } = await apiClient.put(`/${resource}/${id}`, updates);
      return data;
    },
    delete: async (id) => {
      const { data } = await apiClient.delete(`/${resource}/${id}`);
      return data;
    },
  };
};
