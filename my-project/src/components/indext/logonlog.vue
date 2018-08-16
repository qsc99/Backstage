<template>
    <div id="conn">
         <Refresh />
         <div class="journal">
             <p class="land">数据列表</p>
                <dl>
                    <dt>
                        <span class="active">时间</span>
                        <i class="active">IP</i>
                        <p class="active">地区</p>
                        <em>浏览器</em>
                    </dt>
                    <dd>
                        <span class="active"> 2017-07-03 14:36:21</span>
                        <i class="active">183.14.135.1</i>
                        <p class="active">广东省深圳市</p>
                        <em class="active">Firefox 45</em>
                    </dd>
                    <dd>
                        <span class="active"> 2017-07-03 14:36:21</span>
                        <i class="active">183.14.135.1</i>
                        <p class="active">广东省深圳市</p>
                        <em class="active">Firefox 45</em>
                    </dd>
                    <dd>
                        <span class="active"> 2017-07-03 14:36:21</span>
                        <i class="active">183.14.135.1</i>
                        <p class="active">广东省深圳市</p>
                        <em class="active">Firefox 45</em>
                    </dd>
                    <dd>
                        <span class="active"> 2017-07-03 14:36:21</span>
                        <i class="active">183.14.135.1</i>
                        <p class="active">广东省深圳市</p>
                        <em class="active">Firefox 45</em>
                    </dd>
                    <dd>
                        <span class="active"> 2017-07-03 14:36:21</span>
                        <i class="active">183.14.135.1</i>
                        <p class="active">广东省深圳市</p>
                        <em class="active">Firefox 45</em>
                    </dd>
                    <dd>
                        <span class="active"> 2017-07-03 14:36:21</span>
                        <i class="active">183.14.135.1</i>
                        <p class="active">广东省深圳市</p>
                        <em class="active">Firefox 45</em>
                    </dd>
                    <dd>
                        <span class="active"> 2017-07-03 14:36:21</span>
                        <i class="active">183.14.135.1</i>
                        <p class="active">广东省深圳市</p>
                        <em class="active">Firefox 45</em>
                    </dd>
                    <dd>
                        <span class="active"> 2017-07-03 14:36:21</span>
                        <i class="active">183.14.135.1</i>
                        <p class="active">广东省深圳市</p>
                        <em class="active">Firefox 45</em>
                    </dd>
                    <dd>
                        <span class="active"> 2017-07-03 14:36:21</span>
                        <i class="active">183.14.135.1</i>
                        <p class="active">广东省深圳市</p>
                        <em class="active">Firefox 45</em>
                    </dd>
                    <dd>
                        <span class="active"> 2017-07-03 14:36:21</span>
                        <i class="active">183.14.135.1</i>
                        <p class="active">广东省深圳市</p>
                        <em class="active">Firefox 45</em>
                    </dd>
                    <dd>
                        <span class="active"> 2017-07-03 14:36:21</span>
                        <i class="active">183.14.135.1</i>
                        <p class="active">广东省深圳市</p>
                        <em class="active">Firefox 45</em>
                    </dd>
                    <dd>
                        <span class="active"> 2017-07-03 14:36:21</span>
                        <i class="active">183.14.135.1</i>
                        <p class="active">广东省深圳市</p>
                        <em class="active">Firefox 45</em>
                    </dd>
                    <dd>
                        <span class="active"> 2017-07-03 14:36:21</span>
                        <i class="active">183.14.135.1</i>
                        <p class="active">广东省深圳市</p>
                        <em class="active">Firefox 45</em>
                    </dd>
                    <dd>
                        <span class="active"> 2017-07-03 14:36:21</span>
                        <i class="active">183.14.135.1</i>
                        <p class="active">广东省深圳市</p>
                        <em class="active">Firefox 45</em>
                    </dd>
                    <dd>
                        <span class="active"> 2017-07-03 14:36:21</span>
                        <i class="active">183.14.135.1</i>
                        <p class="active">广东省深圳市</p>
                        <em class="active">Firefox 45</em>
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
        name:'logonlog',
        components:{
            Refresh
        }
    }
</script>

<style lang='less'>
.block{
    text-align: right;
    height: 30px;
    padding: 10px 0;
    border-top: 1px solid #e4e4e4;
}
.journal{
    width: 90%;
    border: 1px solid #e4e4e4;
    margin: 20px 5%;
    .land{
        height: 50px;
        background: #f3f3f3;
        border-bottom:1px solid #e4e4e4;
        font: 14px/50px "微软雅黑";
        color: #666666;
        text-indent: 20px;
    }
    dl{
        color: #666666;
        dt{
            display: flex;
            flex-direction:row;
            justify-content: center;
            align-items: flex-start;
            .active{
                text-align: center;
                width: 25%;
                height: 100%;
                font: bold 14px/40px "微软雅黑";                
                border-right:1px solid #e4e4e4; 
                border-bottom:1px solid #e4e4e4; 
            }           
            em{
                text-align: center;               
                width: 25%;
                height: 100%;
                font: bold 14px/40px "微软雅黑";
                border-bottom:1px solid #e4e4e4;
            }
        }
        dd{
            display: flex;
            flex-direction:row;
            justify-content: center;
            align-items: flex-start;
            .active{
                text-align: center;
                width: 25%;
                height: 100%;
                font: 14px/40px "微软雅黑";
                border-right:1px solid #e4e4e4; 
                border-bottom:1px solid #e4e4e4; 
            }           
            em{
                text-align: center;
                width: 25%;
                height: 100%;
                font: 14px/40px "微软雅黑";
                border-bottom:1px solid #e4e4e4;
            }
        }
    }
}
</style>