import Vue from 'vue'
import Router from 'vue-router'

import SplashScreen from "../screens/splash/splash-screen"
import LoginScreen from "../screens/login/login-screen"


Vue.use(Router)

// define our router
export const router = new Router({
    mode:"history",
    routes:[
        {path:"/",component:SplashScreen},
        {path:"/login",component:LoginScreen},
    ]
}
)

// check user is logedin for auth required pages
router.beforeEach((to,from,next)=>{
    const publicPages = ['/','/login'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');

    if(authRequired && !loggedIn){
        return next('/login');
    }

    next();
})