"use client";

import useCategories from "@/hooks/useCategories";
import { useAddProduct } from "@/hooks/useProducts";
import Loading from "@/ui/Loading";
import TextField from "@/ui/TextField";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import Select from "react-select";
import { TagsInput } from "react-tag-input-component";

const productsFormData = [
    {
        id: 1,
        label: "عنوان",
        name: "title"
    },
    {
        id: 2,
        label: "توضیحات",
        name: "description"
    },
    {
        id: 3,
        label: "اسلاگ",
        name: "slug"
    },
    {
        id: 4,
        label: "برند",
        name: "brand"
    },
    {
        id: 5,
        label: "قیمت",
        name: "price"
    },
    {
        id: 6,
        label: "تخفیف",
        name: "discount"
    },
    {
        id: 7,
        label: "قیمت با تخفیف",
        name: "offPrice"
    },  
    {
        id: 8,
        label: "موجودی",
        name: "countInStock"
    },
    {
        id: 9,
        label: "لینک عکس محصول",
        name: "imageLink"
    },
]

function addProductPage() {
    const { isCreating , addProduct } = useAddProduct();
    const [tags , setTags] = useState([]);
    const [selectedCategory , setSelectedCategory] = useState(null);
    const router = useRouter();
    const [formData , setFormData] = useState({
        title: "",
        description: "",
        slug: "",
        brand: "",
        price: "",
        offPrice: "",
        discount: "",
        countInStock: "",
        imageLink: ""
    });
    const { categories } = useCategories();
    console.log(categories)
 
    const formHandler = (e) => {
        e.preventDefault();
        setFormData({ ...formData , [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { message} = await addProduct({ ...formData , tags , category:selectedCategory._id});
            toast.success(message);
            router.push("/admin/products");
        }
        catch(error) {
            toast.error(error?.response?.data?.message);
        }
    }

    return (
        <div className="w-full max-w-sm">
            <h1 className="mb-4 font-bold text-xl">اضافه کردن محصول</h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
                {productsFormData.map((item) => {
                    return (
                        <TextField 
                            label={item.label}
                            name={item.name}
                            key={item.id}
                            value={formData[item.name]}
                            onChange={formHandler}
                        />
                    )
                })}
                <div>
                    <label htmlFor="tags" className="mb-2 block">تگ محصولات</label>
                    <TagsInput 
                        id="tags"
                        value={tags}
                        onChange={setTags}
                        name="tags"
                    />
                </div>
                <div>
                    <label htmlFor="category" className="mb-2 block">دسته بندی</label>
                    <Select
                        instanceId="category"
                        options={categories}
                        onChange={(option) => setSelectedCategory(option)}
                        getOptionLabel={(option) => option.title}
                        getOptionValue={(option) => option._id}
                        placeholder="انتخاب دسته‌بندی"
                    />
                </div>
                <div>
                    {isCreating ? (<Loading />) : (
                        <button className="btn btn--orange w-full">تایید</button>
                    )}
                </div>
            </form>
        </div>
    )
};
export default addProductPage;