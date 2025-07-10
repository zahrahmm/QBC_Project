import server from "./axios";
import { useMutation } from "@tanstack/react-query";

type ImageResponse = {
  message: string;
  image: string;
};

export const useUploadImage = () => {
  const createNewProduct_URL = "api/upload";

  return useMutation({
    mutationFn: (image: File) => {
      const formData = new FormData();
      formData.append("image", image); // "image" must match the backend field name

      return server
        .post<ImageResponse>(createNewProduct_URL, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => res.data);
    },
  });
};
