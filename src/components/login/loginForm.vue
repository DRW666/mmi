<template>
    <form action="#" class="form">
        <label for="">
            <div class="phonenum">
                <span>+86 </span>
                <span class="iconfont dayu"> &#xe683;</span>
            </div>
            <input type="text" placeholder="手机号码" v-model="phone" @blur="verify()">
        </label>
        <label for="">
            <input type="text" placeholder="密码" v-model="password">
        </label>
        <div class="err"></div>
        <!-- <button class="btn-login now">立即注册</button> -->
        <button class="btn-login name" @click="submit">立即登录</button> 
        
    </form>
</template>

<script>
export default {
    name:"loginForm",
    data(){
        return {
            phone:'',
            password:'',
        }
    },
    methods:{
        verify(){
            // e.preventDefault()
            // console.log(this.phone)
                fetch(this.common.url+'/user').then(res=>{
                    res.json().then(data=>{
                        data.user.forEach(info => {
                            if(this.phone!=info.phone){
                                alert("该手机号未注册,请先注册")
                            }else{
                                this.Observer.$emit("phone",this.phone)
                            }
                        });     
                    })
                })
            
        },
        submit(e){
            e.preventDefault()
            fetch(this.common.url+'/user').then(res=>{
                res.json().then(data=>{
                    data.user.forEach(info => {
                        // console.log(info)
                        if(this.password==info.password){
                            this.phone=''
                            this.password=''
                            alert("登录成功")
                            location.href="http://localhost:8080/?#/mine"
                        }
                    });     
                })
            })
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
.now{
    background-color: #ff6700;
    color:#fff;
    margin-top:.2rem;
}
.name{
    background-color: #ff6700;
    color:#fff;
    /* border:1px solid #9b9b9b; */
    margin-top:.5rem;
}

</style>
