"use client";

import { useGetOneProductById } from "@/hooks/useProducts";
import Loading from "@/ui/Loading";
import { productDetailsTHead } from "@/utils/tableHeads";
import toPersianNumbersWithComma, { toPersianNumbers } from "@/utils/toPersianNumber";
import truncateText from "@/utils/truncateText";
import { useParams } from "next/navigation";

function page() {
    const { id } = useParams();
    const { product , isLoading} = useGetOneProductById(id);

    if(isLoading) return <Loading />;
    return (
        <div>
            <table>
                <thead className="table__th">
                    <tr>
                        {productDetailsTHead.map((item) => {
                            return (
                                <th key={item.id} className="whitespace-nowrap">
                                    {item.label}
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody className="table__td font-bold">
                    <tr>
                        <td>{}</td>
                        <td>{truncateText(product.title)}</td>
                        <td>{truncateText(product.description)}</td>
                        <td>{product.category.title}</td>
                        <td>
                            <div className="badge badge--secondary">
                                {product.slug}
                            </div>
                        </td>
                        <td>{toPersianNumbersWithComma(product.price)} تومان</td>
                        <td>{toPersianNumbers(product.discount)} %</td>
                        <td>{toPersianNumbersWithComma(product.offPrice)} تومان</td>
                        <td>
                            <div className="badge badge--secondary">
                                {product.brand}
                            </div>
                        </td>
                        <td>
                            <div className="flex flex-col gap-y-1 justify-center items-start">
                                {product.tags.map((item) => {
                                    return (
                                        <div className="badge badge--secondary">
                                            {item}
                                        </div>
                                    )
                                })}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};
export default page;