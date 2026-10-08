import { authQueryKeys } from "@/components/Features/Auth";
import { UserDetails } from "@/entities/User";
import { api } from "@/shared/lib/axios_instance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

interface UpdatePayload {
  phoneNumber: string;
  payload: Partial<Omit<UserDetails , "id">>;
}

export async function updateUser({
  phoneNumber,
  payload,
}: UpdatePayload): Promise<UserDetails> {
  const { data } = await api.patch<UserDetails>(
    `/user/${phoneNumber}/`,
    payload
  );

  return data;
}

export function useUpdateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateUser,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: authQueryKeys.me,
      });
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });
} 