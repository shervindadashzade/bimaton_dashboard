<template>
    <div class="screen">
        <div class="header md-elevation-7">
                <h1>عضویت</h1>
            <span>برای عضویت در بیمتون چند مرحله ساده زیر را بگذرونید</span>
            </div>
        <div class="container md-elevation-7">
        <md-steppers :md-active-step.sync="active" md-vertical md-linear>
            <md-step :md-editable="false" id="first" md-label="شماره تلفن" :md-done.sync="first">
                <span>شماره تلفن خود را به صورت کامل وارد نمایید</span>
                <md-field style="width:300px">
                 <label>شماره تلفن</label>
                 <md-input maxlength="11" ></md-input>
                 <md-icon>phone</md-icon>
                </md-field>
                <md-button class="md-raised md-primary" @click="setDone('first','second')">مرحله بعد</md-button>
            </md-step>

            <md-step :md-editable="false" id="second" md-label="تایید شماره تلفن" :md-done.sync="second">
                <span>کد فعالسازی که از طریق sms برای شما ارسال شده است را وارد نمایید</span>
                <md-field style="width:300px">
                 <label>کد فعالسازی</label>
                 <!--- TODO::set max for sms code --->
                 <md-input maxlength="8" ></md-input>
                </md-field>
                <md-button class="md-raised md-primary" @click="setDone('second','third')">مرحله بعد</md-button>
            </md-step>
            <md-step :md-editable="false" id="third" md-label="وارد کردن اطلاعات" :md-done.sync="third">
                <div v-if="!complete">
                <span>اطلاعات خواسته شده را وارد نمایید</span>
            <md-field style="width:300px">
                 <label>نام</label>
                 <md-input></md-input>
            </md-field>

            <md-field style="width:300px">
                 <label>نام خانوادگی</label>
                 <md-input></md-input>
            </md-field>

            <md-field style="width:300px">
                 <label>ایمیل</label>
                 <md-input></md-input>
            </md-field>
            
            <md-button class="md-raised md-primary" @click="setDone('third')">تایید</md-button>
            </div>
            <div v-if="third">
            <br>
            <md-icon class="md-accent md-size-2x">how_to_reg</md-icon>
            <span>تبریک شما با موفقیت ثبت نام شدید</span>
            <br>
            <br>
            <md-button class="md-accent">برو به صفحه ورود</md-button>
            </div>
            </md-step>
            
        </md-steppers>
        </div>
    </div>
    
</template>

<script>
export default {
    name:'RegisterScreen',
    data:function (){
        return{
            active:'first',
            first:false,
            second:false,
            third:false,
            complete:false,
        }
    },
    methods: {
        setDone (id,index){
            this[id] = true
            if(index){
            this.active = index
            }
            if(id=='third')
            this.complete=true;
        }
        
    }
}
</script>

<style scoped>
 .container{
     background: white;
     width: auto;
     position: absolute;
     left: 50%;
     top: 200px;
     transform: translate(-50%);
     padding: 30px;
     border-radius: 10px;
 }
 .header{
     background: #E9AB2E;
     padding: 20px;
     text-align: center;
 }
 .header h1{
     text-align: center;
     margin-bottom: 20px;
     color: white;
 }
</style>