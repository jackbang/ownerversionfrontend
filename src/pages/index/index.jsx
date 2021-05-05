import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './index.scss'

import bk from '../../img/image-13.png'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index' style={{height:`100vh`,backgroundImage:`url(${bk})`, backgroundSize:`auto 100%`, display:`flex`, flexDirection:`column`,alignItems:`center`, justifyContent:`flex-end`}}>
        {/* 这里的背景后期需要去掉，用Swiper 来替代*/}
        <AtButton type='primary' circle='true' className='join-platform-button'>店铺入驻</AtButton> 
        <View style='padding-top: 5%;'></View>    
        <AtButton type='primary' circle='true' className='login-button'>微信一键登录</AtButton>
        <View style='padding-bottom: 45%;'></View>  
      </View>
    )
  }
}
