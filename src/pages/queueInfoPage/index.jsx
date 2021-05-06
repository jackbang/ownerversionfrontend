import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import { AtButton, AtSearchBar, AtNavBar, AtTag, AtTabs, AtTabsPane} from 'taro-ui'

import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

import './index.scss'

import tabbk from '../../img/queueinfobk.png'
import storePic from '../../img/image-10.png'
import femalePic from '../../img/female.png'
import malePic from '../../img/male.png'
import closedQueue from '../../img/image-8.png'

export default class Queueinfopage extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      value: '',
      tagActiveNum: 0,
      plays_num: 0,
      plays_list: [],
      current: 0,
      currentDay: 0,
      playInfo:{
        play_name:"木兮僧之戏",
        play_headcount:7,
        play_male_num:4,
        play_female_num:3
      }
    }
  }

  handleClick (value) {
    this.setState({
      current: value
    })
  }

  handleDayTabsClick (value) {
    this.setState({
      currentDay: value
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
      height: `${windowHeight_rpx-top_height_rpx-90-80-100}rpx`
    }

    var newScrollStyle = {
      height: `${windowHeight_rpx-top_height_rpx-80-100}rpx`
    }

    let tabInfoList = [];
    let dayList = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    tabInfoList.push({title: "今天 "+dayjs().format('MM-DD')});
    for (let index = 1; index < 14; index++) {
      tabInfoList.push({title: dayList[index%7]+" "+dayjs().add(index, 'day').format('MM-DD')});
    }

    return (
      <View className='queueInfoPage'>
        <View className='at-col' style={{padding: `${top_height_rpx}rpx 0rpx 0rpx 0rpx`}}>
          <AtNavBar className='nav-bar-info'
              onClickLeftIcon={this.handleNavBack}
              color='#ffff'
              leftIconType='chevron-left'
              ><View style='color:#fff;font-size:18px'>车队管理</View></AtNavBar>
          
          <AtTabs /* TODO: 这部分需要重构，红点没实现，列表不同日期显示不同灰度也没实现 */
              className='tabs-info'
              current={this.state.current}
              scroll
              tabList={[
                { title: '在拼车队'},
                { title: '完成车队'}
              ]}
              onClick={this.handleClick.bind(this)}>
            
            <AtTabsPane current={this.state.current} index={0}>
              <View style="background:#FEF9F4;">
              <AtTabs /* TODO: 这部分需要重构，红点没实现，列表不同日期显示不同灰度也没实现 */
                className='day-tabs-info'
                current={this.state.currentDay}
                scroll
                tabList={tabInfoList}
                onClick={this.handleDayTabsClick.bind(this)}>

                <AtTabsPane current={this.state.currentDay} index={0} >
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
                    <View className='at-row queue-tab-info'>
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

                    <View className='at-row queue-tab-info'>
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
              </AtTabs>
              </View>
            </AtTabsPane>

            <AtTabsPane current={this.state.current} index={1}>
            <View style="background:#FEF9F4;">
            <ScrollView
              className='scrollview'
              scrollY
              scrollWithAnimation
              show-scrollbar='false'
              scrollTop={scrollTop}
              style={newScrollStyle}
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
            </View>
            </AtTabsPane>
          </AtTabs>
        </View>
      </View>
    )
  }
}
