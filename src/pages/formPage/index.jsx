import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Input} from '@tarojs/components'
import { AtButton, AtNavBar, AtInput, AtImagePicker } from 'taro-ui'
import './index.scss'

import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

import bk from '../../img/image-13.png'

import {test_send_sms} from '../../service/api'

export default class Formpage extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      showSteps: false,
      adminStoreInfo: {
        name:'',
        idCard:'',
        phone:''
      },
      adminInfo:{},
      validate_code: ['','','','','',''],
      validate_code_focus:9,
      server_validate_code:'111111',
      countDownStart: 59,
      countDownNum: 0,
      pageKind:0,
      imgFile:[],
      imgUploadIcon: true
    }
  }

  componentWillMount () { 
    var pages = getCurrentPages();
    let currentPage = pages[pages.length-1];
    let pages_option = currentPage.options;
    let pageKind = pages_option.page;
    if (pageKind == "0"){
      this.state.adminInfo = Taro.getStorageSync('admin_info');
      let tempAdminStoreInfo = Taro.getStorageSync('adminStoreInfo');
      if(tempAdminStoreInfo){
        this.state.adminStoreInfo = tempAdminStoreInfo
      }
      console.log('phone Numbers')
      this.setState({
        pageKind:pageKind
      })
    } else if (pageKind == "1") {
      this.setState({
        pageKind:pageKind
      })
    } else if (pageKind == "2") {

    } else if (pageKind == "3") {

    }
  }

  componentDidMount () {
    
  }

  componentWillUnmount () {
    clearInterval(this.timer);
  }

  componentDidShow () { 
  }

  componentDidHide () { }

  handleCountDoun (end) {
    this.timer = setInterval(()=>{
      if (end - dayjs().unix() >= 0) {
        this.setState({
          countDownNum: end - dayjs().unix()
        })
      } else {
        clearInterval(this.timer);
      }
    },500)
  }

  handleSendSMS() {
    this.setState({
      countDownNum:60
    });
    this.handleCountDoun(dayjs().unix()+60);
    let admin_data = {
      adminId: this.state.adminInfo.adminId,
      sessionId: this.state.adminInfo.sessionId,
      phone: this.state.adminStoreInfo.phone,
      watermark: {
        appId: wx.getAccountInfoSync().miniProgram.appId,
        token: (dayjs().unix() + 1000 ) * 2
      }
    }
    console.log(admin_data);
    if (this.state.adminStoreInfo.phone.length !== 11) {
      console.log('phone num length is not 11')
    } else {
      let _this = this;
      test_send_sms(admin_data).then(function(res) {
        let validCode = (res.data.data.token - 1000) >> 1;
        _this.state.server_validate_code = validCode;
        _this.state.adminInfo.sessionId = res.data.data.sessionId;
        Taro.setStorage({key:'admin_info', data:_this.state.adminInfo});
      })
      console.log(this.state.server_validate_code)
    }
  }
  

  handleNavBack() { 
    Taro.navigateBack()
  }

  handleChange (type, value) {
    if (type == 'adminStoreInfo_name') {
      this.setState({
        adminStoreInfo:{
          name: value, 
          idCard: this.state.adminStoreInfo.idCard, 
          phone: this.state.adminStoreInfo.phone}
      })
    } else if (type == 'adminStoreInfo_idCard') {
      this.setState({
        adminStoreInfo:{
          name: this.state.adminStoreInfo.name, 
          idCard: value, 
          phone: this.state.adminStoreInfo.phone}
      })
    } else if (type == 'adminStoreInfo_phone') {
      this.setState({
        adminStoreInfo:{
          name: this.state.adminStoreInfo.name, 
          idCard: this.state.adminStoreInfo.idCard, 
          phone: value}
      })
    }
  }

  handleNextStep () { 
    if (this.state.pageKind == "0"){
      if (this.state.adminStoreInfo.name.length == 0) {
        console.log('name length is 0')
      }
      if (this.state.adminStoreInfo.idCard.length !== 18) {
        console.log('id card length is not 18')
      }
      if (this.state.adminStoreInfo.phone.length !== 11) {
        console.log('phone num length is not 11')
      }
      var input_code = this.state.validate_code[0]*100000+this.state.validate_code[1]*10000+this.state.validate_code[2]*1000+this.state.validate_code[3]*100+this.state.validate_code[4]*10+this.state.validate_code[5]*1
      console.log(this.state.validate_code)
      console.log(input_code)
      console.log(this.state.server_validate_code)
      if (this.state.server_validate_code !== input_code) {
        console.log('valid code is wrong')
      }
      if ((this.state.adminStoreInfo.name.length !== 0) & (this.state.adminStoreInfo.idCard.length == 18) & (this.state.adminStoreInfo.phone.length == 11) & (this.state.server_validate_code == input_code)) {
        Taro.setStorage({key:'adminStoreInfo', data:this.state.adminStoreInfo})
        Taro.navigateTo({url: `index?page=1`})
      }
    }
  }

  handleInput (idx, value) {
    console.log(value.detail.value)
    console.log('state: '+this.state.validate_code)
    if ((idx == 0) & (value.detail.value.length==6)){
      this.state.validate_code[0] = value.detail.value[0];
      this.state.validate_code[1] = value.detail.value[1];
      this.state.validate_code[2] = value.detail.value[2];
      this.state.validate_code[3] = value.detail.value[3];
      this.state.validate_code[4] = value.detail.value[4];
      this.state.validate_code[5] = value.detail.value[5];
      this.setState({
        validate_code_focus: idx + 5
      })
    } else {
      this.state.validate_code[idx] = value.detail.value[0];
      if (value.detail.value.length==1){
        this.setState({
          validate_code_focus: idx + 1
        })
      } else {
        this.setState({
          validate_code_focus: idx - 1
        })
      }
    }
    
    
    console.log('focus: '+this.state.validate_code_focus)
   }

  handleEmpty() { }

  onImgChange (files, operationType, index) {
    if (operationType=='add') {
      this.setState({
        imgFile: files,
        imgUploadIcon: false
      })
    } else if (operationType=='remove') {
      this.setState({
        imgFile: files,
        imgUploadIcon: true
      })
    }
  }

  render () {

    var top_height = wx.getSystemInfoSync().statusBarHeight;
    var system_width = wx.getSystemInfoSync().screenWidth/3;

    var screenHeight = wx.getSystemInfoSync().screenHeight;
    var screenWidth = wx.getSystemInfoSync().screenWidth;
    var windowHeight = wx.getSystemInfoSync().windowHeight;
    var screenHeight_rpx = 750*(screenHeight/screenWidth);
    var windowHeight_rpx = 750*(windowHeight/screenWidth);
    var top_height_rpx = 750*(top_height/screenWidth);

    let stepsBar = [];
    let formContent = [];

    if (this.state.pageKind == "0") {
      stepsBar.push(
        <View style='height:70rpx;width:100%;background:#FEFFFF;border-radius:8px 8px 0px 0px;display:flex;align-items:flex-start;justify-content:center;padding-top:30rpx;'> 
          <View style='width:33%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;'>
            <View style='height:10rpx;width:10rpx;border-radius:50%;border: 1px solid #FCA62F;margin-bottom:10rpx;'></View>
            <text style='font-size:12px;'>实名注册</text>
          </View>
          
          <View style='height:7.5rpx;width:28%;position:absolute;left:21%;border: 0px solid #A5A5A5;border-bottom-width:1px;'></View>

          <View style='width:33%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;'>
            <View style='height:10rpx;width:10rpx;border-radius:50%;border: 1px solid #A5A5A5;margin-bottom:10rpx;background:#A5A5A5;'></View>
            <text style='font-size:12px;'>补充店铺信息</text>
          </View>

          <View style='height:7.5rpx;width:28%;position:absolute;right:21%;border: 0px solid #A5A5A5;border-bottom-width:1px;'></View>

          <View style='width:33%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;'>
            <View style='height:10rpx;width:10rpx;border-radius:50%;border: 1px solid #A5A5A5;margin-bottom:10rpx;background:#A5A5A5;'></View>
            <text style='font-size:12px;'>认证店铺</text>
          </View>
        </View>
      )

      formContent.push(
        <View style='height:auto;width:100%;background:#FEFFFF;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;margin-top:30rpx;'>
          <View style='height:20rpx;'></View>
          <text style='font-size:20px;font-weight:530;margin-left:5%;'>生成自己专属店铺</text>
          <text style='font-size:14px;color:#A5A5A5;margin-left:5%;margin-top:5rpx;'>填写以下信息，一分钟快速注册</text>
          <View style='height:75rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
            <AtInput
              name='value0'
              title='姓名'
              type='text'
              placeholder='修改'
              value={this.state.adminStoreInfo.name}
              onChange={this.handleChange.bind(this, 'adminStoreInfo_name')}
              className='name-input-css'
            />
          </View>

          <View style='height:75rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
            <AtInput
              name='value1'
              title='身份证号'
              type='idcard'
              placeholder='修改'
              value={this.state.adminStoreInfo.idCard}
              onChange={this.handleChange.bind(this, 'adminStoreInfo_idCard')}
              className='name-input-css'
            />
          </View>

          <View style='height:75rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
            <AtInput
              name='value2'
              title='手机号'
              type='phone'
              placeholder='修改'
              value={this.state.adminStoreInfo.phone}
              onChange={this.handleChange.bind(this, 'adminStoreInfo_phone')}
              className='name-input-css'
            />
          </View>
          <View style='width:80%;height:20rpx;margin-left:10%;'></View>
        </View>
      )

      let reSendSMS = [];
      console.log(this.state.countDownNum)
      reSendSMS.push(
        <text style={{fontSize:`14px`,color:this.state.countDownNum <= 0? '#5394ff':'#A5A5A5',marginTop:`5rpx`,position:`absolute`,right:`60rpx`}} onClick={this.state.countDownNum <= 0?this.handleSendSMS.bind(this):this.handleEmpty}>
          {this.state.countDownNum <= 0? '发送验证码':this.state.countDownNum+'s'}
        </text>
      )

      formContent.push(
        <View style='height:auto;width:100%;background:#FEFFFF;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;margin-top:30rpx;'>
          <View style='height:20rpx;'></View>
          <text style='font-size:20px;font-weight:530;margin-left:5%;'>短信验证</text>
          <View style='width:100%;'>
            <text style='font-size:14px;color:#A5A5A5;margin-left:5%;margin-top:5rpx;'>验证码发送至</text>
            <text style='font-size:14px;color:#FCA62F;margin-top:5rpx;'>{this.state.adminStoreInfo.phone}</text>
            <text style='font-size:14px;color:#A5A5A5;margin-top:5rpx;'>，请查收</text>
            {reSendSMS}
          </View>
          <View style='height:75rpx;width:90%;margin-left:5%;margin-top:30rpx;border: 0px solid #97979755;display:flex;align-items:center;justify-content:flex-start;padding-bottom:30rpx'>
            <Input
              value={this.state.validate_code[0]}
              onInput={this.handleInput.bind(this, 0)}
              type='number'
              placeholder=''
              maxlength='6'
              style='width:80rpx;height:80rpx;border:1px solid #979797;border-radius:3px;display:flex;justify-content:center;align-items:center;text-align:center;'
              focus = {this.state.validate_code_focus==0? true : false}
            />

            <View style='height:1px;width:40rpx;'></View>

            <Input
              value={this.state.validate_code[1]}
              onInput={this.handleInput.bind(this, 1)}
              type='number'
              placeholder=''
              maxlength='1'
              style='width:80rpx;height:80rpx;border:1px solid #979797;border-radius:3px;display:flex;justify-content:center;align-items:center;text-align:center;'
              focus = {this.state.validate_code_focus==1? true : false}
            />

            <View style='height:1px;width:40rpx;'></View>

            <Input
              value={this.state.validate_code[2]}
              onInput={this.handleInput.bind(this, 2)}
              type='number'
              placeholder=''
              maxlength='1'
              style='width:80rpx;height:80rpx;border:1px solid #979797;border-radius:3px;display:flex;justify-content:center;align-items:center;text-align:center;'
              focus = {this.state.validate_code_focus==2? true : false}
            />

            <View style='height:1px;width:40rpx;'></View>

            <Input
              value={this.state.validate_code[3]}
              onInput={this.handleInput.bind(this, 3)}
              type='number'
              placeholder=''
              maxlength='1'
              style='width:80rpx;height:80rpx;border:1px solid #979797;border-radius:3px;display:flex;justify-content:center;align-items:center;text-align:center;'
              focus = {this.state.validate_code_focus==3? true : false}
            />

            <View style='height:1px;width:40rpx;'></View>

            <Input
              value={this.state.validate_code[4]}
              onInput={this.handleInput.bind(this, 4)}
              type='number'
              placeholder=''
              maxlength='1'
              style='width:80rpx;height:80rpx;border:1px solid #979797;border-radius:3px;display:flex;justify-content:center;align-items:center;text-align:center;'
              focus = {this.state.validate_code_focus==4? true : false}
            />

            <View style='height:1px;width:40rpx;'></View>

            <Input
              value={this.state.validate_code[5]}
              onInput={this.handleInput.bind(this, 5)}
              type='number'
              placeholder=''
              maxlength='1'
              style='width:80rpx;height:80rpx;border:1px solid #979797;border-radius:3px;display:flex;justify-content:center;align-items:center;text-align:center;'
              focus = {this.state.validate_code_focus==5? true : false}
            />

          </View>

          <View style='width:80%;height:130rpx;margin-left:10%;'><AtButton type='primary' circle='true' className='confirm-button' onClick={this.handleNextStep.bind(this)}>下一步</AtButton></View>
        </View>
      )
    } else if (this.state.pageKind == "1"){
      
      stepsBar.push(
        <View style='height:70rpx;width:100%;background:#FEFFFF;border-radius:8px 8px 0px 0px;display:flex;align-items:flex-start;justify-content:center;padding-top:30rpx;'> 
          <View style='width:33%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;'>
            <View style='height:10rpx;width:10rpx;border-radius:50%;border: 1px solid #FCA62F;margin-bottom:10rpx;background:#FCA62F;'></View>
            <text style='font-size:12px;'>实名注册</text>
          </View>
          
          <View style='height:7.5rpx;width:28%;position:absolute;left:21%;border: 0px solid #FCA62F;border-bottom-width:1px;'></View>

          <View style='width:33%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;'>
            <View style='height:10rpx;width:10rpx;border-radius:50%;border: 1px solid #FCA62F;margin-bottom:10rpx;background:#A5A5A500;'></View>
            <text style='font-size:12px;'>补充店铺信息</text>
          </View>

          <View style='height:7.5rpx;width:28%;position:absolute;right:21%;border: 0px solid #A5A5A5;border-bottom-width:1px;'></View>

          <View style='width:33%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;'>
            <View style='height:10rpx;width:10rpx;border-radius:50%;border: 1px solid #A5A5A5;margin-bottom:10rpx;background:#A5A5A500;'></View>
            <text style='font-size:12px;'>认证店铺</text>
          </View>
        </View>
      )

      formContent.push(
        <View style='height:auto;width:100%;background:#FEFFFF;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;margin-top:30rpx;'>
          <View style='height:20rpx;'></View>
          <text style='font-size:20px;font-weight:530;margin-left:5%;'>店铺信息</text>
          <View style='height:150rpx;width:90%;margin-left:5.5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
            <text style='font-size:15px;width:70%;'>店铺头像</text>
            <View style='height:100%;width:150rpx;'>
              <AtImagePicker
                length={1}
                files={this.state.imgFile}
                onChange={this.onImgChange.bind(this)}
                mode='scaleToFill'
                count={1}
                showAddBtn={this.state.imgUploadIcon}
              />
            </View>
          </View>
        </View>
      )

    }

    return (
      <View className='formPage' style={{height:`100vh`, display:`flex`, flexDirection:`column`}}>
        <image src={bk} style='width:100vw;height:100vh;position:absolute'></image>
        <View style={{padding: `${top_height}px 0px 0px 0px`, position:'relative', top:0, left:0, width:'100%', display:'flex', flexDirection:`column`, alignItems:'center',justifyContent:'flex-start'}}>
          <AtNavBar className='nav-bar-info'
              onClickLeftIcon={this.handleNavBack.bind(this)}
              color='#ffff'
              leftIconType='chevron-left'
            ><View style='color:#fff;font-size:18px'></View></AtNavBar>
          <View style='height:83vh;width:90%;background:#F9F9F9;border-radius:8px;margin-top:50rpx;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;'>

            {stepsBar}

            {formContent}

          </View>
        </View>
      </View>
    )
  }
}
