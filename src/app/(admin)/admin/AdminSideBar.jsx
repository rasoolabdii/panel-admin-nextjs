"use client";

import { logoutApi } from "@/services/authService";
import Link from "next/link";

function AdminSideBar() {
    const logoutHandler = async () => {
        await logoutApi();
        document.location.href = "/";
    }

    return (
        <div>
            <ul className="flex flex-col space-y-8">
                <li>
                    <Link href="/">صفحه اصلی</Link>
                </li>
                <li>
                    <Link href="/admin">داشبورد</Link>
                </li>
                <li>
                    <Link href="/admin/users">اطلاعات کاربران</Link>
                </li>
                <li>
                    <Link href="/admin/products">محصولات</Link>
                </li>
                <li>
                    <Link href="/admin/categories">دسته بندی</Link>
                </li>
                <li>
                    <Link href="/admin/coupons">کد تخفیف</Link>
                </li>
                <li>
                    <Link href="/admin/payments">سفارشات</Link>
                </li>
                <li>
                    <button type="submit" onClick={logoutHandler}>خروج</button>
                </li>
            </ul>
        </div>
    )
};
export default AdminSideBar;