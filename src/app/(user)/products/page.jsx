import CategorySidebar from "./[slug]/CategorySidebar";
import queryString from "query-string";
import { getProductsApi } from "@/services/productServcice";
import { getCategoriesApi } from "@/services/categoryService";
export const dynamic = "force-dynamic";

async function Products({ searchParams }) {
    const query = queryString.stringify(await searchParams);
    const { products } = await getProductsApi(query);
    const { categories } = await getCategoriesApi();
    // console.log(queryString.stringify(searchParams));
    
    return (
        <div>
            <h1 className="text-xl font-base mb-6">صفحه محصولات</h1>
            <div className="grid grid-cols-4 gap-x-4">
                {/* sidebar */}
                <CategorySidebar categories={categories} />
                {/* products */}
                <div className="col-span-3 grid grid-cols-3 gap-4">
                    {products?.map((product) => {
                        return (
                            <div
                                className="col-span-1 border rounded-xl bg-gray-50 shadow-md p-4"
                                key={product._id}
                            >
                                <h2 className="font-bold text-secondary-600">
                                    {product.title}
                                </h2>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};
export default Products;