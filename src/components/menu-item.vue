<template>
    <div class="menu-item">
        <md-ripple>
        <md-icon>inbox</md-icon>
        <span>ورودی ها</span>
        </md-ripple>
    </div>
</template>

<script>
export default {
    name:'MenuItem',
    data:function(){
        return{
            show:true,
        }
    },
    methods:{
        toggle_show(){
            this.show = !this.show;
        }
    }
}
</script>

<style scoped>
.menu-item{
    background: #E9AB2E;
    width: 65px;
    height: 65px;
    cursor: pointer;
    transition: .3s;
    overflow: hidden;
    display: inline-flex;
}
.menu-item:hover{
    background: rgb(255, 255, 255);
    width: 170px;
}
.menu-item:hover span{
}
span{
    font-size: 16px;
    margin-right: 50px;
}
.md-icon{
    color: black !important;
}
.md-ripple{
    margin: 0px;
    padding: 20px;
}
</style>