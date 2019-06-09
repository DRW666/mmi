<template>
    <div class="multi-cell">
        <div class="cells_auto_left"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a7a9f55c879c612213fa38e8e63dfd76.jpg?thumb=1&w=358&h=508" alt=""></div>
        <div class="cells_auto_right">
            <router-link :to="{name:'Details'}">
            <div><img src="https://i8.mifile.cn/v1/a1/7803e2d0-e8c1-b824-2fa7-04616b197e9d!358x252.webp" alt=""></div>
            </router-link>
            <div><img src="https://i8.mifile.cn/v1/a1/01811d34-74c0-ad2d-001f-759e82169fb3!358x252.webp" alt=""></div>
        </div>
    </div>
</template>

<script>
export default {
    name:"homeMultiCells",
    methods:{
        
    }

}
</script>

<style>
 .multi-cell{
     width:100%;
     display: flex;
 }
  .cells_auto_left{
      margin-right: .1rem;
  }
 .cells_auto_left,.cells_auto_right{
     width:100%;
 }
 .cells_auto_right div:first-child{
     margin-bottom: .1rem;
 }
  .cells_auto_left img,.cells_auto_right img{
     width:100%;
 }
</style>
