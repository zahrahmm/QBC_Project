import server from "./axios";
import { useMutation } from "@tanstack/react-query";

type ImageResponse = {
  message: string;
  image: string;
};

export const useUploadImage = () => {
  const createNewProduct_URL = "api/upload";

  return useMutation({
    mutationFn: (image: FormData) =>
      server
        .post<ImageResponse>(createNewProduct_URL, image)
        .then((res) => res.data),
  });
};
