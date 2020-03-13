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

                <!-- TODO::should hide on small screens -->
                <div class="user-info">
                <md-avatar>
                    <md-icon>account_circle</md-icon>
                </md-avatar>
                <span>امیرحسین داداش زاده</span>
                </div>
                </div>
                
                <div class="md-toolbar-section-end">
                <md-button class="md-icon-button logout">
                    <md-icon>logout</md-icon>
                </md-button>
                </div>

                </div>
            </md-app-toolbar>

            <md-app-drawer class="md-right" :md-active.sync="drawer_toggle">
                <md-toolbar class="md-primary" md-elevation="0"></md-toolbar>
                 <md-list>
          <md-list-item @click="print('hi')">
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">بیمه های من</span>
          </md-list-item>

          <md-list-item @click="print('hi')">
            <md-icon>send</md-icon>
            <span class="md-list-item-text">پیام ها</span>
          </md-list-item>

          <md-list-item @click="print('hi')">
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">ادرس ها</span>
          </md-list-item>

          <md-list-item @click="print('hi')">
            <md-icon>error</md-icon>
            <span class="md-list-item-text">درباره ما</span>
          </md-list-item>
        </md-list>
            </md-app-drawer>
        </md-app>
    </div>
</template>

<script>
export default {
    name:"UserDashboard",
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
</style>