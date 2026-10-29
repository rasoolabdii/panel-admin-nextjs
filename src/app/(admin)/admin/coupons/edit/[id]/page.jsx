"use client";

import { useGetOneCoupon, useUpdateCoupon } from "@/hooks/useCoupons"
import useProducts from "@/hooks/useProducts";
import CouponForm from "@/ui/CouponForm";
import Loading from "@/ui/Loading";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function page() {
    const { id } = useParams();
    const { isLoading , coupon } = useGetOneCoupon(id);
    const router = useRouter();
    const [type , setType] = useState("");
    const [productIds , setProductIds] = useState([]);
    const [expireDate , setExpireDate] = useState(new Date());
    const [formData , setFormData] = useState({});
    const { products } = useProducts();
    const { isUpdating , updateCoupon } = useUpdateCoupon();

    const handleChange = (e) => {
        setFormData({...formData , [e.target.name]: e.target.value});
    };

    const handleSubmitForm = async(e) => {
        e.preventDefault();
        try {
            const { message } = await updateCoupon({id: coupon._id , data: {
                ...formData,
                type,
                expireDate,
                productIds: productIds.map((p) => p._id)
            }});
            toast.success(message);
            router.push("/admin/coupons");
        }
        catch(error) {
            toast.error(error?.response?.data?.message);
        }
    }

    useEffect(() => {
        if(coupon) {
            setType(coupon.type);
            setProductIds(coupon.productIds ?? []);
            setExpireDate(new Date(coupon.expireDate));
            setFormData({
                code: coupon.code,
                amount: coupon.amount,
                usageLimit: coupon.usageLimit
            });
        }
    } , [coupon]);


    if(isLoading) return <Loading />;

    return (
        <div>
            <h1 className="font-bold text-lg mb-8">ویرایش کد تخفیف</h1>
            <CouponForm 
                handleChange={handleChange}
                onSubmit={handleSubmitForm}
                type={type}
                setType={setType}
                expireDate={expireDate}
                setExpireDate={setExpireDate}
                formData={formData}
                options={products}
                isLoading={isUpdating}
                defaultValue = {coupon.productIds}
                setProductIds={setProductIds}
            />
        </div>
    )
};
export default page;