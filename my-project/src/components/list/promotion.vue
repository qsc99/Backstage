<template>
    <dl class="thetitle">
        <dt>秒杀专区</dt>
        <router-link to="/">• 秒杀活动列表</router-link>
        <router-link to="/account">• 时间段列表</router-link>
        <router-link to="/system">• 秒杀提醒通知</router-link>
        <dt>优惠券管理</dt>
        <router-link to="/">• 优惠券列表</router-link>
        <router-link to="/account">• 添加优惠券</router-link>
        <dt>活动管理</dt>
        <router-link to="/">• 活动列表</router-link>
        <router-link to="/account">• 添加活动</router-link>
    </dl>
</template>

<script>
    export default {
        name:'promotion'
    }
</script>

<style scoped>

</style>