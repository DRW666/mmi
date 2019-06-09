<template>
    <div class="guess-like">
        <div class="guess-like-title"><img src="https://i8.mifile.cn/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg" alt=""></div>
        <ul>
            <li v-for="(item,index) in likeList">
                <div><img :src="item.path"></div>
                <div class="goods-info"><span>{{item.name}}</span><span>{{item.price}}</span></div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"cartGuessLike",
    data(){
        return {
            likeList:[]
        }
    },
    created(){
        fetch(this.common.url+'/list').then(res=>{
                res.json().then(data=>{
                    this.likeList=data.goods[0].goodsmenu;

                })
        })
    }
}
</script>

<style scoped>
/* 猜你喜欢 */

.guess-like{
    width:100%;
}
.guess-like-title{
    width:100%;
    margin-bottom: 3px;
}
.guess-like-title>img{
    width:100%;
}
.guess-like>ul{
    width:100%;
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
}
.guess-like>ul>li{
    width:50%;
    height:5rem;

}
.guess-like>ul>li>div>img{
    width:100%;
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
