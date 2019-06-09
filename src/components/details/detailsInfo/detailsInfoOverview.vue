<template>
    <div class="goodsDetail">
        <ul>
            <li v-for="(item,index) in tabbar" @click="handleTogglePage(index)" :class="{'active':num==index}">{{item}}</li>
        </ul>
        <div>
            <keep-alive>
                <component :is="page"></component>
            </keep-alive>
        </div>
    </div>
</template>

<script scoped>
import detailsInfoGoodsDescription from './detailsInfoGoodsDescription.vue'
import detailsInfoSupportCity from './detailsInfoSupportCity.vue'
import detailsInfoParameter from './detailsInfoParameter.vue'
export default {
    name:"detailsInfoOverview",
    components:{
        detailsInfoGoodsDescription,
        detailsInfoParameter,
        detailsInfoSupportCity,
    },
    data(){
        return {
            tabbar:["概述","参数","可支持城市"],
            page:"detailsInfoGoodsDescription",
            num:0,
        }
    },
    methods:{
        handleTogglePage(index){
            this.num=index;
            switch(index){
                case 0:
                this.page = "detailsInfoGoodsDescription";
                break;
                case 1:
                this.page = "detailsInfoParameter";
                break;
                case 2:
                this.page = "detailsInfoSupportCity";
                break;
            }
        }
    },
}
</script>

<style>
.goodsDetail{
    width:100%;
}
.goodsDetail>ul{
    display:flex;
    justify-content:center;
    height:1rem;
    color: #3c3c3c;
    background: #fff;
    border:1px solid #eee;
    border-radius:.1rem;
}
.goodsDetail>ul>li{
    width:100%;
    text-align:center;
    line-height:1rem;
    font-size:.28rem;
    margin-bottom:.3rem;
}
.active{
    color:#ff6700;
}
</style>
