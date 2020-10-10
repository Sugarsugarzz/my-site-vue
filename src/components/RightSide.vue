<template>
  <div>
    <!--Search-->
    <el-card class="card">
      <div>
        <el-input placeholder="请输入搜索内容" v-model="search" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </el-card>

    <!--Categories-->
    <el-card class="card">
      分类
    </el-card>

    <!--Labels-->
    <el-card class="card">
      标签
    </el-card>
  </div>
</template>

<script>
export default {
  name: "RightSide",
  data() {
    return {
      search: '',
    }
  }
}
</script>

<style scoped>
  .card {
    width: 100%;
    margin-top: 10px;
    padding: 5px 5px 5px 5px;
  }
  .search {
    float: right;
  }
</style>