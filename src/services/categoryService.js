import http from "./httpService";

export async function getCategoriesApi() {
    return http.get("/category/list").then(({ data }) => data.data);
}

export function addNewCategoryApi(data) {
    return http.post("/admin/category/add" , data).then(({ data }) => data.data);
};
