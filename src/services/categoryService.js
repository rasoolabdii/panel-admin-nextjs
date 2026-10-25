import http from "./httpService";

export async function getCategoriesApi() {
    return http.get("/category/list").then(({ data }) => data.data);
}

export function addNewCategoryApi(data) {
    return http.post("/admin/category/add" , data).then(({ data }) => data.data);
};

export function getCategoryByIdApi(id) {
    return http.get(`/category/${id}`).then(({ data }) => data.data);
}

export function updateCategoryApi({ id , data }) {
    return http.patch(`/admin/category/update/${id}` , data).then(({ data }) => data.data);
};

export function removeCategoryApi(id) {
    return http.delete(`/admin/category/remove/${id}`).then(({ data }) => data.data);
}