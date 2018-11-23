<template>
  <div class="goodsins">
    <div class="in-hea">
      <img class="in-hea-one" src="../../static/images/li-hea-one.png" alt="">
      <p class="in-hea-p">新增地址</p>
    </div>
    <div class="in-con">
      <div class="in-con-box">
        <div class="in-con-box-input-peo">
          <span class="in-con-box-input-peo-span">收货人</span>
          <input type="text" class="in-con-box-input-peo-input" placeholder="收货人姓名">
          <img src="../../static/images/in-con-peo.png" alt="" class="in-con-box-input-peo-img">
        </div>
        <div class="in-con-box-input-tel">
          <span class="in-con-box-input-peo-span">手机号码</span>
          <input type="text" class="in-con-box-input-tel-input" placeholder="收货人手机号码">
        </div>
        <div class="in-con-box-input-add">
          <span class="in-con-box-input-peo-span">所在地区</span>
          <input type="text" class="in-con-box-input-tel-input" placeholder="点击选择送货区域">
        </div>
        <div class="in-con-box-input-area">
          <span class="in-con-box-input-peo-span">详细地址</span>
          <input type="text" class="in-con-box-input-tel-input" placeholder="街道、楼牌号等">
        </div>
        <div class="in-con-box-input-def">
          <span class="in-con-box-input-peo-span">详细地址</span>
          <img class="in-con-box-input-def-img" src="../../static/images/in-con-two.png" alt="">
        </div>
      </div>
      <p class="in-con-save">保存</p>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    data () {
      return {
      }
    }
  }
</script>

<style lang='scss' scoped='' type='text/css'>
.goodsins{
  width:100%;
  background:#f6f6f6;
  .in-hea{
    width:100%;
    height:0.9rem;
    background:#0185d0;
    display:flex;
    align-items: center;
    box-sizing: border-box;
    padding:0 0.21rem;
    .in-hea-one{
      width:0.49rem;
      height:0.49rem;
      margin-right:1.8rem;
    }
    .in-hea-p{
      font-size:0.33rem;
      color:#fff;
    }
  }
  .in-con{
    width:100%;
    height:10.49rem;
    .in-con-box{
      width:100%;
      box-sizing: border-box;
      padding-top:0.2rem;
      .in-con-box-input-peo{
        width:100%;
        height:0.88rem;
        background:#fff;
        border-top:1px solid #e9e9e9;
        border-bottom:1px solid #e9e9e9;
        display:flex;
        align-items: center;
        box-sizing: border-box;
        padding:0 0.2rem;
        .in-con-box-input-peo-span{
          width:1.5rem;
          font-size:0.28rem;
          color:#333333;
        }
        .in-con-box-input-peo-input{
          width:3.9rem;
          height:0.5rem;
          border:none;
          font-size:0.28rem;
          outline: none;
          border-right:1px solid #e9e9e9;
          margin-right:0.2rem;
        }
        .in-con-box-input-peo-img{
          width:0.34rem;
          height:0.36rem;
        }
      }
      .in-con-box-input-tel{
        width:100%;
        background:#fff;
        height:0.88rem;
        border-bottom:1px solid #e9e9e9;
        display:flex;
        align-items: center;
        box-sizing: border-box;
        padding:0 0.2rem;
        .in-con-box-input-peo-span{
          width:1.5rem;
          font-size:0.28rem;
          color:#333333;
        }
        .in-con-box-input-tel-input{
          width:3.9rem;
          height:0.5rem;
          border:none;
          font-size:0.28rem;
          outline: none;
          margin-right:0.2rem;
        }
      }
      .in-con-box-input-add{
        height:0.88rem;
        background:#fff;
        width:100%;
        border-bottom:1px solid #e9e9e9;
        display:flex;
        align-items: center;
        box-sizing: border-box;
        padding:0 0.2rem;
        .in-con-box-input-peo-span{
          width:1.5rem;
          font-size:0.28rem;
          color:#333333;
        }
        .in-con-box-input-tel-input{
          width:3.9rem;
          height:0.5rem;
          border:none;
          font-size:0.28rem;
          outline: none;
          margin-right:0.2rem;
        }
      }
      .in-con-box-input-area{
        height:0.88rem;
        background:#fff;
        width:100%;
        border-bottom:1px solid #e9e9e9;
        display:flex;
        align-items: center;
        box-sizing: border-box;
        padding:0 0.2rem;
        .in-con-box-input-peo-span{
          width:1.5rem;
          font-size:0.28rem;
          color:#333333;
        }
        .in-con-box-input-tel-input{
          width:3.9rem;
          height:0.5rem;
          border:none;
          font-size:0.28rem;
          outline: none;
          margin-right:0.2rem;
        }
      }
      .in-con-box-input-def{
        height:0.88rem;
        background:#fff;
        width:100%;
        border-bottom:1px solid #e9e9e9;
        display:flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        padding:0 0.2rem;
        .in-con-box-input-peo-span{
          width:1.5rem;
          font-size:0.28rem;
          color:#333333;
        }
        .in-con-box-input-def-img{
          width:1.04rem;
          height:0.62rem;
        }
      }
    }
    .in-con-save{
      width:6rem;
      height:0.8rem;
      color:white;
      text-align: center;
      line-height:0.8rem;
      margin-top:0.3rem;
      margin-left:0.2rem;
      border-radius:0.07rem;
      background:#0085d0;
    }
  }

}
</style>
