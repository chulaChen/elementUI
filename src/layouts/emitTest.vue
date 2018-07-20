<template>

  <div id="emit-example-simple">
    <child-Emit v-on:welcome="sayHi"></child-Emit>
  </div>

</template>

<script>
  import childEmit from './childEmit'
    export default {

        name: "emit-test",
        components: { childEmit },
        methods: {
          sayHi: function (e) {
            alert('Hi!'+e)
          }
        }
    }
</script>

<style scoped>

</style>
