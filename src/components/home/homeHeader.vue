<template>
    <div class="header-bar">
        <div><span v-html="logo" class="iconfont logo"></span></div>
        <div class="search"><a href="#/search"><span><span v-html="search" class="iconfont searchs"></span>
            搜索商品名称</span></a></div>
        <div class="login"><a href="#/mine"><span v-html="mine" class="iconfont"></span></a></div>
    </div>
</template>
<script>
export default {
    name:"homeHeader",
    data(){
        return {
            logo:"&#xe661;",
            mine:"&#xe629;",
            search:"&#xe611;",
        }
    },
    methods:{
       
    }
}
</script>
<style scoped>
.header-bar{
    position: fixed;
    z-index: 2;
    top:0;
    left:0;
    width:100%;
    height:1rem;
    background: #f2f2f2;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: .4rem;

}
.oinput{
    margin-top:.1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size:.18rem;
    }
.login>a{
    color:rgb(158, 156, 156);
    
}
.search{
    width:5rem;
    height:.6rem;
    border:none;
    border:1px solid rgb(219, 218, 218);
    background: #fff;
}
.search>a>span{
    font-size: .3rem;
    color: #c3c3c3;
    /* font-weight: 600; */
    display: inline-block;
    padding-left: .2rem;
    line-height: .6rem;

}
.inp{
    background: rgb(241, 241, 241);
    border:none;
     width:2rem;
    height:.25rem;
    overflow: hidden;
    border-radius: .2rem;
    padding-left:.1rem;
}
.iconfont{
        font-size: .5rem;
        padding-bottom:.1rem;
}
.logo{
     color:#ff6700;
}
.searchs{
    font-size: .3rem;
}
</style>