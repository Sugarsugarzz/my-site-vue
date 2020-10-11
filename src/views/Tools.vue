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
                <p>工具箱</p>
                <el-divider></el-divider>
                <el-row :gutter="20">
                  <el-col :span="8">
                    <div class="grid-content bg-purple">
                      <div class="tool-card">
                        工具一
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="grid-content bg-purple">
                      <div class="tool-card">
                        工具二
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="grid-content bg-purple">
                      <div class="tool-card">
                        工具三
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="grid-content bg-purple">
                      <div class="tool-card">
                        工具四
                      </div>
                    </div>
                  </el-col>
                </el-row>
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
  name: "Tools",
  components: {Header, Footer, LeftSide, RightSide, Blogs},
}
</script>

<style scoped>
.el-card {
  margin:10px 20px 20px 30px;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.tool-card {
  width: 80%;
  height: 80px;
  box-shadow: 5px 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 10px 10px 10px 10px;
  margin: 10px 10px 10px 10px;
  text-align: center;
}
.tool-card:hover {
  background-color: #409EFF;
}
</style>