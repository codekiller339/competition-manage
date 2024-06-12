import { defineStore } from 'pinia';
import { loginAPI } from "@/api/user";
import { ref } from 'vue';
import router from "@/router"

export const useUserStore = defineStore("user", () => {
  const token = ref()

  function setToken(newToken) {
    token.value = newToken
    localStorage.setItem('token', newToken)
  }

  async function login(userData) {
    const res = await loginAPI(userData)
    setToken(res.data.token)
    console.log("登录成功 token", token)
  }

  function logout() {
    console.log("退出登录")
    token.value = ""

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
