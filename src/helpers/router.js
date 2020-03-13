import Vue from 'vue'
import Router from 'vue-router'

import SplashScreen from "../screens/splash/splash-screen"
import LoginScreen from "../screens/login/login-screen"

import UserDashboard from "../screens/user-dashboard/user-dashboard"
import UserDashboardHome from "../screens/user-dashboard/home"
import UserDashboardInsurances from "../screens/user-dashboard/insurance"
import UserDashboardMessages from "../screens/user-dashboard/messages"
import UserDashboardReminders from "../screens/user-dashboard/reminders"
import UserDashboardSettings from "../screens/user-dashboard/settings"
import UserDashboardAddresses from "../screens/user-dashboard/addresses"
import CallUsScreen from "../components/callus"
import AboutUsScreen from "../components/aboutus"


Vue.use(Router)

// define our router
export const router = new Router({
    mode:"history",
    routes:[
        {path:"/",component:SplashScreen},
        {path:"/login",component:LoginScreen},
        { path:"/user_dashboard",component:UserDashboard,
        children:[
           {path:'/',component:UserDashboardHome},
           {path:'insurance',component:UserDashboardInsurances},
           {path:'messages',component:UserDashboardMessages},
           {path:'reminders',component:UserDashboardReminders},
           {path:'settings',component:UserDashboardSettings},
           {path:'addresses',component:UserDashboardAddresses},
           {path:'callus',component:CallUsScreen},
           {path:'aboutus',component:AboutUsScreen}
         ]},
    ]
}
)

// check user is logedin for auth required pages
router.beforeEach((to,from,next)=>{
    /* 
    const publicPages = ['/','/login','/user_dashboard','/user_dashboard/insurance'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');

    if(authRequired && !loggedIn){
        return next('/login');
    }
    */

    next();
})