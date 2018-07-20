<template>
    <div>
      <button v-on:click="change">
        Click me to be welcomed
      </button>
    </div>
</template>

<script>
    export default {
        name: "child-emit",
        methods:{
            change(){
              this.$emit('welcome','加一个')
            },
        }

    }
</script>

<style scoped>

</style>
