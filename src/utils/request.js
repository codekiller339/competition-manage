import router from '@/router'
import store from '@/stores'
import axios from 'axios'
import { Message } from 'element-ui'

const service = axios.create({
  // 基地址(每个接口都有的地址); 作用: 后面封装的接口, 接口的地址都会和baseURL自动拼接到一起
  baseURL: 'https://6496pv27lr81.vicp.fun/',
  // 超时时间
  timeout: 5000 // request timeout
})

// ===================================请求拦截器
// 执行时机：发送请求的时候执行
service.interceptors.request.use(
  config => {
    // config 携带的就是请求信息, 并且return不能省略
    // 这个函数通常 配置请求头 携带token
    const token = store.state.user.token
    if(token) {
      config.headers.Authorization = `Bearer ${token}`
      // config.headers.Authorization = token
    }
    return config
  },
  error => {
    // 执行时机：请求发生错误的时候
    return Promise.reject(error)
  }
)

// ========================响应拦截器
// 执行时机：当服务端返回数据的时候。数据流转的第一站 就是响应拦截器
service.interceptors.response.use(
  response => {
    if(response.data.code != 1) {
      Message.error(response.data.msg)
      return Promise.reject(response.data)
    } else {
      return response.data
    }
  },
  error => {
    // 响应失败 状态码4xx-5xx
    // error 错误信息
    // 可以做统一的错误处理
    // console.dir(error)    
    // 在这里判断token是否过期
    if(error.response.status === 401) {
      // token过期 清空token 跳转到登录页
      store.commit('user/removeToken')
      router.push('/login')
    }
    Message.error(error.response.data.msg)
    return Promise.reject(error)
  }
)

export default service
