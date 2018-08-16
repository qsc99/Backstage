<template>
    <dl class="thetitle">
        <dt>消息查询</dt>
        <router-link to="/">• 系统消息</router-link>
        <router-link to="/account">• 短信消息</router-link>
        <router-link to="/system">• 站内信消息</router-link>
        <router-link to="/system">• APP推送消息</router-link>
        <dt>其它查询</dt>
        <router-link to="/">• 优惠券查询</router-link>
        <router-link to="/account">• 邀请好友查询</router-link>
        <router-link to="/account">• 幸运抽奖查询</router-link>
        <dt>广告管理</dt>
        <router-link to="/">• 广告列表</router-link>
        <router-link to="/account">• 添加广告</router-link>
    </dl>
</template>

<script>
    export default {
        name:'Operate',
    }
</script>

<style scoped>

</style>