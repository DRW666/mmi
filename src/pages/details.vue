<template>
    <div class="details">
        <div class="content">
            <!-- banner -->
           <mmi-details-banner></mmi-details-banner>
            <!-- 细节信息 -->
            <mmi-details-info @addShoppingCar="addProduct"></mmi-details-info>
            <!-- 猜你喜欢 -->
            <mmi-details-guess-like></mmi-details-guess-like>
        </div>
        <!-- footer部分 -->
        <mmi-details-footer @handleShoppingCar="handleProduct"></mmi-details-footer>
    </div>
</template>
<script>

import detailsBanner from '../components/details/detailsBanner.vue'
import detailsInfo from '../components/details/detailsInfo.vue'
import detailsGuessLike from '../components/details/detailsGuessLike.vue';
import detailsFooter from '../components/details/detailsFooter.vue';
export default {
    name:"Details",
    components:{
        "mmi-details-banner":detailsBanner,
        "mmi-details-info":detailsInfo,
        "mmi-details-guess-like":detailsGuessLike,
        "mmi-details-footer":detailsFooter,
        // GoodsDescription,
        // SupportCity,
        // Parameter
    },
    data(){
        return { 
            product:{},
        }
    },
    methods:{
        addProduct(product){
            this.product=product
            // console.log(this.product)
        },
        handleProduct(){
            // console.log(this.product)
            this.Observer.$emit("addShopping",this.product)
        }
    }

    
}
</script>
<style scoped>
/* 内容部分 */
.details{
    display: flex;
    flex-direction: column;
    overflow:hidden;
}
.content{
    width:100%;
    height:100%;
    overflow-y: auto;
}

/* 细节 */
</style>
