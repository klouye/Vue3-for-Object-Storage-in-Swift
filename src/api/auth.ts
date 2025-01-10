import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = "/api/v3";

export const login = async (username: string, password: string) => {
    const data = {
        auth: {
            identity: {
                methods: ["password"],
                password: {
                    user: {
                        name: username,
                        domain: { name: "Default" },
                        password: password,
                    },
                },
            },
            scope: {
                project: {
                    name: "admin",
                    domain: { name: "Default" },
                }
            }
        },
    };
    try {
        const response = await axios.post(`${BASE_URL}/auth/tokens`, data, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        const token = response.headers["x-subject-token"];
        const swift = response.data.token.catalog.find((endpoint: any) => endpoint.name === "swift");
        const swiftpublic = swift.endpoints.find((spc: any) => spc.interface === "public").url;
        const spc = swiftpublic.replace("http://controller:8080/v1/", "");
        Cookies.set("token", token, {path: "/"});
        Cookies.set("spc", spc, {path: "/"});
        return { token, ...response.data};
    } catch (error: any) {
        throw new Error(error.response?.data?.error?.message || "Login failed!");
    }
};
