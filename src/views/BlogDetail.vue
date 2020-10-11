<template>
  <div>
    <el-container>
      <!--Header-->
      <el-header>
        <Header></Header>
      </el-header>

      <!--Main-->
      <el-main>
        <el-row>
          <!--Left-->
          <el-col :span="5">
            <div class="grid-content bg-purple">
              <LeftSide></LeftSide>
            </div>
          </el-col>

          <!--Middle-->
          <el-col :span="14">
            <div class="grid-content bg-purple-light">
              <el-card>
                <h2>{{ blog.title }}</h2>
                <el-link icon="el-icon-edit" v-show="ownBlog">
                  <router-link tag="span" :to="{name: 'BlogEdit', params: {blogId: blog.id}}">
                    编辑
                  </router-link>
                </el-link>
                <el-divider>
                  <i class="el-icon-date"></i>
                  发布于：{{ blog.created }}
                </el-divider>
                <div class="markdown-body" v-html="blog.content"></div>
              </el-card>
            </div>
          </el-col>

          <!--Right-->
          <el-col :span="5">
            <div class="grid-content bg-purple">
              <RightSide></RightSide>
            </div>
          </el-col>
        </el-row>

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
import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
import "github-markdown-css/github-markdown.css"

export default {
  name: "BlogDetail",
  components: {Header, Footer, LeftSide, RightSide},
  data() {
    return {
      blog: {
        id: "",
        title: "",
        content: "",
        created: "",
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
        _this.blog.created = blog.created
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
  .el-card {
    margin:10px 20px 20px 30px;
  }
</style>