"use client";

import useUserProfile from "@/hooks/useUserProfile";
import Loading from "@/ui/Loading";
import TextField from "@/ui/TextField";
import includeObj from "@/utils/objectUtils";
import { useEffect, useState } from "react";
import useUpdateUser from "../_components/useUpdateUser";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function MePage() {
    const [formData , setFormData] = useState({});
    const { isLoading , data } = useUserProfile();
    const { user } = data || {};
    const { isUpdating , updateProfile } = useUpdateUser();
    const router = useRouter();


    const includeKey = ["name" , "email" , "phoneNumber" , "biography"];
    // const newUser = {};
    // Object.keys(user).filter((key) => includeKey.includes(key)).forEach((key) => newUser[key] = user[key]);
    
    useEffect(() => {
        if(user) setFormData(includeObj(user , includeKey));
    } , [user]);

    if(isLoading) return <p><Loading /></p>

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const { message } = await updateProfile(formData);
            toast.success(message);
            router.push("/profile");
        }
        catch(error) {
            toast.error(error?.response?.data?.message);
        }
    }

    return (
        <div className="max-w-sm">
            <h1 className="font-base mb-10">اطلاعات کاربر</h1>
            <form className="space-y-8" onSubmit={submitHandler}>
                {Object.keys(includeObj(user , includeKey)).map((key) => {
                    return (
                        <TextField 
                            label={key}
                            name={key}
                            key={key}
                            value={formData[key] || ""}
                            onChange={(e) => setFormData({ ...formData , [e.target.name]:e.target.value} )}
                        />
                    )
                })}
                <div>
                    {isUpdating ? (<Loading />) : (
                        <button className="btn btn--primary w-full"> ویرایش اطلاعات کاربر</button>
                    )}
                </div>
            </form>
        </div>
    )
};
export default MePage;