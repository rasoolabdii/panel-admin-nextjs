function CartSummary({ payDetail }) {
    const { totalOffAmount , totalPrice , totalGrossPrice } = payDetail;

    return (
        <div className="border p-4 rounded-xl">
            <p className="mb-4 font-bold">اطلاعات پرداخت</p>
            <div className="mb-4 flex items-center justify-between">
                <span className="">حمع کل</span>
                <span>{totalGrossPrice} تومان</span>
            </div>
            <div className="mb-4 flex items-center justify-between">
                <span>تخفیف</span>
                <span>- {totalOffAmount} تومان</span>
            </div>
            <div className="mb-4 flex font-bold items-center justify-between">
                <span>مبلغ قابل پرداخت</span>
                <span>{totalPrice} تومان</span>
            </div>
            <div>
                <button className="btn btn--orange w-full">پرداخت</button>
            </div>
        </div>
    )
};
export default CartSummary;