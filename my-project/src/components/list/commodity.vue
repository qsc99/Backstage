<template>
   <dl class="thetitle">
       <dt>商品管理</dt>
        <router-link to="/commodity/listofgoods">• 商品列表</router-link>
        <router-link to="/commodity/recovery">• 商品回收站</router-link>
    <dt>商品配置</dt>
        <router-link to="/commodity/classification">• 商品分类</router-link>
        <router-link to="/commodity/commoditytype">• 商品类型</router-link>
        <router-link to="/commodity/manage">• 品牌管理</router-link>
   </dl>
</template>

<script>
    export default {
        name:'commodity'
    }
</script>

<style>

</style>