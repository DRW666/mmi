<template>
    <div class="intro">
        <ul class="introMes">
            <li><span>促销</span><span class="free">赠品</span><span class="freeInfo">赠米粉卡，最高含100元话费</span></li>
            <li><span>已选</span><span class="checkInfo">小米手环3 NFC版 黑色 x 1</span><span></span></li>
            <li><span>送至</span><span class="adress">北京市 东城区</span><span class="cash"> 有现货</span></li>
            <li class="serve"><span><i class="iconfont">&#xe722;</i>小米自营</span><span><i class="iconfont">&#xe722;</i>小米发货</span><span><i class="iconfont">&#xe722;</i>7天无理由退货</span></li>
        </ul>
        <ul class="comment">
            <li>
                <div class="perMes">
                    <div class="photo"><img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/73409954b9773f6b0b4ff5166fa6f9de.webp" alt=""></div>
                    <div class="name">
                        <span>何乐</span>
                        <span>2018-11-21</span>
                    </div>
                    <div class="likeNum">282</div>
                </div>
                <div class="comCon">佩戴舒适，外观圆润，功能也是非常实用</div>
                <div class="comImg">
                    <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/4c875ba9467083c5d943174a0fa14ddb.webp" alt="">
                    <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/b4da0b169bfc1f6c424fdfb40f5a420c.webp" alt="">
                </div>
            </li>
        </ul>
        <div class="more">更多评论</div>
    </div>
</template>

<script>
export default {
    name:"detailsInfoIntro"
}
</script>

<style>
.intro{
    width:100%;
    padding: .32rem .32rem 0;
   
}
.introMes{
    width:100%;
    margin-bottom: .2rem;
    
   
}
.introMes>li{
    /* width:100%; */
    height:.8rem;
    border:1px solid #e5e5e5;;
    line-height: .8rem;
    border-radius:.17rem;
    background:#fafafa;
    padding:0 .2rem;
    position:relative;
    
}
.introMes>li:after{
    content: "";
    position: absolute;
    right: .32rem;
    top: 50%;
    width: .18rem;
    height: .18rem;
    border-color: hsla(0,0%,64%,.8);
    border-left: 1px solid currentColor;
    border-top: 1px solid currentColor;
    transform: translate3d(0,-50%,0) rotate(135deg);
    z-index:2;
}
.introMes>li:nth-child(1){
    margin-bottom: .2rem;
}
.introMes>li>span{
    color: rgba(0,0,0,.54);
    margin-right: .3rem;
    min-width: .5rem;
}
.introMes>li>.free{
    width:200%;
    height:200%;
    border: 1px solid #999;
    border-color: #f56600;
    color: #f56600;
    border-radius: 1px;
    padding: .03rem .05rem .01rem;
    margin: 0 0 .01rem;
    font-size: .16rem;
}
.introMes>li>.freeInfo,.introMes>li>.checkInfo,.introMes>li>.adress,.introMes>li>.nowGoods{
    margin-left: .08rem;
    font-size: .24rem;
    color: rgba(0,0,0,.87);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.introMes>li>.cash{
    color: #f56600;
}
.introMes>.serve>span>i{
    font-size: .23rem;
    color:#f56600;
    margin-right:.1rem;
}
/* 评论 */
.comment>li{
    width:100%;
}
.comment>li>div{
    width:100%;
}
.intro>.comment>li{
    width:100%;
    /* height:5rem; */
    border:1px solid #e5e5e5;;
    line-height: .8rem;
    border-radius:.17rem;
    background:#fafafa;
    padding:.2rem .2rem;
    position:relative;
    margin-bottom:.2rem;
    display: flex;
    flex-direction: column;

}
.perMes{
    display: flex;
    justify-content: space-around;
}
.perMes>.name{
    width:4.2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: .3rem;
}
.perMes>.name>span:nth-child(2){
    color: rgba(0,0,0,.54);
}
.perMes>.photo>img{
    border-radius: 50%;
}
.perMes>.likeNum{
    padding-left: .4rem;
    background: transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAApCAYAAABDV7v1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEQ0NUY5NzNGRTVCMTFFN0ExRUNCNDEyMEVGQjUzQjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEQ0NUY5NzRGRTVCMTFFN0ExRUNCNDEyMEVGQjUzQjYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0RDQ1Rjk3MUZFNUIxMUU3QTFFQ0I0MTIwRUZCNTNCNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0RDQ1Rjk3MkZFNUIxMUU3QTFFQ0I0MTIwRUZCNTNCNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsLgqlwAAAKCSURBVHja1JjbS1RBHMfPbltQQTcD7UKWpCjeipWiRJOih66iIj7YX9CbCAo+GPRob0HBQmqPUQ89STcoVsouVkQQGASaIIjIpoRKF3b9DsyJr8Mc19bZc2Z/8IH5zRnOfM/Mb34zZ0KxWMwxaNtAF2gBRWARfAb3wF2wlOmLIwZF7gKvQQnVbQL1EvEBbeBdJi8PGxTaq4hU7SB4DmqCFnqFyh9BNTgNHlL9VjCQSb+mhO4DeeR3yNh8AZqlONcqwYmghFZReRYMK8+vK340KKHHqDyqef5dWfF7ghLalEaoyC6b19OvCaFH5cJx7a2mTZniJ4IQeo3KIsG/0rS5oAkFX4WeB5fJfwDmNe3aFP+Tn0L3g34Qkn4S3NC0Ow6OkD8DvvolNB88AgVUNwi+aNr2KL7YAFJ+CK2TC6aC6iZBp6ZtLbik1N3J5ha6HTSCJyAOCunZD3DRIzavUmhw+kqtgSQtziqR356Cs/Siv+An+Rvk8U1n43JBjXk8n1/HGgjJ3HsS3BIjekaTnHcSOpG/wU2ZP8dW6awPfDOQAqOR/4xT0el9cBtMraH9BCjOQFiBPNCUuiEa0Qw32w4Zg64VO/7YNBgioYl0oznnBGf5fL4NO/ZaLZWHbRV6ABzKBaGnqLwA3tsqtJ7KL0Vut1VoA0+76b9QU7YXHM4FoRyfS+6Fhe1C38jt2kqhvJDi2bgpMbUbleWCUJ72X/xHG7Z42kf50sLmEY1n46bEhO0G5Wr+tFFoHZ2H/6gXGTYJPUflD/IwYp1Qcaxr94pPG4RulFP+GGzxik/3j5Mt3Q1Gygfxs14jmrQsRXWr8ekKfWaBOCFsBLQ6K+/7/9myAAMA/8t6rPtyX9AAAAAASUVORK5CYII=) no-repeat 0 top;
    background-size: auto 80%;
    height: .36rem;
    line-height: .36rem;
    color: rgba(0,0,0,.54);
}
.comImg{
    width:100%;
    display: flex;
    flex-wrap:wrap;
    overflow: hidden;
    margin-top:.3rem;
    padding-bottom:.3rem;
}
.comImg>img{
    width: 1.646rem;
    height: 1.26rem;
    border-radius: .16rem;
    margin: 0 .16rem .16rem 0;
}
.intro>.more{
    width:100%;
    height:.8rem;
    color: #4e72a5;
    font-size:.32rem;
    text-align:center;
    line-height:.8rem;
    position:relative;
}
.intro>.more:after{
    content: "\25BA";
    font-size: .3rem;
    font-size: .25rem;
    vertical-align: middle;
    display: inline-block;
    -webkit-transform: scale(.8,1.5);
    transform: scale(.8,1.5);
    position:absolute;
    left:4.12rem;
    top:0;
}
</style>
