"use client";

import { useState } from "react";
import SendOTPForm from "./SendOTPForm";

function AuthPage() {
    const [phoneNumber , setPhoneNumber] = useState("09101234567");

    const phoneNumberHandler = (e) => {
        setPhoneNumber(e.target.value)
    }

    return (
        <div className="flex justify-center">
            <div className="w-full sm:max-w-sm">
                <SendOTPForm 
                    phoneNumber={phoneNumber}
                    onChange={phoneNumberHandler}
                />
            </div>
        </div>
    )
};
export default AuthPage;