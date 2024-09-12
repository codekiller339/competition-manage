<template>
  <div class="mt-20px flex flex-content-center flex-justify-center">
    <div
      class="mb-50px"
      style="width: 90%"
    >
      <el-button
        type="primary"
        @click="handleAppend"
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

  <el-dialog v-model="isVisible" center :title="isEdit ? '新增竞赛' : '编辑竞赛'" width="500">
    <el-form 
      ref="formRef"
      :model="formInfo"
      :rules="rules"
      label-width="auto"
      style="width: 70%; margin: 0 auto;"
    >
      <el-form-item prop="name" label="标题:" >
        <el-input v-model="formInfo.name"  />
      </el-form-item>
      <el-form-item prop="status" label="状态:" >
        <el-select v-model="formInfo.status" placeholder="请选择状态" style="width: 100%;">
          <el-option label="正在报名" value="1" />
          <el-option label="报名结束" value="0" />
          <el-option label="已结束" value="-1" />
        </el-select>
      </el-form-item>
      <el-form-item prop="organizer" label="主办方:" >
        <el-input v-model="formInfo.organizer"  />
      </el-form-item>
      <el-form-item prop="level" label="竞赛类别:" >
        <el-select v-model="formInfo.level" placeholder="请选择级别" style="width: 100%;">
          <el-option label="校级" value="0" />
          <el-option label="省赛" value="1" />
          <el-option label="全国" value="2" />
        </el-select>
      </el-form-item>
      <el-form-item prop="href" label="链接:" >
        <el-input v-model="formInfo.href" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="isVisible = false">取消</el-button>
        <el-button type="primary" @click="confirmBtn">
          确认
        </el-button>
      </div>
    </template>
  </el-dialog>

</template>

<script setup>
import { useCompInfoStore } from '@/stores/index'
import { storeToRefs } from 'pinia';
import { ref, computed, unref, reactive } from 'vue';
import { addListItemAPI, updateListItemAPI, deleteListItemAPI, getListAPI } from '@/api/info'
import { debounce } from 'lodash'
import { ElMessage, ElMessageBox, ElDialog } from 'element-plus';

const store = useCompInfoStore()
const { getList } = store
const { list: tableData } = storeToRefs(store)

const currentPage = ref(1)
const pageSize = ref(5)
const searchValue = ref('')
const isVisible = ref(false)
const isEdit = ref(false)
const formRef = ref(null)
const formInfo = reactive({
  id: null,
  name: "",
  status: "1",
  organizer: "",
  level: "",
  href: ""
})
const rules = reactive({
  name: [
    { required: true, message: "标题为必选", trigger: 'blur' }
  ],
  status: [
    { required: true }
  ],
  organizer: [
    { required: true, message: "请输入主办方信息", trigger: 'blur' }
  ],
  level: [
    { required: true, message: "请选择级别", trigger: 'blur' }
  ],
  href: [
    { required: true, message: '请输入竞赛链接', trigger: 'blur' }
  ]
})

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
  if (!row.id) return
  isEdit.value = true
  const params = {
    id: row.id
  }
  const curItem = await getListAPI(params)
  formInfo = { ...curItem } 
  isVisible.value = true
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
/*   const params = {
    id: row.id
  }
  await addListItemAPI(params) */
  isEdit.value = false
  formInfo = {
    id: null,
    name: '',
    status: '',
    organizer: '',
    level: '',
    href: ''
  }
  isVisible.value = true
  formRef.value.resetFields()
}
const confirmBtn  =() => {
  formRef.value.validate(async (valid) => {
    if (valid) {
      if (isEdit.value) {
        await updateListItemAPI(formInfo)
        ElMessage.success('编辑成功')
      } else {
        await addListItemAPI(formInfo)
        ElMessage.success('添加成功')
      }     
      await getListAPI()
      isVisible.value = false
    }
     ElMessage.error('请确认信息完整')
  })
}

// 初始化
getList()

</script>


<style scoped lang='less'></style>