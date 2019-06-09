<template>
    <div class="header">
        <span  @click="goBack" class="iconfont zuo">&#xe666;</span>
        <!-- <span>分类</span> -->
        <slot></slot>
        <router-link tag="span" to="/search" class="iconfont search">
            &#xe611;
        </router-link>
    </div>
</template>

<script>
export default {
    name:"cateHeader",
    methods:{
        goBack(){
            this.$router.back()
        }
         
    }
}
</script>

<style scoped>
/* header部分 */

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
    position:fixed;
    
}
.iconfont{
    font-size: .4rem;
}
</style>
