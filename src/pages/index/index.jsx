import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './index.scss'

import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

import bk from '../../img/image-13.png'

import {test_wechat_login} from '../../service/api'

export default class Index extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      adminInfo: {},
      isLogin: false,
      infoLoading: true
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { 
    console.log('reShow')
  }

  componentDidHide () { }

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
                  isLogin: true
                })
            });
            if (result.data.data.newAdmin==1) { 
              console.log('new admin')
              Taro.navigateTo({url: '../formPage/index?page=0'})
            } else {
              console.log('not the new admin')
            }
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

  render () {
    return (
      <View className='index' style={{height:`100vh`,backgroundImage:`url(${bk})`, backgroundSize:`auto 100%`, display:`flex`, flexDirection:`column`,alignItems:`center`, justifyContent:`flex-end`}}>
        {/* 这里的背景后期需要去掉，用Swiper 来替代*/}
        <image src={bk} style='width:100vw;height:100vh;position:absolute;'></image>
        <AtButton type='primary' circle='true' className='join-platform-button' onClick={this.handleLogin.bind(this)}>店铺入驻</AtButton> 
        <View style='padding-bottom: 45%;'></View>  
      </View>
    )
  }
}
