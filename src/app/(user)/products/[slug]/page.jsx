import { getProductBySlugApi, getProductsApi } from "@/services/productServcice";
import AddToCart from "./AddToCart";
import toPersianNumbersWithComma from "@/utils/toPersianNumber";
export const dynamicParams = false;
export const dynamic = "force-static"; // for use fetch - SSG

async function page({ params }) {
    const slug = params.slug;
    const { product } = await getProductBySlugApi(slug)

    return (
        <div className="border-2 p-4 w-1/2 block items-center justify-start">
            <p className="font-bold mb-4">مشخصات محصول</p>
            <h1 className="font-bold text-2xl mb-6">{product.title}</h1>
            <p className="mb-6">{product.description}</p>
            <p className="mb-6">
                <span>قیمت محصول : </span>
                <span className={`${product.discount ? "line-through" : "font-bold"}`}>
                    {toPersianNumbersWithComma(product.price)} تومان
                </span>
            </p>
            {!!product.discount && (
                <div className="flex items-center gap-x-2 mb-6">
                    <p className="text-xl font-bold">
                        قیمت محصول با تخفیف:  {toPersianNumbersWithComma(product.offPrice)} تومان
                    </p>
                    <div className="bg-rose-500 px-2 py-0.5 rounded-xl text-white text-sm w-28 items-center justify-center flex mt-2">
                        {toPersianNumbersWithComma(product.discount)} % تخفیف
                    </div>
                </div>
            )}
            <AddToCart product={product} />
        </div>
    )
};
export default page;

export async function generateStaticParams() {
    const { products } = await getProductsApi();

    return products.map((product) => ({
        slug: product.slug
    }));
}