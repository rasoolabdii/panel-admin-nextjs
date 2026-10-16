import { getCategoriesApi } from "@/services/categoryService";
import { useQuery } from "@tanstack/react-query";

function useCategories() {
    const { isLoading , data } = useQuery({
        queryKey: ["get-categories"],
        queryFn: getCategoriesApi,
        retry: false,
        refetchOnReconnect: true,
        refetchOnWindowFocus: true
    });
    const { categories } = data || {} ;

    return { isLoading , categories };
};
export default useCategories;