"use client";

import useGetAllUsers from "@/hooks/useGetAllUsers";
import UsersTable from "./UsersTable";
import Loading from "@/ui/Loading";

function UsersPage() {
    const { isLoading , users } = useGetAllUsers();
    if(isLoading) return <Loading />;

     return (
        <div>
            <h1>اطلاعات کاربران</h1>
            <UsersTable users={users} />
        </div>
    )
};
export default UsersPage;