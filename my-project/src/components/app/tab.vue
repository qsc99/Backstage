<template>
    <div class="head">
        <div class="right">
            <div><img src="../../assets/img/笑脸、成功.png" alt=""></div>
            <h3 class="logo">优品汇</h3>
        </div>
        <ul class="cen">
                <router-link to="/">首页</router-link>
                <router-link to="/commodity/listofgoods">商品</router-link>
                <router-link to="/order">订单</router-link>
                <router-link to="/stock">库存</router-link>
                <router-link to="/user">用户</router-link>
                <router-link to="/promotion">促销</router-link>
                <router-link to="/operate">运营</router-link>
                <router-link to="/content">内容</router-link>
                <router-link to="/statistics">统计</router-link>
                <router-link to="/finance">财务</router-link>
                <router-link to="/setup">设置</router-link>
                <router-link to="/jurisdiction">权限</router-link>
        </ul>
        <ul class="left">
            <li class="user">
            <div class="uesr_head">
            <img src="../../assets/img/用户 (1).png" alt="">
            </div>
            <span class="uesr_name">123</span>
            </li>
            <li class="Icon">
                <div class="Icon_1">
                    <img src="../../assets/img/首页.png" alt="">
                </div>
            </li>
            <li class="Icon">
                    <div class="Icon_1">
                        <img src="../../assets/img/菜单.png" alt="">
                    </div>
            </li>
            <li class="Icon">
                    <div class="Icon_1">
                        <img src="../../assets/img/消息.png" alt="">
                    </div>
            </li>
            <li class="Icon">
                    <div class="Icon_1">
                        <img src="../../assets/img/退出.png" alt="">
                    </div>
            </li>    
        </ul>
    </div>
</template>

<script>
    export default {
        name:'Tab'
    }
</script>

<style lang="less">
    .head{
            width: 100%;
            height: 50px;
            background: #595E6C;           
           
        }
        .right{
            width: 110px;
            height: 100%;
            float: left;
        }
        .logo{
            font: 20px/50px "微软雅黑";
            text-indent: 5%;
            color: #fff;
        }
        .left{
            width: 30%;
            height: 100%;
            display: flex;
            flex-direction:row;
            justify-content: space-between;
            align-items: center ;
            float: right;
        }
        .user{
            width: 34%;
            height: 30px; 
            float: left;
        }
        .uesr_head{
            float: left;
            width: 30%;

        }
        .uesr_name{
            display: block;
            width: 70%;
            text-align: center;
            color: #fff;
            float: left;
            font:16px/30px "微软雅黑";
        }
        .Icon{
            width: 16%;
            border-left: 1px solid #999; 
            float: left;
        }
        .Icon_1{
            height: 20px;
            text-align: center;
        }
        
        .right div{
            width: 34px;
            height: 34px;
            float: left;
            margin-top: 7px;
            margin-left: 10px;  
        }
        .cen{
            width: 50%;
            height: 50px;
            float: left;
            a{
                width: 8%;
                height: 50px;
                text-align: center;
                color: #fff;
                font: 14px/50px "微软雅黑";
                float: left;
            }
        }
</style>