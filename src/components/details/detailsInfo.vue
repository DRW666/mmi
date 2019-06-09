<template>
    <div class="info">
        <mmi-details-info-product @addShoppingCar="addProduct"></mmi-details-info-product>
        <mmi-details-info-intro></mmi-details-info-intro>
        <!-- 商品详情 -->
        <mmi-details-info-overview></mmi-details-info-overview>
    </div>
</template>

<script>
import detailsInfoIntro from './detailsInfo/detailsInfoIntro.vue'
import detailsInfoOverview from './detailsInfo/detailsInfoOverview.vue'
import detailsInfoProduct from './detailsInfo/detailsInfoProduct.vue'

export default {
    name:"detailsInfo",
    components:{
        "mmi-details-info-intro":detailsInfoIntro,
        "mmi-details-info-product":detailsInfoProduct,
        "mmi-details-info-overview":detailsInfoOverview,
        
    },
    data(){
        return {
            product:{}
        }
    },
    methods:{
        addProduct(product){
            this.product=product
            // console.log(this.product)
            this.$emit("addShoppingCar",this.product)
        }
    },
    
    
}
</script>

<style scoped>
/* 信息 */
.info{
    width:100%;
    
}
/* 商品详情 */

</style>
