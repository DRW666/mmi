<template>
    <div class="login-header">
        <img src="../../assets/logo.png" alt="">
        <ul>
            <li v-for="(item,index) in page" @click="handlepage(index)" :class="{'active':flag==index}">{{item}}</li>
        </ul>
        <div class="selectPage">
            <keep-alive>
                <component :is="pageForm"></component>
            </keep-alive>
        </div>
    </div>
    
</template>

<script>
import loginForm from './loginForm.vue';
import loginFormReg from './loginFormReg.vue';
export default {
    name:"loginHeader",
    components:{
        "mmi-login-form":loginForm,
        "mmi-login-form-reg":loginFormReg
    },
    data(){
        return {
            page:["注册","登录"],
            flag:0,
            pageForm:"mmi-login-form-reg"
        }
    },
    methods:{
        handlepage(index){
            this.flag=index
            switch(index){
                case 0:
                    this.pageForm="mmi-login-form-reg";
                    break;
                case 1:
                    this.pageForm="mmi-login-form";
                    break;

            }
        }
    }
}
</script>

<style scooped>
.active{
    border-bottom:#c2c2c2;
    color: #ff6700;
}
.selectPage{
    width:100%;
}
.login-header{
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: .35rem;
    margin-bottom: .3rem;
}
.login-header>ul{
    width:100%;
    border:#c2c2c2;
    display: flex;

}
.login-header>ul>li{
    width:50%;
    height:.6rem;
    text-align: center;
}
.login-header img{
    width:1.3rem;
    margin-bottom:.2rem;
}
</style>