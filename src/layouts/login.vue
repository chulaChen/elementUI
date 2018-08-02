<template>
  <div>
    <el-container style="height: 600px;">
      <el-aside width="200px"></el-aside>
      <el-container>
        <el-header>elementUI 测试</el-header>
        <!--<el-aside width="200px"></el-aside>-->
        <el-main>
          <section class="content ">
            <el-row>
              &nbsp;
            </el-row>
            <el-col :span="8">
              &nbsp;
            </el-col>
            <el-col :span="8">
              <div :span="24" class="pull-right loginFrame" >
                <el-form :model="form" ref="form" :span="8" label-width="100px">
                  <div class="row">
                    <el-form-item label="登录名">
                      <el-col>
                        <el-input v-model="form.loginName"></el-input>
                      </el-col>
                    </el-form-item>
                  </div>
                  <el-form-item label="密码" >
                    <el-col >
                      <el-input v-model="form.pwd"></el-input>
                    </el-col>
                  </el-form-item>
                  <el-form-item>
                    <el-col :span="8">
                      <el-button type="primary" v-on:click="submit" >提交</el-button>
                    </el-col>
                  </el-form-item>
                </el-form>
              </div>
            </el-col>
          </section>
        </el-main>
        <el-footer></el-footer>
      </el-container>
    </el-container>

  </div>
</template>

<script>
  export default {
    name: 'v-login',
    data () {
      return {
        form:{
          loginName:'',
          pwd:'',
        },
      }
    },
    methods:{
      submit:function () {
        console.log("hhhahhaha");
        // this.$store.dispatch('menu')
        this.$router.push('main')
      }

    },
  }
</script>

<style scoped>
  .el-header, .el-footer {
    /*background-color: #B3C0D1;*/
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    /*background-color: #B3C0D1;*/
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .loginFrame{
    background-color: #B3C0D1;
    padding: 50px 30px 5px 0px;
  }
  .el-main {
    /*background-color: #E9EEF3;*/
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .el-container{
    background-color: #E9EEF3;
  }

  body > .el-container {
    background-color: #E9EEF3;
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
