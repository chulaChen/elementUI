<template>
    <div>
      <div>
        <head-top></head-top>
        <el-row>
          <el-col :span="4">
            &nbsp;
          </el-col>
          <el-col :span="20">
            <span>this is main page</span>
          </el-col>
        </el-row>
      </div>


    </div>
</template>

<script>
  import headTop from '../components/headTop.vue'
    export default {
        name: "mainRight",
        components: {
          headTop,
        },
        computed: {
          defaultActive: function(){
            return this.$route.path.replace('/', '');
          }
        },

        methods: {

        }

    }
</script>

<style scoped>

</style>
