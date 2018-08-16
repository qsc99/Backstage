<template>
    <dl class="thetitle">
        <dt>财务报表</dt>
        <router-link to="/">• 综合统计</router-link>
        <router-link to="/account">•  会员排行</router-link>
        <router-link to="/system">• 销售统计</router-link>
        <dt>对账管理</dt>
        <router-link to="/">• 对账列表</router-link>
    </dl>
</template>

<script>
    export default {
        name:'finance',
    }
</script>

<style scoped>

</style>