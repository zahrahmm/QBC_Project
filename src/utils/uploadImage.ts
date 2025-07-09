import server from "./axios";
import { useMutation } from "@tanstack/react-query";

export const useUploadImage = () => {
  const createNewProduct_URL = "api/upload";

  return useMutation({
    mutationFn: (image: ImageData) =>
      server.post(createNewProduct_URL, image).then((res) => res.data),
  });
};
