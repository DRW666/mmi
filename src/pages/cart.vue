<template>
    <div class="cart">
        <!-- header部分 -->
        <mmi-category-header>
            <template v-slot>
                <span>购物车</span>
            </template>
        </mmi-category-header>
        <!-- content部分 -->
        <div class="content">
        <!-- 购物车 -->
            <mmi-cart-shopping-car :data="cartInfo" @add="addNum" @minus="minusNum" @del="delGoods"></mmi-cart-shopping-car>
        <!-- 猜你喜欢 -->
            <mmi-cart-guess-like></mmi-cart-guess-like>
        </div>
        <!-- footer部分 -->
        <mmi-cart-footer :data="cartInfo" @total="totalPrice"></mmi-cart-footer>
        
    </div>
</template>

<script>
import cartApi from "../apis/cartApi"
import cateHeader from '../components/category/cateHeader.vue'
import cartShoppingCar from '../components/cart/cartShoppingCar.vue'
import cartGuessLike from '../components/cart/cartGuessLike.vue'
import cartFooter from '../components/cart/cartFooter.vue'
export default {
    name:"Cart",
    components:{
        "mmi-category-header":cateHeader,
        "mmi-cart-shopping-car":cartShoppingCar,
        "mmi-cart-guess-like":cartGuessLike,
        "mmi-cart-footer":cartFooter
    },
    
    watch:{
        cartInfo:{
            handler:function(nObj,oObj){
                fetch(this.common.url+'/shoppingCar',{
        　　　　　　 method: 'post',
                    headers:{'Content-Type': 'application/json'},
                    body:JSON.stringify(nObj),
        　　　　    }).then(res=>{
                        res.json().then(data=>{
                            // this.cartInfo=data;
                        })
                    })
            },
            deep:true
        }
        
    },
    methods:{
        _initPageData(){
            fetch(this.common.url+'/shoppingCar').then(res=>{
                res.json().then(data=>{
                 this.cartInfo=data;

                })
            })
        },
        addNum(pid){
            this.cartInfo.products[pid].num++
        },
        minusNum(pid){
            if(this.cartInfo.products[pid].num>1){
                this.cartInfo.products[pid].num--
            }
            
        },
        delGoods(pid){
                this.cartInfo.products.splice(pid,1)
            
        },
        totalPrice(data){
            this.cartInfo.totalPrice=data
        }
        
    },
    data(){
        return {
            cartInfo:{},
        }
    },
    created(){
        this._initPageData()

        this.Observer.$on("addShopping",(data)=>{
            this.cartInfo.products.splice(0,0,data);
            console.log(4444)
            fetch(this.common.url+'/shoppingCar',{
        　　　　　　 method: 'post',
                    headers:{'Content-Type': 'application/json'},
                    body:JSON.stringify(this.cartInfo),
        　　　　    }).then(res=>{
                        res.json().then(data=>{
                            // this.cartInfo=data;
                        })
                    })
        })
        
        
    },  
    
}
</script>

<style scoped>
.cart{
    width:100%;
    height:100%;
    background: #fff;
    display: flex;
    flex-direction:column;
}
.iconfont{
    font-size: .4rem;
}

/* content部分 */

.content{
    display: flex;
    flex-direction:column;
    overflow-y:auto;
    flex:1;
    position: relative;
    top:1rem;
}





</style>
