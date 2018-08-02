<template>
    <div>
      <el-row>
          <el-col :span="4">
                <el-menu router
                  :default-active="defaultActive"
                         class="el-menu-vertical-demo"
                         @open="handleOpen"
                         @close="handleClose">
                    <el-submenu index="1">
                      <template slot="title"><i class="el-icon-plus"></i>用户管理</template>
                        <el-menu-item index="/userList">用户列表</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                      <template slot="title"><i class="el-icon-plus"></i>添加数据</template>
                      <el-menu-item index="/page01">添加商铺</el-menu-item>
                      <!--<el-menu-item index="addGoods">添加商品</el-menu-item>-->
                    </el-submenu>
                </el-menu>
          </el-col>
        <el-col :span="20" style="height: 100%;overflow: auto;">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </el-col>
      </el-row>

    </div>
</template>

<script>
    export default {
        name: "v-main",
        computed: {
          defaultActive: function(){
            return this.$route.path.replace('/', '');
          }
        },
        methods: {
          handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
            console.log(key, keyPath);
          }
        }

    }
</script>

<style scoped>

</style>
