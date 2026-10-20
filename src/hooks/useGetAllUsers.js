import { getAllUsersApi } from "@/services/authService";
import { useQuery } from "@tanstack/react-query";

function useGetAllUsers() {
    const { isLoading , data } = useQuery({
        queryKey: ["get-users"],
        queryFn: getAllUsersApi,
        retry: false,
        refetchOnReconnect: true,
        refetchOnWindowFocus: true
    });
    const { users } = data || {};
    return { isLoading , users };
};
export default useGetAllUsers;