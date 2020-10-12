<template>
  <div class="m-header">
    <el-menu :default-active="0" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1"><a href="/">主页</a></el-menu-item>
      <el-menu-item index="2"><a href="#">归档</a></el-menu-item>
      <el-menu-item index="3"><a href="/messages">留言板</a></el-menu-item>
      <el-menu-item index="4"><a href="/tools">工具</a></el-menu-item>
      <el-menu-item index="5"><a href="#">关于我</a></el-menu-item>
      <el-menu-item index="6" v-show="hasLogin"><a href="/back/blogs">后台管理</a></el-menu-item>
      <el-menu-item index="7" class="menu-item-end">
        <div v-show="!hasLogin">
          <a href="/login">管理员登录</a>
        </div>
        <div v-show="hasLogin">
          <el-avatar :size="30" :src="user.avatar"></el-avatar>
          <el-divider direction="vertical"></el-divider>
          <span>{{ user.username }}</span>
          <el-divider direction="vertical"></el-divider>
          <a style="color: rosybrown" @click="logout">退出</a>
        </div>
      </el-menu-item>

    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      user: {
        username: '请登录',
        avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
      },
      hasLogin: false
    }
  },
  methods: {
    logout() {
      this.$axios.get("/logout", {
        headers: {
          "Authorization": localStorage.getItem("token")
        }
      }).then(res => {
        this.$store.commit("REMOVE_INFO")
        this.$router.push("/")
      })
    }
  },
  created() {
    if (this.$store.getters.getUser.username) {
      this.user.username = this.$store.getters.getUser.username
      this.user.avatar = this.$store.getters.getUser.avatar
      this.hasLogin = true
    }
  }
}
</script>

<style scoped>
  a {
    text-decoration: none;
  }
  .menu-item-end {
    position: absolute;
    right: 10px;
  }
</style>