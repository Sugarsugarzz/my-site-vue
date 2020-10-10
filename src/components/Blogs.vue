<template>
  <div>

    <div class="m-block" v-for="blog in blogs">
      <el-card>
        <h4>
          <router-link :to="{name: 'BlogDetail', params: {blogId: blog.id}}">
            {{ blog.title }}
          </router-link>
        </h4>
        <p>{{ blog.created}}</p>
        <p>{{ blog.description }}</p>
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
      pageSize: 5
    }
  },
  methods: {
    page(currentPage) {
      this.$axios.get("/blogs?currentPage=" + currentPage).then(res => {
        console.log(res)
        this.blogs = res.data.data.records
        this.currentPage = res.data.data.currentPage
        this.total = res.data.data.total
        this.pageSize = res.data.data.size
      })
    }
  },
  created() {
    this.page(1)
  }
}
</script>

<style scoped>
  .m-block {
    margin:10px 20px 20px 30px;
  }
  .m-page {
    margin: 0 auto;
    text-align: center;
  }
</style>