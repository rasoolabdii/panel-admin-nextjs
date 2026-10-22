import { addProductApi, getProductsApi } from "@/services/productServcice";
import { useMutation, useQuery } from "@tanstack/react-query";

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