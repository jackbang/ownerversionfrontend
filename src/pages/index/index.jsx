import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Input } from '@tarojs/components'
import { AtButton, AtIcon } from 'taro-ui'
import './index.scss'

import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

import bk from '../../img/image-13.png'

import {test_wechat_login, test_get_phonenum_info, test_send_sms, test_get_store_list, test_verify_store} from '../../service/api'
import {base} from '../../service/config'

export default class Index extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      adminInfo: {},
      pageKind: 0, //0 login, 1 phone number input, 2 phone number valid, 3 select store
      validate_code: ['','','','','',''],
      validate_code_focus:9,
      server_validate_code:'111111',
      countDownStart: 59,
      countDownNum: 0,
      storeList: [],
      selectStoreId: 0,
      showInput: false,
      isLogin: false,
      infoLoading: true
    }
  }

  componentWillMount () {

  }

  componentDidMount() {
    
  }

  componentWillUnmount () { }

  componentDidShow () { 
  
    console.log('reShow')
    console.log(this.state)
    this.state.adminInfo = Taro.getStorageSync('admin_info');

    if (this.state.pageKind == 3) {
      this.getStoreList(this);
    }
  }

  componentDidHide () { }

  getStoreList (that) {
    let upload_data = {
      adminId: that.state.adminInfo.adminId,
      sessionId: that.state.adminInfo.sessionId,
      phone: that.state.adminInfo.phoneNumber,
      appId: wx.getAccountInfoSync().miniProgram.appId,
      token: (dayjs().unix() + 1000 ) * 2
    }

    test_get_store_list(upload_data).then(function(res){
      console.log(res.data.data)
      that.state.storeList = res.data.data;
      if (that.state.storeList.length == 0) {
        Taro.navigateTo({url: '../formPage/index?page=0'})
      } else {
        that.setState({
          pageKind:3
        })
      }
    })
  }

  async handleLogin () {
    console.log(wx.getSystemInfoSync())
    let code;
    let adminInfo;

    wx.getUserProfile({
      desc:'用于注册',
      success: (res) => {
        console.log(res);
        var timeToken = (dayjs().unix() + 1000 ) * 2;
        
        if (code) {
          adminInfo = {
            encryptedData: res.encryptedData,
            iv: res.iv,
            rawData: res.rawData,
            signature: res.signature,
            code: code,
            adminInfo: res.userInfo,
            systemInfo: wx.getSystemInfoSync(),
            watermark:{
              appId: wx.getAccountInfoSync().miniProgram.appId,
              token: timeToken
            }
          }
          console.log(adminInfo)
          test_wechat_login(adminInfo).then((result)=>{
            console.log(result.data);
            this.state.adminInfo = adminInfo.adminInfo
            this.state.adminInfo['sessionId'] = result.data.data.sessionId
            this.state.adminInfo['adminId'] = result.data.data.adminId
            Taro.setStorage({key:`admin_info`, data:this.state.adminInfo,
              success: 
                this.setState({
                  isLogin: true,
                  pageKind: 1
                })
            })
            /*
            if (result.data.data.newAdmin==1) { 
              console.log('new admin')
              Taro.navigateTo({url: '../formPage/index?page=0'})
            } else {
              console.log('not the new admin')
              this.setState({
                pageKind: 1
              })
            }
            */
          });
        }

      }
    })
    
    wx.login({
      success: function(res) {
        if (res.code) {
          code = res.code;
          console.log('data is ' + res.code)
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    })
  }

  showPhoneInput () {
    
  }

  async getPhoneNumber(e) {
    if (e.detail.iv) {
      // 同意获取手机号
      let _this = this;
      wx.checkSession({
        success () {
          console.log("登录未过期");
          let phoneNumInfo = {
            encryptedData: e.detail.encryptedData,
            iv: e.detail.iv,
            user_id: _this.state.adminInfo.adminId,
            sessionId: _this.state.adminInfo.sessionId,
            watermark: {
              appId: wx.getAccountInfoSync().miniProgram.appId,
              token: (dayjs().unix() + 1000 ) * 2
            }
          }
          console.log(phoneNumInfo)
          var temp_storeList;
          test_get_phonenum_info(phoneNumInfo).then(function(res) {
            console.log(res.data.data)
            _this.state.adminInfo['phoneNumber'] = res.data.data.phoneNumber;
            Taro.setStorage({
              key: 'admin_info',
              data: _this.state.adminInfo
            })
            console.log(_this.state)
            _this.getStoreList(_this)
          })
        },
        fail () {
          
          console.log('验证过期，请重新登录')
          _this.setState({
            pageKind:0
          })
          //请重新登录
        }
      })

    } else {
      this.state.adminInfo['phoneNumber'] = '';
      /*
      this.setState({
        pageKind: 2
      })*/

    }
  }

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
      phone: this.state.adminInfo.phoneNumber,
      watermark: {
        appId: wx.getAccountInfoSync().miniProgram.appId,
        token: (dayjs().unix() + 1000 ) * 2
      }
    }
    console.log(admin_data);
    if (admin_data.phone.length !== 11) {
      console.log('phone num length is not 11')
    } else {
      let _this = this;
      test_send_sms(admin_data).then(function(res) {
        let validCode = (res.data.data.token - 1000) >> 1;
        _this.state.server_validate_code = validCode;
        _this.state.adminInfo.sessionId = res.data.data.sessionId;
        Taro.setStorage({
          key: 'admin_info',
          data: _this.state.adminInfo
        })
      })
      console.log(this.state.server_validate_code)
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
    var input_code = this.state.validate_code[0]*100000+this.state.validate_code[1]*10000+this.state.validate_code[2]*1000+this.state.validate_code[3]*100+this.state.validate_code[4]*10+this.state.validate_code[5]*1
    if (input_code == this.state.server_validate_code) {
      console.log(this.state)
      Taro.setStorage({key:'admin_info', data:this.state.adminInfo});
      this.getStoreList(this)
    }
    console.log('focus: '+this.state.validate_code_focus)
  }

  handleInputPhone (value) {
    this.state.adminInfo.phoneNumber = value.detail.value;
  }

  handleEmpty() { }

  handleClickStoreTab(id) {
    this.setState({
      selectStoreId: id
    })
  }

  openStore(){
    console.log('open the store')
    console.log(this.state.storeList[this.state.selectStoreId])
    let temp = this.state.storeList[this.state.selectStoreId]
    let storeInfo = {
      store_address: temp.store_address,
      store_deposit: temp.store_deposit,
      store_id: temp.store_id,
      store_info: temp.store_info,
      store_latitude: temp.store_latitude,
      store_logo: temp.store_logo,
      store_longitude: temp.store_longitude,
      store_name: temp.store_name,
      store_position: temp.store_position,
      store_status: temp.store_status,
      store_tel1: temp.store_tel1,
      store_tel2: temp.store_tel2
    }
    let permission = temp.adminStore_permission
    Taro.setStorage({
      key:'store_info',
      data: storeInfo
    })
    Taro.setStorage({
      key:'permission',
      data:permission
    })
    if (temp.adminStore_verify == 1) {
      Taro.navigateTo({
        url: '../storeMainPage/storeMainPage'
      })
    } else {
      console.log('did not verify')
      let verify_data = {
        adminId: this.state.adminInfo.adminId,
        sessionId: this.state.adminInfo.sessionId,
        adminStore_id: temp.adminStore_id,
        appId: wx.getAccountInfoSync().miniProgram.appId,
        token: (dayjs().unix() + 1000 ) * 2
      }
      let _this = this;
      test_verify_store(verify_data).then(function(res){
        if (res.data.code == 1) {
          Taro.navigateTo({
            url: '../storeMainPage/storeMainPage'
          })
        } else {
          console.log('验证失败')
          _this.setState({
            pageKind: 0
          })
        }
      })
    }
  }

  createStore() {
    Taro.setStorage({
      key:'admin_info',
      data: this.state.adminInfo
    })
    Taro.navigateTo({
      url: '../formPage/index?page=0'
    })
    console.log('create the store')
  }

  render () {
    let formContent = [];
    if (this.state.pageKind == 0) {
      return (
        <View className='index' style={{height:`100vh`, backgroundSize:`auto 100%`, display:`flex`, flexDirection:`column`,alignItems:`center`, justifyContent:`flex-end`}}>
          {/* 这里的背景后期需要去掉，用Swiper 来替代*/}
          <image src={bk} style='width:100vw;height:100vh;position:absolute;'></image>
          <AtButton type='primary' circle='true' className='join-platform-button' onClick={this.handleLogin.bind(this)}>登录</AtButton> 
          <View style='padding-bottom: 45%;'></View>  
        </View>
      )
    } else if (this.state.pageKind == 1) {
      return (
        <View className='index' style={{height:`100vh`, backgroundSize:`auto 100%`, display:`flex`, flexDirection:`column`,alignItems:`center`, justifyContent:`flex-end`}}>
          {/* 这里的背景后期需要去掉，用Swiper 来替代*/}
          <image src={bk} style='width:100vw;height:100vh;position:absolute;'></image>
          <AtButton type='primary' circle='true' className='join-platform-button' onClick={this.showPhoneInput.bind(this)} openType='getPhoneNumber' onGetPhoneNumber={this.getPhoneNumber.bind(this)}>获取手机号</AtButton> 
          <View style='padding-bottom: 45%;'></View>  
        </View>
      )
    } else if (this.state.pageKind == 2) {
      
      let reSendSMS = [];
      console.log(this.state.countDownNum)
      reSendSMS.push(
        <text style={{fontSize:`16px`,color:this.state.countDownNum <= 0? '#5394ff':'#A5A5A5',marginTop:`5rpx`,position:`absolute`,right:`60rpx`}} onClick={this.state.countDownNum <= 0?this.handleSendSMS.bind(this):this.handleEmpty}>
          {this.state.countDownNum <= 0? '发送验证码':this.state.countDownNum+'s'}
        </text>
      )

      formContent.push(
        <View style='height:auto;width:100%;background:#FEFFFF80;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;margin-top:30rpx;border-radius:20px;'>
          <View style='height:20rpx;'></View>
          <text style='font-size:20px;font-weight:530;margin-left:5%;margin-bottom:10rpx;'>短信验证</text>
          <View style='width:100%;margin-left:5%;display:flex;align-items:center;justify-content:flex-start;'>
            <Input
              value={this.state.adminInfo.phoneNumber}
              onInput={this.handleInputPhone.bind(this)}
              type='number'
              placeholder='请输入手机号'
              maxlength='11'
              style='width:400rpx;height:80rpx;border:1px solid #979797;border-radius:40px;display:flex;justify-content:center;align-items:center;text-align:flex-start;'
              focus = {this.state.validate_code_focus==0? true : false}
            />
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

          
        </View>
      )


      return (
        <View className='index' style={{height:`100vh`, backgroundSize:`auto 100%`, display:`flex`, flexDirection:`column`,alignItems:`center`, justifyContent:`flex-end`}}>
          {/* 这里的背景后期需要去掉，用Swiper 来替代*/}
          <image src={bk} style='width:100vw;height:100vh;position:absolute;z-index:-1;'></image>
          {formContent}
          <View style='padding-bottom: 45%;'></View>  
        </View>
      )
    } else if (this.state.pageKind == 3) {

      let storeTabs = [];

      this.state.storeList.map((item, itemIdx) => {
        storeTabs.push(
          <View style={{
            height:`100rpx`,
            width:`500rpx`,
            marginLeft:`50rpx`,
            border: `1.5px solid ${this.state.selectStoreId == itemIdx? '#FCA62F': '#A5A5A5'}`,
            borderRadius:`10rpx`,
            marginTop: `20rpx`,
            display: `flex`}} onClick={this.handleClickStoreTab.bind(this, itemIdx)}>
            <image src={base+item.store_logo} style='height:80rpx;width:80rpx;margin-left:10rpx;margin-top:10rpx;'></image>
            <View style='height:100rpx;width:280rpx;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;margin-left:20rpx;'>
              <text style='font-size:14px;font-weight:530;overflow:hidden;textOverflow:ellipsis;whiteSpace:nowrap;width:280rpx;'>{item.store_name}</text>
              <text style={{fontSize:`12px`, color:`${item.adminStore_verify==1? '#A5A5A5':'#FF0101'}`, overflow:`hidden`, textOverflow:`ellipsis`, whiteSpace:`nowrap`, width:`280rpx`}}>{item.adminStore_verify==1? item.store_position:'未验证'}</text>
            </View>
            <View style='margin-left:50rpx;margin-top:25rpx;'>
              <AtIcon value='check-circle' size='20' color={this.state.selectStoreId == itemIdx? '#FCA62F': '#A5A5A5'} ></AtIcon>
            </View>
          </View>
        )
      })

      return (
        <View className='index' style={{height:`100vh`, backgroundSize:`auto 100%`, display:`flex`, flexDirection:`column`,alignItems:`center`, justifyContent:`flex-end`}}>
          {/* 这里的背景后期需要去掉，用Swiper 来替代*/}
          <image src={bk} style='width:100vw;height:100vh;position:absolute;filter:brightness(50%);z-index:-1;'></image>
          <View style='height:60vh;width:80%;border-radius:20px;background:#FEFFFF;display:flex;flex-direction:column;'>
            <text style='font-size:20px;font-weight:550;margin-left:50rpx;margin-top:50rpx;margin-bottom:30rpx;'>您的店铺</text>
            <View style='height:44vh;'>
            {storeTabs}
            </View>
            <AtButton type='primary' circle='true' className='open-store-button' onClick={this.openStore.bind(this)}>进入店铺</AtButton>
            <text style='font-size:14px;color:#FCA62F;width:100%;text-align:center;text-decoration:underline;' onClick={this.createStore.bind(this)}>入驻分店</text>
          </View>
          <View style='height:20vh;'></View>  
        </View>
      )
    }
    
  }
}
