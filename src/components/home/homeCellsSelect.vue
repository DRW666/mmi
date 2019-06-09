<template>
    <div class="cellsAuto">
        <mmi-home-divider/>
        <div><img src="https://i8.mifile.cn/v1/a1/acb5d85c-219f-a00f-bacf-8bbf7a3302c1!720x280.webp" alt=""></div>
        <mmi-home-divider/>
        <div><img src="https://i8.mifile.cn/v1/a1/5df15531-f43d-4255-7e2b-006c7e19ef12!720x440.webp" alt=""></div>
        <div class="column_two">
            <ul>
                <li v-for="(item,index) in list">
                    <div><img :src="item.path" alt=""></div>
                    <div class="info">
                        <div class="name"><span>{{item.name}}</span></div>
                        <div class="sign"><span>{{item.sign}}</span></div>
                        <div class="price"><span>{{item.price}}</span> 起<span>{{item.oldPrice}}</span></div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="more"><a href="#">更多小米手机产品 ></a></div>
        <mmi-home-divider/>
        <div><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1eb65451e5e7f26cbe479340b821b6f5.jpg?thumb=1&w=720&h=280" alt=""></div>
        <mmi-home-divider/>
    </div>
</template>

<script>
import homeDivider from './homeDivider.vue'
export default {
    name:"homeCellsSelect",
    components:{
        "mmi-home-divider":homeDivider,
    },
    data(){
        return {
            list:[],
          
        }
    },
    created(){
        fetch(this.common.url+'/list').then(res=>{
                res.json().then(data=>{
                 this.list=data.goods[0].goodsmenu;

                })
        })
    }

}
</script>

<style scoped>

.cellsAuto{
    width:100%;
}
.cellsAuto img{
    width:100%; 
}
.column_two{
    width:100%;
}

.column_two>ul{
    width:100%;
    display: flex;
    flex-wrap: wrap;
}
.column_two>ul>li{
    width:50%;
    margin-top:2px;
}
.column_two>ul>li>img{
    width:100%;
}
.column_two>ul>li>.info{
    padding:.2rem .4rem;
}
.info>.name>span{
    font-size: 22px!important;
    color: rgba(0,0,0,.87);
}
.info>.sign>span{
    margin-top: .06rem;
    font-size: 19px !important;
    line-height: .3rem;
    color: rgba(0,0,0,.54);
}
.info>.price{
    line-height: .5rem;
}
.info>.price>span{
    font-size: 22px !important;
    color: rgba(0,0,0,.54);
    line-height: .5rem;
    position: relative;
    display: inline-block;
}
.info>.price>span:first-child{
    /* text-decoration:line-through;  */
    display: inline-block;
    margin-left: .2rem;
    font-size: 27px !important;
    color: #ea625b;
}
.info>.price>span:first-child:before{
    content: "￥";
    position: absolute;
    left: -.25rem;
    top: 0;
    font-size: .3rem;
    text-decoration: none;
}
.info>.price>span:last-child{
    text-decoration:line-through; 
    display: inline-block;
    margin: 0 .1rem;
    font-size: 23px !important;
    color: rgba(0,0,0,.54);
}
.more{
    background: #fff;
    height: 1rem;
    line-height: 1rem;
    font-size: .28rem;
    text-align: center;
   color: rgba(0,0,0,.6);
}
</style>
