import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getListAPI } from "@/api/user"

export const useCompInfoStore = defineStore('compInfo', () => {
    /* const list = ref([
        {
            id: '1',
            status: '正在报名',
            name: '全国大学生计算机应用能力与数字素养大赛暨第六届传智杯全国IT技能大赛专业信息技术——程序设计挑战赛道',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '全国',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            id: '2',
            status: '已结束',
            name: '个人程序设计天梯赛',
            organizer: '上海第二工业大学',
            level: '校级',
            href: 'https://xxgk.sspu.edu.cn/2023/1225/c3149a146282/page.htm'
        },
        {
            id: '3',
            status: '正在报名',
            name: '全国大学生计算机应用能力与数字素养大赛暨第六届传智杯全国IT技能大赛专业信息技术——程序设计挑战赛道',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '全国',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            id: '4',
            status: '报名结束',
            name: '蓝桥杯程序设计大赛',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '省赛',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            id: '5',
            status: '正在报名',
            name: '全国大学生计算机应用能力与数字素养大赛暨第六届传智杯全国IT技能大赛专业信息技术——程序设计挑战赛道',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '全国',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            id: '6',
            status: '正在报名',
            name: '全国大学生计算机应用能力与数字素养大赛暨第六届传智杯全国IT技能大赛专业信息技术——程序设计挑战赛道',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '全国',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            id: '7',
            status: '正在报名',
            name: '全国大学生计算机应用能力与数字素养大赛暨第六届传智杯全国IT技能大赛专业信息技术——程序设计挑战赛道',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '全国',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            id: '8',
            status: '报名结束',
            name: '蓝桥杯程序设计大赛',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '省赛',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            id: '9',
            status: '正在报名',
            name: '全国大学生计算机应用能力与数字素养大赛暨第六届传智杯全国IT技能大赛专业信息技术——程序设计挑战赛道',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '全国',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            id: '10',
            status: '正在报名',
            name: '全国大学生计算机应用能力与数字素养大赛暨第六届传智杯全国IT技能大赛专业信息技术——程序设计挑战赛道',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '全国',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            id: '11',
            status: '正在报名',
            name: '全国大学生计算机应用能力与数字素养大赛暨第六届传智杯全国IT技能大赛专业信息技术——程序设计挑战赛道',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '全国',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            id: '12',
            status: '报名结束',
            name: '蓝桥杯程序设计大赛',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '省赛',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            id: '13',
            status: '正在报名',
            name: '全国大学生计算机应用能力与数字素养大赛暨第六届传智杯全国IT技能大赛专业信息技术——程序设计挑战赛道',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '全国',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            id: '14',
            status: '正在报名',
            name: '全国大学生计算机应用能力与数字素养大赛暨第六届传智杯全国IT技能大赛专业信息技术——程序设计挑战赛道',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '全国',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            id: '15',
            status: '正在报名',
            name: '全国大学生计算机应用能力与数字素养大赛暨第六届传智杯全国IT技能大赛专业信息技术——程序设计挑战赛道',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '全国',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            id: '16',
            status: '报名结束',
            name: '蓝桥杯程序设计大赛',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '省赛',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            id: '17',
            status: '正在报名',
            name: '全国大学生计算机应用能力与数字素养大赛暨第六届传智杯全国IT技能大赛专业信息技术——程序设计挑战赛道',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '全国',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            id: '18',
            status: '正在报名',
            name: '全国大学生计算机应用能力与数字素养大赛暨第六届传智杯全国IT技能大赛专业信息技术——程序设计挑战赛道',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '全国',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            id: '19',
            status: '正在报名',
            name: '全国大学生计算机应用能力与数字素养大赛暨第六届传智杯全国IT技能大赛专业信息技术——程序设计挑战赛道',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '全国',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            id: '20',
            status: '报名结束',
            name: '蓝桥杯程序设计大赛',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '省赛',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
    ]) */

    const list = ref([])
 
    const getList = async(params) => {
        const { data } = await getListAPI(params)
        list.value = data.list
        console.log(list.value)
    }

    return { 
        list,
        getList
    }
}, {
    persist: true
})