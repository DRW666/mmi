<template>
    <div class="guess-like">
        <div class="likeTitle">为你推荐</div>
        <ul>
            <li v-for="(item,index) in like">
                <div><img :src="item.image"></div>
                <div class="goods-info"><span>{{item.name}}</span><span>{{item.price}}</span></div>
                
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"detailsGuessLike",
    data(){
        return {
            like:[
                {
                    image:"https://i8.mifile.cn/b2c-mimall-media/05d59f494c122b81d737a22e9125b89a!360x360.jpg",
                    name:"小米手环3",
                    price:"169",
                    oldPrice:"40.9"

                },
                {
                    image:"https://i8.mifile.cn/b2c-mimall-media/2ddc4ac120568f3d15288f2651c66240!360x360.jpg",
                    name:"小米手环3彩色腕带",
                    price:"19.9"
                },
                {
                    image:"https://i8.mifile.cn/b2c-mimall-media/f8900490d45a460ab5d7579ebb4f816b!360x360.jpg",
                    name:"手环2腕带",
                    price:"19.9"
                },
                {
                    image:"https://i8.mifile.cn/b2c-mimall-media/7c90206cd0e0a2605d38e94a9cf82fcd!360x360.jpg",
                    name:"米家石英表",
                    price:"349"
                },
                {
                    image:"https://i8.mifile.cn/b2c-mimall-media/851fab54e50e3f1c57d0e2c646ad1fca!360x360.jpg",
                    name:"AMAZFIT 智能运动手表2",
                    price:"999"
                },
                {
                    image:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2c59cf7dcb9de4a4b4e00b0ac760f2c0.jpg?thumb=1&w=360&h=360",
                    name:"运动手表",
                    price:"799"
                },
            ],
        }
    }
}
</script>

<style>
/* 猜你喜欢 */

.guess-like{
    width:100%;
}
.likeTitle{
    padding: .64rem .32rem 0!important;
    color: rgba(0,0,0,.84)!important;
    font-size: .48rem!important;
}
.guess-like>ul{
    width:100%;
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
    padding:.2rem;
}
.guess-like>ul>li{
    width:46%;
    height:5rem;
    
    overflow:hidden;

}
.guess-like>ul>li>div>img{
    width:100%;
    border-radius:.4rem;
}
.goods-info{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding:.2rem;
}
.goods-info>span:nth-child(1){
    width:3.5rem;;
    color:#3c3c3c;
    font-size: 1.5;
    font-size: .3rem;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.goods-info>span:nth-child(2){
    font-size: .32rem;
    display: inline-block;
    color: #ff6700;
    margin-top: .1rem;
}
.goods-info>span:nth-child(2):before {
    content: "￥";
    left: 0;
    top: 0;
    font-size: .76em;
    text-decoration: none;
}
</style>
