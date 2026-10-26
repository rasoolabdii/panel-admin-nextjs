import { adminPaymentListTableTHeads } from "@/utils/tableHeads";
import { toLocalDateStringShort } from "@/utils/toLocalDate";
import toPersianNumbersWithComma from "@/utils/toPersianNumber";
import truncateText from "@/utils/truncateText";

function PaymentListTable ({ payments }) {
    return (
        <div className="shadow-sm overflow-auto my-8"> 
            <table className="border-collapse table-auto w-full min-w-[800px] text-sm">
                <thead className="table__th">
                    <tr>
                        {adminPaymentListTableTHeads.map((item) => {
                            return (
                                <th key={item.id} className="whitespace-nowrap">
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
                                    <td className="whitespace-nowrap truncate">
                                        {payment.invoiceNumber}
                                    </td>
                                    <td className="max-w-[280px] whitespace-nowrap">
                                        {truncateText(payment.description , 35)}
                                    </td>
                                    <td className="whitespace-nowrap">
                                        <div className="flex flex-col gap-y-2 badge badge--secondary items-start pr-4">
                                            <span>{payment.user.name}</span>
                                            <span>{payment.user.email}</span>
                                            <span className="font-bold">
                                                {payment.user.phoneNumber}
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex flex-col gap-y-2 items-start">
                                            {payment.cart.productDetail.map((product) => {
                                                return (
                                                    <span
                                                        className="badge badge--secondary"
                                                        key={product._id}
                                                    >
                                                        {product.title}
                                                    </span>
                                                )
                                            })}
                                        </div>
                                    </td>
                                    <td className="font-bold text-md">
                                        {toPersianNumbersWithComma(payment.amount)} تومان
                                    </td>
                                    <td>{toLocalDateStringShort(payment.createdAt)}</td>
                                    <td>
                                        {payment.status === "COMPLETED" ? (
                                            <span className="badge badge--success">موفق</span>) 
                                            : (
                                                <span className="badge badge--error">ناموفق</span>
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
export default PaymentListTable;