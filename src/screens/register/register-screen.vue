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
                 <md-input v-model="phone" maxlength="11" ></md-input>
                 <md-icon>phone</md-icon>
                </md-field>
                <md-button class="md-raised md-primary" @click="sendSMSSubmit()" :disabled="alert.isLoading">مرحله بعد</md-button>

                <md-progress-spinner v-if="alert.isLoading" style="margin-right: 20px; margin-top: 10px;" md-mode="indeterminate" :md-diameter="30" ></md-progress-spinner>
            </md-step>

            <md-step :md-editable="false" id="second" md-label="تایید شماره تلفن" :md-done.sync="second">
                <span>کد فعالسازی که از طریق sms برای شما ارسال شده است را وارد نمایید</span>
                <md-field :class="invalidClass" style="width:300px">
                 <label>کد فعالسازی</label>
                 <!--- TODO::set max for sms code -->
                 <md-input v-model="code" maxlength="8" ></md-input>
                </md-field>
                <md-button class="md-raised md-primary" @click="checkCodeSubmit()" >مرحله بعد</md-button>
                <md-progress-spinner v-if="alert.isLoading" style="margin-right: 20px; margin-top: 10px;" md-mode="indeterminate" :md-diameter="30" ></md-progress-spinner>
                <br>
                <span class="error" >{{ alert.message }}</span>
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
import { mapState,mapActions } from "vuex";
export default {
    name:'RegisterScreen',
    data:function (){
        return{
            active:'first',
            first:false,
            second:false,
            third:false,
            complete:false,
            phone: '',
            code:'',
        }
    },
    computed:{
        ...mapState({
            alert : state => state.alert
        }),
        invalidClass(){
            console.log(this.alert.type);
            if(this.alert.type == 'error'){
                return { 'md-invalid' : true }
            }else{
                return { }
            }
        }
    },
    methods: {
        ...mapActions('account',['sendSMS','checkCode']),
        setDone (id,index){
            if(this.alert.message == ''){
            this[id] = true
            if(index){
            this.active = index
            }
            if(id=='third')
            this.complete=true;
            }
        },
        sendSMSSubmit(){
            // TODO:: some vevalidate should
            this.sendSMS({phone:this.phone}).then(()=>{
                this.setDone('first','second');
            })
        },
        checkCodeSubmit(){
            this.checkCode({phone:this.phone,code:this.code}).then(()=>{
                this.setDone('second','third');
            })
        },
        
    },
}
</script>

<style scoped>
.error{
    color: #ff5252;
 }
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
 @media only screen and (max-width: 500px) {
     .container{
         width: 95%;
         top: 120px;
     }
 }
</style>