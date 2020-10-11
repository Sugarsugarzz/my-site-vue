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
                <p>欢迎来到Sugar的博客，有什么想说的就留在下面吧。</p>
                <el-divider></el-divider>
                <el-card class="message-box">
                  <el-avatar style="float: left" :size="60" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                  <div class="message">
                    <p style="font-size: small"><strong>昵称</strong></p>
                    <p style="font-size: 10px; line-height: 1; font-family: Arial">发表于：2020-10-11</p>
                    <p style="font-size: small">留言内容</p>
                  </div>
                </el-card>
              </el-card>

              <el-card>
                <el-form ref="messageForm" :model="messageForm" :rules="rules" label-width="80px">
                  <el-form-item label="昵称" style="max-width: 40%" prop="nickname">
                    <el-input v-model="messageForm.nickname"></el-input>
                  </el-form-item>
                  <el-form-item label="留言内容" prop="comment">
                    <el-input type="textarea" v-model="messageForm.comment"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="onMessageSubmit('messageForm')">发布留言</el-button>
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

export default {
  name: "Messages",
  components: {Header, Footer, LeftSide, RightSide, Blogs},
  data() {
    return {
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
    onMessageSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("发布成功！")
        } else {

        }
      });
    }
  }
}
</script>

<style scoped>
  .el-card {
    margin:10px 20px 20px 30px;
  }
  .message {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    padding: 5px 5px 5px 20px;
    float: right;
    width: 80%;
    margin: 0 15px 5px 5px;
  }
  .message-box {
    margin: 20px 5px 5px 5px;
  }
</style>