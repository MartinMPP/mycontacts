/* eslint-disable import/no-anonymous-default-export */
import delay from "../../utils/delay";

class HttpClient {
    constructor(baseURL) {
        this.baseURL = baseURL
    }
    async get(path) {
        await delay(0)
        const response = await fetch(`${this.baseURL}${path}`);

        let body = null
        const contentType = response.headers.get('content-type');
        if (contentType.includes('application/json')) {
            return response.json();
        }

        body = await response.json();
        if (response.ok) {
            return body
        }


        throw new Error(
            body?.error || `${response.status} - ${response.statusText}`
        );

    }
}

export default HttpClient;

