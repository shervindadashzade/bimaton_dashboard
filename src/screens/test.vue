<template>
    <div>
        <h1>TEST</h1>
    </div>
</template>

<script>
import config from "../config.js"

export default {
    name:'Test',
    created:function(){
        /** 
        let data = {phone:"09362119480"}
        const requestOptions = {
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(data)
        };
        */
       console.log(config);
    },
}
</script>