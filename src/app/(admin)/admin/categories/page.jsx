"use client";

import useCategories from "@/hooks/useCategories";
import Loading from "@/ui/Loading";
import Link from "next/link";
import { HiPlusCircle } from "react-icons/hi2";
import CategoryListTable from "./CategoryListTable";

function page() {
    const { isLoading , categories } = useCategories();

    if(isLoading) return <Loading />
    return (
        <div>
            <div className="mb-5 flex items-center justify-between">
                <h1 className="text-xl font-bold mb-5">دسته بندی</h1>
                <Link href="/admin/categories/add" className="flex items-center justify-center gap-x-2 btn btn--orange w-1/6">
                    <HiPlusCircle className="w-6 h-6" />
                    <span className="text-lg">افزودن دسته بندی جدید</span>
                </Link>
            </div>
            <CategoryListTable categories={categories} />
        </div>
    )
};
export default page;