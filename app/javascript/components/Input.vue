<template>
    <div>
        <p>{{ message }}</p>
        <input type="text" v-model="message">
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                message: ''
            }
        }
    }
</script>

<style scoped>
    p {
        font-size: 1em;
        text-align: left;
    }
</style>