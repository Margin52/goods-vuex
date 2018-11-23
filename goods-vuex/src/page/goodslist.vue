<template>
  <div class="goodslist">
    <div class="li-hea">
      <img class="li-hea-one" src="../../static/images/li-hea-one.png" alt="">
      <p class="li-hea-p">收货地址管理</p>
    </div>
    <div class="li-con" v-if="isShow">
      <img class="li-con-one" src="../../static/images/li-con-one.png" alt="">
      <p class="li-hea-p">您尚未添加收货地址</p>
    </div>
    <div class="li-conf">
      <div class="li-conf-box">
        <div class="li-conf-box-top">
          <div class="li-conf-box-top-le">
            <p class="li-conf-box-top-le_pone"><span>齐德龙</span><span>15202926079</span></p>
            <p class="li-conf-box-top-le_ptwo">北京西城区华远北街通港大厦7层703室</p>
          </div>
          <div class="li-conf-box-top-ri">
            <img class="li-conf-box-top-ri-img" src="../../static/images/li-conf-one.png" alt="">
          </div>
        </div>
        <div class="li-conf-box-bot">
          <img class="li-conf-box-bot-one" src="../../static/images/li-conf-two.png" alt="">
          <span class="li-conf-box-bot-two">设为默认地址</span>
          <img class="li-conf-box-bot-three" src="../../static/images/li-conf-three.png" alt="">
          <span class="li-conf-box-bot-four">删除</span>
        </div>
      </div>
    </div>
    <div class="li-foo">
      <div class="li-foo-box">
        <img class="li-foo-one" src="../../static/images/li-foo-one.png" alt="">
        <p class="li-foo-p"> 新增收货地址</p>
      </div>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    data () {
      return {
        isShow:false
      }
    }
  }
</script>

<style lang='scss' scoped='' type='text/css'>
.goodslist{
  background:#f6f6f6;
  .li-hea{
    width:100%;
    height:0.9rem;
    display:flex;
    align-items:center;
    background:#0185d0;
    box-sizing:border-box;
    padding:0 0.21rem;
      .li-hea-one{
        width:0.49rem;
        height:0.49rem;
      }
      .li-hea-p{
        font-size:0.34rem;
        color:#ffffff;
        margin-left:1.4rem;
      }
  }
  .li-con{
    background:#f6f6f6;
    width:100%;
    height:9.3rem;
    text-align:center;
    box-sizing: border-box;
    padding-top:3.42rem;
    .li-con-one{
      width:1.8rem;
      height:1.82rem;
      margin-bottom:0.58rem;
    }
    .li-con-p{
      font-size:0.26rem;
      color:#666666;
    }
  }
  .li-conf{
    background:#f6f6f6;
    width:100%;
    height:9.3rem;
    .li-conf-box{
      width:100%;
      background:#fff;
      border-top:1px solid #e9e9e9;
      border-top:1px solid #e9e9e9;
      border-bottom:1px solid #e9e9e9;
      box-sizing: border-box;
      padding-top:0.21rem;
      padding-left:0.28rem;
      padding-bottom:0.23rem;
      padding-right:0.28rem;
      margin-bottom:0.2rem;
      .li-conf-box-top{
        width:100%;
        display:flex;
        .li-conf-box-top-le{
          width:5.33rem;
          margin-right:0.59rem;
          box-sizing: border-box;
          padding-bottom:0.22rem;
          .li-conf-box-top-le_pone{
            font-size:0.28rem;
            color:#333333;
            line-height:0.48rem;
          }
          .li-conf-box-top-le_ptwo{
            font-size:0.25rem;
            color:#999999;
            line-height:0.4rem;
          }
        }
        .li-conf-box-top-ri{
          width:0.86rem;
          height:0.8rem;
          display:flex;
          align-items: center;
          border-left:1px solid #e9e9e9;
          box-sizing:border-box;
          padding-left:0.21rem;
          .li-conf-box-top-ri-img{
            width:0.37rem;
            height:0.32rem;
          }
        }

      }
      .li-conf-box-bot{
        width:100%;
        display:flex;
        border-top:1px solid #e9e9e9;
        box-sizing: border-box;
        padding-top:0.24rem;
        .li-conf-box-bot-one{
          width:0.32rem;
          height:0.32rem;
        }
        .li-conf-box-bot-two{
          font-size:0.24rem;
          color:#03a3ff;
          margin-left:0.11rem;
          margin-right:3rem;
        }
        .li-conf-box-bot-three{
          width:0.32rem;
          height:0.32rem;
          margin-right:0.13rem;
        }
        .li-conf-box-bot-four{
          font-size:0.24rem;
          color:#999999;
        }
      }
    }
  }
  .li-foo{
    width:100%;
    height:0.6rem;
    background:#fff;
    border-top:1px solid #dddddd;
    box-sizing: border-box;
    padding: 0 0.21rem;
    padding-top:0.2rem;
    .li-foo-box{
      height:0.8rem;;
      background:#0085d0;
      border-radius:0.05rem;
      display:flex;
      box-sizing: border-box;
      padding-left:1.8rem;
      align-items: center;
      .li-foo-one{
        width:0.36rem;
        height:0.36rem;
        margin-right:0.2rem;
      }
      .li-foo-p{
        font-size:0.3rem;
        color:white;
      }
    }
  }
}
</style>
