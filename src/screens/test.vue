<template>
    <div>
        <h1>TEST</h1>
    </div>
</template>

<script>
export default {
    name:'Test',
    created:function(){
        let data = {phone:"09362119480"}
        const requestOptions = {
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(data)
        };
        fetch("/users/checkCode",requestOptions).then(response=>{
            console.log(response)
        }).catch(e=>console.log(e))
    },
}
</script>