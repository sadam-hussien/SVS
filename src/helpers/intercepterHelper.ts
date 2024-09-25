import {baseURL} from "@/constants";
import AuthHelper from "@/modules/auth/helpers/AuthHelper";

import {toast} from "react-toastify";

export default class InterceptorHelper {
  // intercept request
  static async interceptRequest(options: RequestInit = {}): Promise<RequestInit> {
    // get token
    const token = AuthHelper.getUserData()?.token || "";

    options.headers = {
      Authorization: `Bearer ${token}`,
      "Accept-Language": "en",
      "Content-Language": "en",
      "Content-Type": "application/json",
      ...options.headers,
    };

    // delete content type if the body is an object (eg. FormData)
    if (typeof options.body === "object") {
      if (options.headers?.["Content-Type" as keyof HeadersInit]) {
        delete options.headers["Content-Type" as keyof HeadersInit];
      }
    }

    return options;
  }

  // intercept response
  static async interceptResponse<T>(response: Response, method: string | undefined): Promise<T> {
    const responseJson = await response.json();

    const message = responseJson?.message || responseJson?.error;

    // handle response error
    if (!response.ok || responseJson.success == false) {
      toast.error(message);

      return Promise.reject(responseJson);
    }

    // handle response success
    console.log(method);
    // if (method && method.toLowerCase() !== "get") {
    toast.success(message);
    // }

    return responseJson;
  }

  // intercept function
  static async intercept<T>(
    url: string,
    options: RequestInit = {},
    useBaseURL: boolean = true
  ): Promise<T> {
    // handle request
    const requestOptions = await InterceptorHelper.interceptRequest(options);

    const path = useBaseURL ? `${baseURL + "" + url}` : url;

    const response = await fetch(path, requestOptions);

    // handle response
    const responseOption = await InterceptorHelper.interceptResponse<T>(response, options.method);

    return responseOption;
  }
}
