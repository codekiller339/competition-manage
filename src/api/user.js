import http from "@/utils/request"
/**
* @method 
* @description 登录
* @param e  {解释参数} 
* @author gkr 
* @createtime 2024-06-09 23:05:36
*/
export const loginAPI = (data) => {
  return http({
    url: "api/auth/login",
    method: "POST",
    data
  })
}


/**
* @method 
* @description 首页列表
* @param e  {解释参数} 
* @author gkr 
* @createtime 2024-06-12 15:57:39
*/
export const getListAPI = (params) => {
  return http({
    url: "api/info/competition",
    method: "GET",
    params
  })
}