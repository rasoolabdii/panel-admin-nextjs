import http from "./httpService";

export async function getProductsApi(qs , cookies) {
    return http.get(`/product/list?${qs}` , { headers: {Cookie: cookies} }).then(({ data }) => data.data);
};

// export async function getProductsApi(qs) {
//     return fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/list?${qs}` , {cache: "no-store"}).
//     then((res) => res.json()).then(({ data }) => data);
// }

export async function getProductBySlugApi(slug) {
    return http.get(`/product/slug/${slug}`).then(({ data }) => data.data);
}

export function likeProductApi(id) {
    return http.post(`/product/like/${id}`).then(({ data}) => data.data);
}

export function addProductApi(data) {
    return http.post(`/admin/product/add` , data).then(({ data }) => data.data);
}

export function getOneProductByIdApi(id) {
    return http.get(`/product/${id}`).then(({ data }) => data.data);
}

export function updateProductApi({ productId , data }) {
    return http.patch(`/admin/product/update/${productId}` , data).then(({ data }) => data.data);
}