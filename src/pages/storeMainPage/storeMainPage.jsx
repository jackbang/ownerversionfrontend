import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, ScrollView } from '@tarojs/components'
import { AtButton, AtTabs, AtTabsPane } from 'taro-ui'
import './storeMainPage.scss'

import bk from '../../img/image-6.png'
import storebk from '../../img/storeinfobk.png'
import certificationTab from '../../img/image-1.png'
import storeIcon from '../../img/image.png'
import playIcon from '../../img/image-2.png'
import payIcon from '../../img/image-3.png'
import queueIcon from '../../img/image-4.png'
import shareIcon from '../../img/image-5.png'
import storePic from '../../img/image-10.png'
import tabbk from '../../img/queueinfobk.png'
import femalePic from '../../img/female.png'
import malePic from '../../img/male.png'
import closedQueue from '../../img/image-8.png'

export default class Storemainpage extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      current: 0
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick (value) {
    this.setState({
      current: value
    })
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
      height: `${windowHeight_rpx-top_height_rpx-20-170-50-20-170-80-180-80}rpx`
    }

    return (
      <View className='storeMainPage' style={{height:`100vh`, display:`flex`, flexDirection:`column`,alignItems:`center`, justifyContent:`flex-start`}}>
        <image src={bk} style='width:100vw;position:absolute;size:100%;z-index:-1;'></image>
        <View style={{paddingTop:`${top_height_rpx+20}rpx`, height:`50rpx`}}>
          <text style='color:#FEFFFF;font-size:18px;'>首页</text>
        </View>
          
        <View style='padding-top:20rpx;height:150rpx;width:100vw;'>
          <image mode='heightFix' src={storebk} style='height:300rpx;width:660rpx;position:relative;left:45rpx;'></image>
          <View style='height:200rpx;width:600rpx;position:relative;top:-260rpx;left:75rpx;display:flex;align-items:flex-start;justify-content:flex-start'>
            <image src={storePic} style='height:200rpx;width:200rpx;'></image>
            <View style='display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;margin-left:20rpx;'>
              <text style='height:50rpx;width:360rpx;font-size:36rpx;font-weight:600;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;'>惊剧馆·剧本杀·狼人杀</text>
              <View style='height:60rpx;'></View>
              <text style='height:50rpx;width:360rpx;font-size:23rpx;font-weight:500;'>店铺ID：2104130001</text>
              <text style='height:50rpx;width:360rpx;font-size:23rpx;font-weight:500;'>管理员：Rocklove</text>
            </View>
          </View>
        </View>

        <View style={{
          width:'100vw', 
          height:`${windowHeight_rpx-top_height_rpx-20-170-50}rpx`, 
          backgroundColor:'#F9F9F9', 
          borderRadius:'10px 10px 0 0', 
          display:`flex`, 
          flexDirection:`column`,
          alignItems:`center`, 
          justifyContent:`flex-start`
          }}>
          <View style={{height:`80rpx`, width:`660rpx`, marginTop:`170rpx`}}>
            <image src={certificationTab} mode='widthFix' style='width:660rpx;z-index:-1;'></image>
          </View>

          <View style={{height:`180rpx`, width:`660rpx`, display:`flex`, alignItems:`center`, justifyContent:`flex-start`, marginTop:`20rpx`}}>
            <View style='display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:10px;'>
              <View style='background:#FEEED9;height:100rpx;width:100rpx;display:flex;align-items:center;justify-content:center;border-radius:10px;'>
                <image src={storeIcon} style='height:30px;width:30px;'></image>
              </View>
              <text style='font-size:12px;font-weight:400;margin-top:10%;'>店铺管理</text>
            </View>

            <View style='width:40rpx;'></View>

            <View style='display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:10px;'>
              <View style='background:#FEEED9;height:100rpx;width:100rpx;display:flex;align-items:center;justify-content:center;border-radius:10px;'>
                <image src={playIcon} style='height:30px;width:30px;'></image>
              </View>
              <text style='font-size:12px;font-weight:400;margin-top:10%;'>剧本管理</text>
            </View>

            <View style='width:40rpx;'></View>

            <View style='display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:10px;'>
              <View style='background:#FEEED9;height:100rpx;width:100rpx;display:flex;align-items:center;justify-content:center;border-radius:10px;'>
                <image src={payIcon} style='height:30px;width:30px;'></image>
              </View>
              <text style='font-size:12px;font-weight:400;margin-top:10%;'>支付管理</text>
            </View>

            <View style='width:40rpx;'></View>

            <View style='display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:10px;'>
              <View style='background:#FEEED9;height:100rpx;width:100rpx;display:flex;align-items:center;justify-content:center;border-radius:10px;'>
                <image src={queueIcon} style='height:30px;width:30px;'></image>
              </View>
              <text style='font-size:12px;font-weight:400;margin-top:10%;'>车队管理</text>
            </View>

            <View style='width:40rpx;'></View>

            <View style='display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:10px;'>
              <View style='background:#FEEED9;height:100rpx;width:100rpx;display:flex;align-items:center;justify-content:center;border-radius:10px;'>
                <image src={shareIcon} style='height:30px;width:30px;'></image>
              </View>
              <text style='font-size:12px;font-weight:400;margin-top:10%;'>店铺分享</text>
            </View>

          </View>

          <View>
            <AtTabs /* TODO: 这部分需要重构，红点没实现，列表不同日期显示不同灰度也没实现 */
              className='tabs-info'
              current={this.state.current}
              scroll
              tabList={[
                { title: '待确认', queueNum: 0},
                { title: '已结束', queueNum: 0}
              ]}
              onClick={this.handleClick.bind(this)}>
            
            <AtTabsPane current={this.state.current} index={0}>
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
              <View className='at-row queue-tab-info' >
                <image src={tabbk} mode='widthFix' style='width:675rpx;z-index:-1;position:absolute;'></image>
                {/*  每个tab上信息显示 */}
                <text style='background-color:rgba(252, 166, 47, 0.5);position:absolute;right:37.5rpx;;font-size:24rpx;padding:10rpx;border-radius:0 20rpx 0 20rpx;'>未拼满</text>
                <View className='at-row play-pic-position-info' style='width:21vw'>
                  <image className='play-pic-info' src={storePic}>
                  <text className='play-pic-label-info'>本格</text>
                  </image>
                </View>
                <View className='at-col play-intro-info'>
                  <View className='at-col play-name-position-info'>木兮僧之戏</View>
                  <View className='at-row'>
                    <View className='at-col'>
                      <View className='at-row play-time-position-info'><text decode="{{true}}">04月03日 15:00</text></View>
                      <View className='at-row play-headcount-position-info'>
                        <View className='play-headcount-info'><text decode="{{true}}">人数：0/7</text></View>
                        <View className='play-male-position-info'>
                          <image className='gender-icon-info' src={malePic}></image>
                          <text>0/7</text>
                        </View>
                        <View className='play-female-position-info'>
                          <image className='gender-icon-info' src={femalePic}></image>
                          <text>0/4</text>
                        </View>
                      </View>
                    </View>
                    <View className='at-row' style='width:20vw;margin-right:20rpx;'>
                      {/* Button */}
                      <AtButton type='primary' circle='true' className='confirm-button' onClick={console.log("邀请好友")}>确认锁局</AtButton>
                    </View>
                  </View>
                  <View className='at-col' style='margin-top:2%;'>
                    <text style='font-size:24rpx;font-weight:550;'>房间：日式榻榻米</text>
                  </View>
                </View>
              </View>

              <View className='at-row queue-tab-info' >
                <image src={tabbk} mode='widthFix' style='width:675rpx;z-index:-1;position:absolute;'></image>
                {/*  每个tab上信息显示 */}
                <text style='background-color:rgba(252, 95, 47, 0.5);position:absolute;right:37.5rpx;;font-size:24rpx;padding:10rpx;border-radius:0 20rpx 0 20rpx;'>已拼满</text>
                <View className='at-row play-pic-position-info' style='width:21vw'>
                  <image className='play-pic-info' src={storePic}>
                  <text className='play-pic-label-info'>本格</text>
                  </image>
                </View>
                <View className='at-col play-intro-info'>
                  <View className='at-col play-name-position-info'>木兮僧之戏</View>
                  <View className='at-row'>
                    <View className='at-col'>
                      <View className='at-row play-time-position-info'><text decode="{{true}}">04月03日 15:00</text></View>
                      <View className='at-row play-headcount-position-info'>
                        <View className='play-headcount-info'><text decode="{{true}}">人数：0/7</text></View>
                        <View className='play-male-position-info'>
                          <image className='gender-icon-info' src={malePic}></image>
                          <text>0/7</text>
                        </View>
                        <View className='play-female-position-info'>
                          <image className='gender-icon-info' src={femalePic}></image>
                          <text>0/4</text>
                        </View>
                      </View>
                    </View>
                    <View className='at-row' style='width:20vw;margin-right:20rpx;'>
                      {/* Button */}
                      <AtButton type='primary' circle='true' className='confirm-button' onClick={console.log("邀请好友")}>确认锁局</AtButton>
                    </View>
                  </View>
                  <View className='at-col' style='margin-top:2%;'>
                    <text style='font-size:24rpx;font-weight:550;'>房间：日式榻榻米</text>
                  </View>
                </View>
              </View>

            </ScrollView>
            </AtTabsPane>

            <AtTabsPane current={this.state.current} index={1}>
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

              <View className='at-row queue-tab-info' >
                <image src={tabbk} mode='widthFix' style='width:675rpx;z-index:-1;position:absolute;'></image>
                {/*  每个tab上信息显示 */}
                <View className='at-row play-pic-position-info' style='width:21vw'>
                  <image className='play-pic-info' src={storePic}>
                  <text className='play-pic-label-info'>本格</text>
                  </image>
                </View>
                <View className='at-col play-intro-info'>
                  <View className='at-col play-name-position-info'>木兮僧之戏</View>
                  <View className='at-row'>
                    <View className='at-col'>
                      <View className='at-row' style='font-size:26rpx;font-weight:550;height:70rpx;display:flex;align-items:flex-end;'><text decode="{{true}}">04月03日 15:00</text></View>
                    </View>
                  </View>
                  <View className='at-col' style='margin-top:10%;'>
                    <text style='font-size:24rpx;font-weight:550;'>房间：日式榻榻米</text>
                  </View>
                </View>
                <View className='at-row' style='width:20vw;display:flex;align-items:center;'>
                  {/* Button */}
                  <image src={closedQueue} style='height:160rpx;width:160rpx;'></image>
                </View>
              </View>

              <View className='at-row queue-tab-info' >
                <image src={tabbk} mode='widthFix' style='width:675rpx;z-index:-1;position:absolute;'></image>
                {/*  每个tab上信息显示 */}
                <View className='at-row play-pic-position-info' style='width:21vw'>
                  <image className='play-pic-info' src={storePic}>
                  <text className='play-pic-label-info'>本格</text>
                  </image>
                </View>
                <View className='at-col play-intro-info'>
                  <View className='at-col play-name-position-info'>木兮僧之戏</View>
                  <View className='at-row'>
                    <View className='at-col'>
                      <View className='at-row' style='font-size:26rpx;font-weight:550;height:70rpx;display:flex;align-items:flex-end;'><text decode="{{true}}">04月03日 15:00</text></View>
                    </View>
                  </View>
                  <View className='at-col' style='margin-top:10%;'>
                    <text style='font-size:24rpx;font-weight:550;'>房间：日式榻榻米</text>
                  </View>
                </View>
                <View className='at-row' style='width:20vw;display:flex;align-items:center;'>
                  {/* Button */}
                  <image src={closedQueue} style='height:160rpx;width:160rpx;'></image>
                </View>
              </View>

              <View className='at-row queue-tab-info' >
                <image src={tabbk} mode='widthFix' style='width:675rpx;z-index:-1;position:absolute;'></image>
                {/*  每个tab上信息显示 */}
                <View className='at-row play-pic-position-info' style='width:21vw'>
                  <image className='play-pic-info' src={storePic}>
                  <text className='play-pic-label-info'>本格</text>
                  </image>
                </View>
                <View className='at-col play-intro-info'>
                  <View className='at-col play-name-position-info'>木兮僧之戏</View>
                  <View className='at-row'>
                    <View className='at-col'>
                      <View className='at-row' style='font-size:26rpx;font-weight:550;height:70rpx;display:flex;align-items:flex-end;'><text decode="{{true}}">04月03日 15:00</text></View>
                    </View>
                  </View>
                  <View className='at-col' style='margin-top:10%;'>
                    <text style='font-size:24rpx;font-weight:550;'>房间：日式榻榻米</text>
                  </View>
                </View>
                <View className='at-row' style='width:20vw;display:flex;align-items:center;'>
                  {/* Button */}
                  <image src={closedQueue} style='height:160rpx;width:160rpx;'></image>
                </View>
              </View>

              <View className='at-row queue-tab-info' >
                <image src={tabbk} mode='widthFix' style='width:675rpx;z-index:-1;position:absolute;'></image>
                {/*  每个tab上信息显示 */}
                <View className='at-row play-pic-position-info' style='width:21vw'>
                  <image className='play-pic-info' src={storePic}>
                  <text className='play-pic-label-info'>本格</text>
                  </image>
                </View>
                <View className='at-col play-intro-info'>
                  <View className='at-col play-name-position-info'>木兮僧之戏</View>
                  <View className='at-row'>
                    <View className='at-col'>
                      <View className='at-row' style='font-size:26rpx;font-weight:550;height:70rpx;display:flex;align-items:flex-end;'><text decode="{{true}}">04月03日 15:00</text></View>
                    </View>
                  </View>
                  <View className='at-col' style='margin-top:10%;'>
                    <text style='font-size:24rpx;font-weight:550;'>房间：日式榻榻米</text>
                  </View>
                </View>
                <View className='at-row' style='width:20vw;display:flex;align-items:center;'>
                  {/* Button */}
                  <image src={closedQueue} style='height:160rpx;width:160rpx;'></image>
                </View>
              </View>

              <View className='at-row queue-tab-info' >
                <image src={tabbk} mode='widthFix' style='width:675rpx;z-index:-1;position:absolute;'></image>
                {/*  每个tab上信息显示 */}
                <View className='at-row play-pic-position-info' style='width:21vw'>
                  <image className='play-pic-info' src={storePic}>
                  <text className='play-pic-label-info'>本格</text>
                  </image>
                </View>
                <View className='at-col play-intro-info'>
                  <View className='at-col play-name-position-info'>木兮僧之戏</View>
                  <View className='at-row'>
                    <View className='at-col'>
                      <View className='at-row' style='font-size:26rpx;font-weight:550;height:70rpx;display:flex;align-items:flex-end;'><text decode="{{true}}">04月03日 15:00</text></View>
                    </View>
                  </View>
                  <View className='at-col' style='margin-top:10%;'>
                    <text style='font-size:24rpx;font-weight:550;'>房间：日式榻榻米</text>
                  </View>
                </View>
                <View className='at-row' style='width:20vw;display:flex;align-items:center;'>
                  {/* Button */}
                  <image src={closedQueue} style='height:160rpx;width:160rpx;'></image>
                </View>
              </View>

            </ScrollView>
            </AtTabsPane>

            </AtTabs>
          </View>
        </View>
      </View>
    )
  }
}
