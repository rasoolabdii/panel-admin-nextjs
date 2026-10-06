import { checkOTPApi, sendOTPApi } from "@/services/authService";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useSendOTP() {
    const {mutateAsync: sendOTP , isPending: isSending , data: otpResponse} = useMutation({
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

export function useCheckOTP() {
    const { isPending: isChecking , mutateAsync: checkOTP } = useMutation({
        mutationFn: checkOTPApi,
        onSuccess: (data) => {
            toast.success(data.message);
        },
        onError: (error) => {
            toast.error(error?.response?.data?.data);
        }
    });
    return { isChecking , checkOTP };
}