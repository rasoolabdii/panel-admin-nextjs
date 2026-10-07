import http from "./httpService";

export async function sendOTPApi(phoneNumber) {
    return http.post("/user/get-otp" , phoneNumber).then(({ data }) => data.data);
}

export async function checkOTPApi(data) {
    return http.post("/user/check-otp" , data).then(({ data }) => data.data);
}

export async function completeProfileApi(data) {
    return http.post("/user/complete-profile" , data).then(({ data }) => data.data);
}