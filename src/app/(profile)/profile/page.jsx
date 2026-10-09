"use client";

import useUserProfile from "@/hooks/useUserProfile";
import Loading from "@/ui/Loading";
import { toLocalDateString } from "@/utils/toLocalDate";

function Profile() {
    const { isLoading , data } = useUserProfile();
    const { user } = data || {};

    if(isLoading) return <p><Loading /></p>

    return (
        <div>
            <h1>خوش آمدی {user.name}</h1>
            <p>
                <span>تاریخ پیوستن :</span>
                <span>{toLocalDateString(user.createdAt)}</span>
            </p>
            
        </div>
    )
};
export default Profile;