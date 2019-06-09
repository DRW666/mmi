<template>
    <div class="category">
        <mmi-category-header>
            <template v-slot>
                <span>分类</span>
            </template>
        </mmi-category-header>
        <div class="content">
            <mmi-category-classify></mmi-category-classify>
            <mmi-category-content></mmi-category-content>
            
        </div>
    </div>
</template>

<script>
import cateHeader from '../components/category/cateHeader.vue'
import cateClassify from '../components/category/cateClassify.vue'
import cateContent from '../components/category/cateContent.vue'
export default {
    name:"Category",
    components:{
        "mmi-category-header":cateHeader,
        "mmi-category-classify":cateClassify,
        "mmi-category-content":cateContent
    },
    
}
</script>

<style scoped>

.category{
    width:100%;
    background: #fff;
    padding-bottom:1.1rem;
    height:100%;
    display: flex;
    flex-direction:column;

}
.iconfont{
    font-size: .4rem;
}



/* content部分 */

.content{
    width:100%;
    color: #3c3c3c;
    display: flex;
    position: relative;
    justify-content: space-between;
    overflow-y:auto;
    top:1rem;
}



</style>
