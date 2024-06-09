import { defineStore } from 'pinia';
import { loginAPI } from "@/api/user";
import { ref } from 'vue';

export const useUserStore = defineStore("user", () => {
  const username = ref("");
  const token = ref("");

  async function login(userData) {  
    const res = await loginAPI(userData);
    const { data } = res.data;
    username.value = data.username;
    token.value = data.token;
  }

  function logout() {
    username.value = "";
    token.value = "";
  }

  return {
    username,
    token,
    login,
    logout,
  };
}, {
  persist: true,
});
