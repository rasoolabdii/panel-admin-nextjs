"use client";

import { useAddToCart, useDecrementFromCart } from "@/hooks/useCart";
import toPersianNumbersWithComma from "@/utils/toPersianNumber";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { HiMinus, HiOutlineTrash, HiPlus } from "react-icons/hi2";

function CartItem({ cartItem }) {
    const router = useRouter();
    const {isPending: isAddingToCart ,  addToCart } = useAddToCart();
    const {isPending, decrementFromCart } = useDecrementFromCart();
    const queryClient = useQueryClient();

    const addToCartHandler = async () => {
        try {
            const { message } = await addToCart(cartItem._id);
            toast.success(message);
            queryClient.invalidateQueries({ queryKey: ["get-user"] });
            router.refresh();
        }
        catch(error) {
            toast.error(error?.response?.data?.message);
        }
    }

    const decrementHandler = async () => {
        try {
            const { message } = await decrementFromCart(cartItem._id);
            toast.success(message);
            queryClient.invalidateQueries({
                queryKey: ["get-user"]
            });
            router.refresh();
        }
        catch(error) {
            toast.error(error?.response?.data?.message);
        }
    }

    return (
        <div className="border rounded-xl p-4 flex justify-between">
            <span className="flex-1 font-bold">{cartItem.title}</span>
            <div className="flex items-center justify-between gap-x-8">
                <div className="gap-x-2 flex">
                    <span className="text-base">قیمت :</span>
                    <span
                        className={`${cartItem.discount ? "line-through text-gray-500" : "font-bold"}`}
                    >
                        {toPersianNumbersWithComma(cartItem.price)} تومان
                    </span>
                </div>
                <div>
                    {!!cartItem.discount && (
                        <div className="flex items-center gap-x-2 mt-2"> 
                            <p className="font-bold">{toPersianNumbersWithComma(cartItem.offPrice)} تومان</p>
                            <div className="bg-rose-500 px-0.5 py-1 rounded-full w-8 h-8 items-center text-center justify-center">
                                {toPersianNumbersWithComma(cartItem.discount)}%
                            </div>
                        </div>
                    )}
                </div>
                <span className="border-r-2 pr-4">تعداد : {toPersianNumbersWithComma(cartItem.quantity)}</span>
                <div className="flex gap-x-3">
                    <button onClick={addToCartHandler} className="bg-primary-900 text-white rounded p-1">
                        <HiPlus className="w-4 h-4" />
                    </button>
                    <button onClick={decrementHandler} className="border rounded p-1">
                        {cartItem && cartItem.quantity === 1 ? (
                            <HiOutlineTrash className="w-6 h-6 text-rose-500" />
                        ) : (
                            <HiMinus className="w-4 h-4" />
                        )}  
                    </button>
                </div>
            </div>
        </div>
    )
};
export default CartItem;