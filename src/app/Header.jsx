"use client";

import useUserProfile from "@/hooks/useUserProfile";
import Link from "next/link";
import { HiShoppingCart } from "react-icons/hi2";

function Header() {
    const { data , isLoading } = useUserProfile();
    const {user , cart} = data || {};


    return (
        <header className={`shadow-md mb-10 sticky top-0 transition-all duration-200 ${isLoading ? "blur-sm opacity-70" : "blur-0 opacity-100"}`}>
            <nav>
                <ul className="flex items-center justify-between py-2 container xl:max-w-screen-xl">
                    <li>
                        <Link className="block py-2" href="/">
                            خانه
                        </Link>
                    </li>
                    <li>
                        <Link className="block py-2" href="/products">
                            محصولات
                        </Link>
                    </li>
                    <li>
                        <Link className="block py-2" href="/profile">
                            پنل کاربر
                        </Link>
                    </li>
                    <li>
                        <Link className="block py-2" href="/admin">
                            پنل ادمین
                        </Link>
                    </li>
                    <li>
                        <Link className="block py-2" href="/contact-us">
                            تماس با ما
                        </Link>
                    </li>
                    
                    {data ? 
                        (<span className="bg-orange-500 text-white hover:bg-orange-400 rounded-3xl text-sm p-3">
                            <Link href="/profile">
                                {user.name}
                            </Link>
                        </span>) : (
                        <li>
                            <Link className="block py-2 hover:bg-gray-200" href="/auth">
                             ورود
                            </Link>
                        </li>
                    )}  
                    <li>
                        <Link className="flex items-center gap-x-1 py-2" href="/cart">
                            <span className="rounded-full bg-orange-500 text-white py-1 px-1.5 w-7 h-7">{cart ? cart.payDetail.productIds.length : 0}</span>
                            <HiShoppingCart className="w-6 h-6"  />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
};
export default Header;