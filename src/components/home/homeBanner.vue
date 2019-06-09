<template>
        <div class="banner">
            <div class="swiper-container" ref="swiperContainer">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="item in bannerList"><img :src="item" alt=""></div> 
                </div>
                <!-- 分页器 -->
                <div class="swiper-pagination"></div>
            </div>
        </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
export default {
    name:"homeBanner",
    data(){
        return {
            bannerList:[
                "https://i8.mifile.cn/v1/a1/e94a26ec-4c2c-d586-0d17-5051d4f3be9b!720x360.webp",
                "https://i8.mifile.cn/v1/a1/f37aa40b-e727-822e-fb28-e0d9f6a4e461!720x360.webp",
                "https://i8.mifile.cn/v1/a1/3b39a95a-df61-a052-8f16-8cad413a929b!720x360.webp",
            ]
        }
    },
    mounted(){
        var mySwiper = new Swiper (this.$refs.swiperContainer,{
            loop: true, // 循环模式选项
            // 如果需要分页器
                autoplay:true,
                pagination: {
                el: '.swiper-pagination',
                }
        })
    }
}
</script>

<style scoped>

.banner{
    width:100%;
    height:4rem;
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