<template>
    <div class="shopping-car">
        <ul>
            <!-- -->
            <li v-for="(item,pid) in data.products"  >
                <!-- 复选框 -->
                <div class="goods-check">
                    <input class="color-input-red"  type="checkbox"  v-model="item.checked" />
                </div>
                <div class="goods-img">
                    <img :src="item.pic" alt="">
                </div>
                <div class="goods-info">
                    <div class="goods-des">{{item.title}}</div>
                    <div class="goods-price-info"><span class="goods-price">售价:</span><span>{{item.price}}</span>元</div>
                    <div class="goods-design">
                        <div class="goods-design-num">
                            <span class="iconfont add" @click="addNum(pid)">&#xe71b;</span>
                            <span>{{item.num}}</span>
                            <span class="iconfont minus" @click="minusNum(pid)">&#xe66a;</span>
                        </div>
                        <span class="iconfont" @click="delGoods(pid)">&#xe650;</span>
                    </div>
                </div>
            </li>
        </ul>       
    </div>
</template>

<script>
export default {
    name:"cartShoppingCar",
    props:{
        data:Object,
        default:"默认值"
    },
    data(){
        return {
            
        }
    },
    methods:{
        addNum(pid){
            this.$emit("add",pid)
            //  console.log(pid)
        },
        minusNum(pid){
            this.$emit("minus",pid)
            //  console.log(pid)
        },
        delGoods(pid){
            if(confirm("您确定要删除吗？")){
                this.$emit("del",pid)
            }
            
            
        }
        
    }
    
   
};
</script>

<style scoped>
.iconfont{
    font-size: .4rem;
}
.shopping-car>ul{
    width:100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items:center;
    color:#666;
    background: rgb(242,242,242);
}
.shopping-car>ul>li{
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding:.2rem .3rem;
    box-sizing:border-box;
    background: rgb(255,255,255);
    margin-bottom:.2rem;
    color:#666;
}
.goods-des{
    width:4.2rem;
    line-height:.5rem;
}
.goods-img{
    display: block;
    width: 1.81rem;
    height: 1.81rem;
    margin-right: .2rem;
    border: 2px solid #eee;
    border-radius: 2px;
}
.goods-img>img{
    width: auto;
    height: 100%;
    border:none;

}
.goods-info{
    width:5rem;
    /* border:1px solid red; */
    font-size:.31rem;
    line-height:.4rem;
}
.goods-design{
    display:flex;
}
/* 复选框 */
input[type="checkbox"]{-webkit-appearance:none;outline: none;}
input.color-input-red:checked{
    background:url(../../assets/icon_check1.png) no-repeat center left;
    background-size:.4rem .4rem;
    }
input.color-input-red{
    background:url(../../assets/icon_check.png) no-repeat center left;
    background-size:.4rem .4rem;
    }
.color-input-red{
    width: .4rem;
    height: .4rem;
    position: relative;
    margin-right:.2rem;    
}

.goods-price-info{
    font-size:.24rem;
    color:#c2c2c2;
}
.goods-design{
    display:flex;
    justify-content:space-between;
    margin-top:.2rem;
}
.goods-design-num{
    display:flex;
    justify-content:center;
    align-items:center;
    width: 2.1rem;
    height: .71rem;
    border:2px solid #eee;

}
.goods-design-num>span{
    width: .7rem;
    height: .7rem;
    background-size: .3rem .3rem;
    color: #3c3c3c;
    text-align:center;
    line-height:.7rem;

}
.goods-design-num>span:nth-child(1){
    background:rgb(245,245,245)
}
.goods-design-num>span:nth-child(2){
    background:rgb(255,255,255);
    font-size: .35rem;
    border:none;
}
.goods-design-num>span:nth-child(3){
    background:rgb(245,245,245)
}
</style>
