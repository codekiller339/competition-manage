<template>
  <div>
    <el-container>
      <el-main>
        <div class="list-box">
          <ul class="list">
            <li class="list-item">
              <div class="info">
                <h3>
                  <em>正在报名</em>
                  <a href="https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm" target="_blank">全国大学生计算机应用能力与数字素养大赛暨第六届传智杯全国IT技能大赛专业信息技术——程序设计挑战赛道</a>
                </h3>
                <p><span>主办方</span> 全国高等院校计算机基础教育研究会</p>
                <p><span>竞赛类别</span> 全国</p>
              </div>
              <div class="info-btn">
                <el-row>
                  <el-button @click="jumpClick" type="success" plain>比赛详情</el-button>
                </el-row>
              </div>
            </li>
            <li class="list-item">
              <div class="info">
                <h3>
                  <em>正在报名</em>
                  <a href="https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm">全国大学生计算机应用能力与数字素养大赛暨第六届传智杯全国IT技能大赛专业信息技术——程序设计挑战赛道</a>
                </h3>
                <p><span>主办方</span> 全国高等院校计算机基础教育研究会</p>
                <p><span>竞赛类别</span> 全国</p>
              </div>
              <div class="info-btn">
                <el-row>
                  <el-button @click="jumpClick" type="success" plain>比赛详情</el-button>
                </el-row>
              </div>
            </li>
            <li class="list-item">
              <div class="info">
                <h3>
                  <em>正在报名</em>
                  <a href="https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm">全国大学生计算机应用能力与数字素养大赛暨第六届传智杯全国IT技能大赛专业信息技术——程序设计挑战赛道</a>
                </h3>
                <p><span>主办方</span> 全国高等院校计算机基础教育研究会</p>
                <p><span>竞赛类别</span> 全国</p>
              </div>
              <div class="info-btn">
                <el-row>
                  <el-button @click="jumpClick" type="success" plain>比赛详情</el-button>
                </el-row>
              </div>
            </li>
          </ul>
        </div>
      </el-main>
      <el-footer>
         <el-pagination
          :total="5"
          layout="prev, pager, next">
        </el-pagination>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'MatchPage',
  data () {
    return {

    }
  },
  methods: {
    jumpClick () {
      window.open('https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm')
    }
  }
}
</script>

<style lang='less'>
 .el-header {
    color: #333;
    line-height: 60px;
    text-align: left;
  }

  .el-main {
    width: 1200px;
    // background-color: pink;  
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
</style>
