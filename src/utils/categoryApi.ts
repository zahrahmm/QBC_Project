import server from "./axios";

export const createCategory = (data: { name: string }) =>
  server.post("/api/category", data);

export const editCategory = (id: string, data: { name: string }) =>
  server.put(`/api/category/${id}`, data);

export const deleteCategory = (id: string) =>
  server.delete(`/api/category/${id}`);
