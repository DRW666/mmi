<template>
    <div class="search">
        <mmi-search-header></mmi-search-header>
        <div class="content">
            <mmi-search-hot></mmi-search-hot>

            <mmi-search-always></mmi-search-always>

        </div>

    </div>
</template>

<script>
import searchHeader from '../components/search/searchHeader.vue'
import searchHot from '../components/search/searchHot.vue'
import searchAlways from '../components/search/searchAlways.vue'
export default {
    name:"Search",
    components:{
        "mmi-search-header":searchHeader,
        "mmi-search-hot":searchHot,
        "mmi-search-always":searchAlways,
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
    font-size: .5rem;
}



/* content部分 */


</style>
