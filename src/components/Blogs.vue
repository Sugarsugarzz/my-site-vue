<template>
  <div>
    <div>
      <el-card class="box-card m-block" v-for="blog in blogs">
        <div slot="header" class="clearfix">
          <router-link tag="a" :to="{name: 'BlogDetail', params: {blogId: blog.id}}">
            {{ blog.title }}
          </router-link>
          <div style="float: right; font-family: Arial; font-size: small">
            <i class="el-icon-date"></i>
            发布于：{{ blog.created }}
          </div>
        </div>
        <div class="text item desc">
          <p>{{ blog.description }}</p>
        </div>
      </el-card>
    </div>

    <el-pagination class="m-page"
                   background
                   layout="prev, pager, next"
                   :current-page="currentPage"
                   :page-size="pageSize"
                   :total="total"
                   @current-change=page>
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "Blogs",
  data() {
    return {
      blogs: {},
      currentPage: 1,
      total: 0,
      pageSize: 6
    }
  },
  methods: {
    page(currentPage, pageSize) {
      this.$axios.get("/blogs?currentPage=" + currentPage + "&pageSize=" + pageSize).then(res => {
        this.blogs = res.data.data.records
        this.currentPage = res.data.data.current
        this.total = res.data.data.total
        this.pageSize = res.data.data.size
      })
    }
  },
  created() {
    this.page(1, 6)
  }
}
</script>

<style scoped>
  a {
    text-decoration: none;
  }
  .m-block {
    margin:10px 20px 20px 30px;
  }
  .m-page {
    margin: 0 auto;
    text-align: center;
  }
  .desc {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>