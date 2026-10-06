"use client";

import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import toast from "react-hot-toast";
import { useSendOTP } from "./_components/useOTPHandler";
import { useRouter } from "next/navigation";

function AuthPage() {
    const router = useRouter();
    const [phoneNumber , setPhoneNumber] = useState("09101234567");
    const { sendOTP , isSending } = useSendOTP();

    const phoneNumberHandler = (e) => {
        setPhoneNumber(e.target.value)
    }

    const sendOTPHandler = async (e) => {
        e.preventDefault();
        try {
            await sendOTP(phoneNumber);
        }
        catch(error) {
            toast.error(error?.response?.data?.message);
        }
    }

    return (
        <div className="flex justify-center">
            <div className="w-full sm:max-w-sm">
                <SendOTPForm 
                    phoneNumber={phoneNumber}
                    onChange={phoneNumberHandler}
                    onSubmit={sendOTPHandler}
                    isLoading={isSending}
                />
            </div>
        </div>
    )
};
export default AuthPage;