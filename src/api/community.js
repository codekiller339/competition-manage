import http from "@/utils/request"
import { ElNotification } from "element-plus"

/**
* @method 
* @description 列表
* @param e  {解释参数} 
* @author gkr 
* @createtime 2024-06-12 15:57:39
*/
export const getReview = async (params) => {
    const res = await http({
        url: "api/info/community/review",
        method: "GET",
        params
    })
    return res
}

export const addReview = async (data) => {
    const res = await http({
        url: "api/info/community/review",
        method: "post",
        data
    })
    return res
}

