import http from "./httpService";

export function createNewCouponApi(data) {
    return http.post("/admin/coupon/add" , data).then(({ data }) => data.data);
};

export function getAllCouponsApi() {
    return http.get("/admin/coupon/list").then(({ data }) => data.data);
}