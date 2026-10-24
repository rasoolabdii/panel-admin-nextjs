import { addNewCategoryApi, getCategoriesApi } from "@/services/categoryService";
import { useMutation, useQuery } from "@tanstack/react-query";

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

export const useAddCategory = () => {
    const { isPending: isCreating , mutateAsync: addCategory } = useMutation({
        mutationFn: addNewCategoryApi
    });

    return { isCreating , addCategory };
};