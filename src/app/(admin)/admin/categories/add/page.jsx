"use client";

import { useAddCategory } from "@/hooks/useCategories";
import CategoryForm from "@/ui/CategoryForm";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";


function page() {
    const [selectedType , setSelectedType] = useState("");
    const [category , setCategory] = useState({
        title: "",
        description: "",
        englishTitle: ""
    });
    const router = useRouter();
    const { isCreating , addCategory } = useAddCategory();

    const handleChange = (e) => {
        setCategory({... category , [e.target.name]: e.target.value});
    }

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const { message } = await addCategory({...category , type: selectedType.value});
            toast.success(message);
            router.push("/admin/categories");
        }
        catch(error) {
            console.log(error)
            toast.error(error?.response?.data?.message);
        }
    }

    return (
        <div>
            <h1 className="mb-6 font-bold text-xl">افزودن محصول</h1>
            <CategoryForm 
                onSubmit={handleSubmitForm}
                handleChange={handleChange}
                category={category}
                selectedType={selectedType}
                setSelectedType={setSelectedType}
                isLoading={isCreating}
            />
        </div>
    )
};
export default page;