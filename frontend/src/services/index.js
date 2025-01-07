import axiosInstance from "@/api/axiosInstance"
//   import axios from "axios";
// handle regiter
export async function registerService(formData) {
    //   const BASE_URL="http://localhost:3000"
    const data = await axiosInstance.post('/auth/register', {
      ...formData,role:'user'
    })
      
      return data;
}
  

  export async function loginService(formData) {
    //   const BASE_URL="http://localhost:3000"
    const {data} = await axiosInstance.post('/auth/login', formData)
      return data;
}
  
    export async function checkAuthService() {
    //   const BASE_URL="http://localhost:3000"
    const {data} = await axiosInstance.post('/auth/check-auth')
      
      return data;
  }