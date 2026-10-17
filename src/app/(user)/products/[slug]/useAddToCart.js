import { addToCartApi } from "@/services/cartService";
import { useMutation } from "@tanstack/react-query";

function useAddToCart() {
    const { isPending , mutateAsync: addToCart} = useMutation({
        mutationFn: addToCartApi,
    });

    return { isPending , addToCart };
};
export default useAddToCart;