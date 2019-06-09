<template>
    <div class="user">
        <router-view></router-view>
        <mmi-mine-login></mmi-mine-login>
        <mmi-mine-order-form></mmi-mine-order-form>
        <div class="line"></div>
        <mmi-mine-help></mmi-mine-help>
    </div>
</template>
<script>
import mineLogin from '../components/mine/mineLogin.vue'
import mineOrderForm from '../components/mine/mineOrderForm.vue'
import mineHelp from '../components/mine/mineHelp.vue'
export default {
    name:"Mine",
    components:{
        "mmi-mine-login":mineLogin,
        "mmi-mine-order-form":mineOrderForm,
        "mmi-mine-help":mineHelp,
    },
    
}
</script>

<style>
.menber-center{
    color:rgb(253,191,45);
    display: inline-block;

}
.my-discount{
    color:rgb(81,187,224)
}
.my-serve-center{
    color:rgb(249,108,94)
}
.serve-home>div>.mmi-home{
    font-size: .65rem;
    color:rgb(255,139,67)
}
.user-f-code>div>.f{
    color:rgb(255,179,2);
    font-size: .5rem;
}
.s{
    color:rgb(129,140,153);
}
.user-register-login{
    display: flex;
    align-items: center;
}
.user-register-login>.img>img{
    width:.9rem;
}
.user-list-icon{
    font-size: .6rem;
    margin-right: .1rem;
}
.user-common-icon{
    font-size: .3rem;
}
.user-order-form,.member,.discount,.serve-center,.serve-home,.user-f-code,.user-set{
    width:100%;
    height: 1rem;
    line-height: 1rem;
    background-color: #fff;
    color: #3c3c3c;
    padding:0 .56rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.user-order-form,.member,.serve-center{
    border-bottom: 1px solid rgba(0,0,0,.23);
}
.line{
    height: .2rem;
    background: #f5f5f5;
    overflow: hidden;
    clear: both;
}
.line-height{
    height: 2rem;
}
.user{
    width:100%;
    font-size: .3rem;

}
.user-register-login{
    width:100%;
    background: #f37d0f url(https://m.mi.com/static/img/bg.63c8e19851.png) center 0 ;
    background-size: auto 100%;
    padding: .32rem 0;
}
.user-register-login>.img{
    margin: 0 .16rem 0 .32rem;
    width: .96rem;
    height: .96rem;
    overflow: hidden;
    box-sizing: border-box;
    border-radius: 100%;
    border: 3px solid hsla(0,0%,100%,.4);
    text-align: center;
}
.user-register-login>a>.name{
    color: #fff;
    font-size: .28rem;
    text-align: left;
}
.user-order-form{
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    position: relative;
}
.user-goods{
    padding: 0 .8rem;
    background-color: #fff;
    height:1.5rem;
    color: rgba(0,0,0,.54);
}
.user-goods>ul{
    width:100%;
    height:1.5rem;
    display: flex;
    justify-content: space-between;
    align-content: center;
}
.user-goods>ul>li{
    height:1.5rem;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: .25rem;
    color: #3c3c3c;
}
.user-goods>ul>li>.user-goods-icon{
    font-size: .5rem;
    color: #c3c3c3;
    margin-bottom:.1rem;
    }

.user-member-discount{
    background: #fff;
    color: rgba(0,0,0,.54);
}

</style>
