import { categoryTHead } from "@/utils/tableHeads";
import truncateText from "@/utils/truncateText";
import Link from "next/link";
import { HiEye, HiTrash } from "react-icons/hi2";
import { RiEdit2Line } from "react-icons/ri";

function CategoryListTable({ categories }) {
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
                                            <button>
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