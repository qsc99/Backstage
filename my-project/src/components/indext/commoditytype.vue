<template>
    <div>
       <Refresh />
       <div class="content_li">
             <dl class="com">
                        <dt>
                            <i><img src="../../assets/img/列表.png" alt=""></i>
                            <span>数据列表</span>
                            <div class="add">添加</div>
                        </dt>
                        <div class="recovery_com">
                            <div>编号</div>
                            <div>类型名称</div>
                            <div>属性数量</div>
                            <div>参数数量</div>
                            <div>设置</div>
                            <div>操作</div>
                        </div>
                        <dd>
                            <div>1</div>
                            <div>服装</div>
                            <div>100</div>
                            <div>100</div>
                            <div>属性列表 参数列表</div>
                            <div>删除</div>
                        </dd>
                        <div class="block">
                            <el-pagination
                            background
                            :page-size="100"
                            layout="prev, pager, next, jumper"
                            :total="1000">
                            </el-pagination>
                        </div>
                    </dl>
        </div>
    </div>
</template>

<script>
import Refresh from './refresh'
    export default {
        name:'commoditytype',
        components:{
            Refresh
        }
    }
</script>

<style lang="less">
.content_li{
    .com{
        border: 1px solid #e4e4e4;
        margin-top: 20px;
        overflow: hidden;
        .recovery_com{
             height: 45px;
            text-align: center;
            border-right:1px solid #e4e4e4;
            font-size: 14px;
            color: #666666;
            background: #f9fafc;
            display: flex;
            justify-content: center;
            align-items: center;
            div{
                height: 45px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            div:nth-child(1){
                width: 14%;
                border-right:1px solid #e4e4e4;
            }
            div:nth-child(2){
                width: 16%;
                border-right:1px solid #e4e4e4;
            }
            div:nth-child(3){
                width: 16%;
                border-right:1px solid #e4e4e4;
            }
            div:nth-child(4){
                width: 16%;
                border-right:1px solid #e4e4e4;
            }
            div:nth-child(5){
                width: 21%;
                border-right:1px solid #e4e4e4;
            }
            div:nth-child(6){
                width: 18%;
            }
        }
        dd{
                width: 100%;
                height: 50px;
                text-align: center;
                border-right:1px solid #e4e4e4;
                border-top:1px solid #e4e4e4;           
                color: #666666;
                font-size: 14px;
                display: flex;
                justify-content: center;
                align-items: center;
                div{
                height: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            div:nth-child(1){
                width: 14%;
                border-right:1px solid #e4e4e4;
            }
            div:nth-child(2){
                width: 16%;
                border-right:1px solid #e4e4e4;
            }
            div:nth-child(3){
                width: 16%;
                border-right:1px solid #e4e4e4;
            }
            div:nth-child(4){
                width: 16%;
                border-right:1px solid #e4e4e4;
            }
            div:nth-child(5){
                width: 21%;
                border-right:1px solid #e4e4e4;
                color: #44C8AE;

            }
            div:nth-child(6){
                width: 18%;
                color: #44C8AE;
            }
        }
    }
   }
</style>