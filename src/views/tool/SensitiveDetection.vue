<template>
  <div>
    <el-container>
      <!--Header-->
      <el-header>
        <Header></Header>
      </el-header>

      <!--Main-->
      <div class="tool-box">
        <div>
          <el-form ref="form" :model="form">
            <h3 class="login-title">文本敏感度检测</h3>
            <el-form-item label="检测文本" prop="content">
              <el-input type="textarea" :rows="8" placeholder="请输入待检测文本..." v-model="form.content"/>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" round @click="getSensitivity">Go！</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div>
          <el-input type="textarea" :autosize="{minRows: 10}" v-model="message" readonly></el-input>
        </div>

      </div>

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
import Element from 'element-ui';

export default {
  name: "SensitiveDetection",
  components: {Header, Footer},
  data() {
    return {
      message: '',
      form: {
        content: ''
      }
    }
  },
  methods: {
    getSensitivity() {
      const _this = this
      let params = new URLSearchParams()
      params.append('content', _this.form.content)
      _this.$axios.post("/tools/sensitive", params).then(res => {
        Element.Message.success("获取文本敏感度成功！")
        _this.message = JSON.stringify(res.data, null, 4)
      },
      error => {
        Element.Message.warning("获取文本敏感度失败，服务器可能开小差啦！！")
      })
    }
  }
}
</script>

<style scoped>
  .tool-box {
    margin: 50px auto;
    width: 800px;
    text-align: center;
  }
</style>