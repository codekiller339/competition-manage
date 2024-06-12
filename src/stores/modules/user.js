import { defineStore } from 'pinia';
import { loginAPI } from "@/api/user";
import { ref } from 'vue';

export const useUserStore = defineStore("user", () => {
  const token = ref(localStorage.getItem('token') || "");

  async function login(userData) {  
    const res = await loginAPI(userData);
    const { data } = res.data;
    setToken(data.token);
  }

  function setToken(newToken) {
    token.value = newToken;
    localStorage.setItem(newToken);
  }

  function logout() {
    console.log("退出登录");
    token.value = "";

    localStorage.removeItem('token')
  }

  return {
    token,
    login,
    logout,
  };
}, {
  persist: true,
});
