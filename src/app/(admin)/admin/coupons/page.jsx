"use client"; 

import { HiPlusCircle } from "react-icons/hi";
import CouponListTable from "./CouponListTable";
import Link from "next/link";
import { useGetAllCoupons } from "@/hooks/useCoupons";

function page() {
    const { coupons } = useGetAllCoupons();

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <h1 className="font-bold text-lg mb-8"> لیست کدهای تخفیف</h1>
                <div className="flex items-center justify-center gap-x-2 btn btn--orange w-1/6">
                    <HiPlusCircle className="w-6 h-6" />
                    <Link href="/admin/coupons/add">
                        افزودن کد تخفیف
                    </Link>
                </div>
            </div>
            <CouponListTable  coupons={coupons} />
        </div>
    )
};
export default page;