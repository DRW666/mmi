<template>
    <div class="cells">
        <ul>
            <li v-for="item in cells"><img :src="item" alt=""></li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"homeCells",
    data(){
        return {
            cells:[
                "https://i8.mifile.cn/v1/a1/290976f3-acac-8a62-7e5c-a19985a6414b!144x152.webp",
                "https://i8.mifile.cn/v1/a1/eb5024fe-dfe3-6e53-3e18-675bef5fa06e!144x152.webp",
                "https://i8.mifile.cn/v1/a1/e8bc849a-0a3b-21a0-6810-7da3a3903dee!144x152.webp",
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c94c523eb03128378ef2dc17c2c2cf0a.png?thumb=1&w=144&h=152",
                "https://i8.mifile.cn/v1/a1/7dbcbf87-6a58-adb6-2f3f-bb3dae3e9c80!144x152.webp",
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&w=144&h=152",
                "https://i8.mifile.cn/v1/a1/d5e3c742-3145-dd47-f665-331bef273a54!144x152.webp",
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96c780016ea196743905dc93f9249c39.png?thumb=1&w=144&h=152",
                "https://i8.mifile.cn/v1/a1/d7058e48-c115-e651-b33c-04ce071ae9e6!144x152.webp",
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f11f9df6b0b0b428f8c8fc3267131830.png?thumb=1&w=144&h=152",
            ]
        }
    }
}
</script>

<style>
.cells{
    padding:.1rem 0;
    width:100%;
    box-sizing: border-box;
}
.cells>ul{
    width:100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.cells>ul>li{
    width: 1.44rem;
    height: 1.52rem;
}
.cells>ul>li>img{
    width:100%;
}
</style>