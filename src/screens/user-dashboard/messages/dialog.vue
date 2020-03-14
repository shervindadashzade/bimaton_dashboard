<template>
    <div>
        <md-dialog :md-click-outside-to-close="false" :md-active.sync="toggle">
            <md-dialog-title>{{ message.title }}</md-dialog-title>
            <md-content>
                {{ message.content }}
            </md-content>
            <md-dialog-actions>
                <md-button class="md-accent" @click="close()">بستن</md-button>
            </md-dialog-actions>
        </md-dialog>
    </div>
</template>

<script>
export default {
    name:"MessageDialog",
    props:{
        toggle:Boolean,
        message:Object,
    },
    methods:{
        close(){
            this.$emit('close',0);
        }
    }
}
</script>

<style scoped>
.md-dialog{
    padding: 30px !important;
    border-radius: 5px;
}
</style>