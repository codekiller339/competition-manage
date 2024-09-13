<template>
  <div>
    <el-container style="height: 100vh;">
      <el-container>
        <el-header>
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            router
          >
            <el-menu-item index="/">
              首页
            </el-menu-item>
            <el-menu-item index="/community">
              社区
            </el-menu-item>
            <el-menu-item
              index="/management"
              v-if="isAuth"
            >
              后台录入系统
            </el-menu-item>

            <el-row class="menu-right">
              <el-row :gutter="24">
                <el-col
                  :span="10"
                  class="search"
                >
                  <el-input
                    @input="() => handleSearch(searchValue)"
                    placeholder="搜索"
                    clearable
                    v-model="searchValue"
                    :prefix-icon="Search"
                  />
                </el-col>
                <el-col
                  :span="5"
                  class="btn"
                >
                  <el-button
                    v-if="!token"
                    type="text"
                    @click="jumpLogin"
                  >登录</el-button>
                  <el-button
                    v-else
                    @click="handleLogout"
                    type="text"
                  >退出登录</el-button>
                </el-col>
                <el-col
                  v-if="token"
                  :span="9"
                  class="btn"
                >
                  <el-button type="text">{{ username }}</el-button>
                </el-col>
              </el-row>
            </el-row>
          </el-menu>
        </el-header>

        <router-view></router-view>
      </el-container>

    </el-container>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';

import router from '@/router';
import { useCompInfoStore, useUserStore } from "@/stores"


const userStore = useUserStore()
const compInfoStore = useCompInfoStore()
const { logout } = userStore
const { handleSearch, setSearchValue } = compInfoStore
const { username, token, isAuth } = storeToRefs(userStore)

const route = useRoute()

const activeIndex = ref(route.path)

const searchValue = computed({
  get() {
    return compInfoStore.searchValue
  },
  set(newVal) {
    setSearchValue(newVal)
  }
})

const jumpLogin = () => {
  router.push("/login")
}

const handleLogout = () => {
  logout()
  router.push("/login")
}


</script>

<style lang="less">
.el-header {
  /* background-color: #B3C0D1; */
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  /* background-color: #D3DCE6; */
  color: #333;

  .large-icon {
    font-size: 28px;
    cursor: pointer;
    padding: 8px;
    border-bottom: 2px solid #eee;
  }

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
      font-size: 20px;
      margin-right: 20px;
    }

    i {
      font-weight: 700;
      font-size: 24px;
      padding: 12px;
    }
  }

  .navbar-content {
    display: flex;
    margin-top: 20px;

    .list-item {
      display: flex;
      flex-direction: column;
      justify-content: start;
      padding: 0;
      min-height: 48px;
      text-align: left;

      .list_item_title {
        font-weight: 700;
        font-size: 20px;
      }
    }
  }

}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
}

.vertical-line {
  width: 3px;
  height: 100vh;
  background-color: #e0e0e0;
}

.menu-right {
  margin-left: auto;
  padding: 0;
  width: 40%;
  /* 将内容推到最右侧 */
  display: flex;
  align-items: center;
  /* 垂直居中 */
  text-align: center;

  .btn {
    width: 100%;
  }
}
</style>
