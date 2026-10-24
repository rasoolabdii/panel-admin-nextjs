"use client";

import { useGetCategoryById, useUpdateCategory } from "@/hooks/useCategories";
import CategoryForm, { categoryTypes } from "@/ui/CategoryForm";
import Loading from "@/ui/Loading";
import includeObj from "@/utils/objectUtils";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
export const dynamic = "force-dynamic";

const includeCategoryKey = ["title" , "englishTitle" , "description"];
function page() {
    const { id } = useParams();
    const { isLoading , category } = useGetCategoryById(id);
    const [selectedType , setSelectedType] = useState("");
    const [formData , setFormData] = useState({});
    const { isUpdating , updateCategory } = useUpdateCategory();
    const router = useRouter();

    const handleChange = (e) => {
        setFormData({ ...formData , [e.target.name]: e.target.value});
        setSelectedType(category.type)
    }

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const { message } = await updateCategory({id: category._id , data: {
                ...formData,
                type: selectedType.value
                }
            });
            toast.success(message);
            router.push("/admin/categories");
        }
        catch(error) {
            console.log(error);
            toast.error(error?.response?.data?.message);
        }
    }

    useEffect(() => {
        if(category) {
            setFormData(includeObj(category , includeCategoryKey));
            setSelectedType(categoryTypes.find((c) => c.value === category.type));
        }
    } , [category])

    if(isLoading) return <Loading />;
    return (
        <div>
            <h1>ویرایش دسته بندی</h1>
            <CategoryForm 
                category={formData}
                handleChange={handleChange}
                onSubmit={handleSubmitForm}
                selectedType={categoryTypes.find((c) => c.value === category.type)}  
                setSelectedType={setSelectedType}
                isLoading={isUpdating}
            />
        </div>
    )
};
export default page;