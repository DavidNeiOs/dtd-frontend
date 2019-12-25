import axios from 'axios'

export const apiClient = axios.create({
  baseURL: "https://localhost:4000",
  responseType: "json",
  headers: {
    'Content-Type': 'application/json'
  }
})