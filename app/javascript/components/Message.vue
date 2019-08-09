<template>
    <div>
        <h3>This is just a message</h3>
        <app-input></app-input>
    </div>
</template>

<script>
    import Input from './Input.vue';
    export default {
        components: {
            'app-input': Input
        }
    }
</script>

<style scoped>
    p {
        font-size: 2em;
        text-align: left;
    }
</style>