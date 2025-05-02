import axios from "axios";
import { AuthResponse, LoginCredentials, User } from "../types/auth";

// Back-End URL
const API_URL = "https://dummyjson.com/auth";

export const authService = {
  // fungsi untuk login
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    // proses hit ke URL
    const response = await axios.post<AuthResponse>(
      `${API_URL}/login`,
      credentials
    );

    // masukan token ke dalam localStorage
    localStorage.setItem("accessToken", response.data.accessToken);
    localStorage.setItem("refreshToken", response.data.refreshToken);

    // return datanya
    return response.data;
  },

  // buat get data kita sendiri
  async getCurrentUser(): Promise<User> {
    // mengambil data di localStorage, variabel accessToken
    const token = localStorage.getItem("accessToken");

    // ngehit API get buat ngambil data diri kita sendiri
    const response = await axios.get<User>(`${API_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data
  },

  logout() {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
  }

};
