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

          <!--Middle-->
          <el-col :span="19">
            <div class="grid-content bg-purple-light">
              <el-card>
                <div style="text-align: center">
                  <p>欢迎来到Sugar的博客，有什么想说的就留在下面吧。</p>
                </div>
                <el-divider></el-divider>
                <el-card class="message-box" v-for="message in messages">
                  <el-row>
                    <el-col :span="1">
                      <div class="grid-content bg-purple">
                        <el-avatar style="float: left" :size="60" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                      </div>
                    </el-col>
                    <el-col :span="23">
                      <div class="grid-content bg-purple-light">
                        <div class="message">
                          <p style="font-size: small">
                            <strong>{{ message.nickname }}</strong><br>
                            <span style="font-size: 10px; line-height: 1; font-family: Arial">发表于：{{ message.created }}</span>
                          </p>
                          <p style="font-size: small">{{ message.comment }}</p>
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                </el-card>
              </el-card>

              <el-pagination class="m-page"
                             background
                             layout="prev, pager, next"
                             :current-page="currentPage"
                             :page-size="pageSize"
                             :total="total"
                             @current-change=page>
              </el-pagination>

              <el-card>
                <el-form ref="messageForm" :model="messageForm" :rules="rules" label-width="80px">
                  <el-form-item label="昵称" style="max-width: 40%" prop="nickname">
                    <el-input v-model="messageForm.nickname"></el-input>
                  </el-form-item>
                  <el-form-item label="留言内容" prop="comment">
                    <el-input type="textarea" v-model="messageForm.comment"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="onSubmit('messageForm')">发布留言</el-button>
                  </el-form-item>
                </el-form>
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
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
import Blogs from "@/components/Blogs";
import Element from 'element-ui'

export default {
  name: "Messages",
  components: {Header, Footer, LeftSide, RightSide, Blogs},
  data() {
    return {
      messages: {},
      currentPage: 1,
      total: 0,
      pageSize: 10,
      messageForm: {
        nickname: '',
        comment: '',
      },
      rules: {
        nickname: [
          { required: true, message: '请输入昵称', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
        ],
        comment: [
          { required: true, message: '请输入留言内容', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit(formName) {
      const _this = this;
      _this.$refs[formName].validate((valid) => {
        if (valid) {
          _this.$axios.post("/message/add", _this.messageForm).then(res => {
            Element.Message.success("留言发布成功！")
            _this.page(1)
            _this.resetForm(formName)
          })
        } else {
          return false;
        }
      });
    },
    page(currentPage, pageSize) {
      const _this = this;
      _this.$axios.get("/messages?currentPage=" + currentPage + "&pageSize=" + pageSize).then(res => {
        _this.messages = res.data.data.records
        _this.currentPage = res.data.data.current
        _this.total = res.data.data.total
        _this.pageSize = res.data.data.size
      })
    },
    resetForm(formName) {
      const _this = this;
      this.$refs[formName].resetFields();
    }
  },
  created() {
    this.page(1, 10)
  }
}
</script>

<style scoped>
  .el-card {
    margin:10px 20px 20px 30px;
  }
  .m-page {
    margin: 0 auto;
    text-align: center;
  }
  .message {
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.1);
    padding: 5px 5px 5px 20px;
    float: right;
    width: 88%;
  }
  .message-box {
    margin: 20px 5px 5px 5px;
  }
</style>