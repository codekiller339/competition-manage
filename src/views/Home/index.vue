<template>
  <div>
    <el-container>
      <el-main>
        <div class="list-box">
          <ul class="list">
            <li
              class="list-item"
              v-for="item in renderList"
              :key="item.key"
            >
              <div class="info">
                <h3>
                  <em>{{ item.status }}</em>
                  <a
                    :href="item.href"
                    target="_blank"
                  >{{ item.name }}</a>
                </h3>
                <p><span>主办方</span> {{ item.organizer }}</p>
                <p><span>竞赛类别</span> {{ item.level }}</p>
              </div>
              <div class="info-btn">
                <el-row>
                  <el-button
                    @click="jumpClick(item.href)"
                    type="success"
                    plain
                  >比赛详情</el-button>
                </el-row>
              </div>
            </li>
          </ul>
        </div>
      </el-main>
      <el-footer class="bottom">
      </el-footer>
    </el-container>
  </div>
</template>

<script setup>
import { useCompInfoStore } from '@/stores/index'
import { storeToRefs } from 'pinia';
import { ref, onMounted } from 'vue';
import { debounce } from 'lodash'
import { getListAPI } from "@/api/user"


onMounted(() => {
  getList()
})

const RENDER_NUM = 4

const list = ref([])
const renderList = ref([])

const params = {
  pageSize: 1,
  pageId: 0
}

const getList = async () => {
  const res = await getListAPI(params)
  list.value = res.data.list
  // 初始化挂载
  initRenderList()
}

const initRenderList = () => {
  for (let i = renderList.value.length; i < RENDER_NUM && i < list.value.length; i++) {
    renderList.value.push(list.value[i])
  }   
  console.log(renderList.value)
}

// 懒加载事件监听
window.addEventListener('scroll', function () {
  const clientHeight = document.documentElement.clientHeight;
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  if (clientHeight + scrollTop >= scrollHeight) {
    // 滚动加载 + 0.5s 防抖
    debounce(() => {
      console.log(1)
      let i = RENDER_NUM
      while (i--) {
        renderList.value.push(list.value[renderList.value.length])
      }
    }, 500)();
  }
}, false);


// 跳转链接
const jumpClick = (url) => {
  window.open(url)
}

</script>

<style lang='less'>
.el-header {
  color: #333;
  line-height: 60px;
  text-align: left;
}

.el-main {
  // width: 1200px;
  width: 100%;
  // background-color: pink;  
}

.list-box {
  display: inline-block;
  margin: 0 auto;
}

.list-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 20px;
  width: 1000px;
  height: 200px;
  background-color: #fff;
  border-radius: 10px;

  .info {
    display: flex;
    flex-direction: column;
    width: 700px;
    height: 160px;
    // background-color: yellow;
    text-align: left;
    color: #666;

    h3 {
      position: relative;
      padding-left: 70px;
      margin-bottom: 35px;
      line-height: 30px;

      em {
        position: absolute;
        left: 0;
        top: 0;
        font-style: normal;
        padding: 0 10px 10px 0;
        font-size: 14px;
      }

      a {
        display: inline-block;
        text-decoration: none;
        margin-bottom: 5px;
        width: 100%;
        color: #666;
        font-size: 20px;
      }
    }

    p {
      padding-left: 70px;
      margin-bottom: 5px;
      position: relative;
      line-height: 20px;

      span {
        position: absolute;
        left: 0;
        top: 0;
      }
    }
  }

  .info-btn {
    position: relative;
    width: 200px;
    height: 160px;
    // background-color: brown;

    .el-button {
      position: absolute;
      left: 10%;
      top: 10px;
      width: 160px;
      height: 50px;

      span {
        font-size: 18px;
      }
    }
  }
}

.bottom {
  display: flex;

  .pagination {
    display: inline-block;
    margin: 0 auto;
  }
}
</style>
