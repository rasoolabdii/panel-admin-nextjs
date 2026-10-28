"use client";

import { adminCouponTable } from "@/utils/tableHeads";
import { toLocalDateStringShort } from "@/utils/toLocalDate";
import toPersianNumbersWithComma, { toPersianNumbers } from "@/utils/toPersianNumber";

function CouponListTable({ coupons = [] }) {
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
                            <tr>
                                <td>{ index + 1 }</td>
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
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
};
export default CouponListTable;