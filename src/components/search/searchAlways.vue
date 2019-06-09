<template>
    <div class=" hot always">
        <div>常用分类</div>
        <ul>
            <li v-for="(item,index) in alwaysList">{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"searchAlways",
    data(){
        return {
            alwaysList:["手机","电视","笔记本","盒子","路由器","手环","平板","投影","手表","VR","穿戴","影音","空气净化器","空调",]
        }
    }
}
</script>

<style>
/* 常用分类 */
.alway{
    width:100%;

}
.always>ul>li{
    padding:.1rem .2rem;
    color: rgba(0,0,0,.54);
    border:none;
    background: #f5f5f5;
    margin-right:.2rem;
    margin-bottom:.1rem;
}
.hot>div{
    width:100%;
    height:.8rem;
    text-align:left;
    line-height:.8rem;
    padding-left:.5rem
}
.hot>ul{
    width:100%;
    padding:.3rem;
    display:flex;
    flex-wrap:wrap;
}
</style>
