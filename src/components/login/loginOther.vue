<template>
    <div class="login-other">
        <div>其他方式登录</div>
        <div>
            <span class="iconfont weibo">&#xe602;</span>
            <span class="iconfont zhifubao">&#xe60b;</span>
            <span class="iconfont weixin">&#xe602;</span>
        </div>
    </div>
</template>
    
<script>
export default {
    name:"loginOther",
}
</script>

<style scoped>
.login-other{
    width:100%;
    margin-top:1rem;
    text-align: center;
    font-size: .25rem;
    color: #b0b0b0;
    
}
.login-other>div{
        margin-bottom: .2rem;
}
.iconfont{
    font-size: .7rem;
    
}
.weibo{
    color:rgb(237,144,144)
}
.weixin{
    color:rgb(0,190,0)
}
.zhifubao{
    color:rgb(107,182,234);
    font-size: .6rem;
    margin: 0 .3rem;
}
</style>
