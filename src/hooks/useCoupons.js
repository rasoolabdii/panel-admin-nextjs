import { createNewCouponApi, getAllCouponsApi, getOneCouponApi, updateCouponApi } from "@/services/couponService";
import { useMutation, useQuery } from "@tanstack/react-query"

export const useCreateCoupon = () => {
    const { isPending: isCreating , mutateAsync: createCoupon } = useMutation({
        mutationFn: createNewCouponApi
    });

    return  { isCreating , createCoupon };
};

export const useGetAllCoupons = () => {
    const { isLoading , data } = useQuery({
        queryKey: ["get-coupons"],
        queryFn: getAllCouponsApi,
        retry: false,
        refetchOnReconnect: true,
        refetchOnWindowFocus: true
    });
    const { coupons } = data || {};
    return { isLoading , coupons };
};

export const useGetOneCoupon = (id) => {
    const { isLoading , data } = useQuery({
        queryKey: ["get-coupon" , id],
        queryFn: () => getOneCouponApi(id),
        retry: false,
        refetchOnReconnect: true,
        refetchOnWindowFocus: true
    });
    const { coupon } = data || {};
    return { isLoading , coupon };
};

export const useUpdateCoupon = () => {
    const { isPending: isUpdating , mutateAsync: updateCoupon } = useMutation({
        mutationFn: updateCouponApi
    });

    return { isUpdating , updateCoupon };
}
