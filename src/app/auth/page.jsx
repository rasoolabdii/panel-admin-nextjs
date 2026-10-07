"use client";

import { useEffect, useState } from "react";
import SendOTPForm from "./SendOTPForm";
import toast from "react-hot-toast";
import { useCheckOTP, useSendOTP } from "./_components/useOTPHandler";
import { useRouter } from "next/navigation";
import CheckOTPForm from "./CheckOTPForm";

const ResendOTPSend = 90;
function AuthPage() {
    const router = useRouter();
    const [phoneNumber , setPhoneNumber] = useState("09101234567");
    const [step , setStep] = useState(2);
    const { sendOTP , isSending , otpResponse} = useSendOTP();
    const { checkOTP , isChecking } = useCheckOTP();
    const [otp , setOtp] = useState("");
    const [time , setTime] = useState(ResendOTPSend);

    const phoneNumberHandler = (e) => {
        setPhoneNumber(e.target.value);
    }

    const sendOTPHandler = async (e) => {
        e.preventDefault();
        try {
            await sendOTP(phoneNumber);
            setStep(2);
            setTime(ResendOTPSend);
            setOtp("");
        }
        catch(error) {
            toast.error(error?.response?.data?.message);
        }
    }

    const checkOTPHandler = async (e) => {
        e.preventDefault();
        try{
            const { message , user } = await checkOTP({phoneNumber , otp});
            toast.success(message);
            if(user.isActive) {
                router.push("/");
            }
            else {
                router.push("/complete-profile");
            }
        }
        catch(error) {
            toast.error(error?.response?.data?.message);
        }
    }

    useEffect(() => {
        const timer = time > 0 && setInterval(() => setTime((t) => t - 1) , 1000);

        return () => {
            if(timer) {
                clearInterval(timer);
            }
        }
    } , [time])

    const renderSteps = () => {
        switch(step) {
            case 1: return (
                <SendOTPForm 
                    phoneNumber={phoneNumber}
                    onChange={phoneNumberHandler}
                    onSubmit={sendOTPHandler}
                    isLoading={isSending}
                />
            )
            case 2: return (
                <CheckOTPForm 
                    onSubmit={checkOTPHandler}
                    otp={otp}
                    setOtp={setOtp}
                    onBack={() => setStep((s) => s - 1)}
                    time={time}
                    onResendOTP= {sendOTPHandler}
                    otpResponse={otpResponse}
                    isLoading={isChecking}
                />
            )
            default: return null;
        }
    }

    return (
        <div className="flex justify-center">
            <div className="w-full sm:max-w-sm md:max-w-md">
                { renderSteps() }
            </div>
        </div>
    )
};
export default AuthPage;