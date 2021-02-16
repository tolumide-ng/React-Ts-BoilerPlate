import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { ForAxiosDefs } from "../../commonTypes";

interface axiosProps {
    path: string;
    payload: {};
    contentType?: string;
    params?: {};
    method: ForAxiosDefs;
}

interface Config extends AxiosRequestConfig {
    contentType?: string;
    data: {};
    json: boolean;
}

interface ReturnAxiosDef extends AxiosResponse {
    data: any;
}

function LocalErrorHandler(message: string | {}) {
    return message;
}

interface headerType {
    Authorization?: string;
    "Content-Type": string;
}

export const axiosCall = async (props: axiosProps) => {
    const headers: headerType = {
        "Content-Type": props.contentType || "application/json",
    };

    const url = `${process.env.BASE_URL}${props.path}`;

    const axiosData: Config = {
        method: props.method,
        data: props.payload,
        params: props.params ?? {},
        json: true,
        url,
        headers,
    };

    try {
        const response = await axios(axiosData);
        return response;
    } catch (error) {
        if (error.response) {
            const errResponse = error.response.data;

            throw LocalErrorHandler(errResponse);
        }
    }
};
