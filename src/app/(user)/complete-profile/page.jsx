"use client";

import useCompleteProfile from "@/hooks/useCompleteProfile";
import Loading from "@/ui/Loading";
import TextField from "@/ui/TextField";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

function CompleteProfile() {
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const router = useRouter();
    const { isCompleting , completeProfile } = useCompleteProfile();

    const handlerSubmit = async (e) => {
        e.preventDefault();
        try {
            const {message} = await completeProfile({name , email});
            toast.success(message);
            router.push("/");
        }
        catch(error) {
            toast.error(error?.response?.data?.message);
        }
    }

    return (
        <div className="flex justify-center">
            <div className="w-full sm:max-w-sm md:max-w-md">
                <form className="space-y-8" onSubmit={handlerSubmit}>
                    <TextField 
                        label="نام و نام خانوادگی"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField 
                        label="ایمیل"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div>
                        {isCompleting ? (<Loading />) : (
                            <button className="btn btn--primary w-full" type="submit">تایید</button>
                        )}
                    </div>
                </form>
            </div>
        </div>  
    )
};
export default CompleteProfile;