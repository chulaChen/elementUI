<template>
    <div class="header_container">
		<el-breadcrumb separator="/">
			<el-breadcrumb-item >首页</el-breadcrumb-item>
		</el-breadcrumb>
		<el-dropdown  menu-align='start'>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item command="home">首页</el-dropdown-item>
				<el-dropdown-item command="singout">退出</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
    </div>
</template>

<script>
    export default {
    	computed: {

    	},
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
	.avator{
		border-radius: 50%;
		margin-right: 37px;
	}
	.el-dropdown-menu__item{
        text-align: center;
    }
</style>
