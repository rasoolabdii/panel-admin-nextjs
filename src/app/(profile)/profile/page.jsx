"use client";

import useUserProfile from "@/hooks/useUserProfile";
import Loading from "@/ui/Loading";
import { toLocalDateString } from "@/utils/toLocalDate";
import PaymentTable from "./payments/PaymentTable";
import Link from "next/link";

function Profile() {
    const { isLoading , data } = useUserProfile();
    const { user , payments } = data || {};

    if(isLoading) return <p><Loading /></p>

    return (
        <div>
            <h1 className="text-base text-gray-800">خوش آمدی <span className="font-bold">{user.name}</span> عزیز</h1>
            <p className="mb-10 text-md">
                <span>تاریخ پیوستن :</span>
                <span>{toLocalDateString(user.createdAt)}</span>
            </p>
            <div className="border rounded-xl p-4 mt-8">
                <div className="flex items-center justify-between">
                    <h2 className="font-bold mb-10">آخرین سفارشات</h2>
                    <p className="btn btn--orange w-1/6">
                        <Link href="/profile/payments">مشاهده همه سفارشات</Link>
                    </p>
                </div>
                <PaymentTable payments={payments.sort((a , b) => (
                    new Date(b.createdAt) - new Date(a.createdAt)
                )).slice(0 , 5)} />
            </div>
        </div>
    )
};
export default Profile;