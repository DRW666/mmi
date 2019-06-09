<template>
    <div class="product">
        <div class="title">{{product.title}}</div>
        <div class="des">
            <span>「小米618特惠，6月1日-2日立减20元」</span>
            {{product.des}}
        </div>
        <div class="price">{{product.price}}</div>
    </div>
</template>

<script>
export default {
    name:"detailsInfoProduct",
    data(){
        return {
            product:{
                checked:true,
                title:"小米手环 NFC版",
                des:"支持公交地铁刷卡 / 微信、QQ、来电等内容显示 / 多种运动数据实时可见 / 睡眠、计步自动检测 / 50 米游泳防水 / 24 个汉字一屏显示",
                price:"199",
                pic:"https://i1.mifile.cn/a1/pms_1536833428.43292402.jpg",
                num:1,
                attrs:{}
            }
            
        }
    },
    created(){
        this.$emit("addShoppingCar",this.product)
    }
}
</script>

<style scoped>
.title{
    line-height: 1.5em;
    font-size: .4rem;
    text-align: left;
    color:#3c3c3c;
     padding: .32rem .32rem 0;
}
.des{
    line-height: 1.5em;
    word-break: break-all;
    color: rgba(0,0,0,.54);
     padding: .32rem .32rem 0;
   
}
.des>span{
    color: rgb(255, 74, 0);
}
.price{
    color: #ff6700;
    font-size: .48rem;
    position: relative;
    text-indent: .6rem;
}
.price:before{
    content: "￥";
    position: absolute;
    left: -.3rem;
    top: .1rem;
    font-size: .76em;
    text-decoration: none;
}

</style>
