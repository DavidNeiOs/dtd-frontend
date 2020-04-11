import { apiClient } from "../services/apiClient";

const setAuthToken = (token:string | boolean) => {
  if (token) {
    // Apply authorization token to every request if logged in
    apiClient.defaults.headers.common["Authorization"] = token;
  } else {
    // Delete auth header
    delete apiClient.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;