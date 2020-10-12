<template>
  <div>
    <!--Profile-->
    <el-card style="text-align: center">
      <div class="block" style="margin: 0 auto">
        <el-avatar :size="150" :src="avater"></el-avatar>
        <h1>Sugar</h1>
      </div>
    </el-card>

    <!--Tools-->
    <el-card>
      <h5>常用工具</h5>
      <div class="tool-card">
        工具一
      </div>
      <div class="tool-card">
        工具二
      </div>
    </el-card>

    <!--LatestMessage-->
    <el-card>
      <h5>最新留言</h5>
      <div class="message-card" v-for="message in messages">
        <strong style="color: #6495ED">{{ message.nickname }}</strong>
        <span style="font-size: x-small; float: right">评论于 {{ message.created }}</span>
        <br>
        {{ message.comment }}
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "LeftSide",
  data() {
    return {
      avater: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1793576242,463709846&fm=26&gp=0.jpg",
      messages: {},
    }
  },
  methods: {
    getLatestMessages() {
      const _this = this;
      _this.$axios("/messages").then(res => {
        _this.messages = res.data.data.records
      })
    }
  },
  created() {
    this.getLatestMessages()
  }
}
</script>

<style scoped>
  .el-card {
    width: 100%;
    margin-top: 10px;
    padding: 5px 5px 5px 5px;
  }
  .tool-card {
    float: left;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    width: 100%;
    font-size: small;
    margin-bottom: 10px;
    font-family: "微软雅黑";
  }
  .tool-card:hover {
    background-color: #D9ECFF;
  }
  .message-card {
    float: left;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    width: 100%;
    font-size: small;
    margin-bottom: 10px;
    font-family: "微软雅黑";
  }
</style>