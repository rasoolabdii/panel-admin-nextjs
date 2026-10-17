"use client";

import useUserProfile from "@/hooks/useUserProfile";
import Loading from "@/ui/Loading";
import Link from "next/link";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

function CartPage() {
    const { data , isLoading} = useUserProfile();
    const { user , cart } = data || {};

    if(isLoading) return <p><Loading /></p>
    if(!user || !cart) {
        return (
            <div className="container lg:max-w-screen-lg">
                <p className="font-bold mb-4">برای مشاهده سبد خرید لطفا وارد حساب کاربری خود شوید</p>
                <Link href="/auth" className="text-lg font-bold text-primary-900">
                    رفتن به صفحه ورود ؟
                </Link>
            </div>
        )
    }
    if(!user.cart?.products || user.cart?.products.length === 0) {
        return (
            <div className="container lg:max-w-screen-lg">
                <p className="font-bold">سبد خرید شما خالی هست</p>
                <Link href="/products" className="text-lg font-bold text-primary-900">
                    رفتن به صفحه محصولات
                </Link>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-4 gap-4">
            <div className="col-span-3 space-y-5">
                {cart && cart.productDetail.map((item) => {
                    return (
                        <div key={item._id}>
                            <CartItem cartItem={item} />
                        </div>
                    )
                })}
            </div>
            <div className="col-span-1">
                <CartSummary payDetail={cart?.payDetail} />
            </div>
        </div>
    )
};
export default CartPage;