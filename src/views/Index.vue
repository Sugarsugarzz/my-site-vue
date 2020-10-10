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
              <Blogs></Blogs>
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
import LeftSide from "../components/LeftSide"
import RightSide from "../components/RightSide"
import Blogs from "../components/Blogs"
export default {
  name: "Index",
  components: {Header, Footer, LeftSide, RightSide, Blogs},
}
</script>

<style scoped>

</style>