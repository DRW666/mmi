<template>
    <div class="home">
        <div class="header">
            <mmi-home-header></mmi-home-header>
            <mmi-home-nav></mmi-home-nav>
        </div>
        <div class="content">
            <mmi-home-banner></mmi-home-banner>
            <mmi-home-cells></mmi-home-cells>
            <mmi-home-divider></mmi-home-divider>
            <mmi-home-multi-cells></mmi-home-multi-cells>
            <mmi-home-cells-select></mmi-home-cells-select>
        </div>
    </div>
</template>

<script>
import homeHeader from '../components/home/homeHeader.vue'
import homeNav from '../components/home/homeNav.vue'
import homeBanner from '../components/home/homeBanner.vue'
import homeCells from '../components/home/homeCells.vue'
import homeDivider from '../components/home/homeDivider.vue'
import homeMultiCells from '../components/home/homeMultiCells.vue'
import homeCellsSelect from '../components/home/homeCellsSelect.vue'
export default {
    name:"Home",
    components:{
        "mmi-home-header":homeHeader,
        "mmi-home-banner":homeBanner,
        "mmi-home-nav":homeNav,
        "mmi-home-cells":homeCells,
        "mmi-home-divider":homeDivider,
        "mmi-home-multi-cells":homeMultiCells,
        "mmi-home-cells-select":homeCellsSelect,
    }
}
</script>

<style scoped>
.home{
    width:100%;
    height:100%;
    padding-top:1.8rem;
    padding-bottom: 1rem;
    display: flex;
    flex-direction:column;
    
}
.header{
    height:1px;
}
.content{
    display: flex;
    flex-direction:column;
    overflow-y:auto;
    flex:1;
}
</style>
