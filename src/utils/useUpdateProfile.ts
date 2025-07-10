import { useMutation } from "@tanstack/react-query";
import server from "./axios";
import type { userModel } from "../types/users";

type UpdateProfileInput = {
  username: string;
  email: string;
  password: string;
};

const useUpdateProfile = () => {
  return useMutation<userModel, Error, UpdateProfileInput>({
    mutationFn: (data: UpdateProfileInput) =>
      server
        .put<userModel>("https://qbc9.liara.run/api/users/profile", data)
        .then((res) => res.data),
  });
};

export default useUpdateProfile;
