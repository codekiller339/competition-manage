<template>
  <div class="box">
    <div class="extra-image">
      <img
        src="@/assets/images/R-C.jpg"
        width="400"
        height="380"
      />
    </div>
    <div class="login-container">
      <h1>比赛信息平台</h1>
      <form>
        <input
          v-model="dataForm.email"
          type="text"
          placeholder="邮箱"
          required
        />
        <input
          v-model="dataForm.password"
          type="password"
          placeholder="密码"
          required
        />
        <el-button
          type="primary"
          style="width: 100%; margin-top: 16px;"
          @click="handleLogin"
        >
          登录
        </el-button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores"
import { useRouter } from "vue-router";

const router = useRouter()

const dataForm = ref({
  email: "",
  password: ""
})

const { login } = useUserStore()

const handleLogin = async () => {
  await login(dataForm.value)
  router.push('/')
}


</script>

<style scoped>
.box {
  background-image: url('@/assets/images/bg.png');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.login-container {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 20%;
  height: 30%;
}

.extra-image {
  margin-right: 80px;
}

.login-container h1 {
  text-align: center;
  margin-bottom: 20px;
}

.login-container input {
  display: block;
  width: 95%;
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 50px;
}

.login-container .btn {
  text-decoration: none;
  text-align: center;
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  margin-bottom: 10px;
  border-radius: 5px;
  cursor: pointer;
}
</style>