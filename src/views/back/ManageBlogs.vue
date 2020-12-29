<template>
  <div>
    <el-container>
      <!--Header-->
      <el-header>
        <Header></Header>
      </el-header>

      <!--Main-->
      <el-main style="min-height: 700px">
        <el-row>
          <!--Left-->
          <el-col :span="4">
            <Sidebar></Sidebar>
          </el-col>

          <!--Middle-->
          <el-col :span="20">
            <div class="grid-content bg-purple-light" style="margin-left: 20px;">
              <el-button type="primary" @click="goAddBlog">发表博客</el-button>
              <el-divider></el-divider>

              <el-table :data="blogs" style="width: 100%">
                <el-table-column label="标题" width="180">
                  <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.title }}</span>
                  </template>
                </el-table-column>

                <el-table-column label="创建日期" width="180">
                  <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.created }}</span>
                  </template>
                </el-table-column>

                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button size="mini" @click="goEditBlog(scope.row.id)">编辑</el-button>
                    <el-button size="mini" type="danger" @click="deleteBlog(scope.row.title, scope.row.id)">删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
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
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/back/Sidebar";
import Element from "element-ui";

export default {
  name: "ManageBlogs",
  components: {Sidebar, Header, Footer},
  data() {
    return {
      blogs: {},
      currentPage: 1,
      total: 0,
      pageSize: 10
    }
  },
  methods: {
    goAddBlog() {
      this.$router.push("/blog/add")
    },
    goEditBlog(id) {
      this.$router.push("/blog/" + id + "/edit")
    },
    page(currentPage, pageSize) {
      this.$axios.get("/blogs?currentPage=" + currentPage + "&pageSize=" + pageSize).then(res => {
        this.blogs = res.data.data.records
        this.currentPage = res.data.data.current
        this.total = res.data.data.total
        this.pageSize = res.data.data.size
      })
    },
    deleteBlog(name, id) {
      const _this = this;
      _this.$confirm('是否确定删除 ' + name + ' 博客？', '确认信息', {
        distinguishCancelAndClose: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(() => {
        _this.$axios.post("/blog/delete/" + id).then(res => {
          Element.Message.success("博客删除成功！")
          _this.page(1, 10)
        })
      })
    }
  },
  created() {
    this.page(1, 10)
  }
}
</script>

<style scoped>
</style>