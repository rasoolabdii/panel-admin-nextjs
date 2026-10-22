"use client";

import Link from "next/link";
import ProductListTable from "./ProductListTable";
import useProducts from "@/hooks/useProducts";

function page() {
    const {isLoading ,  products } = useProducts();

    return (
        <div>
            <div className="mb-4 flex items-center justify-between">
                <h1 className="text-xl font-bold">محصولات</h1>
                <Link href="/admin/products/add" className="text-base text-white">
                    <span className="btn btn--orange">افزودن محصول جدید</span>
                </Link>
            </div>
            <ProductListTable products={products} />
        </div>
    )
};
export default page;