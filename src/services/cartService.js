import http from "./httpService";

export async function addToCartApi(id) {
    return http.post(`/cart/add` , {productId: id}).then(({ data }) => data.data);
}