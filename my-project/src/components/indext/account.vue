<template>
    <div id="conn">
       <Refresh />
    <div class="account">
         <p class="setup">账户设置</p>
         <div class="portrait">
             <img src="../../assets/img/头像-空.png" alt="">
            <span>上传头像</span>
         </div>
         
         <div class="Textbox">
             <p>                            
            <input type="text" value="">
            <i>用户名:</i>
            <span>*</span>
            </p>  
            <p>                          
            <input type="text" value="">
            <i>Email:</i>
            <span>*</span> 
            </p>    
            <p>                          
            <input type="text" value="">
            <i>旧密码:</i>
            <span>*</span> 
            </p>
            <p>                          
            <input type="text" value="">
            <i>新密码:</i>
            <span>*</span> 
            </p>
            <p>                          
            <input type="text" value="">
            <i>确认密码:</i>
            <span>*</span> 
            </p>   
              <div class="Submission">提交</div>
         </div>
         
    </div>
       
    </div>
</template>

<script>
import Refresh from './refresh'
    export default {
        name:'Account',
        components:{
            Refresh
        }
    }
</script>

<style lang='less'>
.account{
    width: 90%;
    height: 700px;
    border: 1px solid #e4e4e4;
    margin:20px 5% ;
    .setup{
        height: 50px;
        background: #f3f3f3;
        border-bottom:1px solid #e4e4e4;
        font: 14px/50px "微软雅黑";
        color: #666666;
        text-indent: 20px;
    }
    .portrait{
        text-align: center;
        margin: 20px auto;
        span{
            display: block;
            color: #1abc9c;
        }
    }
    .Textbox{
        width: 500px;
        height: 350px;
        margin: 0 auto; 
        p{
            margin-bottom:10px;
            width: 325px;
            margin-left:35px;  
            color: #666666;
            height: 40px;
            font: 14px/40px "微软雅黑";
            span{
                color: #f25d59;
                float: right;
             } 
             i{
                float: right;
            }
            input{
                height: 33px;
                width: 225px;
                outline: none;
                float: right;
                margin-left:15px; 
            }
        }   
        .Submission{
            width: 80px;
            height: 35px;
            margin: 0 auto;
            background: #1abc9c;
            text-align: center;
            font: 14px/35px "微软雅黑";
            color: #fff;
            border-radius: 5px;
            margin-top: 60px; 
        } 
    }
    
   
    
}
</style>