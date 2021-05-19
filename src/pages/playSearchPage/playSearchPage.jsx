import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import { AtButton, AtSearchBar, AtNavBar, AtTag, AtTabs, AtTabsPane, AtActivityIndicator} from 'taro-ui'

import './playSearchPage.scss'

import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

import emptyPic from '../../img/image-10.png'
import male_icon from '../../img/male.png'
import female_icon from '../../img/female.png'
import scoreActive from '../../img/scoreActive.png'
import bk from '../../img/background2.jpg'

import {base} from '../../service/config'
import {test_total_plays_search} from '../../service/api'

export default class Playsearchpage extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      value: '',
      totalStatus:{
        tagActiveNum: 0,
        type1:'',
        type2:'',
        type3:'',
        page: 1
      },
      storeStatus:{
        tagActiveNum: 0,
        type1:'',
        type2:'',
        type3:'',
        page: 1
      },
      adminInfo:{},
      storeInfo:{},
      permission:0,
      listLoading: true,
      totalPlays: [],
      storePlays: [],
      current: 0,
      playInfo:{
        play_name:"木兮僧之戏",
        play_headcount:7,
        play_male_num:4,
        play_female_num:3
      }
    }
  }

  componentWillMount () { 
    this.state.adminInfo = Taro.getStorageSync(`admin_info`);
    this.state.storeInfo = Taro.getStorageSync(`store_info`);
    this.state.permission = Taro.getStorageSync(`permission`);
  }

  componentDidShow() {
    this.state.totalStatus.page = 1;
    this.setState({
      listLoading: true,
      totalPlays:[]
    })
    this.searchTotalPlays();
  }

  handleCreateQueue (){
    
  }

  onScrollToUpper() {}

  // or 使用箭头函数
  // onScrollToUpper = () => {}

  onScroll(e){
    //console.log(e.detail)
  }

  onScrollToUpperY() {
    console.log('top')
  }

  onScrollToLowerYTotal() {
    this.state.totalStatus.page = this.state.totalStatus.page+1;
    this.searchTotalPlays();
  }

  // or 使用箭头函数
  // onScrollToUpper = () => {}

  onScrollY(e){
    //console.log(e.detail)
  }

  onChange (value) {
    this.setState({
      value: value
    })
  }

  handleNavBack(){
    
  }

  searchTotalPlays () {
    console.log('--------start search-----------')

    let cert_data = {
      adminId: this.state.adminInfo.adminId,
      sessionId: this.state.adminInfo.sessionId,
      appId: wx.getAccountInfoSync().miniProgram.appId,
      token: (dayjs().unix() + 1000)*2
    }

    var title, hd, type1, type2, type3, page;
    if (this.state.current == 0) {
      title = this.state.value;
      hd = this.state.totalStatus.tagActiveNum;
      type1 = this.state.totalStatus.type1;
      type2 = this.state.totalStatus.type1;
      type3 = this.state.totalStatus.type1;
      page = this.state.totalStatus.page;

      let _this = this;

      test_total_plays_search(cert_data, 
        `title=${title}&hd=${hd}&type1=${type1}&type2=${type2}&type3=${type3}&page=${page}`).then(
        function(res){
          console.log(res.data)
          _this.setState({
            listLoading: false,
            totalPlays: _this.state.totalPlays.concat(res.data)
          })
        }
      )
    } else {
      title = this.state.value;
      hd = this.state.storeStatus.tagActiveNum;
      type1 = this.state.storeStatus.type1;
      type2 = this.state.storeStatus.type1;
      type3 = this.state.storeStatus.type1;
      page = this.state.storeStatus.page;
    }
  }

  onActionClick () {
    if (this.state.current == 0){
      this.state.totalStatus.page = 1;
      this.setState({
        listLoading: true,
        totalPlays:[]
      })
      this.searchTotalPlays();
    }
  }

  onTagClick (active){
    console.log(active);
    if (this.state.current == 0){
      this.state.totalStatus.tagActiveNum = active;
      this.setState({
        'totalStatus.tagActiveNum': active
      })
      this.state.totalStatus.page = 1;
      this.setState({
        listLoading: true,
        totalPlays:[]
      })
      this.searchTotalPlays();
    } else {
      this.state.storeStatus.tagActiveNum = active;
      this.setState({
        'storeStatus.tagActiveNum': active
      })
    }
    
  }

  handleClick (value) {
    this.setState({
      current: value
    })
  }

  render () {
    //Taro.hideTabBar();

    var top_height = wx.getSystemInfoSync().statusBarHeight;
    var screenHeight = wx.getSystemInfoSync().screenHeight;
    var screenWidth = wx.getSystemInfoSync().screenWidth;
    var windowHeight = wx.getSystemInfoSync().windowHeight;
    var screenHeight_rpx = 750*(screenHeight/screenWidth);
    var windowHeight_rpx = 750*(windowHeight/screenWidth);
    var top_height_rpx = 750*(top_height/screenWidth);

    const scrollTop = 0
    const Threshold = 20
    var scrollStyle = {
      width: '75vw'
    }

    var scrollStyleY = {
      height: `${screenHeight_rpx - top_height_rpx - 320}rpx`
    }

    let totalPlayTabs = [];
    let storePlayTabs = [];

    if (this.state.listLoading==false){
      if(this.state.current==0){
        this.state.totalPlays.map((item, itemIdx)=>{


          let male_female_display = [];
          if (item.play_male_num == 999 | item.play_female_num == 999) {
            male_female_display = [];
          } else {
            male_female_display.push(
              <View className='play-male-position-info'>
                <image className='gender-icon-info' src={male_icon}></image>
                <text>{item.play_male_num}</text>
              </View>
            )
            male_female_display.push(
              <View className='play-female-position-info'>
                <image className='gender-icon-info' src={female_icon}></image>
                <text>{item.play_female_num}</text>
              </View>
            )
          }

          let play_label_display = [];
          for (let index = 0; index < item.play_labels.length; index++) {
            play_label_display.push(
              <text className='play-label-info'>{item.play_labels[index]}</text>
            )
          }

          totalPlayTabs.push(
            <View className='at-row queue-tab-info'>
              <View className='at-row play-pic-position-info' style='width:21vw' /* 这里写的是 每个tab上剧本图片的位置*/>
                <image className='play-pic-info' src={base+item.play_img}>
                <text className='play-pic-label-info'>{item.play_labels[0]}</text>
                </image>
              </View>
              <View className='at-col play-intro-info' /*这里的信息是每个tab上 剧本的一些文字信息 */>
                <View className='at-col play-name-position-info'>{item.play_name}</View>
                <View className='at-row' /* =- 这一部分是这样，两列，第一列有两行文字，第二列用来放按钮 */>
                  <View className='at-col' /* 第一列 有两行*/>
                    <View className='play-score-position-info'>难度
                      <View style='display:flex;align-items:flex-end;padding-left:3%;position:relative;bottom:0%'>
                        <image src={scoreActive} className='play-score-pic-info' style='position:relative;left:-0px;'></image>
                        <image src={scoreActive} className='play-score-pic-info' style='position:relative;left:-3px;'></image>
                        <image src={scoreActive} className='play-score-pic-info' style='position:relative;left:-6px;'></image>
                      </View>
                    </View>
                    <View className='at-row play-headcount-position-info' /* 这一部分有三列 */>
                      <View className='play-headcount-info'><text decode="{{true}}">{item.play_headcount}人本</text></View>
                        {male_female_display}
                    </View>
                  </View>
                  <View className='at-row' style='width:20vw' /*第二列是用来放按钮 */>
                    {/* Button  激活与不激活 具体看taroui中的文档*/}
                    <AtButton type='primary' circle='true' className='join-button' onClick={this.handleCreateQueue.bind(this)}>添加</AtButton>
                  </View>
                </View>
                <View className='at-col play-label-position-info'>
                  {play_label_display}
                </View>
              </View>
            </View>
          )
        })
      }else{

      }
    } else {
      if(this.state.current==0){
        totalPlayTabs.push(
          <View>
            <AtActivityIndicator mode='center' size={64} content='Loading...' className='load'></AtActivityIndicator>
          </View>
        )
      }else{

      }
    }

    return (
      <View className='JoinQueueSelectInfo'>
        <View className='at-col' style={{padding: `${top_height}px 0px 0px 0px`}}>
          <AtNavBar className='nav-bar-info'
              onClickLeftIcon={this.handleNavBack}
              color='#ffff'
              leftIconType='chevron-left'
              ><View style='color:#fff;font-size:18px'>剧本列表</View></AtNavBar>
          
          <AtTabs /* TODO: 这部分需要重构，红点没实现，列表不同日期显示不同灰度也没实现 */
              className='tabs-info'
              current={this.state.current}
              scroll
              tabList={[
                { title: '剧本总库'},
                { title: '门店库'}
              ]}
              onClick={this.handleClick.bind(this)}>
            

              <AtTabsPane current={this.state.current} index={0}>
                <image src={bk} style='width:100vw;height:100vh;position:absolute;'></image>
                <View className='at-col' style='height:150rpx;background-color:#FFFEFFFF;' /* 这里是*/></View>
                <ScrollView
                className='scrollviewY'
                scrollY
                scrollWithAnimation
                show-scrollbar='false'
                scrollTop={scrollTop}
                style={scrollStyleY}
                lowerThreshold={Threshold}
                upperThreshold={Threshold}
                onScrollToUpper={this.onScrollToUpperY.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
                onScrollToLower={this.onScrollToLowerYTotal.bind(this)}
                onScroll={this.onScrollY}
                >
                {totalPlayTabs}

                <View className='at-row tab-blank'></View> {/*切记，每个AtTabsPane最下面要加一小条空白，否则阴影部分显示不全，会很难看 */}

              </ScrollView>
            </AtTabsPane>

            <AtTabsPane current={this.state.current} index={1}>
              <image src={bk} style='width:100vw;height:100vh;position:absolute;'></image>
              <View className='at-col' style='height:150rpx;background-color:#FFFEFFFF;' /* 这里是*/></View>
              <ScrollView
              className='scrollviewY'
              scrollY
              scrollWithAnimation
              show-scrollbar='false'
              scrollTop={scrollTop}
              style={scrollStyleY}
              lowerThreshold={Threshold}
              upperThreshold={Threshold}
              onScrollToUpper={this.onScrollToUpperY.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
              onScroll={this.onScrollY}
              >
                <View className='at-row queue-tab-info'>
                  <View className='at-row play-pic-position-info' style='width:21vw' /* 这里写的是 每个tab上剧本图片的位置*/>
                    <image className='play-pic-info' src={emptyPic}>
                    <text className='play-pic-label-info'>本格</text>
                    </image>
                  </View>
                  <View className='at-col play-intro-info' /*这里的信息是每个tab上 剧本的一些文字信息 */>
                    <View className='at-col play-name-position-info'>{this.state.playInfo.play_name}</View>
                    <View className='at-row' /* =- 这一部分是这样，两列，第一列有两行文字，第二列用来放按钮 */>
                      <View className='at-col' /* 第一列 有两行*/>
                        <View className='play-score-position-info'>难度
                          <View style='display:flex;align-items:flex-end;padding-left:3%;position:relative;bottom:0%'>
                            <image src={scoreActive} className='play-score-pic-info' style='position:relative;left:-0px;'></image>
                            <image src={scoreActive} className='play-score-pic-info' style='position:relative;left:-3px;'></image>
                            <image src={scoreActive} className='play-score-pic-info' style='position:relative;left:-6px;'></image>
                          </View>
                        </View>
                        <View className='at-row play-headcount-position-info' /* 这一部分有三列 */>
                          <View className='play-headcount-info'><text decode="{{true}}">{this.state.playInfo.play_headcount}人本</text></View>
                            <View className='play-male-position-info'>
                              <image className='gender-icon-info' src={male_icon}></image>
                              <text>{this.state.playInfo.play_male_num}</text>
                            </View>

                            <View className='play-female-position-info'>
                              <image className='gender-icon-info' src={female_icon}></image>
                              <text>{this.state.playInfo.play_female_num}</text>
                            </View>
                        </View>
                      </View>
                      <View className='at-row' style='width:20vw' /*第二列是用来放按钮 */>
                        {/* Button  激活与不激活 具体看taroui中的文档*/}
                        <AtButton type='primary' circle='true' className='join-button' onClick={this.handleCreateQueue.bind(this)}>添加</AtButton>
                      </View>
                    </View>
                    <View className='at-col play-label-position-info'>
                      <text className='play-label-info'>本格</text>
                      <text className='play-label-info'>本格</text>
                      <text className='play-label-info'>本格</text>
                      <text className='play-label-info'>本格</text>
                      <text className='play-label-info'>本格</text>
                    </View>
                  </View>
                </View>

                <View className='at-row tab-blank'></View> {/*切记，每个AtTabsPane最下面要加一小条空白，否则阴影部分显示不全，会很难看 */}

              </ScrollView>
            </AtTabsPane>
          </AtTabs>
          <View className='at-col' style={{height:`150rpx`, backgroundColor:`#FFFEFFFF`, position:`absolute`, top:`${top_height_rpx + 150 + 20}rpx`}} /* 这里是*/>
            <AtSearchBar
                className='search-bar-info'
                showActionButton
                value={this.state.value}
                onChange={this.onChange.bind(this)}
                onActionClick={this.onActionClick.bind(this)}
              />
            <View className='at-row' style='margin-top: 2%;margin-bottom: 2%;'>
              <View className='' style='width:15vw;align-items:flex-end;display:flex;justify-content:flex-end;'>
                <AtTag 
                  className='tag-button-info'
                  name='ALL' 
                  type='primary' 
                  active={this.state.current==0? (this.state.totalStatus.tagActiveNum==0? true:false):(this.state.storeStatus.tagActiveNum==0? true:false)} 
                  circle 
                  onClick={this.onTagClick.bind(this, 0)}>全部</AtTag>
              </View>
              <ScrollView
                className='scrollview'
                style=''
                scrollX
                scrollWithAnimation
                show-scrollbar='false'
                scrollTop={scrollTop}
                style={scrollStyle}
                lowerThreshold={Threshold}
                upperThreshold={Threshold}
                onScrollToUpper={this.onScrollToUpper.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
                onScroll={this.onScroll}
                >
                <AtTag className='tag-num-button-info'name='4p' type='primary' active={this.state.current==0? (this.state.totalStatus.tagActiveNum==4? true:false):(this.state.storeStatus.tagActiveNum==4? true:false)} circle onClick={this.onTagClick.bind(this, 4)}>4人</AtTag>
                <AtTag className='tag-num-button-info'name='5p' type='primary' active={this.state.current==0? (this.state.totalStatus.tagActiveNum==5? true:false):(this.state.storeStatus.tagActiveNum==5? true:false)} circle onClick={this.onTagClick.bind(this, 5)}>5人</AtTag>
                <AtTag className='tag-num-button-info'name='6p' type='primary' active={this.state.current==0? (this.state.totalStatus.tagActiveNum==6? true:false):(this.state.storeStatus.tagActiveNum==6? true:false)} circle onClick={this.onTagClick.bind(this, 6)}>6人</AtTag>
                <AtTag className='tag-num-button-info'name='7p' type='primary' active={this.state.current==0? (this.state.totalStatus.tagActiveNum==7? true:false):(this.state.storeStatus.tagActiveNum==7? true:false)} circle onClick={this.onTagClick.bind(this, 7)}>7人</AtTag>
                <AtTag className='tag-num-button-info'name='8p' type='primary' active={this.state.current==0? (this.state.totalStatus.tagActiveNum==8? true:false):(this.state.storeStatus.tagActiveNum==8? true:false)} circle onClick={this.onTagClick.bind(this, 8)}>8人</AtTag>
                <AtTag className='tag-num-button-info'name='9p' type='primary' active={this.state.current==0? (this.state.totalStatus.tagActiveNum==9? true:false):(this.state.storeStatus.tagActiveNum==9? true:false)} circle onClick={this.onTagClick.bind(this, 9)}>9人</AtTag>
                <AtTag className='tag-num-button-info'name='10p' type='primary' active={this.state.current==0? (this.state.totalStatus.tagActiveNum==10? true:false):(this.state.storeStatus.tagActiveNum==10? true:false)} circle onClick={this.onTagClick.bind(this, 10)}>10人</AtTag>
                <AtTag className='tag-num-button-info'name='11p' type='primary' active={this.state.current==0? (this.state.totalStatus.tagActiveNum==11? true:false):(this.state.storeStatus.tagActiveNum==11? true:false)} circle onClick={this.onTagClick.bind(this, 11)}>11人</AtTag>
                <AtTag className='tag-num-button-info'name='12p' type='primary' active={this.state.current==0? (this.state.totalStatus.tagActiveNum==12? true:false):(this.state.storeStatus.tagActiveNum==12? true:false)} circle onClick={this.onTagClick.bind(this, 12)}>12人</AtTag>
              </ScrollView>
              <View className='' style='width:10vw;align-items:flex-end;display:flex;justify-content:center;'>
                o
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
