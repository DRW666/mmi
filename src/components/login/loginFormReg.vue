<template>
    <form action="#" class="form">
        <label for="">
            <div class="phonenum">
                <span>+86 </span>
                <span class="iconfont dayu"> &#xe683;</span>
            </div>
            <input type="text" placeholder="手机号码" required v-model="phone">
        </label>
        <label for="">
            <input type="text" placeholder="密码" v-model="password">
        </label>
        <label for="">
            <input type="text" placeholder="短信验证码">
            <div class="phone">获取验证码</div>
        </label>
        
        <div class="err"></div>
        <!-- <button class="btn-login now">立即注册</button> -->
        <button class="btn-login name" @click=submit>立即注册</button> 
        
    </form>
</template>

<script>
export default {
    name:"loginFormReg",
    data(){
        return {
            phone:'',
            password:'',
        }
    },
    methods:{
        submit(e){
            e.preventDefault()
            console.log(this.phone)
           if(this.phone.length==11){
               fetch(this.common.url+'/user',{
                    method: 'post',
                    headers:{'Content-Type': 'application/json'},
                    body:JSON.stringify({"phone":this.phone,"password":this.password}),
                    }).then(res=>{
                    res.json().then(data=>{
                        if(data.state){
                            this.phone=''
                            this.password=''
                            alert("注册成功，请登录")
                            // location.href="http://localhost:8080/?#/login"
                        }
                        
                    })
                })
           }else{
                this.phone=''
                this.password=''
                alert("请输入正确的手机号")
           }

        }
    }

}
</script>

<style scoped>
.form{
    width:100%;
    display: flex;
    flex-direction: column;
    
}
.phonenum{
    display: flex;
}
.form>label{
    width:100%;
    display: flex;
    align-items: center;
    margin-bottom:.3rem;
    height:1rem;
    color: #9b9b9b;
    border-bottom: 1px solid #c2c2c2;
}
.form input{
    display: inline-block;
    width:6rem;
    height:.8rem;
    font-size: .36rem;
    padding-left: .1rem;
    border:none;
    outline: none
}
.dayu{
    font-size: .35rem; 
}
.form>label .phone{
    width:1.6rem;
    cursor: pointer;
    color: #2ea5e5;
    font-size: .25rem;
    margin-right: .3rem;
}
.btn-login{
    height:.9rem;
    border:none;
    font-size: .35rem;
    color: #000;
    border-radius: .1rem;
}
/* .now{
    background-color: #ff6700;
    color:#fff;
    margin-top:.2rem;
} */
.name{
    /* border:1px solid #9b9b9b; */
    color:#fff;
    background-color: #ff6700;
    margin-top:.5rem;
}

</style>
