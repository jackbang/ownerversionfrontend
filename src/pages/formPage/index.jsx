import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View } from '@tarojs/components'
import { AtButton, AtNavBar, AtInput} from 'taro-ui'
import './index.scss'

import bk from '../../img/image-13.png'

export default class Formpage extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      showSteps: false,
      form_value_0: ''
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleNavBack() { }

  handleChange (value) {
    this.setState({
      form_value_0: value
    })
    return value
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

            <View style='height:70rpx;width:100%;background:#FEFFFF;border-radius:8px 8px 0px 0px;display:flex;align-items:flex-start;justify-content:center;padding-top:30rpx;'> 
              <View style='width:33%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;'>
                <View style='height:10rpx;width:10rpx;border-radius:50%;border: 1px solid #FCA62F;margin-bottom:10rpx;'></View>
                <text style='font-size:12px;'>实名注册</text>
              </View>
              
              <View style='height:7.5rpx;width:28%;position:absolute;left:21%;border: 0px solid #FCA62F;border-bottom-width:1px;'></View>

              <View style='width:33%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;'>
                <View style='height:10rpx;width:10rpx;border-radius:50%;border: 1px solid #FCA62F;margin-bottom:10rpx;'></View>
                <text style='font-size:12px;'>补充店铺信息</text>
              </View>

              <View style='height:7.5rpx;width:28%;position:absolute;right:21%;border: 0px solid #FCA62F;border-bottom-width:1px;'></View>

              <View style='width:33%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;'>
                <View style='height:10rpx;width:10rpx;border-radius:50%;border: 1px solid #FCA62F;margin-bottom:10rpx;'></View>
                <text style='font-size:12px;'>认证店铺</text>
              </View>
            </View>

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
                  value={this.state.form_value_0}
                  onChange={this.handleChange.bind(this)}
                  className='name-input-css'
                />
              </View>

              <View style='height:75rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
                <AtInput
                  name='value1'
                  title='身份证号'
                  type='idcard'
                  placeholder='修改'
                  value={this.state.form_value_0}
                  onChange={this.handleChange.bind(this)}
                  className='name-input-css'
                />
              </View>

              <View style='height:75rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
                <AtInput
                  name='value2'
                  title='手机号'
                  type='phone'
                  placeholder='修改'
                  value={this.state.form_value_0}
                  onChange={this.handleChange.bind(this)}
                  className='name-input-css'
                />
              </View>
              

              <View style='width:80%;height:130rpx;margin-left:10%;'><AtButton type='primary' circle='true' className='confirm-button'>下一步</AtButton></View>
            </View>

          </View>
        </View>
      </View>
    )
  }
}
