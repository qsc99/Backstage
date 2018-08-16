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
             <dl class="re">
                        <dt>
                            <i><img src="../../assets/img/列表.png" alt=""></i>
                            <span>数据列表</span>
                        </dt>
                        <div class="recovery">
                            <div><el-checkbox></el-checkbox></div>
                            <div>编号</div>
                            <div>商品图片</div>
                            <div>商品名称</div>
                            <div>商品分类</div>
                            <div>价格</div>
                            <div>货号</div>
                            <div>操作</div>
                        </div>
                        <dd>
                            <div><el-checkbox></el-checkbox></div>
                            <div>1</div>
                            <div><img src="../../assets/img/5b5ca4d2N58e5d747.jpg" alt=""></div>
                            <div>HLA海澜之家净色中腰休闲裤2018秋季新</div>
                            <div>休闲裤</div>
                            <div>199.00</div>
                            <div>No123</div>
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
        name:'recovery',
        components:{
            Refresh
        }
    }
</script>

<style lang="less">
.re{
    border: 1px solid #e4e4e4;
    margin-top: 20px;
    overflow: hidden;
    dt{
            height: 50px;
            width: 100%;
            background: #f3f3f3;
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
        .recovery{
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
            }
        }
        dd{
            width: 100%;
            height: 100px;
            text-align: center;
            border-right:1px solid #e4e4e4;
            border-top:1px solid #e4e4e4;           
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
        }
}

</style>