"use client";

import Link from "next/link";
import { HiPlusCircle } from "react-icons/hi";
import PaymentListTable from "./PaymentListTable";
import { useGetAllPayments } from "@/hooks/usePayment";
import Loading from "@/ui/Loading";

function page() {
    const { isLoading , payments } = useGetAllPayments();

    if(isLoading) return <Loading />;

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-lg font-bold">سفارشات کاربر</h1>
                <Link href="/admin/payments/add" className="btn btn--orange w-1/6 gap-x-2">
                    <HiPlusCircle className="w-5 h-5" />
                    <span>افزودن سفارش جدید</span>
                </Link>
            </div>
            <PaymentListTable payments={payments} />
        </div>
    )
};
export default page;