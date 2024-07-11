import Cookies from "js-cookie";
import { ApiConstants } from "src/const";

const request = async (method, url, options) => {
  const body = options?.body ? JSON.stringify(options.body) : undefined;
  const baseHeaders = {
    "Content-Type": "application/json",
  };


  const accessToken = Cookies.get(ApiConstants.ACCESS_TOKEN);

  const baseUrl = "http://localhost:8080";

  const mainUrl = url.startsWith("/")
    ? `${baseUrl}${url}`
    : `${baseUrl}/${url}`;

  const response = await fetch(mainUrl, {
    ...options,
    headers: {
      ...baseHeaders,
      ...options?.headers,
      authorization: Cookies && accessToken && `Bearer ${accessToken}`
    },
    body,
    method,
  });

  const payload = await response.json();

  const data = {
    status: response.status,
    payload,
  };

  if (!response.ok) {
    throw new Error(data);
  }

  return data;
};

const apiRequest = {
  get(url, options) {
    const [params, ...otherOptions] = options;
    if (params) {
      Array(params).forEach((param) => {
        url += `?${param}=${options.params[param]}`;
      });
    }
    return request("GET", url, otherOptions);
  },
  post(url, options) {
    return request("POST", url, options);
  },
  put(url, options) {
    return request("PUT", url, options);
  },
  delete(url, options) {
    return request("DELETE", url, options);
  },
};

export default apiRequest;
