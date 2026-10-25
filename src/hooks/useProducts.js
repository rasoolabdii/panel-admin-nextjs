import { addProductApi, getOneProductByIdApi, getProductsApi, removeProductApi, updateProductApi } from "@/services/productServcice";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

function useProducts(qs) {
    const {isLoading , data} = useQuery({
        queryKey: ["get-products"],
        queryFn: () => getProductsApi(qs),
        retry: false,
        refetchOnReconnect: true,
        refetchOnWindowFocus: true
    });

    const { products } = data || {};
    return { isLoading , products };
};
export default useProducts;

export const useAddProduct = () => {
    const { isPending: isCreating , mutateAsync: addProduct } = useMutation({
        mutationFn: addProductApi
    });
    return { isCreating , addProduct };
};

export const useGetOneProductById = (id) => {
    const { isLoading , data } = useQuery({
        queryKey: ["get-product" , id],
        queryFn: () => getOneProductByIdApi(id),
        retry: false,
        refetchOnWindowFocus: true,
        refetchOnReconnect: true
    });
    const { product } = data || {};
    return { isLoading , product };
};

export const useUpdateProduct = () => {
    const { isPending: isUpdating , mutateAsync: updateProduct } = useMutation({
        mutationFn: updateProductApi
    });

    return { isUpdating , updateProduct };
};

export const useRemoveProduct = () => {
    const { isPending: isDeleting , mutateAsync: removeProduct } = useMutation({
        mutationFn: removeProductApi
    });

    return { isDeleting , removeProduct };
};