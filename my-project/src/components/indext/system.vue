<template>
    <div id="conn">
        <Refresh />
    <div class="system">
        <p class="information">系统信息</p>
        <ul>
            <li>
                <i>服务器操作系统:</i>
                <p>Linux (114.55.34.251)</p>
            </li>
            <li>
                <i>Web 服务器:</i>
                <p>nginx/1.10.2</p>
            </li>
            <li>
                <i>PHP 版本:</i>
                <p>5.6.30</p>
            </li>
            <li>
                <i>MySQL 版本:</i>
                <p>5.5.56</p>
            </li>
            <li>
                <i>安全模式:</i>
                <p>否</p>
            </li>
            <li>
                <i>安全模式GID: </i>
                <p>否</p>
            </li>
            <li>
                <i>GD 版本:</i>
                <p>GD2 ( JPEG GIF PNG)</p>
            </li>
            <li>
                <i>Zlib 支持:</i>
                <p>是</p>
            </li>
            <li>
                <i>IP 库版本:</i>
                <p>20071024</p>
            </li>
            <li>
                <i>文件上传的最大大小:</i>
                <p>40M</p>
            </li>
            <li>
                <i>程序版本:</i>
                <p>v2.2.2 RELEASE 20170629</p>
            </li>
            <li>
                <i>安装日期:</i>
                <p>2017-05-02</p>
            </li>
            <li>
                <i>编码:</i>
                <p>UTF-8</p>
            </li>
            <li>
                <i></i>
                <p></p>
            </li>
            
            
        </ul>
    </div>
    </div>
</template>

<script>
import Refresh from './refresh'
    export default {
        name:'system',
        components:{
            Refresh
        }
    }
</script>

<style lang='less'>
.system{
    width: 90%;
    height: 455px;
    border: 1px solid #e4e4e4;
    margin:20px 5% ;
    .information{
        height: 50px;
        background: #f3f3f3;
        border-bottom:1px solid #e4e4e4;
        font: 14px/50px "微软雅黑";
        color: #666666;
        text-indent: 20px;
    }
    ul{
        height: 321px;
        margin: 30px 30px;
        border-bottom:1px solid #e4e4e4;
        border-right:1px solid #e4eee4;  
        background: #fff;
        li{
            width: 49.89%;
            height: 45px;
            float: left;
            border-top:1px solid #e4e4e4;
            border-left:1px solid #e4e4e4; 
            i{
                width: 30%;
                text-indent: 20px;
                font: 14px/45px "微软雅黑";
                color: #666;
                float: left;
                border-right:1px solid #e4e4e4;
                background: #f9fafc; 
            }
            p{
                width: 69%;
                text-indent: 30px;
                font: 14px/45px "微软雅黑";
                color: #666;
                float: left;
                
            }
        }
    }
}
</style>