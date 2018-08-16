<template>
<div id="conn">
    <Refresh />
    <div class="content">
        <ul class="Sale">
            <li>
                <img src="../../assets/img/订单 (1).png" alt="">
                <em>
                    <p>今日订单总数</p>
                    <i>2000</i>
                </em>
                
            </li>
            <li>
                    <div class="im"><img src="../../assets/img/钱.png" alt=""></div>
                    <em>
                    <p>今日销售总额</p>
                    <i>¥5000.00</i>
                    </em>
            </li>
            <li>
                    <div class="im"><img src="../../assets/img/钱 (1).png" alt=""></div>
                    <em>
                    <p>昨日销售总额</p>
                    <i>¥5000.00</i>
                    </em>
            </li>
            <li>
                    <div class="im"><img src="../../assets/img/销量预测.png" alt=""></div>
                    <em>
                    <p>近七天销售总额</p>
                    <i>¥5000.00</i>
                    </em>
            </li>
        </ul>

        <!-- 待处理事务 -->
        <dl class="affair">
            <dt>待处理事务</dt>
            <dd>
                <span>待付款订单</span>
                <div>
                    <i>(</i>
                    <em>10</em>
                    <i>)</i>
                </div>
            </dd>
            <dd>
                <span>待付款订单</span>
                <div>
                    <i>(</i>
                    <em>10</em>
                    <i>)</i>
                </div>
            </dd>
            <dd>
                <span>待付款订单</span>
                <div>
                    <i>(</i>
                    <em>10</em>
                    <i>)</i>
                </div>
            </dd>
            <dd>
                <span>待付款订单</span>
                <div>
                    <i>(</i>
                    <em>10</em>
                    <i>)</i>
                </div>
            </dd>
            <dd>
                <span>待付款订单</span>
                <div>
                    <i>(</i>
                    <em>10</em>
                    <i>)</i>
                </div>
            </dd>
            <dd>
                <span>待付款订单</span>
                <div>
                    <i>(</i>
                    <em>10</em>
                    <i>)</i>
                </div>
            </dd>
            <dd>
                <span>待付款订单</span>
                <div>
                    <i>(</i>
                    <em>10</em>
                    <i>)</i>
                </div>
            </dd>
            <dd>
                <span>待付款订单</span>
                <div>
                    <i>(</i>
                    <em>10</em>
                    <i>)</i>
                </div>
            </dd>
            <dd>
                <span>待付款订单</span>
                <div>
                    <i>(</i>
                    <em>10</em>
                    <i>)</i>
                </div>
            </dd>           
        </dl>
            <!-- 运营快捷入口 -->
        <dl class="Operate">
            <dt>运营快捷入口</dt>
            <dd><img src="../../assets/img/添加.png" alt="">添加商品</dd>
            <dd><img src="../../assets/img/添加.png" alt="">添加商品</dd>
            <dd><img src="../../assets/img/添加.png" alt="">添加商品</dd>
            <dd><img src="../../assets/img/添加.png" alt="">添加商品</dd>
            <dd><img src="../../assets/img/添加.png" alt="">添加商品</dd>
            <dd><img src="../../assets/img/添加.png" alt="">添加商品</dd>
            <dd><img src="../../assets/img/添加.png" alt="">添加商品</dd>
            <dd><img src="../../assets/img/添加.png" alt="">添加商品</dd>
            <dd><img src="../../assets/img/添加.png" alt="">添加商品</dd>
        </dl>
        <!-- 商品 用户 -->
        <div class="Overview">
            <dl>
                <dt>商品总览</dt>
                <dd>
                    <i>100</i>
                    <span>已下架</span>
                </dd>
                <dd>
                    <i>100</i>
                    <span>已下架</span>
                </dd>
                <dd>
                    <i>100</i>
                    <span>已下架</span>
                </dd>
                <dd>
                    <i>100</i>
                    <span>已下架</span>
                </dd>
            </dl>
            <dl>
                <dt>用户总览</dt>
                <dd>
                    <i>100</i>
                    <span>已下架</span>
                </dd>
                <dd>
                    <i>100</i>
                    <span>已下架</span>
                </dd>
                <dd>
                    <i>100</i>
                    <span>已下架</span>
                </dd>
                <dd>
                    <i>100</i>
                    <span>已下架</span>
                </dd>
            </dl>
        </div>
    </div>
