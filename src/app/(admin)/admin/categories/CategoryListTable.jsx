import { useRemoveCategory } from "@/hooks/useCategories";
import { categoryTHead } from "@/utils/tableHeads";
import truncateText from "@/utils/truncateText";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import toast from "react-hot-toast";
import { HiEye, HiTrash } from "react-icons/hi2";
import { RiEdit2Line } from "react-icons/ri";

function CategoryListTable({ categories }) {
    const { removeCategory } = useRemoveCategory();
    const queryClient = useQueryClient();

    const removeCategoryHandler = async (id) => {
        try {
            const { message } = await removeCategory(id);
            toast.success(message);
            queryClient.invalidateQueries({
                queryKey: ["get-categories"]
            });
        }
        catch(error) {
            toast.error(error?.response?.data?.message);
        }
    }

    return (
        <div>
            <table>
                <thead className="table__th">
                    <tr>
                        {categoryTHead.map((item) => {
                            return (
                                <th key={item.id} className="whitespace-nowrap"> 
                                    {item.label}
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                        {categories.map((category , index) => {
                            return (
                                <tr key={category._id}>
                                    <td>{index + 1}</td>
                                    <td>{truncateText(category.title , 30)}</td>
                                    <td>{truncateText(category.description , 30)}</td>
                                    <td>{truncateText(category.englishTitle , 30)}</td>
                                    <td>
                                        <span className="badge badge--primary">{category.type}</span>
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-x-2">
                                            <Link href={`/admin/categories/${category._id}`}>
                                                <HiEye className="text-primary-900 w-6 h-6" />
                                            </Link>
                                            <button onClick={() => removeCategoryHandler(category._id)}>
                                                <HiTrash className="text-rose-500 w-6 h-6" />
                                            </button>
                                            <Link href={`/admin/categories/edit/${category._id}`}>
                                                <RiEdit2Line className="w-6 h-6 text-primary-900" />
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
export default CategoryListTable;