<template>
  <div>
    <ul>
      <li v-for="item in links" :key="item.text" ><a @click="$goRoute(item.route)">{{item.text}}</a></li>
    </ul>
    <el-button type="primary"> 默认按钮</el-button>
    <router-view></router-view>
    <el-button type="primary"></el-button>
    <!--<el-button-group>-->
      <!--<el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>-->
      <!--<el-button type="primary">下一页<i class="el-icon-arrow-right el-icon&#45;&#45;right"></i></el-button>-->
    <!--</el-button-group>-->
    <!--<el-button-group>-->
      <!--<el-button type="primary" icon="el-icon-edit"></el-button>-->
      <!--<el-button type="primary" icon="el-icon-share"></el-button>-->
      <!--<el-button type="primary" icon="el-icon-delete"></el-button>-->
    <!--</el-button-group>-->
    <!--<div class="block">-->
      <!--<span class="demonstration">默认不区分颜色</span>-->
      <!--<el-rate v-model="value1"></el-rate>-->
    <!--</div>-->
    <!--<div class="block">-->
      <!--<span class="demonstration">区分颜色</span>-->
      <!--<el-rate-->
        <!--v-model="value2"-->
        <!--:colors="['#99A9BF', '#F7BA2A', '#FF9900']">-->
      <!--</el-rate>-->
    <!--</div>-->


  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        value1: null,
        value2: null,
        links: [
          {
            text: '胡萝卜',
            route: '/home'
          },
          {
            text: '大白菜',
            route: '/page01'
          },
          {
            text: '水蜜桃',
            route: '/page02'
          },
          {
            text: 'menu',
            route: '/menu'
          },
          {
            text:'emitTest',
            route:'/emitTest'
          }
        ]
      }
    }
  }
</script>

<style>
  .text-center {
    text-align: center;
  }
  .spacing {
    margin-top: 30px;
  }
  .red {
    color: darkred;
  }
  ul li {
    display: inline-block;
    margin-right: 10px;
  }
  ul li a{
    display: inherit;
    padding: 5px 10px;
    border: 1px solid #ccc;
  }
  ul li a:hover{
    cursor: pointer;
    color: #fff;
    background-color: #138bec;
    border: 1px solid #138bec;
  }
</style>
