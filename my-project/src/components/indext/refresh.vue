<template>
    <div class="na">
        <div class="na_left">
            账户设置
        </div>
        <div class="na_right">
            <div><img src="../../assets/img/刷新.png" alt=""></div>
            刷新
        </div>
    </div>
</template>

<script>
    export default {
        name:"refresh"
    }
</script>

<style lang='less'>
        .na{
            height: 50px;
            background: #F3F3F3;
            border-bottom:1px solid #ccc;         
            display: flex;
            flex-direction:row;
            justify-content: space-between;
            align-items: center ;
                .na_left{
                width: 20%;
                height: 18px;
                margin-left: 40px;
                text-indent: 7px;
                float: left;
                border-left: 7px solid #1ABC9C;
                color: #999999;
                font: 18px/18px "微软雅黑";
            }
                .na_right{
                width: 80px;
                height: 30px;
                background: #fff;
                float: right;   
                text-indent: 5px;
                text-align: center;
                cursor:pointer;
                margin-right:40px; 
                font: 14px/30px "微软雅黑";
                border: 1px solid #CCCCCC;
                color: #666666;
                    div{
                        width: 22px;
                        height: 22px;
                        margin-left: 5px;
                        float: left;
                        img{
                        margin-top: 5px;
                    }
                }
            }
        }
</style>