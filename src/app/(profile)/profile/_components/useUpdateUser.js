import { updateProfileApi } from "@/services/authService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

function useUpdateUser() {
    const queryClient = useQueryClient();

    const { isPending: isUpdating , mutateAsync: updateProfile } = useMutation({
        mutationFn: updateProfileApi,
        onSuccess: (data) => {
            toast.success(data.message);
            queryClient.invalidateQueries({
                queryKey: ["get-user"]
            })
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message);
        }
    });
    return { isUpdating , updateProfile };
};
export default useUpdateUser;