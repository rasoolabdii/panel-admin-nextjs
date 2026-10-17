import { HiMinus, HiOutlineTrash, HiPlus } from "react-icons/hi2";

function CartItem({ cartItem }) {
    return (
        <div className="border rounded-xl p-4 flex justify-between">
            <span className="flex-1 font-bold">{cartItem.title}</span>
            <div className="flex items-center justify-between gap-x-8">
                <span>تعداد : {cartItem.quantity}</span>
                <div className="flex gap-x-3">
                    <button className="bg-primary-900 text-white rounded p-1">
                        <HiPlus className="w-4 h-4" />
                    </button>
                    <button>
                        <HiOutlineTrash className="w-6 h-6 text-rose-500" />
                    </button>
                    <button className="border rounded p-1">
                        <HiMinus className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    )
};
export default CartItem;