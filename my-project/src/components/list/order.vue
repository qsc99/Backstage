<template>
   <dl class="thetitle">
        <dt>订单管理</dt>
        <router-link to="/">• 订单列表</router-link>
        <router-link to="/account">• 确认收货</router-link>
        <router-link to="/system">• 到货提醒</router-link>
        <router-link to="/logonlog">• 订单设置</router-link>
        <dt>退款及退货</dt>
        <router-link to="/">•  退货申请处理</router-link>
        <router-link to="/account">• 退款申请处理</router-link>
        <router-link to="/system">• 退货原因设置</router-link>
        
    </dl>
</template>

<script>
    export default {
        name:'order',
    }
</script>

<style scoped>

</style>