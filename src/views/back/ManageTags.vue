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
              <el-button type="primary" @click="addTag">添加标签</el-button>
              <el-divider></el-divider>
              <el-table :data="tags" style="width: 100%">
                <el-table-column label="标签名" width="180">
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
                    <el-button size="mini" type="danger" @click="deleteTag(scope.row.name, scope.row.id)">删除</el-button>
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
  name: "ManageTags",
  components: {Sidebar, Header, Footer},
  data() {
    return {
      tags: {},
      tagForm: {
        name: ''
      }
    }
  },
  methods: {
    getTags() {
      const _this = this;
      _this.$axios.get("/tags").then(res => {
        _this.tags = res.data.data
      });
    },
    addTag() {
      const _this = this
      _this.$prompt('请输入标签名', '添加标签', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(({ value }) => {
        _this.tagForm.name = value
        _this.$axios.post("/tag/add", _this.tagForm).then(() => {
          Element.Message.success("标签添加成功！")
          _this.getTags()
        })
      })
    },
    deleteTag(name, id) {
      const _this = this;
      _this.$confirm('是否确定删除 ' + name + ' 标签？', '确认信息', {
        distinguishCancelAndClose: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(() => {
        _this.$axios.post("/tag/delete/" + id).then(res => {
          Element.Message.success("标签删除成功！")
          _this.getTags()
        })
      })
    }
  },
  created() {
    this.getTags()
  }
}
</script>

<style scoped>

</style>