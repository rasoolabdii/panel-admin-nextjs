import { createNewCouponApi, getAllCouponsApi } from "@/services/couponService";
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