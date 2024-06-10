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