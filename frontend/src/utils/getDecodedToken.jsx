import { jwtDecode } from "jwt-decode";

export const getDecodedToken = () => {
    const token = localStorage.getItem("accessToken");

    const decodedToken = jwtDecode(token);
    return decodedToken;
};
