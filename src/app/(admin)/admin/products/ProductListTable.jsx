import { useRemoveProduct } from "@/hooks/useProducts";
import { productListTableTHeads } from "@/utils/tableHeads";
import toPersianNumbersWithComma, { toPersianNumbers } from "@/utils/toPersianNumber";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { HiEye, HiTrash } from "react-icons/hi2";
import { RiEdit2Line } from "react-icons/ri";

function ProductListTable({ products }) {
    const { removeProduct } = useRemoveProduct();
    const queryClient = useQueryClient();

    const removeProductHandler = async (id) => {
        try {
            const { message } = await removeProduct(id);
            toast.success(message);
            queryClient.invalidateQueries({
                queryKey: ["get-products"]
            });
        }
        catch(error) {
            toast.error(error?.response?.data?.message);
        }
    }

    return (
        <div className="shadow-md overflow-auto my-8">
            <table className="border-collapse table_auto w-full min-w-[800px] text-sm">
                <thead className="table__th">
                    <tr>
                        {productListTableTHeads.map((item) => {
                            return (
                                <th key={item.id} className="whitespace-nowrap">
                                    { item.label }
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody className="table__td">
                    {products?.map((product , index) => {
                        return (
                            <tr key={product._id}>
                                <td>{ index + 1}</td>
                                <td className="whitespace-nowrap">
                                    {product.title}
                                </td>
                                <td>{product.category.title}</td>
                                <td>{toPersianNumbersWithComma(product.price)} تومان</td>
                                <td>{toPersianNumbersWithComma(product.discount)} %</td>
                                <td>{toPersianNumbersWithComma(product.offPrice)} تومان</td>
                                <td>{toPersianNumbers(product.countInStock)} عدد</td>
                                <td>
                                    <div className="flex items-center gap-x-1">
                                        <Link href={`/admin/products/${product._id}`}>
                                            <HiEye className="w-5 h-5 text-primary-900" />
                                        </Link>
                                        <button onClick={() => removeProductHandler(product._id)}>
                                            <HiTrash className="w-5 h-5 text-rose-500" />
                                        </button>
                                        <Link href={`/admin/products/edit/${product._id}`}>
                                            <RiEdit2Line className="w-5 h-5 text-primary-900" />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div> 
    )
};
export default ProductListTable;