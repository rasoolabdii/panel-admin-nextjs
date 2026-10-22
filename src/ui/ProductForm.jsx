"use client";

import Select from "react-select";
import { TagsInput } from "react-tag-input-component";
import TextField from "./TextField";
import Loading from "./Loading";

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

function ProductForm({ onSubmit , productDataOnChange , productData , tags , setTags, setSelectedCategory , selectedCategory , options , isLoading }) {
    return (
        <div className="max-w-sm">
            <form className="space-y-4" onSubmit={onSubmit}>
                {productsFormData.map((item) => {
                    return (
                        <TextField
                            label={item.label}
                            name={item.name}
                            key={item.id}
                            value={productData[item.name] ?? ""}
                            onChange={productDataOnChange}
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
                        defaultValue={selectedCategory}
                        options={options}
                        onChange={(option) => setSelectedCategory(option)}
                        getOptionLabel={(option) => option.title}
                        getOptionValue={(option) => option._id}
                        placeholder="انتخاب دسته‌بندی"
                    />
                </div>
                <div>
                    {isLoading ? (<Loading />) : (
                        <button className="btn btn--orange w-full">تایید</button>
                    )}
                </div>
            </form>
        </div>
    )
};
export default ProductForm;