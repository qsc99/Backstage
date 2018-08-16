<template>
    <dl class="thetitle">
        <dt>专题管理</dt>
        <router-link to="/">• 专题列表</router-link>
        <router-link to="/account">• 发布专题</router-link>
        <router-link to="/system">• 分类管理</router-link>
        <dt>优选主题</dt>
        <router-link to="/">• 优选列表</router-link>
    </dl>
</template>

<script>
    export default {
        name:'content',
    }
</script>

<style scoped>

</style>