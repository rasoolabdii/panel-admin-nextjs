import { addToCartApi, decrementFromCartApi } from "@/services/cartService";
import { useMutation } from "@tanstack/react-query";

export function useAddToCart() {
    const { isPending , mutateAsync: addToCart} = useMutation({
        mutationFn: addToCartApi,
    });

    return { isPending , addToCart };
};

export function useDecrementFromCart() {
    const { isPending , mutateAsync: decrementFromCart } = useMutation({
        mutationFn: decrementFromCartApi
    });
    return { isPending , decrementFromCart };
}