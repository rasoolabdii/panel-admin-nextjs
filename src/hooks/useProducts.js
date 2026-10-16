import { getProductsApi } from "@/services/productServcice";
import { useQuery } from "@tanstack/react-query";

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