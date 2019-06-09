<template>
    <div class="nav">
        <ul>
            <li class="list" v-for="(item,index) in navs" :class="{'active':num==index}" @click=func(index)>{{item}}</li>
            <li id="above"><span>全部</span></li>
            <transition name="fade">
            <li @click="handleReverse" :class="[show?'a':'b']">
                <span v-html="xiangxia" class="iconfont xiangxia" ></span>
            </li>
             </transition>
             <transition name="slide">
            <li><div class="q" v-if="flag">
                <div class="list" v-for="(item,index) in navss" :class="{'actives':num1==index}" @click=func1(index)>{{item}}</div>
                
                </div>
            </li>
             </transition>
        </ul>
    </div>
</template>
<script>
export default {
    name:"homeNav",
    data(){
        return {
            navs:["今日推荐","最后疯抢","美妆","母婴","国际","家电"],
            navss:["推荐","手机","智能","电视","家电","笔记本","生活周边"],
            num:0,
            num1:0,
            xiangxia:"&#xe684;",
            show:true,
            flag:false,
            page:""
        }
    },
    methods:{
        func(index){
            this.num=index

        },
        func1(index){
            this.num1=index
            // switch(index){
            //     case 0:

            // }
        },
         handleReverse(){
            this.show =!this.show;
            this.flag =!this.flag;
            var list=document.getElementsByClassName("list");
            var aboves=document.getElementById("above");
            for(var i=0;i<list.length;i++){
                if(this.flag){
                    list[i].style.display="none";
                    aboves.style.display="block";
                }else{
                     list[i].style.display="block";
                     aboves.style.display="none";
                }
                
            }
            // list.style.display="none";
       
        }
    }
}
</script>
<style scoped>
.nav{
    width:100%;
    padding-top:.1rem;
    padding-bottom:.1rem;
    background: #f2f2f2;
    position: fixed;
    z-index: 2;
    top:1rem;
    left:0;
    display: flex;
    flex-direction: column;
    
}
.alive{
    display: flex;
    overflow-y: auto;
}
.nav>ul{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height:.6rem;
    line-height: .6rem;
    font-size: .28rem;
    font-weight: 500;
    color:#999;
    position: relative;
    
}
.nav>ul>li{
    height:.6rem;
}
.active{
    border-bottom:4px solid #ff6700;
    color:#ff6700;
}
.q>.actives{
    border:1px solid #ff6700;
    color:#ff6700;
    background-color: #fde0d5;
}
.xiangxia{
    position: absolute;
    font-size: .28rem;
}

.a{
    transition: all 1s;
    position: absolute;
    top:0;
    right:.5rem;
    margin-left:.8rem;
}

.b{
    transition: all 1s;
    transform: rotate(180deg);
     position: absolute;
    top:0;
    right:.5rem;
    margin-left:.8rem;
}
.q{
    width:100%;
    height:1.5rem;
    background:#f2f2f2;
    position:absolute;
    left:0;
    top:.6rem;
    z-index: 5;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
} 
.q>div{
    width:1.6rem;
    height:.5rem;
    color:#3c3c3c;
    border: 1px solid #d2d2d2;
    border-radius: 4px;
    background: #f2f2f2;
    text-align: center;
    background-color: #fff;
    line-height: .5rem;
}
 .slide-leave-active,.slide-enter-active{
  transition: all 3s;
}

.slide-leave-to,.slide-enter{
  height:0;
} 
#above{
    font-size: .30rem;
    color:#333;
    display: none;
    position:absolute;
    left:1rem;
    top:0;
}
</style>