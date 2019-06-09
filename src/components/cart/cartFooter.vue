<template>
    <div class="footer">
        <div class="all">共<span ref="totalNum">{{data|num}}</span>件 金额:<br/><span class="price" ref="totalPrice">{{data|counter}}</span>元</div>
        <div class="continue"><a href="#/category">继续购物</a></div>
        <div class="counter" @click="countTotal" >去结算</div>
    </div>
</template>

<script>
export default {
    name:"cartFooter",
    props:{
        data:Object,
        default:"默认值"
    },
    data(){
        return {
           total:0,

        }
    },
    methods:{
        countTotal(){
            var totalPrice=this.$refs.totalPrice.innerText
            this.$emit("total",totalPrice)
        }
    },
    filters:{
        counter(data){
            let total =0;
            // console.log(data)
            if(data.products){
                data.products.forEach((product,pid) => {
                    if(product.checked){
                        total += product.num * product.price
                    } 
                })
                return total
            }
    
        },
        num(data){
            let total_num =0;
            // console.log(data)
            if(data.products){
                data.products.forEach((product,pid) => {
                    if(product.checked){
                        total_num += product.num
                    } 
                })
            return total_num
            }
        }
    }
}
</script>

<style scoped>
/* footer部分 */

.footer{
    width:100%;
    height:1.2rem;
    display: flex;
    justify-content: space-between;
    border:1px solid #eee;
    background: #fff;
    position: relative;
    z-index:3;
}
.footer>div{
    width:100%;
}
.footer>.all{
    background: #fff;
    color:#999;
    text-align: center;
    width: 100%;
    height: 1.2rem;
    font-size: .28rem;
    padding-top:.12rem;
    box-sizing: border-box;
    
}
.footer>.all>.price{
    font-size: .4rem;
    font-weight: 600;
    color: #ff5722;
    margin-right: .2em;
}
.footer>.continue{
    background: #eee;
    color:  #333;
    text-align: center;
    width: 100%;
    height: 1.2rem;
    line-height: 1.2rem;
    font-size: .3rem;
}
.footer>.counter{
    background: #ff6700;
    color: #fff;
    text-align: center;
    width: 100%;
    height: 1.2rem;
    line-height: 1.2rem;
    font-size: .3rem;
}
</style>
