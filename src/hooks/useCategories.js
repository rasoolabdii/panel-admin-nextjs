import { addNewCategoryApi, getCategoriesApi, getCategoryByIdApi, removeCategoryApi, updateCategoryApi } from "@/services/categoryService";
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

export const useGetCategoryById = (id) => {
    const { isLoading , data } = useQuery({
        queryKey: ["get-category" , id],
        queryFn: () => getCategoryByIdApi(id),
        retry: false,
        refetchOnReconnect: true,
        refetchOnWindowFocus: true
    });
    const {category} = data || {};

    return { isLoading , category };
};

export const useUpdateCategory = () => {
    const { isPending: isUpdating , mutateAsync: updateCategory } = useMutation({
        mutationFn: updateCategoryApi
    });
    return { isUpdating , updateCategory };
};

export const useRemoveCategory = () => {
    const { isPending: isDeleting , mutateAsync: removeCategory } = useMutation({
        mutationFn: removeCategoryApi
    });

    return { isDeleting , removeCategory };
}