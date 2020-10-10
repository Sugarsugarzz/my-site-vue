<template>
  <div>
    <el-container>
      <!--Header-->
      <el-header>
        <Header></Header>
      </el-header>

      <!--Main-->
      <el-main>
        <div  class="m-blog" >
          <h2>{{ blog.title }}</h2>
          <el-link icon="el-icon-edit" v-show="ownBlog">
            <router-link :to="{name: 'BlogEdit', params: {blogId: blog.id}}">
              编辑
            </router-link>
          </el-link>
          <el-divider></el-divider>
          <div class="markdown-body" v-html="blog.content"></div>
        </div>
      </el-main>

      <!--Footer-->
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from "../components/Header"
import Footer from "../components/Footer"
import "github-markdown-css/github-markdown.css"

export default {
  name: "BlogDetail",
  components: {Header, Footer},
  data() {
    return {
      blog: {
        id: "",
        title: "",
        content: ""
      },
      ownBlog: false
    }
  },
  created() {
    const _this = this;
    const blogId = this.$route.params.blogId
    console.log(blogId)
    if (blogId) {
      this.$axios.get('/blog/' + blogId).then(res => {
        const blog = res.data.data
        _this.blog.id = blog.id
        _this.blog.title = blog.title
        // 对 markdown 进行渲染
        var MarkdownIt = require("markdown-it")
        var md = new MarkdownIt()
        var result = md.render(blog.content)
        _this.blog.content = result
        // 博客的userid等于当前用户id，才展示 编辑 按钮
        _this.ownBlog = (blog.userId === _this.$store.getters.getUser.id)
      })
    }
  }
}
</script>

<style scoped>
  .m-blog {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    width: 100%;
    min-height: 700px;
    padding: 20px 15px;
  }
</style>