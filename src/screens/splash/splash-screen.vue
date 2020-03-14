<template>
    <div class="screen">
        <div class="logo-container">
        <md-icon class="md-size-4x">verified_user</md-icon>
        <h1>مدیریت سیستم بیمتون</h1>
        </div>
       <md-progress-spinner md-mode="indeterminate" md-theme="widget-theme" :md-diameter="50" :md-stroke="5"></md-progress-spinner>
    </div>
</template>

<script>
import {router} from "../../helpers" 

export default {
    name:"SplashScreen",
    data:function (){
        return {
            splash_time : 2000,
        }
    },
    mounted:function (){
        setInterval(
            function(){
                router.push('login')
            }.bind(this),this.splash_time
        )
    },
}
</script>

<style lang="css" scoped>
.splash{
    position: absolute;
}
.logo-container{
    text-align: center;
    color: white;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding-top: 120px; 
}
.md-icon{
    color:white !important;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0px;
}
.md-progress-spinner{
    position: absolute;
    bottom: 10%;
    left: 49%;
    direction: ltr;
}
.screen{
    width: 100vw;
    height: 100vh;
    background: #E9AB2E;
}

</style>