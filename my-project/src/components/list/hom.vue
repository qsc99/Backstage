<template>
    <dl class="thetitle">
        <dt>系统首页</dt>
        <router-link to="/">• 系统首页</router-link>
        <router-link to="/account">• 账户设置</router-link>
        <router-link to="/system">• 系统信息</router-link>
        <router-link to="/logonlog">• 登录日志</router-link>
    </dl>
</template>

<script>
    export default {
        name:'List',
    }
</script>

<style lang="less">
.thetitle{
            width: 150px;
            height: 100vh;
            background: #EAEDF1;
            border-right: 1px solid #e4e4e4;
            display: flex;
            flex-direction:column;
            align-items: flex-end;  
        }
        .thetitle dt{
            width: 100%;
            height: 50px;
            color: #999999;
            line-height: 50px;
            font-size: 18px;
            border-bottom: 1px solid #e4e4e4;
            text-indent: 20%;
        }
        .thetitle a{
            width: 100%;
            height: 40px;
            color: #666666;
            line-height: 40px;
            font-size:14px; 
            border-bottom: 1px solid #e4e4e4;
            cursor:pointer;
            text-indent: 14%;
        }
</style>