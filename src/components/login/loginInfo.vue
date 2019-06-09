<template>
    <div class="mmi-info">
        <ul>
            <li v-for="item in exp">{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"loginInfo",
    data(){
        return {
            exp:["简体","|","繁体","|","English","|","常见问题","|","隐私政策"]
        }
    }
}
</script>

<style scoped>
.mmi-info{
    width:100%;
    color:#9c9c9c;
    font-size: .28rem;
    margin-top:1rem;
}
.mmi-info>ul{
    display: flex;
    justify-content: space-around;
}
</style>
