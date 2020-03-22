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
        this.sendSMS('09127874128')
    },
}
</script>