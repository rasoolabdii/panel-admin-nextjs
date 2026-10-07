import { getUserProfileApi } from "@/services/authService";
import { useQuery } from "@tanstack/react-query";

function useUserProfile() {
    const { isLoading , data } = useQuery({
        queryKey: ["get-user"],
        queryFn: getUserProfileApi,
        retry: false,
        refetchOnReconnect: true,
        refetchOnWindowFocus: true
    });
    return { data , isLoading}
};
export default useUserProfile;