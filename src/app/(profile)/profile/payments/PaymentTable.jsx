"use client";

import { userPaymentTHeads } from "@/utils/tableHeads";
import { toLocalDateString } from "@/utils/toLocalDate";
import toPersianNumbersWithComma from "@/utils/toPersianNumber";
import truncateText from "@/utils/truncateText";

function PaymentTable({ payments}) {
    return (
        <div className="shadow-lg overflow-auto my-8">
            <table>
                <thead className="table__th">
                    <tr>
                        {userPaymentTHeads.map((item) => {
                            return (
                                <th key={item.id}>
                                    {item.label}
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody className="table__td">
                        {payments.map((payment , index) => {
                            return (
                                <tr key={payment._id}>
                                    <td>{index + 1}</td>
                                    <td>{truncateText(payment.invoiceNumber , 30)}</td>
                                    <td>{truncateText(payment.description , 30)}</td>
                                    <td>
                                        <div className="flex flex-col gap-y-2 items-start">
                                            {payment.cart.productDetail.map((product) => {
                                                return (
                                                    <div key={product._id} className="badge badge--secondary">
                                                        {product.title}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </td>
                                    <td>{toPersianNumbersWithComma(payment.amount)} تومان</td>
                                    <td>{toLocalDateString(payment.createdAt)}</td>
                                    <td>
                                        {payment.status === "COMPLETED" ? (<span className="bg-green-500 px-2 py-0.5 text-white rounded-xl">موفق</span>) : (
                                            <span className="bg-rose-500 text-white px-2 py-0.5 rounded-xl">ناموفق</span>
                                        )}
                                    </td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </div>
    )
};
export default PaymentTable;