<template>
    <div class="page-container">
        <md-app md-mode="reveal">
            <md-app-toolbar class="md-primary">
                <div class="md-toolbar-row">
                
                <div class="md-toolbar-section-start">
                <md-button class="md-icon-button" @click="menu_toggle">
                    <!-- TODO::should show in small screen -->
                    <md-icon>menu</md-icon>
                </md-button>
                <span class="md-title">پنل مدیریت </span>
                </div>
                
                <div class="md-toolbar-section-end">
                <md-button class="md-icon-button logout">
                    <md-icon>logout</md-icon>
                </md-button>
                </div>

                </div>
            </md-app-toolbar>

            <md-app-drawer class="md-right" :md-active.sync="drawer_toggle">
                <div class="drawer-header">
                    <md-avatar class="user-pic md-large">
                        <md-icon>account_circle</md-icon>
                    </md-avatar>
                    <h3>امیرحسین داداش زاده</h3>
                    <h4>shervin.dadashzade@gmail.com</h4>
                </div>
                 <md-list>
          <md-list-item @click="print('hi')">
            <md-icon>shopping_cart</md-icon>
            <span class="md-list-item-text">بیمه های من</span>
          </md-list-item>

          <md-list-item @click="print('hi')">
            <md-icon>inbox</md-icon>
            <span class="md-list-item-text">پیام ها</span>
          </md-list-item>

          <md-list-item @click="print('hi')">
            <md-icon>my_location</md-icon>
            <span class="md-list-item-text">ادرس ها</span>
          </md-list-item>

          <md-list-item @click="print('hi')">
            <md-icon>timer</md-icon>
            <span class="md-list-item-text">یادآورها</span>
          </md-list-item>
          
          <md-list-item @click="print('hi')">
            <md-icon>settings</md-icon>
            <span class="md-list-item-text">تنظیمات</span>
          </md-list-item>

          <md-list-item @click="print('hi')">
            <md-icon>phone</md-icon>
            <span class="md-list-item-text">تماس با ما</span>
          </md-list-item>

          <md-list-item @click="print('hi')">
            <md-icon>error</md-icon>
            <span class="md-list-item-text">درباره ما</span>
          </md-list-item>
        </md-list>
            </md-app-drawer>

            <md-app-content>
            </md-app-content>
        </md-app>
    </div>
</template>

<script>
export default {
    name:"UserDashboard",
    components:{
    },
    data:function (){
        return{
            drawer_toggle:false,
        }
    },
    methods:{
        menu_toggle(){
          this.drawer_toggle = ! this.drawer_toggle;  
        },
        print(str){
            console.log(str);
        }
    },
}
</script>

<style scoped>
.md-app{
    height: 100vh;
}
.md-title{
    margin-right: 10px !important;
}
.md-drawer{
    width: 300px;
}
.md-app-toolbar{
    color: white;
}
.md-app-drawer .md-toolbar{
    height: 150px;
}
.md-list-item .md-icon{
    margin-left: 20px;
}
.drawer-header{
    background: #E9AB2E;
    text-align: center;
    height: 160px;
    color: rgb(53, 53, 53);
}
.user-pic{
    margin-top: 20px;
}
.drawer-header h4{
    font-weight: normal;
    font-size: 13px;
    margin-bottom: 5px;
}
.drawer-header h3{
    margin-bottom: 15px;
}
</style>