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
                        <dt>
                            <i><img src="../../assets/img/列表.png" alt=""></i>
                            <span>数据列表</span>
                            <div class="add">添加</div>
                        </dt>
                        <div class="recovery_man">
                            <div><el-checkbox></el-checkbox></div>
                            <div>编号</div>
                            <div>品牌名称</div>
                            <div>品牌首字母</div>
                            <div>排序</div>
                            <div>是否显示</div>
                            <div>相关</div>
                            <div>操作</div>
                        </div>
                        <dd>
                            <div><el-checkbox></el-checkbox></div>
                            <div>1</div>
                            <div>Victoria's Secret</div>
                            <div>V</div>
                            <div>100</div>
                            <div><el-switch
                                v-model="value2"
                                active-color="#13ce66"
                                inactive-color="#ff4949">
                                </el-switch></div>
                            <div>
                                <span>商品:</span>
                                <i> 100</i>
                            </div>
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
        name:'manage',
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

<style lang="less">
.content_li{
    .ma{
        border: 1px solid #e4e4e4;
        margin-top: 20px;
        overflow: hidden;
        .recovery_man{
            height: 45px;
            text-align: center;
            border-right:1px solid #e4e4e4;
            border-bottom:1px solid #e4e4e4;
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
                width: 10%;
                border-right:1px solid #e4e4e4;
            }
            div:nth-child(2){
                width: 10%;
                border-right:1px solid #e4e4e4;
            }
            div:nth-child(3){
                width: 18%;
                border-right:1px solid #e4e4e4;
            }
            div:nth-child(4){
                width: 11%;
                border-right:1px solid #e4e4e4;
            }
            div:nth-child(5){
                width: 11%;
                border-right:1px solid #e4e4e4;
            }
            div:nth-child(6){
                width: 12%;
                border-right:1px solid #e4e4e4;
            }
            div:nth-child(7){
                width: 15%;
                border-right:1px solid #e4e4e4;
            }
            div:nth-child(8){
                width: 13%;
            }
        }
        dd{
            height: 45px;
            div{
                height: 45px;
            }
             div:nth-child(1){
                width: 10%;
            }
            div:nth-child(2){
                width: 10%;
            }
            div:nth-child(3){
                width: 18%;
            }
            div:nth-child(4){
                width: 11%;
            }
            div:nth-child(5){
                width: 11%;
            }
            div:nth-child(6){
                width: 12%;
            }
            div:nth-child(7){
                width: 15%;
                i{
                  color: #44C8AE;
                  margin-left:5px; 
                }
            }
            div:nth-child(8){
                width: 13%;
            }
        }
    }
}    
</style>