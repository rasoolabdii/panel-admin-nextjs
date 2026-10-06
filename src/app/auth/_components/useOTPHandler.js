import { sendOTPApi } from "@/services/authService";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useSendOTP() {
    const {mutateAsync: sendOTP , isPending: isSending} = useMutation({
        mutationFn: sendOTPApi,
        onSuccess: (data) => {
            toast.success(data.message);
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message);
        }
    });
    return { sendOTP , isSending };
}