import http from "./httpService";

export function addToCartApi(id) {
    return http.post(`/cart/add` , {productId: id}).then(({ data }) => data.data);
}

export function decrementFromCartApi(productId) {
    return http.post("/cart/remove" , {productId}).then(({ data }) => data.data);
}