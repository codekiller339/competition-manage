<script setup>

</script>

<template>
  <div>
    <el-container style="height: 100vh;">
      <el-container>
        <el-header>
          <el-menu default-active="/" class="el-menu-demo" mode="horizontal" router>
            <el-menu-item index="/">
              首页
            </el-menu-item>
            <el-menu-item index="/community">
              社区
            </el-menu-item>

            <el-row class="menu-right">
              <el-row :gutter="24">
                <el-col :span="14" class="search">
                  <el-input placeholder="搜索" suffix-icon="el-icon-search" clearable v-model="searchText"></el-input>
                </el-col>
                <el-col :span="10" class="btn">
                  <router-link to="/login"><el-button type="text">注册 / 登录</el-button></router-link>
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
  width: 30%;
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
