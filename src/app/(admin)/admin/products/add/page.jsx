"use client";

import useCategories from "@/hooks/useCategories";
import { useAddProduct } from "@/hooks/useProducts";
import ProductForm from "@/ui/ProductForm";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";


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
            <ProductForm   
                onSubmit={handleSubmit}
                productDataOnChange={formHandler}
                productData={formData}
                tags={tags}
                setTags={setTags}
                options={categories}
                setSelectedCategory={setSelectedCategory}
                selectedCategory={selectedCategory}
                isLoading={isCreating}
            />
        </div>
    )
};
export default addProductPage;