<template>
  <div id="app">
    <SplashScreen v-if="splash_toggle" />
  </div>
</template>

<script>
import SplashScreen from "./components/screens/splash-screen";

export default {
  name: 'App',
  components: {
   SplashScreen,
  },
  data:function(){
    return{
      time:2000,
      splash_toggle:true,
    }
  },
  mounted(){
    setInterval(function(){
      this.splash_toggle = false;
    }.bind(this),this.time);
  },
}
</script>

<style lang="scss" src="./themes.scss" />
<style src="./fonts.css" />

<style>
  *{
    padding: 0px;
    margin: 0px;
  }
</style>
