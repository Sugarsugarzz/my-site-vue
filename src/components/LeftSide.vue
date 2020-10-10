<template>
  <div>
    <!--Profile-->
    <el-card style="text-align: center">
      <div class="block" style="margin: 0 auto">
        <el-avatar :size="150" :src="avater"></el-avatar>
        <h1>Sugar</h1>
      </div>
    </el-card>

    <!--MostViewed-->
    <el-card>
      访问最多的文章
    </el-card>
    <!--LatestMessage-->
    <el-card>
      最新留言
    </el-card>
  </div>
</template>

<script>
export default {
  name: "LeftSide",
  data() {
    return {
      avater: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1793576242,463709846&fm=26&gp=0.jpg",
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
</style>