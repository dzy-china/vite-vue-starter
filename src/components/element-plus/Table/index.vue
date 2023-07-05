<template>

  <div class="hs-padding-left-right-50 hs-padding-top-bottom-15 hs-row-end-center">
    <el-button type="primary">新增</el-button>
  </div>
  <el-table :data="tableData" stripe  border style="width: 100%">
    <el-table-column type="index" :index="1" />
    <el-table-column label="方法" >
      <template #default="scope">
        <el-select v-model="scope.row.method" placeholder="请选择" >
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </el-select>
      </template>
    </el-table-column>

    <el-table-column label="路由" >
      <template #default="scope">
        <span>http://localhost:5173</span>
        <div contenteditable style="display: inline-block;color:#67C23A">{{scope.row.router}}</div>
      </template>
    </el-table-column>

    <el-table-column label="响应" >
      <template #default="scope">
        <div contenteditable style="color:#67C23A">{{scope.row.response}}</div>
      </template>
    </el-table-column>
  </el-table>

</template>

<script setup>

  const tableData = [
    {
      method: 'get',
      router: '/test1',
      response: 'No. 189, Grove St, Los Angeles',
    },
    {
      method: 'get',
      router: '/test2',
      response: 'No. 189, Grove St, Los Angeles',
    },
    {
      method: 'post',
      router: '/test3',
      response: 'No. 189, Grove St, Los Angeles',
    }
  ]

  const options = [
    {
      value: 'get',
      label: 'get',
    },
    {
      value: 'post',
      label: 'post',
    }
  ]

</script>

<style scoped>

</style>
