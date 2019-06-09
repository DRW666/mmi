<template>
    <div class="order-form">
        <div class="user-order-form">
            <div class="order-form-all">我的订单</div>
            <div class="order-form-info"><a href="#">全部订单 <span class="iconfont user-common-icon">&#xe625;</span></a></div>
        </div>
        <div class="user-goods">
            <ul>
                <li v-for="(item,index) in userList">
                    <span class="iconfont user-goods-icon" v-html="item.iconfont"></span>
                    <span>{{item.name}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:"mineOrderForm",
    data(){
        return {
            userList:[
                {
                    iconfont:"&#xe603;",
                    name:"待付款"
                },
                {
                    iconfont:"&#xe62f;",
                    name:"待收货"
                },
                {
                    iconfont:"&#xe64d;",
                    name:"退换修"
                },
            ]
        }
    }
}
</script>

<style>

</style>
