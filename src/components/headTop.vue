<template>
  <div>
    <div class="header_container">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/main' }">首页</el-breadcrumb-item>
        <!--<el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>-->
      </el-breadcrumb>

      <el-dropdown  >
        <span class="el-dropdown-link">
          test<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <!--<el-dropdown-item command="home">首页</el-dropdown-item>-->
          <el-dropdown-item command="singout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>

</template>

<script>
    export default {
      methods: {
      },
    }
</script>

<style >
	.header_container{
		background-color: #EFF2F7;
		height: 60px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 20px;
	}

</style>
