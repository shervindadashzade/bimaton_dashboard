<template>
    <div>
        <h1>TEST</h1>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name:'Test',
    methods:{
        ...mapActions('account',['sendSMS','checkCode']),

    },
    created:function(){
        this.checkCode({phone:'0912',code:'4979'})
    },
}
</script>