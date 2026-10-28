"use client";

import { useCreateCoupon } from "@/hooks/useCoupons";
import CouponForm from "@/ui/CouponForm";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";


function page() {
    const [type , setType] = useState("percent");
    const [productIds , setProductIds] = useState([]);
    const [expireDate , setExpireDate] = useState(new Date());
    const { isCreating , createCoupon } = useCreateCoupon();
    const [formData , setFormData] = useState({
        code: "",
        amount: "",
        usageLimit: ""
    });
    const router = useRouter();

    const handleChange = (e) => {
        setFormData({...formData , [e.target.name]: e.target.value});
    }

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const { message } = await createCoupon({ 
                ...formData , 
                type , 
                expireDate: new Date(expireDate).toISOString(),
                productIds: productIds.map((p) => p._id)
            });
            toast.success(message);
            router.push("/admin/coupons");
        }
        catch(error) {
            toast.error(error?.response?.data?.message);
        }
    }

    return (
        <div>
            <h1 className="font-bold text-lg mb-8">افزودن کد تخفیف</h1>
            <CouponForm 
                formData={formData}
                handleChange={handleChange}
                onSubmit={handleSubmitForm}
                isLoading={isCreating}
                type={type}
                setType={setType}
                productIds={productIds}
                setProductIds={setProductIds}
                expireDate={expireDate}
                setExpireDate={setExpireDate}
            />
        </div>
    )
};
export default page;