import Select from "react-select";
import TextField from "./TextField";
import Loading from "./Loading";

export const categoryTypes = [
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

function CategoryForm({ onSubmit , handleChange , category , selectedType , setSelectedType , isLoading}) {
    return (
        <div>
            <div className="max-w-sm mb-10">
                <form className="space-y-4" onSubmit={onSubmit}>
                    <TextField 
                        name="title"
                        label="عنوان"
                        value={category.title || ""}
                        onChange={handleChange}
                    />
                    <TextField 
                        name="englishTitle"
                        label="عنوان انگلیسی"
                        value={category.englishTitle || ""}
                        onChange={handleChange}
                    />
                    <TextField 
                        name="description"
                        label="توضیحات"
                        value={category.description || ""}
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
                    <div className="mt-8 block">
                        {isLoading ? (<Loading />) : (
                            <button className="btn btn--orange w-full">تایید</button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
};
export default CategoryForm;