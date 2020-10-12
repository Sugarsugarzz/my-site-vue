<template>
  <div>
    <el-menu class="el-menu-vertical-demo">
      <el-menu-item index="1" @click="goBlogsManager">
        <i class="el-icon-menu"></i>
        <span slot="title">博客管理</span>
      </el-menu-item>
      <el-menu-item index="2" @click="goCategoriesManager">
        <i class="el-icon-menu"></i>
        <span slot="title">分类管理</span>
      </el-menu-item>
      <el-menu-item index="3" @click="goTagsManager">
        <i class="el-icon-menu"></i>
        <span slot="title">标签管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  methods: {
    goBlogsManager() {
      this.$router.push("/back/blogs")
    },
    goCategoriesManager() {
      this.$router.push("/back/categories")
    },
    goTagsManager() {
      this.$router.push("/back/tags")
    },
  }
}
</script>

<style scoped>

</style>