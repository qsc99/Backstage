<template>
    <div>
<Refresh />
<div class="content_li">
    <div class="screen">
                 <p>
                     <i><img src="../../assets/img/查找.png" alt=""></i>
                     <span>筛选查询</span>
                 </p>
                    <ul>
                        <li>
                            <span>输入搜素:</span>
                            <input type="text" placeholder="商品名称/商品货号">
                        </li>
                    </ul>
             </div>
             <dl class="ma">
                        <div class="text"></div>
                    </dl>
</div>
    </div>
</template>

<script>
import Refresh from './refresh'
    export default {
        name:'manage',
        components:{
             Refresh
        }
    }
</script>

<style lang="less">
    .ma{
        border: 1px solid #e4e4e4;
        margin-top: 20px;
        overflow: hidden;
    }
</style>