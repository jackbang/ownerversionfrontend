import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import { AtButton, AtSearchBar, AtNavBar, AtTag, AtTabs, AtTabsPane, AtActivityIndicator, AtInputNumber} from 'taro-ui'

import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

import './index.scss'

import scoreActive from '../../img/scoreActive.png'
import scoreDeactive from '../../img/scoreDeactive.png'
import playerAva from '../../img/member.png'
import maleIcon from '../../img/male.png'
import femaleIcon from '../../img/female.png'

import { test_lock_queue, test_get_players, test_add_players, test_pop_players, test_delete_queue, test_delock_queue } from '../../service/api'
import { base } from '../../service/config'

export default class Queuemanagepage extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      adminInfo:{},
      storeInfo:{},
      queueInfo:{},
      playInfo:{},
      playerList:[],
      totalNum: 0,
      male: 0,
      female: 0,
      showPlayerAdder: false,
      infoLoading: true
    }
  }

  componentWillMount () {
    this.state.adminInfo = Taro.getStorageSync(`admin_info`);
    this.state.storeInfo = Taro.getStorageSync(`store_info`);
    this.state.queueInfo = Taro.getStorageSync(`queue_info`);
    this.state.playInfo = Taro.getStorageSync(`play_id_${this.state.queueInfo.play_id}`)
  }

  componentDidShow() {
    this.setState({
      infoLoading: true
    })
    let body = {
      adminId: this.state.adminInfo.adminId,
      sessionId: this.state.adminInfo.sessionId,
      queue_id: this.state.queueInfo.queue_id,
      appId: wx.getAccountInfoSync().miniProgram.appId,
      token: (dayjs().unix() + 1000 ) * 2
    };
    let _this = this;
    test_get_players(body).then((res) => {
      console.log(res.data)
      if(res.data.code == 1){
        _this.setState({
          playerList: res.data.data,
          infoLoading: false
        })
      }else{
        console.log(res.data.data)
      }
    })
  }

  handleNavBack(){
    Taro.navigateBack()
  }

  handleAddPlayer() {
    this.setState({
      showPlayerAdder: true
    })
  }

  handleChangeTotal(totalNum){
    this.setState({
      totalNum: totalNum
    })
  }

  handleChangeMale(male){
    this.setState({
      male:male
    })
  }

  handleChangeFemale(female){
    this.setState({
      female:female
    })
  }

  handleCancle () {
    this.setState({
      totalNum:0,
      male:0,
      female:0,
      showPlayerAdder: false
    })
  }

  handleConfirm () {
    let body = {
      adminId: this.state.adminInfo.adminId,
      sessionId: this.state.adminInfo.sessionId,
      queue_id: this.state.queueInfo.queue_id,
      totalNum: this.state.totalNum,
      maleNum: this.state.male,
      femaleNum: this.state.female,
      appId: wx.getAccountInfoSync().miniProgram.appId,
      token: (dayjs().unix() + 1000 ) * 2
    };
    let _this = this;
    test_add_players(body).then((res) => {
      console.log(res.data)
      if (res.data.code == 1) {
        _this.setState({
          playerList: res.data.data,
          infoLoading: false
        })
      } else {
        console.log(res.data.data)
      }
    })
    this.setState({
      totalNum:0,
      male:0,
      female:0,
      showPlayerAdder: false
    })
  }

  removePlayer(id) {
    if (this.state.playerList.length == 1) {
      let theQueue = this.state.queueInfo;
      let _this = this;
      wx.showModal({
        content: '????????????1????????????????????????????????????',
        success (res) {
          if (res.confirm) {
            let body = {
              adminId: _this.state.adminInfo.adminId,
              sessionId: _this.state.adminInfo.sessionId,
              store_id: _this.state.storeInfo.store_id,
              queue_id: theQueue.queue_id,
              appId: wx.getAccountInfoSync().miniProgram.appId,
              token: (dayjs().unix() + 1000 ) * 2
            };
            test_lock_queue(body).then((result) => {
              if (result.data.code == 1){
                Taro.navigateBack()
              } else {
                console.log(result.data.data)
              }
            })
          } else if (res.cancel) {
            console.log('??????????????????')
          }
        }
      })
    } else {
      let body = {
        adminId: this.state.adminInfo.adminId,
        sessionId: this.state.adminInfo.sessionId,
        queue_id: this.state.queueInfo.queue_id,
        player_id: id,
        appId: wx.getAccountInfoSync().miniProgram.appId,
        token: (dayjs().unix() + 1000 ) * 2
      };
      let _this = this;
      test_pop_players(body).then((res)=>{
        console.log(res.data)
        if (res.data.code == 1) {
          _this.setState({
            playerList: res.data.data,
            infoLoading: false
          })
        } else {
          console.log(res.data.data)
        }
      })
    }
  }

  lockTheQueue() {
    let theQueue = this.state.queueInfo;
    let _this = this;
    console.log(theQueue);
    wx.showModal({
      title: '????????????',
      content: `???????????? ${theQueue.queue_end_time.slice(0,10)+" "+theQueue.queue_end_time.slice(11,-3)} ?????????${theQueue.queue_current_num}??????????????????`,
      success (res) {
        if (res.confirm) {
          console.log('??????????????????')
          let body = {
            adminId: _this.state.adminInfo.adminId,
            sessionId: _this.state.adminInfo.sessionId,
            store_id: _this.state.storeInfo.store_id,
            queue_id: theQueue.queue_id,
            appId: wx.getAccountInfoSync().miniProgram.appId,
            token: (dayjs().unix() + 1000 ) * 2
          };
          test_lock_queue(body).then((result) => {
            if (result.data.code == 1){
              Taro.navigateBack()
            } else {
              console.log(result.data.data)
            }
          })
        } else if (res.cancel) {
          console.log('??????????????????')
        }
      }
    })
  }

  deLockTheQueue() {
    let theQueue = this.state.queueInfo;
    let _this = this;
    console.log(theQueue);
    wx.showModal({
      title: '????????????',
      content: `???????????? ${theQueue.queue_end_time.slice(0,10)+" "+theQueue.queue_end_time.slice(11,-3)} ?????????${theQueue.queue_current_num}??????????????????`,
      success (res) {
        if (res.confirm) {
          console.log('??????????????????')
          let body = {
            adminId: _this.state.adminInfo.adminId,
            sessionId: _this.state.adminInfo.sessionId,
            store_id: _this.state.storeInfo.store_id,
            queue_id: theQueue.queue_id,
            appId: wx.getAccountInfoSync().miniProgram.appId,
            token: (dayjs().unix() + 1000 ) * 2
          };
          test_delock_queue(body).then((result) => {
            if (result.data.code == 1){
              Taro.navigateBack()
            } else {
              console.log(result.data.data)
            }
          })
        } else if (res.cancel) {
          console.log('??????????????????')
        }
      }
    })
  }

  deleteTheQueue() {
    let theQueue = this.state.queueInfo;
    let _this = this;
    console.log(theQueue);
    wx.showModal({
      title: '????????????',
      content: `???????????? ${theQueue.queue_end_time.slice(0,10)+" "+theQueue.queue_end_time.slice(11,-3)} ?????????${theQueue.queue_current_num}??????????????????`,
      success (res) {
        if (res.confirm) {
          console.log('??????????????????')
          let body = {
            adminId: _this.state.adminInfo.adminId,
            sessionId: _this.state.adminInfo.sessionId,
            store_id: _this.state.storeInfo.store_id,
            queue_id: theQueue.queue_id,
            appId: wx.getAccountInfoSync().miniProgram.appId,
            token: (dayjs().unix() + 1000 ) * 2
          };
          test_delete_queue(body).then((result) => {
            if (result.data.code == 1){
              Taro.navigateBack()
            } else {
              console.log(result.data.data)
            }
          })
        } else if (res.cancel) {
          console.log('??????????????????')
        }
      }
    })
  }

  onScrollToUpper() {}

  // or ??????????????????
  // onScrollToUpper = () => {}

  onScroll(e){
    //console.log(e.detail)
  }

  render () {

    let isBefore = dayjs(this.state.queueInfo.queue_end_time).isBefore(dayjs());

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

    if(this.state.infoLoading == true){
      return (
        <View className='' style={{height:`600rpx`, display:`flex`, flexDirection:`column`,alignItems:`center`, justifyContent:`flex-start`}}>
          <View><AtActivityIndicator mode='center' size={64} content='Loading...' className='load'></AtActivityIndicator></View>
        </View>
      )
    } else {
      let male_female_display = [];
      let select_player_tab_info = [];
      if (this.state.playInfo.play_male_num == 999 || this.state.playInfo.play_female_num == 999){
        male_female_display = [];
        select_player_tab_info.push(
          <View className='at-row' style='height:180rpx;padding-top:3%;padding-bottom:3%;'>
            <View className='at-col' style='font-size:16px;font-weight:600;color:#000;align-items:center;display:flex;justify-content:flex-start;padding-left:8%'>?????????</View>
            <View className='at-col' style='align-items:center;display:flex;justify-content:flex-end;padding-right:10%;'>
              <AtInputNumber
                className ='queue-join-input-number'
                min={0}
                max={this.state.playInfo.play_headcount-this.state.queueInfo.queue_current_num}
                step={1}
                value={this.state.totalNum}
                onChange={this.handleChangeTotal.bind(this)}
              />
            </View>
          </View>
        )
      } else {
        male_female_display.push(
          <View style='display:flex;align-items:flex-end;padding-left:3%;position:relative;bottom:0%;'>
            <text style='background-color:#c0c0c0;color:rgb(80, 80, 80);padding: 0% 10%;border-radius:3px;'>{this.state.playInfo.play_male_num}???{this.state.playInfo.play_female_num}???</text>
          </View>
        )

        select_player_tab_info.push(
          <View className='at-row' style='height:90rpx;'>
            <View className='at-col' style='font-size:16px;font-weight:600;color:#000;align-items:center;display:flex;justify-content:flex-start;padding-left:8%'>?????????</View>
            <View className='at-col' style='align-items:center;display:flex;justify-content:flex-end;padding-right:10%'>
              <AtInputNumber
                className ='queue-join-input-number'
                min={0}
                max={this.state.playInfo.play_male_num-this.state.queueInfo.queue_current_male_num}
                step={1}
                value={this.state.male}
                onChange={this.handleChangeMale.bind(this)}
              />
            </View>
          </View>
        )
        select_player_tab_info.push(
          <View className='at-row' style='height:90rpx;'>
            <View className='at-col' style='font-size:16px;font-weight:600;color:#000;align-items:center;display:flex;justify-content:flex-start;padding-left:8%'>?????????</View>
            <View className='at-col' style='align-items:center;display:flex;justify-content:flex-end;padding-right:10%'>
              <AtInputNumber
                className ='queue-join-input-number'
                min={0}
                max={this.state.playInfo.play_female_num-this.state.queueInfo.queue_current_female_num}
                step={1}
                value={this.state.female}
                onChange={this.handleChangeFemale.bind(this)}
              />
            </View>
          </View>
        )
      }

      let playerTabs = [];
      this.state.playerList.map((item, itemIdx) => {
        playerTabs.push(
          <View style='display:flex;width:100%;margin-left:5%;align-items:center;padding-bottom:10rpx;padding-top:10rpx;'>
            <image src={item.player_pic} style='height:100rpx;width:100rpx;background:#D8D8D8;border-radius:50rpx'></image>
            <View style='display:flex;flex-direction:column;justify-content:flex-start;'>
              <View style='display:flex;align-item:center;height:60rpx;'>
                <text style='font-size:12px;font-weight:520;'>{item.player_name}</text>
                <image src={item.player_gender==3? null:(item.player_gender==0? femaleIcon:maleIcon)} style='height:25rpx;width:25rpx;'></image>
              </View>
              <text style='font-size:10px;text-decoration:underline;'>{item.player_tel}</text>
            </View>
            <View style='width:120rpx;position:absolute;margin-right:7%;right:0;'><AtButton type='primary' circle='true' className='remove-player-but' onClick={this.removePlayer.bind(this, item.player_id)} disabled={this.state.queueInfo.queue_status==1? true:false}>????????????</AtButton></View>
          </View>
        )
      })

      let playLabels = [];
      this.state.playInfo.play_labels.map((item) => {
        playLabels.push(
          <text className='play-label-info'>{item}</text>
        )
      })

      let score_list = [];
      for (let index = 0; index < 5; index++) {
        if (index < this.state.playInfo.play_score) {
          score_list.push(
            <image src={scoreActive} className='play-score-pic-info' style='position:relative;left:-0px;'></image>
          )
        } else {
          score_list.push(
            <image src={scoreDeactive} className='play-score-pic-info' style='position:relative;left:-0px;'></image>
          )
        }
      }
      return (
        <View className='queueManagePage'>

          <image className='queue-info-page' src={base+this.state.playInfo.play_img} style='width:100vw;height:100vh;position:absolute;z-index:-1;'></image>
          <View className='at-col' style={{padding: `${top_height}px 0px 0px 0px`, position:'absolute', top:0, left:0, width:'100%'}}>
            <AtNavBar className='nav-bar-info'
                onClickLeftIcon={this.handleNavBack.bind(this)}
                color='#ffff'
                leftIconType='chevron-left'
              ><View style='color:#fff;font-size:18px'>????????????</View></AtNavBar>
            <ScrollView
              className='scrollview'
              scrollY
              scrollWithAnimation
              show-scrollbar='false'
              scrollTop={scrollTop}
              style={scrollStyle}
              lowerThreshold={Threshold}
              upperThreshold={Threshold}
              onScrollToUpper={this.onScrollToUpper.bind(this)} // ??????????????????????????? ??????????????? `onScrollToUpper={this.onScrollToUpper}`
              onScroll={this.onScroll}
              >
                <View className='at-row' style='height:300rpx;padding-top:5%;'>
                  <View className='at-row play-pic-position-info' style={{width: `${system_width}px`}} /* ?????????????????????image??????????????? */> 
                      <image src={base+this.state.playInfo.play_img}  style='height:100%;width:90%;border-radius:10px;'>
                        <text className='play-pic-label-info'>{this.state.playInfo.play_labels[0]}</text>
                      </image>
                  </View>
                  <View className='at-col' /*???????????????StoreInfo ????????????*/> 
                    <View className='play-name-position-info'>
                      <text style='text-overflow:ellipsis;overflow:hidden;white-space:nowrap;'>{this.state.playInfo.play_name}</text>
                    </View>
                    <View className='play-score-position-info'>??????
                      <View style='display:flex;align-items:flex-end;padding-left:3%;position:relative;bottom:0%'>
                        {score_list}
                      </View>
                    </View>
                    <View className='play-headcount-position-info'>{this.state.playInfo.play_headcount}??????
                      {male_female_display}
                    </View>
                    <View className='play-duration-position-info'>???????????????{this.state.playInfo.play_duration}??????</View>
                    <View className='play-label-position-info'>
                      {playLabels}
                    </View>
                  </View>
                </View>
                <View style={{minHeight:`${windowHeight_rpx-top_height_rpx-90-335-30-150}rpx`,background:`#F9F9F9`,marginTop:`5%`}}>
                <View className='at-row queue-time-tab-info' style='padding-top:2%'>
                    {/*???????????????????????????tab */}
                    <View className='at-row'>
                      <View className='at-col'>
                        <View className='at-row queue-start-time-info' >????????????</View>
                        <View className='at-row' style='font-size:14px;color:#000;height:70%;align-items:center;display:flex;justify-content:flex-start;padding-left:10%;'>{this.state.queueInfo.queue_end_time.slice(0,10)+" "+this.state.queueInfo.queue_end_time.slice(11,-3)}</View>
                      </View>
                    </View>
                    <View className='at-row'>
                      <View className='at-col'>
                        <View className='at-row queue-antigender-info'>??????????????????</View>
                        <View className='at-row' style='font-size:14px;color:#000;height:70%;align-items:center;display:flex;justify-content:flex-start;padding-left:10%;'>{this.state.queueInfo.queue_allow_antigender == true? "":"???"}????????????</View>
                      </View>
                    </View>
                  </View>

                  

                  <View className='at-row queue-player-tab-info' style='padding-top:2%'>
                    <View style='display:flex;width:100%;margin-left:5%;align-items:center;'>
                      <text style='font-size:14px;'>????????????</text>
                      <text style='font-size:10px;'>???{this.state.playerList.length}/{this.state.playInfo.play_headcount}???</text>
                      <View style='width:50rpx;position:absolute;margin-right:10%;right:0;'><AtButton type='primary' circle='true' className='add-player-but' onClick={this.handleAddPlayer.bind(this)} disabled={this.state.queueInfo.queue_status==1? true:false}>??????</AtButton></View>
                    </View>
                    <View style='height:10rpx;margin-left:5%;margin-right:5%;border:0px solid #97979755;border-bottom-width:1px;margin-bottom:20rpx;'></View>
                    
                    {playerTabs}

                    <View style='height:20rpx;'></View>
                  </View>


                </View>
              </ScrollView>
              {((this.state.queueInfo.queue_status==1)&isBefore)? 
              <View className='at-row' style='position:fixed;bottom:0;height:150rpx;width:100vw;padding-top:2%;background:#F9F9F9;'>
              </View>
              :
              <View className='at-row' style='position:fixed;bottom:0;height:150rpx;padding-top:2%;background-color:#fff'>
                <AtButton type='second' circle='true' className='invite-friends-button' onClick={this.deleteTheQueue.bind(this)} >????????????</AtButton>
                <AtButton type='primary' circle='true' className='join-queue-button' onClick={this.state.queueInfo.queue_status==1? this.deLockTheQueue.bind(this):this.lockTheQueue.bind(this)} >{this.state.queueInfo.queue_status==1? '????????????':'????????????'}</AtButton>
              </View>
              }
          </View>
          {this.state.showPlayerAdder==true? 
          <View style={{
            visibility: this.state.showPlayerAdder==true?'visible':'hidden', 
            height: `100vh`,
            width: `100vw`,
            background:`#00000080`,
            position: `absolute`,
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`
            }}>
            <View style='width:80vw;height:400rpx;background:#ffffff;border-radius:20rpx;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;'>
              <text style='font-size:20px;font-weight:530;margin-top:20rpx;'>????????????</text>
              {select_player_tab_info}
              <View  style='height:100rpx;width:90%;display:flex;align-items:center;justify-content:center;'>
                <AtButton type='second' circle='true' className='add-player-cancle-button' onClick={this.handleCancle.bind(this)}>??????</AtButton>
                <AtButton type='primary' circle='true' className='add-player-confirm-button' onClick={this.handleConfirm.bind(this)}>??????</AtButton>
              </View>
            </View>
          </View>:null}
        </View>
      )
    }
  }
}
