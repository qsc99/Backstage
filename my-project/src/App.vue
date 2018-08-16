<template>
  <el-container>
  <el-header style="height: none; padding: 0; "><Tab></Tab></el-header>
  <el-container>
    <el-aside  style="width: npne;"><router-view name="left"></router-view></el-aside>
    <el-main style="padding: 0;"> <router-view/></el-main>
  </el-container>
</el-container>
</template>

<script>

import Tab from './components/app/tab';

export default {
  name: 'App',
  components: {
    Tab,
  }
}
</script>

<style>
@import"./components/public/public.css";
</style>
