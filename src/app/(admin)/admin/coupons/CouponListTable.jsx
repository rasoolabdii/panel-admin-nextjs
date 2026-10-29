"use client";

import { useRemoveCoupon } from "@/hooks/useCoupons";
import { adminCouponTable } from "@/utils/tableHeads";
import { toLocalDateStringShort } from "@/utils/toLocalDate";
import toPersianNumbersWithComma, { toPersianNumbers } from "@/utils/toPersianNumber";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import toast from "react-hot-toast";
import { HiEye, HiTrash } from "react-icons/hi2";
import { RiEdit2Line } from "react-icons/ri";

function CouponListTable({ coupons = [] }) {
    const { isDeleting , removeCoupon } = useRemoveCoupon();
    const queryClient = useQueryClient();
    const handleDeleteCoupon = async (id) => {
        try {
            const { message } = await removeCoupon(id);
            toast.success(message);
            queryClient.invalidateQueries({queryKey: ['get-coupons']});
        }
        catch(error) {
            toast.error(error?.response?.data?.message);
        }
    }

    return (
        <div className="shadow-md overflow-auto my-8">
            <table className="border-collapse table_auto w-full min-w-[800px] text-sm">
                <thead className="table__th">
                    <tr>
                        {adminCouponTable.map((item) => {
                            return (
                                <th key={item._id} className="whitespace-nowrap">
                                    {item.label}
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody className="table__td">
                    {coupons.map((coupon , index) => {
                        return (
                            <tr key={coupon._id}>
                                <td>{index + 1}</td>
                                <td>{coupon.code}</td>
                                <td>
                                    <span className="badge badge--success">{coupon.type}</span>
                                </td>
                                <td>
                                    <div>
                                        {coupon?.amount.toString().length > 3 ? (
                                            <span>{toPersianNumbersWithComma(coupon.amount)} تومان</span>
                                        ) : (<span>% {toPersianNumbers(coupon.amount)}</span>)}
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-start flex-col gap-y-2">
                                        {coupon.productIds.map((item) => {
                                            return (
                                                <tr key={item._id} className="badge badge--secondary">
                                                    {item.title}
                                                </tr>
                                            )
                                        })}
                                    </div> 
                                </td>   
                                <td>{toPersianNumbers(coupon.usageCount)}</td>
                                <td>{toPersianNumbers(coupon.usageLimit)}</td>
                                <td>{toLocalDateStringShort(coupon.expireDate)}</td>
                                <td className="font-bold">
                                    <div className="flex items-center gap-x-4">
                                        <Link href={`/admin/coupons/${coupon._id}`}>
                                            <HiEye className="text-primary-900 w-6 h-6" />
                                        </Link>
                                        <button onClick={() => handleDeleteCoupon(coupon._id)}>
                                            <HiTrash className="w-6 h-6 text-rose-600" />
                                        </button>
                                        <Link href={`/admin/coupons/edit/${coupon._id}`}>
                                            <RiEdit2Line className="w-6 h-6 text-secondary-600" />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
};
export default CouponListTable;