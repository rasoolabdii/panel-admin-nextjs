import http from "./httpService";

export function createNewCouponApi(data) {
    return http.post("/admin/coupon/add" , data).then(({ data }) => data.data);
};

export function getAllCouponsApi() {
    return http.get("/admin/coupon/list").then(({ data }) => data.data);
}

export function getOneCouponApi(id) {
    return http.get(`/admin/coupon/${id}`).then(({ data }) => data.data);
}

export function updateCouponApi({ id , data }) {
    return http.patch(`/admin/coupon/update/${id}` , data).then(({ data }) => data.data);
}

export function removeCouponApi(id) {
    return http.delete(`/admin/coupon/remove/${id}`).then(({ data }) => data.data);
};