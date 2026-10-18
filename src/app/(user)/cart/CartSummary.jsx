import usePayment from "@/hooks/usePayment";
import Loading from "@/ui/Loading";
import toPersianNumbersWithComma from "@/utils/toPersianNumber";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

function CartSummary({ payDetail }) {
    const { totalOffAmount , totalPrice , totalGrossPrice } = payDetail;
    const { isPending , createPayment } = usePayment();
    const queryClient = useQueryClient();

    const createPaymentHandler = async () => {
        try {
            const { message } = await createPayment();
            toast.success(message);
            queryClient.invalidateQueries({
                queryKey: ["get-user"]
            })
        }
        catch(error) {
            toast.error(error?.response?.data?.message);
        }
    }

    return (
        <div className="border p-4 rounded-xl">
            <p className="mb-4 font-bold">اطلاعات پرداخت</p>
            <div className="mb-4 flex items-center justify-between">
                <span className="">حمع کل</span>
                <span>{toPersianNumbersWithComma(totalGrossPrice)} تومان</span>
            </div>
            <div className="mb-4 flex items-center justify-between">
                <span>تخفیف</span>
                <span>- {toPersianNumbersWithComma(totalOffAmount)} تومان</span>
            </div>
            <div className="mb-4 flex font-bold items-center justify-between">
                <span>مبلغ قابل پرداخت</span>
                <span>{toPersianNumbersWithComma(totalPrice)} تومان</span>
            </div>
            <div>
                {isPending ? (<Loading />) : (
                    <div>
                        <button className="btn btn--orange w-full" onClick={createPaymentHandler}>پرداخت</button>
                    </div>
                )}
            </div>
        </div>
    )
};
export default CartSummary;