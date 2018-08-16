<template>
    <dl class="thetitle">
        <dt>平台设置</dt>
        <router-link to="/">• 平台信息</router-link>
        <router-link to="/account">•  基本设置</router-link>
        <router-link to="/system">• 消息提醒</router-link>
        <router-link to="/system">• 验证码设置</router-link>
        <dt>支付配送</dt>
        <router-link to="/">• 运费模板</router-link>
    </dl>
</template>

<script>
    export default {
        name:'setup',
    }
</script>

<style scoped>

</style>