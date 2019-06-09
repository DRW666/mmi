<template>
    <div class="hot">
        <div>热门搜索</div>
        <a alt=""><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6df997eca6d46dc1574ea9d3d2074633.jpg?w=1080&h=300&bg=BEB3C9"></a>
        <ul>
            <li v-for="(item,index) in hotList" :style="'border-color:'+ item.bo +';background:'+ item.bg">{{item.name}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"Search",
    data(){
        return {
            hotList:[
                {
                    name:"小米618",
                    bg:"rgb(255, 189, 197)",
                    bo:"rgb(250, 96, 53)"
                },
                {
                    name:"Redmi K20",
                    bg:"rgb(232, 246, 246)",
                    bo:"rgb(140, 218, 222)",
                },
                {
                    name:"儿童节 特惠好物",
                    bg:"rgb(252, 229, 205)",
                    bo:"rgb(250, 194, 136)"
                },
                {
                    name:"RedmiBook 14",
                    bg:"rgb(232, 246, 246)",
                    bo:"rgb(140, 218, 222)"
                },
                {
                    name:"AMAZFIT 智能运动手表2S",
                    bg:"rgb(250, 232, 232)",
                    bo:" rgb(227, 175, 150)"
                },
                {
                    name:"蓝牙耳机AirDots青春版",
                    bg:"rgb(252, 229, 205)",
                    bo:" rgb(250, 194, 136)"
                },
                {
                    name:"激光投影电视 4K",
                    bg:"rgb(242, 246, 233)",
                    bo:"rgb(187, 208, 144)"
                },
                {
                    name:"Redmi K20",
                    bg:"rgb(250, 232, 232)",
                    bo:" rgb(227, 175, 150)"
                },
                {
                    name:"小米米家智能摄像机",
                    bg:"rgb(248, 242, 236)",
                    bo:" rgb(227, 175, 150)"
                },
            ],
          
        }
    }
}
</script>

<style scoped>
/* hot部分 */
.hot{
    width:100%;
    color:#3c3c3c;
}
.hot>div{
    width:100%;
    height:.8rem;
    text-align:left;
    line-height:.8rem;
    padding-left:.5rem
}
.hot>a{
    width:100%;
}
.hot>a>img{
    width:100%;
}
.hot>ul{
    width:100%;
    padding:.3rem;
    display:flex;
    flex-wrap:wrap;
}
.hot>ul>li{
    padding:.12rem .2rem;
    color: rgb(72, 72, 72);
    border:2px solid rgb(250, 96, 53);
    background: rgb(255, 189, 197);
    margin-right:.2rem;
    margin-bottom:.2rem;
}
</style>
