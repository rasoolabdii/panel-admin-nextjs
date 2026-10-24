"use client";

import { useAddCategory } from "@/hooks/useCategories";
import TextField from "@/ui/TextField";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import Select from "react-select";

const categoryTypes = [
    {
        id: 1,
        label: "محصول",
        value: "product"
    },
    {
        id: 2,
        label: "پست",
        value: "post"
    },
    {
        id: 3,
        label: "تیکت",
        value: "ticket"
    },
    {
        id: 4,
        label: "نظرات",
        value: "comment"
    }
]

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
            <div className="max-w-sm mb-10">
                <form className="space-y-4" onSubmit={handleSubmitForm}>
                    <TextField 
                        name="title"
                        label="عنوان"
                        value={category.title}
                        onChange={handleChange}
                    />
                    <TextField 
                        name="englishTitle"
                        label="عنوان انگلیسی"
                        value={category.englishTitle}
                        onChange={handleChange}
                    />
                    <TextField 
                        name="description"
                        label="توضیحات"
                        value={category.description}
                        onChange={handleChange}
                    />
                    <div>
                        <label className="mb-2 block" htmlFor="type">نوع</label>
                        <Select
                            instanceId="type"
                            onChange={setSelectedType}
                            options={categoryTypes}
                            defaultValue={selectedType}
                        />
                    </div>
                    <div>
                        <button className="btn btn--orange w-full">تایید</button>
                    </div>
                </form>
            </div>
        </div>
    )
};
export default page;