<template>
     <div class="user-register-login">
        <div class="img"><img src="https://m.mi.com/static/img/avatar.76a75b8f17.png" alt=""></div>
        <router-link to="/login">
        <div class="name">登录或注册</div>
        </router-link>
    </div>
</template>

<script>
export default {
    name:"mineLogin",
    data(){
        return {
            phone:"",
        }
    },
    // updated(){
    //     this.Observer.$on("phone",(data)=>{
    //         this.phone=data
    //     })
    // }
}
</script>

<style scoped>

</style>
