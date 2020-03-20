<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>


<style>
  *{
    padding: 0px;
    margin: 0px;
  }
  .screen{
    width: 100vw;
    height: 100vh;
    background: rgb(238, 238, 238);
  }
  .md-field label{
    right: 0;
  }
  .md-stepper-text{
     margin-right: 10px;
  }
</style>
<style lang="scss" src="./themes.scss" />
<style src="./fonts.css" />
