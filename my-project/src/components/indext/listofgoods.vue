<template>
    <div id="conn">
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
                        <li>
                            <span>商品分类:</span>
                            <input type="text" placeholder="请选择商品分类">
                        </li>
                        <li>
                            <span>商品品牌:</span>
                            <input type="text" placeholder="请选择品牌">
                        </li>
                    </ul>
                    
             </div>
             <dl>
                <dt>
                    <i><img src="../../assets/img/列表.png" alt=""></i>
                    <span>数据列表</span>
                </dt>
                <div class="text">
                    <div class="choose"><el-checkbox></el-checkbox></div>
                    <div class="number">编号</div>
                    <div class="picture">商品图片</div>
                    <div class="name">商品名称</div>
                    <div class="price">价格</div>
                    <div class="sort">排序</div>
                    <div class="salesvolume">销量</div>
                    <div class="operation">操作</div>
                </div>
                <dd>
                    <div><el-checkbox></el-checkbox></div>
                    <div>1000001</div>
                    <div><img src="../../assets/img/5b5ca4d2N58e5d747.jpg" alt=""></div>
                    <div>HLA海澜之家净色中腰休闲裤2018秋季新</div>
                    <div>价格：¥100.00</div>
                    <div>100</div>
                    <div>100</div>
                    <div>删除</div>
                </dd>
                <dd>
                    <div><el-checkbox></el-checkbox></div>
                    <div>1000001</div>
                    <div><img src="../../assets/img/5b5ca4d2N58e5d747.jpg" alt=""></div>
                    <div>HLA海澜之家净色中腰休闲裤2018秋季新</div>
                    <div>价格：¥100.00</div>
                    <div>100</div>
                    <div>100</div>
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
        name:'Listofgoods',
        components:{
            Refresh
        }
    }
</script>

<style lang='less'>
.content_li{
width: 92%;
padding: 2% 4%;
    dl{
        width: 100%;
        height: 100%;
        border: 1px solid #e4e4e4;
        margin-top: 20px; 
        overflow: hidden;
        dt{
            height: 50px;
            width: 100%;
            background: #f3f3f3;
            border-bottom: 1px solid #e4e4e4;
            i{
                    display: block;
                    margin-top: 15px; 
                    float: left;
                    margin-left: 20px; 
                }
                span{
                    display: block;
                    font: 14px/50px "微软雅黑";
                    float: left;
                    margin-left:5px;
                    color: #666; 
                }
        }
        .text{
            width: 100%;
            height: 45px;
            text-align: center;
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
            .choose{
                width: 9%;
                border-right:1px solid #e4e4e4;
            }
                .number{
                width: 11%;
                border-right:1px solid #e4e4e4;
            }
            .picture{
                width: 11%;
                border-right:1px solid #e4e4e4;
            }
            .name{
                width: 18%;
                border-right:1px solid #e4e4e4;
            }
            .price{
                width: 14%;
                border-right:1px solid #e4e4e4;
            }
            .sort{
                width: 11%;
                border-right:1px solid #e4e4e4;
            }
            .salesvolume{
                width: 11%;
                border-right:1px solid #e4e4e4;
            }
            .operation{
                width: 14%;
            }
        }
        dd{
            width: 100%;
            height: 100px;
            text-align: center;
            border-bottom:1px solid #e4e4e4;           
            color: #666666;
            font-size: 14px;
            display: flex;
            justify-content: center;
            align-items: center;
            div{
                height: 100px;
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
                img{
                    width: 70%;
                    height: 70%;
                }
            }
            div:nth-child(4){
                width: 18%;
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
                width: 14%;
                color: #44C8AE;
            }
        }
    }
}
        .screen{
            border: 1px solid #e4e4e4;
            p{
                height: 50px;
                background: #f3f3f3;
                border-bottom:1px solid #e4e4e4;
                i{
                    display: block;
                    font: 16px/50px "微软雅黑";
                    float: left;
                    margin-left: 20px; 
                }
                span{
                    display: block;
                    font: 14px/50px "微软雅黑";
                    float: left;
                    margin-left:5px;
                    color: #666; 
                }
            }
            ul{
                width: 100%;
                overflow: hidden;
                li{
                    float: left;
                    span{
                        display: block;
                        color: #666;
                        font: 14px/60px "微软雅黑";
                        float: left;
                        margin-left: 20px; 
                    }
                    input{
                        float: left;
                        width: 60%;
                        height: 30px;
                        margin-top: 12px; 
                        color: #c6c6c6;
                        margin-left: 20px; 
                        text-indent: 10px;
                    }
                }
            }
        }
</style>