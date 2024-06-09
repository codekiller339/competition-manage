<script setup>
import { ref } from "vue"

const isShow = ref(false)
const userInfo = ref([
  { id: 1, name: '测试用户1', grade: '大一', major: '环境工程', time: '2024-01-01', text: 'bb空间 求大佬带带' },
  { id: 2, name: '测试用户2', grade: '大三', major: '网络工程', time: '2024-01-08', text: 'xxx竞赛招人' },
])
const flag = ref([
  false, false
])

const change = (id) => {
  console.log(id)
  flag.value[id-1] = ~flag.value[id-1]
  console.log(flag.value[id-1]);
}

const ff = ref(false)

</script>

<template>
  <div class="box">
    <div class="head">
      <div class="left">评论({{ userInfo.length }})</div>
      <ul>
        <li><a href="" style="font-weight: 700; color: #000">推荐</a></li>
        <li><a href="">最新</a></li>
      </ul>
    </div>
    <div v-for="(item) in userInfo" :key="item.id" class="comment">     
        <img @click="change(item.id)" src="../../assets/images/1.jpg" alt="图片未显示">
      <div class="content">
        <el-text class="mx-1" type="warning">未解决</el-text>
        <span style="color: #909090 font-weight: 700;">{{ item.name }}</span>
        <small style="margin-top: 2px;">{{ item.time }}</small>
        <span class="text">{{ item.text }}</span>
      </div>
      <div class="info-card">
        <el-card v-show="flag[item.id - 1]" class="box-card">
        <template #header>
          <div class="card-header">
            <span>{{ item.name }}</span>
            <el-button @click="change(item.id)" class="button" text>X</el-button>
          </div>
        </template>
        <div>年级：{{ item.grade }}</div>
        <div>专业：{{ item.major }}</div>
        <template #footer>聊天</template>
      </el-card>
      </div>
    </div>
  </div>
</template>

<style scoped lang='less'>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.head {
  display: flex;
  justify-content: space-between;
  padding: 12px;
  border-bottom: 1px solid #eee;
  height: 50px;

  ul {
    display: flex;

    li {
      list-style: none;

      a {
        padding: 10px;
        text-decoration: none;
        color: #909090;
      }

      :hover {
        color: #000;
      }
    }
  }
}

.box {
  margin: 30px auto;
  width: 800px;
  // background-color: pink;
  height: 100vh;
}

.comment {
  position: relative;
  display: flex;
  padding: 13px 0 0 13px;
  padding-bottom: 0;

  background-color: pink;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 20px;
    cursor: pointer;
  }

  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    border-bottom: 1px solid #909090;

    height: 100px;
    width: 720px;

    .el-text {
      position: absolute;
      right: 30px;
      top: 10px;
      font-size: 20px;
      font-weight: 700;
    }

    .text {
      margin-top: 6px;
    }
  }
}

.info-card {
  position: absolute;
  left: -260px;
  top: -50px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 230px;
}
</style>