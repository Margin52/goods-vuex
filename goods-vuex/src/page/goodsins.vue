<template>
  <div class="goodsins">
    <div class="in-hea">
      <router-link to="/">
        <img class="in-hea-one" src="../../static/images/li-hea-one.png" alt="">
      </router-link>
      <p class="in-hea-p">新增地址</p>
    </div>
    <div class="in-con">
      <div class="in-con-box">
        <div class="in-con-box-input-peo">
          <span class="in-con-box-input-peo-span">收货人</span>
          <input type="text" class="in-con-box-input-peo-input" placeholder="收货人姓名" v-model="name">
          <img src="../../static/images/in-con-peo.png" alt="" class="in-con-box-input-peo-img">
        </div>
        <div class="in-con-box-input-tel">
          <span class="in-con-box-input-peo-span">手机号码</span>
          <input type="text" class="in-con-box-input-tel-input" placeholder="收货人手机号码" v-model="phone">
        </div>
        <div class="in-con-box-input-add">
          <span class="in-con-box-input-peo-span">所在地区</span>
          <input type="text" class="in-con-box-input-tel-input" placeholder="点击选择送货区域" value = "陕西省西安市">
        </div>
        <div class="in-con-box-input-area">
          <span class="in-con-box-input-peo-span">详细地址</span>
          <input type="text" class="in-con-box-input-tel-input" placeholder="街道、楼牌号等" v-model="address">
        </div>
        <div class="in-con-box-input-def">
          <span class="in-con-box-input-peo-span">设为默认</span>
          <div :col="coldata" @click="motibut"  id="in-con-box-input-def-img" class="in-con-box-input-def-img">
            <div id="in-con-box-input-def-img-one" class="in-con-box-input-def-img-one"></div>
          </div>
        </div>
      </div>
      <p @click="save" class="in-con-save">保存</p>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('goodsone')

  export default {
    data () {
      return {
        name:'',
        phone:'',
        address:'',
        coldata:true,
        isDefault:''
      }
    },
    mounted(){
       this.toDefault()
    },
    computed:{
      ...mapState(['data']),
    },
    methods:{
      save:function(){
        var peo = this.name
        var tel = this.phone
        var deladd = this.address
        if(this.data){
          if(peo && tel && deladd){
            if(this.coldata = true){
              this.data.push({
                'checkIsUsed':this.isDefault,
                'recName':peo,
                'recPhoneNo':tel,
                'address':deladd
              })
              // console.log("save",this.isDefault)
            }else{
              this.data.push({
                'checkIsUsed':this.isDefault,
                'recName':peo,
                'recPhoneNo':tel,
                'address':deladd
              })
              // console.log("save",this.isDefault)
            }
          }else{
            alert("内容不可为空！！")
          }
        }
      },
      /**
       * 默认按钮背景颜色变化
       */
      motibut:function(){
        // let padL = 0.45
        let colone = document.getElementById("in-con-box-input-def-img")
        var movdiv = document.getElementById("in-con-box-input-def-img-one")
        if(this.coldata == true){
          // colone.style.backgroundColor = "#0085d0"
          this.leftball()
          this.isDefault = '1'
          this.coldata = false
        }else if(this.coldata == false){
          // colone.style.backgroundColor = "#fff"
          this.rightball()
          this.isDefault = '0'
          this.coldata = true
        }
      },
      /**
       * 默认状态赋值
       */
      toDefault:function(){
        if(this.coldata == false){
          this.isDefault='1'
        }else if(this.coldata == true){
          this.isDefault='0'
        }
      },
      /**
       * 小球向右移动
       */
      leftball:function(){
        let colone = document.getElementById("in-con-box-input-def-img")
        var movdiv = document.getElementById("in-con-box-input-def-img-one")
        let left1 = 0
        let myTimer = setInterval(function(){
          colone.style.backgroundColor = "#0085d0"
          left1 = left1 + 0.01
          if(left1>0.45){
            window.clearInterval(myTimer)
            left1=0.45
          }
          movdiv.style.left = left1+"rem";
        },10)
      },
      /**
       * 小球向左移动
       */
      rightball:function(){
        let colone = document.getElementById("in-con-box-input-def-img")
        var movdiv = document.getElementById("in-con-box-input-def-img-one")
        let left1 = 0.45
        let myTimer = setInterval(function(){
          left1 = left1 - 0.01
          if(left1<0){
            window.clearInterval(myTimer)
            left1=0
          }
           movdiv.style.left = left1+"rem";
           colone.style.backgroundColor = "#fff"
        },10)
      },
    },
    watch: {
      'data': function (old, nVal) {
        console.log('***', old.length, nVal.length)
      }
    }
  }
</script>

<style lang='scss' scoped>
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
          height:0.60rem;
          background:white;
          position:relative;
          border:1px solid #d4d4d4;
          border-top-left-radius: 0.34rem;
          border-bottom-left-radius: 0.34rem;
          border-top-right-radius: 0.34rem;
          border-bottom-right-radius: 0.34rem;
          .in-con-box-input-def-img-one{
            width:0.59rem;
            height:0.59rem;
            position:absolute;
            left:0rem;
            background:white;
            border:1px solid #d4d4d4;
            border-top-left-radius: 50%;
            border-bottom-left-radius: 50%;
            border-top-right-radius: 50%;
            border-bottom-right-radius: 50%;
          }
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
