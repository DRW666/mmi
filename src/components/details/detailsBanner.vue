<template>
     <!-- 轮播图 -->
    <div class="swiper-container banner" ref="swiperContainer">
        <header>
            <span class="iconfont" @click="goBack">&#xe666;</span>
            <span class="iconfont">&#xe617;</span>
        </header>
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in bannerList"><img :src="item" alt=""></div> 
        </div>
        <!-- 分页器 -->
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
export default {
    name:"detailsBanner",
    data(){
        return {
             bannerList:[
                "https://i8.mifile.cn/v1/a1/e16a4ebc-41c1-9adc-73da-e398d7d94eb7.webp",
                "https://i8.mifile.cn/v1/a1/1e39b0fc-303c-6f8e-dfd8-3259fd8a48c1.webp",
                "https://i8.mifile.cn/v1/a1/7ebba680-4eae-5d0b-f48e-f88b6e6a0c7a.webp",
            ],
        }
    },
    mounted(){
        var mySwiper = new Swiper (this.$refs.swiperContainer,{
            loop: true, // 循环模式选项
            // 如果需要分页器
                pagination: {
                el: '.swiper-pagination',
                }
        })
    },
    methods:{
        goBack(){
            this.$router.back()
        }
    }
}
</script>

<style scoped>
/* header部分 */
.iconfont{
    font-size:.4rem;
    color:#ddd;
}
header{
    width:100%;
    height:1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 .2rem;
    position:absolute;
    z-index:2;
}
header>span{
    width:.6rem;
    height:.6rem;
    background:rgba(0,0,0,.6);
    border-radius:50%;
    text-align: center;
    line-height: .6rem;
}
/* 轮播图 */

.banner{
    width:100%;
    height:8.3rem;
}
.swiper-pagination-bullet-active{
    background:#fff;
    width:.2rem;
    height:.2rem;
}
.swiper-slide>img{
    width:100%;
}
</style>
