<template>
    <div class="header">
        <span class="iconfont zuo">&#xe666;</span>
        <span><input type="text" placeholder="搜索商品名称"></span>
        <span class="iconfont search">
            &#xe611;
        </span>
    </div>
</template>

<script>
export default {
    name:"searchHeader"
}
</script>

<style scoped>
/* header部分 */
.iconfont{
    font-size: .5rem;
}
.header{
    width:100%;
    height:1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 .2rem;
    color:#666;
    font-size: .35rem;
    background: rgb(242,242,242);
    z-index: 3;
    box-sizing:border-box;
}
.header>span:nth-child(2)>input{
    border: 1px solid #e5e5e5;
    border-radius: 3px;
    width: 5.5rem;
    padding: 0 .2rem;
    outline: 0;
    font-size: .3rem;
    font-weight: 400;
    height: .55rem;
    line-height: normal;
}
</style>
