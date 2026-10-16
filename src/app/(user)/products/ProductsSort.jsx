"use client";

import RadioInput from "@/ui/RadioInput";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const sortOptions = [
    {
        id: 1,
        value: "latest",
        label: "جدیدترین"
    },
    {
        id: 2,
        value: "earliest",
        label: "قدیمی ترین"
    },
    {
        id: 3,
        value: "popular",
        label: "محبوب ترین"
    }
]

function ProductsSort() {
    const [sort , setSort] = useState("");
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const createQueryString = useCallback(
        (name , value) => {
            const params = new URLSearchParams(searchParams);
            params.set(name , value);
            return params.toString();
        },
        [searchParams]
    ) 

    const sortHandler = (e) => {
        const valueSorted = e.target.value;
        setSort(valueSorted);
        router.push(pathname + "?" + createQueryString("sort" , valueSorted));
    }

    useEffect(() => {
        setSort(searchParams.get("sort") || "");    
    } , [searchParams])

    return (
        <div>
            <p className="font-bold mb-4">مرتب سازی</p>
            <ul>
                {sortOptions.map((item) => {
                    return (
                        <RadioInput 
                            key={item.id}
                            label={item.label}
                            id={item.id}
                            name="product-sort"
                            checked={sort === item.value}
                            value={item.value} 
                            onChange={sortHandler}      
                        />
                    )
                })}
            </ul>
        </div>
    )
};
export default ProductsSort;