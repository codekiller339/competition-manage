import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getListAPI } from "@/api/info"

export const useCompInfoStore = defineStore('compInfo', () => {
    const list = ref([])
    const renderList = ref([])
    const searchValue = ref('')

    const getList = async (params) => {
        const data = await getListAPI(params)
        list.value = data.list.reverse()
    }

    const handleSearch = (value) => {
        renderList.value = list.value.filter((obj) => {
            return obj.level.includes(value) ||
                obj.name.includes(value) ||
                obj.organizer.includes(value) ||
                obj.status.includes(value)
        })
    }

    const setSearchValue = (newSearchValue) => {
        searchValue.value = newSearchValue
    }

    const setRenderList = (newSearchValue) => {
        searchValue.value = newSearchValue
    }

    return {
        list,
        renderList,
        searchValue,
        handleSearch,
        setSearchValue,
        setRenderList,
        getList
    }
})