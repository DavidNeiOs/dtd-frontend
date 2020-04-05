import axios from 'axios'

export const apiClient = axios.create({
  baseURL: process.env.REACT_APP_FETCH_URL,
  responseType: "json",
  headers: {
    'Content-Type': 'application/json'
  }
})