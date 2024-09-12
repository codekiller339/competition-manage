import { defineStore } from 'pinia';
import { loginAPI } from "@/api/user";
import { ref } from 'vue';
import router from "@/router"

export const useUserStore = defineStore("user", () => {
  const token = ref()
  const username = ref()
  const isAuth = ref(false)

  function setToken(newToken) {
    token.value = newToken
  }

  function setUsername(newUsername) {
    username.value = newUsername
  }

  function setIsAuth(val) {
    isAuth.value = val
  }

  async function login(userData) {
    const res = await loginAPI(userData)
    setToken(res.data?.token || '')
    setUsername(res.data?.username || '')
    setIsAuth(res.data?.auth >= 1 || 0)
  }

  function logout() {
    console.log("退出登录")
    token.value = ""
    username.value = ""
  }

  return {
    token,
    username,
    isAuth,
    login,
    logout,
  };
}, {
  persist: true,
});
