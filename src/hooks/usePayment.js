import { createPaymentApi, getAllPaymentsApi } from "@/services/paymentService";
import { useMutation, useQuery } from "@tanstack/react-query";

function usePayment() {
    const { isPending , mutateAsync: createPayment } = useMutation({
        mutationFn: createPaymentApi
    });

    return { isPending , createPayment }
};
export default usePayment;

export function useGetAllPayments () {
    const { isLoading , data } = useQuery({
        queryKey: ["get-payments"],
        queryFn: getAllPaymentsApi,
        retry: false,
        refetchOnReconnect: true,
        refetchOnWindowFocus: true
    });

    const { payments } = data || {};
    return { isLoading , payments }
}