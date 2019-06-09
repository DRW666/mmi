<template>
    <div class="contentInfo">
        <ul class="goods" v-for="(item,index) in list">
            <li><img :src="item.path"></li>
            <li><span>{{item.name}}</span></li>
                <ul>
                    <li v-for="(item,index) in item.info" >
                        <span><a href="#/details"><img :src="item.path" alt=""></a></span>
                        <span>{{item.name}}</span>
                    </li>
                </ul>
        </ul>
    </div>
</template>

<script>
export default {
    name:"CateContent",
    data(){
        return {
           name:[],
           list:[]
        }
    },
    created(){
        fetch(this.common.url+"/category").then(res=>{
                res.json().then(data=>{
                    data.category.forEach((value,i) => {
                        this.list.push(data.category[i]);
                        // console.log(this.list);                       
                    });
                })
        })
    }
}
</script>

<style scoped>
/* content部分中商品部分 */

.contentInfo{
    display:flex;
    flex-direction: column;
    overflow-y:auto;
    width:78%;
}

.goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: column;
    position: relative;
    margin-bottom:.1rem;
    z-index:88;
}
 .goods>ul{
    width:100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
 .goods>ul>li{
    width: 33.333333333333336%;
    height:2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom:.2rem;
    color: rgba(0,0,0,.54);
    padding:0 .2rem;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
 }
 .goods>li:nth-child(2){
    height:1rem;
    line-height: 1rem;
    text-align: center;
    font-size: .3rem;
}
.goods>li:nth-child(2)>span{
    display:inline-block;
    width:1.2rem;
    background:#fff;
    position: relative;
    z-index:1;
}
.goods>li:nth-child(2){
    position: relative;
}
 .goods>li:nth-child(2):before{
    content: "";
    position: absolute;
    top: .5rem;
    left: 1.9rem;
    width: 2rem;
    height:3px;
    border-top: 1px solid #c3c3c3;
     
 }
 .goods>ul>li>span{
     width:100%;
     overflow: hidden;
     text-overflow:ellipsis;
    white-space: nowrap;
    text-align: center;
 }
 .goods>ul>li>span>img{
     width:1rem;
     margin:0 auto;
 }
.goods>li:nth-child(1){
    width:100%;
    text-align:center;
    padding:0 .3rem;
}
.goods>li:nth-child(1)>img{
    width:100%;
   
}
</style>
