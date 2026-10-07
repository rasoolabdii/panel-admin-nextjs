import { completeProfileApi } from "@/services/authService";
import { useMutation } from "@tanstack/react-query";

function useCompleteProfile() {
    const { isPending: isCompleting , mutateAsync: completeProfile} = useMutation({
        mutationFn: completeProfileApi,
    });

    return { isCompleting , completeProfile };
};
export default useCompleteProfile;