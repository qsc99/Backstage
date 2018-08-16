<template>
    <dl class="thetitle">
        <dt>用户管理</dt>
        <router-link to="/">• 用户列表</router-link>
        <router-link to="/account">• 购买力筛选</router-link>
        <router-link to="/system">• 标签管理</router-link>
        <router-link to="/logonlog">• 会员等级设置</router-link>
        <dt>成长值及优币</dt>
        <router-link to="/">• 成长值及优币查询</router-link>
        <router-link to="/account">• 任务奖励设置</router-link>
        <router-link to="/system">• 更多规则设置</router-link>
    </dl>
</template>

<script>
    export default {
        name:'user',
    }
</script>

<style scoped>

</style>