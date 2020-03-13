<template>
   <div class="screen">
     <div class="md-layout">   
     <md-card>
      <md-card-header>
        <md-icon class="md-primary md-size-4x">account_circle</md-icon>
        <div class="md-title">ورود</div>
      </md-card-header>

      <md-card-content>
         <h3>با سلام</h3>

         به سامانه مدیریت بیمتون خوش آمدید لطفا نام کاربری و پسورد خود را وارد کنید
        <br>
        <br>
        <md-field>
      <label>نام کاربری</label>
      <md-input></md-input>
    </md-field>

    <md-field :md-toggle-password="false">
      <label>پسورد</label>
      <md-input type="password" ></md-input>
    </md-field>

    <md-checkbox class="md-primary" v-model="remember">مرا به خاطر بسپار</md-checkbox>

      </md-card-content>

      <md-card-actions>
        <md-button >فراموشی رمز عبور</md-button>
        <md-button class="md-raised md-primary">ورود</md-button>
      </md-card-actions>
    </md-card>
    </div>
    </div>
</template>

<script>
export default {
    name:"LoginScreen",
    data:function (){
      return{
        remember:false
      }
    }
}
</script>

<style scoped>
.screen{
  width: 100vw;
  height: 100vh;
  background: rgb(238, 238, 238);
}
 .md-layout{
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%,-50%);
 }
 .md-card{
   border-radius: 5px !important;
   padding: 10px;
 }
 .md-card-header{
     text-align: center;
     color: #E9AB2E;
     margin-bottom: 20px;
     padding-bottom: 30px;
 }
 .md-button:first-child{
   margin-left: 20px !important;
 }
</style>