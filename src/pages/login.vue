<template>

    <div class="login">
        <mmi-login-header></mmi-login-header>
        <div class="login-content">
            <!-- <mmi-login-form></mmi-login-form> -->
            <mmi-login-other></mmi-login-other>
            <mmi-login-info></mmi-login-info>
        </div>
        

    </div>
</template>

<script>
import loginOther from '../components/login/loginOther.vue'
import loginInfo from '../components/login/loginInfo.vue'
import loginHeader from '../components/login/loginHeader.vue'

export default {
    name:"Login",
    components:{
        "mmi-login-header":loginHeader,
        "mmi-login-other":loginOther,
        "mmi-login-info":loginInfo,

        
    },
    
}
</script>

<style scoped>
.login{
    width:100%;
    padding-top:.5rem;
    padding:.6rem .4rem;
    box-sizing: border-box;
    font-size: .36rem;
}

.login-content{
    width:100%;

}



</style>
