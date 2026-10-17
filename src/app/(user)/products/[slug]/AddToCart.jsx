"use client";

import useUserProfile from "@/hooks/useUserProfile";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import useAddToCart from "./useAddToCart";
import Loading from "@/ui/Loading";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";

function AddToCart({ product }) {
    const router = useRouter();
    const queryClient = useQueryClient();
    const { data } = useUserProfile();
    const { user , cart } = data || {};
    const { isPending , addToCart } = useAddToCart();

    const addToCartHandler = async () => {
        if(!user) {
            toast.error("لطفا وارد حساب کاربری خود شوید")
            router.push("/auth")
            return;
        }
        else {
            try {
                const { message } = await addToCart(product._id);
                toast.success(message);
                queryClient.invalidateQueries({queryKey: ["get-user"]})
            }
            catch(error) {
                toast.error(error?.response?.data?.message);
            }
        }
    }
    const isInCart = ( user , product) => {
        if(!user) return false;
        return user && user.cart?.products.some((p) => p.productId === product._id);
    }

    return (
        <>
            {isInCart(user , product) ? (<Link href="/cart" className="btn btn--orange w-full">ادامه سفارش</Link>) :
                isPending ? (<Loading />) : (
                    <div>
                        <button onClick={addToCartHandler} className="btn btn--orange w-full">افزودن به سبد خرید</button>
                    </div>
            )}
        </>
    )
};
export default AddToCart;