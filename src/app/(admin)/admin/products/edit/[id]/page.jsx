"use client";

import useCategories from "@/hooks/useCategories";
import { useGetOneProductById, useUpdateProduct } from "@/hooks/useProducts";
import Loading from "@/ui/Loading";
import ProductForm from "@/ui/ProductForm";
import includeObj from "@/utils/objectUtils";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const includesProductKey = [
    "title",
    "description",
    "slug",
    "brand",
    "price",
    "offPrice",
    "discount",
    "countInStock",
    "imageLink"
];

function page() {
    const { id } = useParams();
    const { isLoading , product } = useGetOneProductById(id);
    const { categories } = useCategories();
    const router = useRouter();
    const [tags , setTags] = useState(product?.tags || []);
    const [selectedCategory , setSelectedCategory] = useState(null);
    const { isUpdating , updateProduct } = useUpdateProduct();
    const [formData , setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData , [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const {message} = await updateProduct({productId: product._id , data: {
                ...formData,
                tags,
                category: selectedCategory._id
            } });
            toast.success(message);
            router.push("/admin/products");
        }
        catch(error) {
            toast.error(error?.response?.data?.message);
        }
    };

    useEffect(() => {
        if(product) {
            setFormData(includeObj(product , includesProductKey));
            setTags(product.tags);
            setSelectedCategory(product.category);
        }
    } , [product]);

    if(isLoading) return <Loading />;
    return (
        <div>
            <h1 className="mb-6 font-bold text-xl">ویرایش محصول</h1>
            <ProductForm 
                onSubmit={handleSubmit}
                options={categories}
                setSelectedCategory={setSelectedCategory}
                selectedCategory={selectedCategory}
                tags={tags}
                setTags={setTags}
                isLoading={isUpdating}
                productData={formData}
                productDataOnChange={handleChange}
            />
        </div>
    )
};
export default page;