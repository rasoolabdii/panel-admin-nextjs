import { userListTableHeads } from "@/utils/tableHeads";
import { toLocalDateString } from "@/utils/toLocalDate";
import truncateText from "@/utils/truncateText";
import Link from "next/link";
import { HiCheck, HiCheckCircle, HiCircleStack, HiEye, HiMiniCircleStack } from "react-icons/hi2";

function UsersTable({ users }) {
    return (
        <div className="shadow-sm overflow-y-auto my-8">
            <table className="border-collapse table-auto w-full min-w-[800px] text-sm">
                <thead>
                    <tr className="whitespace-nowrap table__th">
                        {userListTableHeads.map((item) => {
                            return (
                                <th key={item.id}>
                                    {item.label}
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody className="table__td">
                        {users.map((user , index) => {
                            return (
                                <tr key={user._id}>
                                    <td>{index + 1}</td>
                                    <td className="whitespace-nowrap truncate">{user.name}</td>
                                    <td className="whitespace-nowrap truncate">{user.email}</td>
                                    <td> 
                                        <div className="flex items-center gap-x-2 whitespace-nowrap">
                                            <span>{user.isVerifiedPhoneNumber && <HiCheckCircle className="w-5 h-5 text-green-600" />}</span>
                                            <span>{user.phoneNumber}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex flex-col gap-y-2 items-start">
                                            {user.Products.map((product) => {
                                                return (
                                                    <span 
                                                        className="badge badge--secondary"
                                                        key={product._id}
                                                    >
                                                        {product.title}
                                                    </span>
                                                )
                                            })}
                                        </div>
                                    </td>
                                    <td>{toLocalDateString(user.createdAt)}</td>
                                    <td>
                                        <Link href={`/admin/users/${user._id}`}>
                                            <HiEye className="w-5 h-5 text-primary-900" />
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </div>
    )
};
export default UsersTable;