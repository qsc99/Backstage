<template>
    <div>
       <Refresh />
       <div class="content_li">
             <dl class="cla">
                        <dt>
                            <i><img src="../../assets/img/列表.png" alt=""></i>
                            <span>数据列表</span>
                            <div class="add">添加</div>
                        </dt>
                        <div class="recovery_cl">
                            <div>编号</div>
                            <div>分类名称</div>
                            <div>级别</div>
                            <div>商品数量</div>
                            <div>数量单位</div>
                            <div>是否显示</div>
                            <div>排序</div>
                            <div>设置</div>
                            <div>操作</div>
                        </div>
                        <dd>
                            <div>1</div>
                            <div>服装</div>
                            <div>一级</div>
                            <div>100</div>
                            <div>件</div>
                            <div>
                                <el-switch
                                v-model="value2"
                                active-color="#13ce66"
                                inactive-color="#ff4949">
                                </el-switch>
                            </div>
                            <div>1</div>
                            <div>查看下级 转移商品</div>
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
        name:'classification',
        components:{
            Refresh
        },
        data() {
            return {
                value1: true,
                value2: true
            }
        }
    }
</script>

<style lang='less'>
        .add{
            text-align: center;
            border: 1px solid #e4e4e4;
            width: 80px;
            height: 30px;
            float: right;
            margin-top: 10px;
            margin-right: 20px;
            font: 14px/30px "微软雅黑";
            color: #666;
            background: #fff; 
        }
        .recovery_cl{
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
                width: 9%;
                border-right:1px solid #e4e4e4;
            }
            div:nth-child(2){
                width: 11%;
                border-right:1px solid #e4e4e4;
            }
            div:nth-child(3){
                width: 11%;
                border-right:1px solid #e4e4e4;
            }
            div:nth-child(4){
                width: 10%;
                border-right:1px solid #e4e4e4;
            }
            div:nth-child(5){
                width: 14%;
                border-right:1px solid #e4e4e4;
            }
            div:nth-child(6){
                width: 11%;
                border-right:1px solid #e4e4e4;
            }
            div:nth-child(7){
                width: 11%;
                border-right:1px solid #e4e4e4;
            }
            div:nth-child(8){
                width: 19%;
                border-right:1px solid #e4e4e4;
            }
            div:nth-child(9){
                width: 10%;
            }
        }
        .content_li{
        .cla{
            border: 1px solid #e4e4e4;
            margin-top: 20px;
            overflow: hidden;
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
                    width: 9%;
                    border-right:1px solid #e4e4e4;
                }
                div:nth-child(2){
                    width: 11%;
                    border-right:1px solid #e4e4e4;
                }
                div:nth-child(3){
                    width: 11%;
                    border-right:1px solid #e4e4e4;
                }
                div:nth-child(4){
                    width: 10%;
                    border-right:1px solid #e4e4e4;
                }
                div:nth-child(5){
                    width: 14%;
                    border-right:1px solid #e4e4e4;
                }
                div:nth-child(6){
                    width: 11%;
                    border-right:1px solid #e4e4e4;
                }
                div:nth-child(7){
                    width: 11%;
                    border-right:1px solid #e4e4e4;     
                }
                div:nth-child(8){
                    width: 19%;
                    border-right:1px solid #e4e4e4;
                }
                div:nth-child(9){
                    width: 10%;
                    color: #44C8AE;
                }
            }
        }
    }   
    .is-checked{
        width: 100% !important;
            border-right: none !important;
    }
    .el-switch{
        width: 100% !important;
            border-right: none !important;
    }
</style>