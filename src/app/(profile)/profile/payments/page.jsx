"use client";

import useUserProfile from "@/hooks/useUserProfile";
import Loading from "@/ui/Loading";
import PaymentTable from "./PaymentTable";

function Payments() {
    const { isLoading , data} = useUserProfile();
    const { payments } = data || {};
    if(isLoading) return (<p><Loading /></p>)

    return (
        <div>
            <h1 className="font-bold mb-8">سفارشات کاربر</h1>
            <PaymentTable payments={payments} />
        </div>
    )
};
export default Payments;