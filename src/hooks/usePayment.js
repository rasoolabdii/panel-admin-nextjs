import { createPaymentApi } from "@/services/paymentService";
import { useMutation } from "@tanstack/react-query";

function usePayment() {
    const { isPending , mutateAsync: createPayment } = useMutation({
        mutationFn: createPaymentApi
    });

    return { isPending , createPayment }
};
export default usePayment;