</div>
</template>

<script>
import Refresh from './refresh'

    export default {
        name:'Cen',
    components:{
            Refresh
        }
    }
</script>

<style lang='less'>

#conn{          
            height: 90vh;
            overflow-y: scroll;
}
.content{
    width: 88%;
    padding:2% 6%;
}

        .Sale{   
            display: flex;
            justify-content: space-between ;
            align-items: flex-end;
            margin-bottom: 15px; 
            flex-wrap: wrap;

                li{
                    border: 1px solid #e4e4e4;
                    width: 23%;
                    display: flex;
                    flex-direction:row;
                    justify-content: space-around ;
                    flex-wrap:wrap;
                    padding-top:23px; 
                    text-align: center;
                    img{
                    width: 48px;
                    height: 48px;
                    vertical-align: top;
                }
                em{
                    text-align: center;
                    margin-bottom: 27px;
                    p{
                        width: 100%;
                        height: 25px;
                        font: 16px/25px "微软雅黑";
                        color: #999;
                }
                    i{    
                         width: 100%;               
                        height: 25px;
                        font: 20px/25px "微软雅黑";
                        color: #666;
                        margin-bottom: 20px;
                }
                }
                    
            }
        }


        .affair{
            width: 100%;
            border: 1px solid #e4e4e4;
            margin-bottom: 15px ;
            display: flex;
            flex-wrap: wrap;
            flex-direction:row;
            justify-content: space-around;
            padding-bottom:20px; 
                dt{
                width: 100%;
                height: 45px;
                background: #F3F3F3;
                text-indent: 15px;
                border-bottom:1px solid #e4e4e4; 
                font: 18px/45px "微软雅黑";
                color: #666;
                margin-bottom: 10px;
            }
                dd{
                width: 300px;
                height: 40px;
                border-bottom: 1px solid #F2F2F2; 
                display: flex;
                flex-direction:row;
                justify-content: space-between;
                align-items:center;
                cursor:pointer;
                color: #666666;
                font-size: 14px;
                div{
                    em{
                        color: #F04844;
                    }
                }
               
            }

        }

        
        

        .Operate{
            width: 100%;
            border: 1px solid #e4e4e4;
            margin-bottom: 15px ;
            display: flex;
            flex-wrap: wrap;
            flex-direction:row;
            justify-content: space-around;
                dt{
                width: 100%;
                height: 45px;
                background: #F3F3F3;
                text-indent: 15px;
                border-bottom:1px solid #e4e4e4; 
                font: 18px/45px "微软雅黑";
                color: #666;
            }
                dd{
                height: 140px;
                width: 120px;
                display: flex;
                flex-direction:column;
                justify-content: center;
                align-items:center;
                cursor:pointer;
                color: #666666;
                font-size: 14px;
                 img{
                    margin-bottom:20px; 
                }
            }
        }

.Overview{
    width: 100%;
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    align-items:center;
    dl{
        width: 49%;
        height: 100%;
        border: 1px solid #e4e4e4;
        display: flex;
        flex-wrap: wrap;
        flex-direction:row;
        justify-content: space-around;
            dt{
            width: 100%;
            height: 45px;
            background: #F3F3F3;
            text-indent: 15px;
            border-bottom:1px solid #e4e4e4; 
            font: 18px/45px "微软雅黑";
            color: #666;
        }
            dd{
            width: 120px;
            height: 150px;
            display: flex;
            flex-direction:column;
            justify-content: center;
            align-items:center;
            i{
                font-size:28px;
                color: #F04844; 
                margin-bottom: 10px;
            }
            span{
                font-size:14px;
                color: #666; 
            }
        }
    }
    
}
</style>