import http from "./httpService";

export async function sendOTPApi(phoneNumber) {
    return http.post("/user/get-otp" , phoneNumber).then(({ data }) => data.data);
}