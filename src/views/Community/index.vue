<script setup>

</script>


<template>
  <div class="box">
    <div class="head">
      <div class="left">评论(1379)</div>
      <ul>
        <li><a href="">推荐</a></li>
        <li><a href="">最新</a></li>
      </ul>
    </div>
    <div class="comment">
      <img src="D:\01-大三前端\competition_manage\vue3-demo\src\assets\images\1.jpg" alt="图片未显示">
      <div class="content">
        <el-text class="mx-1" type="warning">未解决</el-text>
        <span style="color: #909090 font-weight: 700;">名字xxx</span>
        <small style="margin-top: 2px;">2024-01-01</small>
        <span class="text">bb空间 求大佬带带</span>
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
</style>