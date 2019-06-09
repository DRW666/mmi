<template>
    <div class="footer">
        <div><span class="iconfont">&#xe61a;</span><a href="#/home">首页</a></div>
        <div><span class="iconfont">&#xe707;</span><a href="#/cart">购物车</a></div>
        <div @click="addShoppingCar">加入购物车</div>
    </div>
</template>

<script>
export default {
    name:"detailsFooter",
    data(){
        return {
            cartInfo:{
                "name":1
            }
        }
    },
    methods:{
        addShoppingCar(){
         alert("添加成功")
          this.$emit("handleShoppingCar")
        }
        
    }
    
   
    
}
</script>

<style>
/* footer */
.footer{
    width:94%;
    height:1.1rem;
    margin-left:.2rem;
    display:flex;
    justify-content:space-around;
    align-items:center;
    padding:0 .3rem;
    background-color: hsla(0,0%,100%,.96)!important;
    border: 1px solid #e5e5e5;
    border-radius: .16rem;
    overflow: hidden;
    box-shadow: 0 2px 10px -1px rgba(0,0,0,.2), 0 4px 5px rgba(0,0,0,.14), 0 1px 10px rgba(0,0,0,.12);
    position:absolute;
    left:0;
    bottom:.2rem;
    z-index:5;
}
.footer>div{
    display:flex;
    flex-direction:column;
    align-items:center;
    position: relative;
    width: auto;
    color: rgba(0,0,0,.54);
    font-weight:600;
}
.footer>div>.iconfont{
    color: rgba(0,0,0,.54);
}
.footer>div:nth-child(3){
    height:.64rem;
    line-height:.64rem;
    border-radius: .32rem;
    background: #ff6700;
    color: #fff;
    padding: 0 .50rem;
    font-size:.30rem;
    margin-left:1.5rem;
    font-weight:500;
}
.iconfont{
    font-size:.4rem;
    color:#ddd;
}
</style>
