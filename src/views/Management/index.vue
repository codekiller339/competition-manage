<template>
  <div class="mt-20px flex flex-content-center flex-justify-center">
    <div
      class="mb-50px"
      style="width: 90%"
    >
      <el-button
        type="primary"
        @click="handleAppend(scope.$index, scope.row)"
      >新增</el-button>
      <el-table :data="renderList">
        <el-table-column
          label="标题"
          prop="name"
        />
        <el-table-column
          label="状态"
          prop="status"
        />
        <el-table-column
          label="主办方"
          prop="organizer"
        />
        <el-table-column
          label="竞赛类别"
          prop="level"
        />
        <el-table-column
          label="链接"
          prop="href"
        />
        <el-table-column align="right">
          <template #header>
            <el-input
              v-model="searchValue"
              size="small"
              placeholder="搜索"
            />
          </template>
          <template #default="scope">
            <el-button
              size="small"
              @click="() => handleEdit(scope.row)"
            >编辑</el-button>
            <el-button
              size="small"
              type="danger"
              @click="() => handleDelete(scope.row)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-row class="mt-10px">
        <el-col :span="4">
        </el-col>
        <el-col :span="20">
          <el-pagination
            v-show="!searchValue"
            class="float-end"
            v-model:currentPage="currentPage"
            v-model:page-size="pageSize"
            :page-sizes="[5, 10, 15, 20]"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </el-col>
      </el-row>
    </div>
  </div>

</template>

<script setup>
import { useCompInfoStore } from '@/stores/index'
import { storeToRefs } from 'pinia';
import { ref, computed, unref } from 'vue';
import { addListItemAPI, updateListItemAPI, deleteListItemAPI, getListAPI } from '@/api/info'
import { debounce } from 'lodash'
import { ElMessage, ElMessageBox } from 'element-plus';

const store = useCompInfoStore()
const { getList } = store
const { list: tableData } = storeToRefs(store)

const currentPage = ref(1)
const pageSize = ref(5)
const searchValue = ref('')

const filterTableData = computed(() =>
  tableData.value.filter((obj) =>
    obj?.level.includes(searchValue.value) ||
    obj?.name.includes(searchValue.value) ||
    obj?.organizer.includes(searchValue.value) ||
    obj?.status.includes(searchValue.value)
  )
)

const total = computed(() => tableData.value.length)

const renderList = computed(() =>
  searchValue.value ? filterTableData.value : tableData.value.slice(
    pageSize.value * (currentPage.value - 1),
    pageSize.value * (currentPage.value - 1) + pageSize.value
  )
)

const handleSizeChange = (val) => {
  pageSize.value = val
}

const handleCurrentChange = (val) => {
  currentPage.value = val
}

const handleEdit = async (row) => {
  const params = {

  }
  await updateListItemAPI(params)
}

const handleDelete = (row) => {
  const params = {
    id: row.id
  }
  ElMessageBox.confirm(
    '确定删除吗?',
    'Warning',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  ).then(async () => {
    await deleteListItemAPI(params)
    getList()
  })
}

const handleAppend = async (row) => {
  const params = {
    id: row.id
  }
  await addListItemAPI(params)
}

// 初始化
getList()

</script>


<style scoped lang='less'></style>