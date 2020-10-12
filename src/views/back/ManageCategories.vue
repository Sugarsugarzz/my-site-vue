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
            <div class="grid-content bg-purple-light">
              <el-button type="primary" @click="addCategory">添加分类</el-button>
              <el-divider></el-divider>
              <el-table :data="categories" style="width: 100%">
                <el-table-column label="分类名" width="180">
                  <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.name }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="创建时间" width="180">
                  <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.created }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button size="mini" type="danger" @click="deleteCategory(scope.row.name, scope.row.id)">删除</el-button>
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
import Element from 'element-ui'

export default {
  name: "ManageCategories",
  components: {Sidebar, Header, Footer},
  data() {
    return {
      categories: {},
      categoryForm: {
        name: ''
      }
    }
  },
  methods: {
    getCategories() {
      const _this = this;
      _this.$axios.get("/categories").then(res => {
        _this.categories = res.data.data
      });
    },
    addCategory() {
      const _this = this
      _this.$prompt('请输入分类名', '添加分类', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(({ value }) => {
        _this.categoryForm.name = value
        _this.$axios.post("/category/add", _this.categoryForm).then(() => {
          Element.Message.success("分类添加成功！")
          _this.getCategories()
        })
      })
    },
    deleteCategory(name, id) {
      const _this = this;
      _this.$confirm('是否确定删除 ' + name + ' 分类？', '确认信息', {
        distinguishCancelAndClose: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(() => {
        _this.$axios.post("/category/delete/" + id).then(res => {
          Element.Message.success("分类删除成功！")
          _this.getCategories()
        })
      })
    }
  },
  created() {
    this.getCategories()
  }
}
</script>

<style scoped>

</style>