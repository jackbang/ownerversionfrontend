import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import { AtButton, AtSearchBar, AtNavBar, AtTag, AtTabs, AtTabsPane} from 'taro-ui'

import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

import './index.scss'


import emptyPic from '../../img/play_pic_2.jpg'
import scoreActive from '../../img/scoreActive.png'
import scoreDeactive from '../../img/scoreDeactive.png'
import playerAva from '../../img/member.png'
import maleIcon from '../../img/male.png'
import femaleIcon from '../../img/female.png'

export default class Queuemanagepage extends Component {

  handleNavBack(){
  }

  onScrollToUpper() {}

  // or 使用箭头函数
  // onScrollToUpper = () => {}

  onScroll(e){
    //console.log(e.detail)
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

    const scrollTop = 0
    const Threshold = 20
    var scrollStyle = {
      height: `${windowHeight_rpx-top_height_rpx-90-150}rpx`
    }

    return (
      <View className='queueManagePage'>
        <image className='queue-info-page' src={emptyPic} style='width:100vw;height:100vh;position:absolute'></image>
        <View className='at-col' style={{padding: `${top_height}px 0px 0px 0px`, position:'absolute', top:0, left:0, width:'100%'}}>
          <AtNavBar className='nav-bar-info'
              onClickLeftIcon={this.handleNavBack.bind(this)}
              color='#ffff'
              leftIconType='chevron-left'
            ><View style='color:#fff;font-size:18px'>拼车详情</View></AtNavBar>
          <ScrollView
            className='scrollview'
            scrollY
            scrollWithAnimation
            show-scrollbar='false'
            scrollTop={scrollTop}
            style={scrollStyle}
            lowerThreshold={Threshold}
            upperThreshold={Threshold}
            onScrollToUpper={this.onScrollToUpper.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
            onScroll={this.onScroll}
            >
              <View className='at-row' style='height:300rpx;padding-top:5%;'>
                <View className='at-row play-pic-position-info' style={{width: `${system_width}px`}} /* 这里是用来规划image放置的位置 */> 
                    <image src={emptyPic}  style='height:100%;width:90%;border-radius:10px;'>
                      <text className='play-pic-label-info'>本格</text>
                    </image>
                </View>
                <View className='at-col' /*这里写的是StoreInfo 文字部分*/> 
                  <View className='play-name-position-info'>木兮僧之戏</View>
                  <View className='play-score-position-info'>难度
                    <View style='display:flex;align-items:flex-end;padding-left:3%;position:relative;bottom:0%'>
                      <image src={scoreActive} className='play-score-pic-info' style='position:relative;left:-0px;'></image>
                      <image src={scoreActive} className='play-score-pic-info' style='position:relative;left:-3px;'></image>
                      <image src={scoreActive} className='play-score-pic-info' style='position:relative;left:-6px;'></image>
                      <image src={scoreDeactive} className='play-score-pic-info' style='position:relative;left:-9px;'></image>
                      <image src={scoreDeactive} className='play-score-pic-info' style='position:relative;left:-12px;'></image>
                    </View>
                  </View>
                  <View className='play-headcount-position-info'>7人本
                    <View style='display:flex;align-items:flex-end;padding-left:3%;position:relative;bottom:0%;'>
                      <text style='background-color:#c0c0c0;color:rgb(80, 80, 80);padding: 0% 10%;border-radius:3px;'>4男3女</text>
                    </View>
                  </View>
                  <View className='play-duration-position-info'>游戏时长约6小时</View>
                  <View className='play-label-position-info'>
                    <text className='play-label-info'>本格</text>
                    <text className='play-label-info'>本格</text>
                    <text className='play-label-info'>本格</text>
                    <text className='play-label-info'>本格</text>
                    <text className='play-label-info'>本格</text>
                  </View>
                </View>
              </View>
              <View style={{minHeight:`${windowHeight_rpx-top_height_rpx-90-335-30-150}rpx`,background:`#F9F9F9`,marginTop:`5%`}}>
               <View className='at-row queue-time-tab-info' style='padding-top:2%'>
                  {/*这部分是开车时间的tab */}
                  <View className='at-row'>
                    <View className='at-col'>
                      <View className='at-row queue-start-time-info' >开局时间</View>
                      <View className='at-row' style='font-size:14px;color:#000;height:70%;align-items:center;display:flex;justify-content:flex-start;padding-left:10%;'>05月07日 12:00</View>
                    </View>
                  </View>
                  <View className='at-row'>
                    <View className='at-col'>
                      <View className='at-row queue-antigender-info'>是否接受反串</View>
                      <View className='at-row' style='font-size:14px;color:#000;height:70%;align-items:center;display:flex;justify-content:flex-start;padding-left:10%;'>接受反串</View>
                    </View>
                  </View>
                </View>

                <View className='at-row queue-player-tab-info' style='padding-top:2%'>
                  <View style='display:flex;width:100%;margin-left:5%;align-items:center;'>
                    <text style='font-size:14px;'>车队成员</text>
                    <text style='font-size:10px;'>（3/7）</text>
                    <View style='width:50rpx;position:absolute;margin-right:10%;right:0;'><AtButton type='primary' circle='true' className='add-player-but'>添加</AtButton></View>
                  </View>
                  <View style='height:10rpx;margin-left:5%;margin-right:5%;border:0px solid #97979755;border-bottom-width:1px;margin-bottom:20rpx;'></View>
                  
                  <View style='display:flex;width:100%;margin-left:5%;align-items:center;padding-bottom:10rpx;padding-top:10rpx;'>
                    <image src={playerAva} style='height:100rpx;width:100rpx;background:#D8D8D8;border-radius:50rpx'></image>
                    <View style='display:flex;flex-direction:column;justify-content:flex-start;'>
                      <View style='display:flex;align-item:center;height:60rpx;'>
                        <text style='font-size:12px;font-weight:520;'>Caroline</text>
                        <image src={maleIcon} style='height:25rpx;width:25rpx;'></image>
                      </View>
                      <text style='font-size:10px;text-decoration:underline;'>18615172123</text>
                    </View>
                    <View style='width:120rpx;position:absolute;margin-right:7%;right:0;'><AtButton type='primary' circle='true' className='remove-player-but'>移除车队</AtButton></View>
                  </View>

                  <View style='display:flex;width:100%;margin-left:5%;align-items:center;padding-bottom:10rpx;padding-top:10rpx;'>
                    <image src={playerAva} style='height:100rpx;width:100rpx;background:#D8D8D8;border-radius:50rpx'></image>
                    <View style='display:flex;flex-direction:column;justify-content:flex-start;'>
                      <View style='display:flex;align-item:center;height:60rpx;'>
                        <text style='font-size:12px;font-weight:520;'>Caroline</text>
                        <image src={femaleIcon} style='height:25rpx;width:25rpx;'></image>
                      </View>
                      <text style='font-size:10px;text-decoration:underline;'>18615172123</text>
                    </View>
                    <View style='width:120rpx;position:absolute;margin-right:7%;right:0;'><AtButton type='primary' circle='true' className='remove-player-but'>移除车队</AtButton></View>
                  </View>

                  <View style='height:20rpx;'></View>
                </View>


              </View>
            </ScrollView>
            <View className='at-row' style='position:fixed;bottom:0;height:150rpx;padding-top:2%;background-color:#fff'>
              <AtButton type='second' circle='true' className='invite-friends-button'>解散该局</AtButton>
              <AtButton type='primary' circle='true' className='join-queue-button'>确认锁局</AtButton>
            </View>
        </View>
      </View>
    )
  }
}
