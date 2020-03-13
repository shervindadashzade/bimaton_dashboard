<template>
 <div class="menu md-elevation-5 md-primary">
     <MenuItem />
     <MenuItem />
     <MenuItem />
     <MenuItem />
 </div>    
</template>

<script>
import MenuItem from "./menu-item"
export default {
    name:"Menu",
    components:{
        MenuItem
    }
}
</script>

<style> 
.menu{
    background: #E9AB2E;
    width: 65px;
    height: 90vh;
    position: absolute;
    top: 7%;
    right: 0;
    z-index:1;
}
</style>