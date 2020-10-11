<template>
  <div>
    <!--Search-->
    <el-card>
      <div>
        <el-input placeholder="请输入搜索内容" v-model="search">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </el-card>

    <!--Categories-->
    <el-card>
      <h5><i class="el-icon-collection"></i> 分类</h5>
      <div>
        <el-button class="category">
          机器学习
          <span style="float: right">12</span>
        </el-button>
      </div>
    </el-card>

    <!--Labels-->
    <el-card>
      <h5><i class="el-icon-collection-tag"></i> 标签</h5>
      <el-tag class="etag">
        Java
        &emsp;<span>12</span>
      </el-tag>
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
  .el-card {
    width: 100%;
    margin-top: 10px;
    padding: 5px 5px 5px 5px;
  }
  .category {
    width: 100%;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    text-align: left;
  }
  .etag {
    margin: 0 5px 5px 5px;
  }
</style>