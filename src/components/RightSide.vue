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
      <div v-for="category in categories" class="category-box">
        {{ category.name }}
      </div>
    </el-card>

    <!--Labels-->
    <el-card>
      <h5><i class="el-icon-collection-tag"></i> 标签</h5>
      <span v-for="tag in tags">
        <el-tag class="tag-box">
          {{ tag.name }}
        </el-tag>
      </span>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "RightSide",
  data() {
    return {
      search: '',
      categories: {},
      tags: {}
    }
  },
  methods: {
    getCategoriesAndTags() {
      const _this = this;
      _this.$axios.get("/categories").then(res => {
        _this.categories = res.data.data
      });
      _this.$axios.get("/tags").then(res => {
        _this.tags = res.data.data
      })
    }
  },
  created() {
    this.getCategoriesAndTags()
  }
}
</script>

<style scoped>
  .el-card {
    width: 100%;
    margin-top: 10px;
    padding: 5px 5px 5px 5px;
  }
  .category-box {
    width: 100%;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
    font-size: medium;
    margin-bottom: 10px;
    text-align: center;
    height: 25px;
  }
  .category-box:hover {
    background-color: #D9ECFF;
  }
  .tag-box {
    margin: 0 5px 5px 5px;
  }
</style>