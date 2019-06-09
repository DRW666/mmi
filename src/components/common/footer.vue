<template>
    <div class="footer">
        <ul>
            <router-link 
            :to="item.path"
            tag="li"
            v-for="(item,index) in tabbar"
             @click.native="handleChange(index)"
              :class="{active:flag==index}"
              >
                <span v-html="item.iconfont" class="iconfont" ></span>
                <span>{{item.title}}</span>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name:"Footer",
    data(){
        return {
            tabbar:[
                {
                    iconfont:"&#xe61a;",
                    title:"首页",
                    path: '/home',
                },
                {
                    iconfont:"&#xe601;",
                    title:"分类" ,
                    path: '/category', 
                },
                {
                    iconfont:"&#xe707;",
                    title:"购物车",
                    path: '/cart',  
                },
                {
                    iconfont:"&#xe629;",
                    title:"我的" ,
                    path: '/mine', 
                },
                
            ],
            flag:0,
        }
    },
    methods:{
        handleChange(index){
            this.flag=index;
            
        }
    }
}
</script>

<style scoped>
    .footer{
        width:100%;
        height:1.2rem;
        background: #fff;
        position: fixed;
        z-index:999;
        left:0;
        bottom:0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .footer>ul{
        width:100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .footer>ul>li{
        width:100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: .3rem;
        /* font-weight: 600; */
        color:#999;

    }
    .iconfont{
        font-size: .4rem;
        padding-bottom:.1rem;
    }
    .footer>ul>.active{
        color:#ff6700;
    }
</style>
