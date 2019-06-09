<template>
     <div class="contentList">
        <ul class="classify">
            <li v-for="(item,index) in classify" @click="change(index)" :class="{'active':flag==index}">{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"cateClassify",
    data(){
        return {
            flag:0,
            classify:["新品","众筹","手机","电视","电脑","家电","路由","出行","穿越","智能","电源","健康","灯具","儿童","插线板","音频","箱包","生活","配件"],    
        }
    },
    methods:{
        change(index){
            this.flag=index;
        }
    }
}
</script>

<style scoped>
/* content部分中列表部分 */

.contentList{
    overflow-y:auto;
    width:22%;
    border-right:2px solid #eee;  

}
.contentList::-webkit-scrollbar {
    display: none;
}
.classify{
    width:100%;
    display: flex;
    flex-direction: column; 
    justify-content: center; 
    box-sizing: border-box; 
    background: #fefefe;
}
.classify>li{
    width:100%;
    font-size: .3rem;
    height: .9rem;
    line-height: .9rem;
    text-align: center;
}
.active{
    color:#fb7d34;
    font-size:.35rem !important;
}
</style>
