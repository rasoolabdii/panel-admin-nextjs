import CategorySidebar from "./CategorySidebar";
import queryString from "query-string";
import { getProductsApi } from "@/services/productServcice";
import { getCategoriesApi } from "@/services/categoryService";
import { toLocalDateStringShort } from "@/utils/toLocalDate";
import Link from "next/link";
import AddToCart from "./[slug]/AddToCart";
export const dynamic = "force-dynamic";

async function Products({ searchParams }) {
    const query = queryString.stringify(await searchParams);
    // const { products } = await getProductsApi(query);
    // const { categories } = await getCategoriesApi();
    // console.log(queryString.stringify(searchParams));

    const productsPromise =  getProductsApi(query);
    const categoryPromise= getCategoriesApi();
    const [ {products} , {categories} ] = await Promise.all([ productsPromise , categoryPromise ]);


    return (
        <div>
            <h1 className="text-xl font-base mb-6">صفحه محصولات</h1>
            <div className="grid grid-cols-4 gap-x-4">
                {/* sidebar */}
                <CategorySidebar categories={categories} />
                {/* products */}
                <div className="col-span-3">
                    <div className="grid grid-cols-3 gap-4">
                        {products?.map((product) => {
                            return (
                                <div
                                    className="col-span-1 border rounded-xl bg-gray-50 shadow-md p-4"
                                    key={product._id}
                                >
                                    <h2 className="font-bold text-secondary-600 mb-2">
                                        {product.title}
                                    </h2>
                                    <div className="text-xs font-medium gap-x-1 flex">  
                                        <span>تاریخ ایجاد :</span>
                                        <span>
                                            {toLocalDateStringShort(product.createdAt)}
                                        </span>
                                    </div>
                                    <Link 
                                        className="font-bold btn btn--primary w-1/2 mt-2"
                                        href={`/products/${product.slug}`}
                                    >
                                        مشاهده محصول
                                    </Link>
                                    <AddToCart product={product} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Products;