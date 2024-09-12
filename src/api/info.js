import http from "@/utils/request"
import { ElNotification } from "element-plus"

/**
* @method 
* @description 列表
* @param e  {解释参数} 
* @author gkr 
* @createtime 2024-06-12 15:57:39
*/
export const getListAPI = async (params) => {
    const res = await http({
        url: "api/info/competition",
        method: "GET",
        params
    })
    return res
}

export const addListItemAPI = async (data) => {
    const res = await http({
        url: "api/info/competition",
        method: "POST",
        data
    })
    ElNotification.success(res.msg)
    return res
}

export const updateListItemAPI = async (data) => {
    const res = await http({
        url: "api/info/competition",
        method: "PUT",
        data
    })
    ElMessage.success(res.msg)
    return res
}

export const deleteListItemAPI = async (data) => {
    const res = await http({
        url: "api/info/competition",
        method: "delete",
        data
    })
    ElMessage.success(res.msg)
    return res
}