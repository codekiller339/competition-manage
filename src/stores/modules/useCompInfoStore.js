import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'


export const useCompInfoStore = defineStore('compInfo', () => {
    const list = ref([
        {
            status: '正在报名',
            name: '全国大学生计算机应用能力与数字素养大赛暨第六届传智杯全国IT技能大赛专业信息技术——程序设计挑战赛道',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '全国',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            status: '正在报名',
            name: '全国大学生计算机应用能力与数字素养大赛暨第六届传智杯全国IT技能大赛专业信息技术——程序设计挑战赛道',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '全国',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            status: '正在报名',
            name: '全国大学生计算机应用能力与数字素养大赛暨第六届传智杯全国IT技能大赛专业信息技术——程序设计挑战赛道',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '全国',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            status: '报名结束',
            name: '蓝桥杯程序设计大赛',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '省赛',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            status: '正在报名',
            name: '全国大学生计算机应用能力与数字素养大赛暨第六届传智杯全国IT技能大赛专业信息技术——程序设计挑战赛道',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '全国',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            status: '正在报名',
            name: '全国大学生计算机应用能力与数字素养大赛暨第六届传智杯全国IT技能大赛专业信息技术——程序设计挑战赛道',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '全国',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            status: '正在报名',
            name: '全国大学生计算机应用能力与数字素养大赛暨第六届传智杯全国IT技能大赛专业信息技术——程序设计挑战赛道',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '全国',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            status: '报名结束',
            name: '蓝桥杯程序设计大赛',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '省赛',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            status: '正在报名',
            name: '全国大学生计算机应用能力与数字素养大赛暨第六届传智杯全国IT技能大赛专业信息技术——程序设计挑战赛道',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '全国',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            status: '正在报名',
            name: '全国大学生计算机应用能力与数字素养大赛暨第六届传智杯全国IT技能大赛专业信息技术——程序设计挑战赛道',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '全国',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            status: '正在报名',
            name: '全国大学生计算机应用能力与数字素养大赛暨第六届传智杯全国IT技能大赛专业信息技术——程序设计挑战赛道',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '全国',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            status: '报名结束',
            name: '蓝桥杯程序设计大赛',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '省赛',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            status: '正在报名',
            name: '全国大学生计算机应用能力与数字素养大赛暨第六届传智杯全国IT技能大赛专业信息技术——程序设计挑战赛道',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '全国',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            status: '正在报名',
            name: '全国大学生计算机应用能力与数字素养大赛暨第六届传智杯全国IT技能大赛专业信息技术——程序设计挑战赛道',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '全国',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            status: '正在报名',
            name: '全国大学生计算机应用能力与数字素养大赛暨第六届传智杯全国IT技能大赛专业信息技术——程序设计挑战赛道',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '全国',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            status: '报名结束',
            name: '蓝桥杯程序设计大赛',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '省赛',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            status: '正在报名',
            name: '全国大学生计算机应用能力与数字素养大赛暨第六届传智杯全国IT技能大赛专业信息技术——程序设计挑战赛道',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '全国',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            status: '正在报名',
            name: '全国大学生计算机应用能力与数字素养大赛暨第六届传智杯全国IT技能大赛专业信息技术——程序设计挑战赛道',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '全国',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            status: '正在报名',
            name: '全国大学生计算机应用能力与数字素养大赛暨第六届传智杯全国IT技能大赛专业信息技术——程序设计挑战赛道',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '全国',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            status: '报名结束',
            name: '蓝桥杯程序设计大赛',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '省赛',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            status: '正在报名',
            name: '全国大学生计算机应用能力与数字素养大赛暨第六届传智杯全国IT技能大赛专业信息技术——程序设计挑战赛道',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '全国',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            status: '正在报名',
            name: '全国大学生计算机应用能力与数字素养大赛暨第六届传智杯全国IT技能大赛专业信息技术——程序设计挑战赛道',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '全国',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            status: '正在报名',
            name: '全国大学生计算机应用能力与数字素养大赛暨第六届传智杯全国IT技能大赛专业信息技术——程序设计挑战赛道',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '全国',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            status: '报名结束',
            name: '蓝桥杯程序设计大赛',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '省赛',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            status: '正在报名',
            name: '全国大学生计算机应用能力与数字素养大赛暨第六届传智杯全国IT技能大赛专业信息技术——程序设计挑战赛道',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '全国',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            status: '正在报名',
            name: '全国大学生计算机应用能力与数字素养大赛暨第六届传智杯全国IT技能大赛专业信息技术——程序设计挑战赛道',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '全国',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            status: '正在报名',
            name: '全国大学生计算机应用能力与数字素养大赛暨第六届传智杯全国IT技能大赛专业信息技术——程序设计挑战赛道',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '全国',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            status: '报名结束',
            name: '蓝桥杯程序设计大赛',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '省赛',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            status: '正在报名',
            name: '全国大学生计算机应用能力与数字素养大赛暨第六届传智杯全国IT技能大赛专业信息技术——程序设计挑战赛道',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '全国',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            status: '正在报名',
            name: '全国大学生计算机应用能力与数字素养大赛暨第六届传智杯全国IT技能大赛专业信息技术——程序设计挑战赛道',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '全国',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            status: '正在报名',
            name: '全国大学生计算机应用能力与数字素养大赛暨第六届传智杯全国IT技能大赛专业信息技术——程序设计挑战赛道',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '全国',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
        {
            status: '报名结束',
            name: '蓝桥杯程序设计大赛',
            organizer: '全国高等院校计算机基础教育研究会',
            level: '省赛',
            href: 'https://xxgk.sspu.edu.cn/2023/1115/c3149a119113/page.htm'
        },
    ])

    return { list }
}, {
    persist: true
})