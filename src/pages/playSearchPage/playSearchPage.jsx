import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import { AtButton, AtSearchBar, AtNavBar, AtTag, AtTabs, AtTabsPane, AtActivityIndicator, AtIcon} from 'taro-ui'

import './playSearchPage.scss'

import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

import emptyPic from '../../img/image-10.png'
import male_icon from '../../img/male.png'
import female_icon from '../../img/female.png'
import scoreActive from '../../img/scoreActive.png'
import bk from '../../img/background2.jpg'
import moreIcon from '../../img/moreIcon.svg'

import selectIcon from '../../img/selectIcon.svg'

import emptyResult from '../../img/emptyResult.svg'
import deleteIcon from '../../img/deleteIcon.svg'

import {base} from '../../service/config'
import {test_total_plays_search, test_store_plays_search, test_delete_plays_search, test_add_play} from '../../service/api'

import '../../utils/labels'

export default class Playsearchpage extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      clickDelete:false,
      showPop:0,
      
      totalStatus:{
        showSelected: false,
        showSelectTab: false,
        value: '',
        tagActiveNum: 0,
        type1:'',
        type2:'',
        type3:'',
        temp_type1:'',
        temp_type2:'',
        temp_type3:'',
        page: 1
      },
      storeStatus:{
        showSelected: false,
        showSelectTab: false,
        value: '',
        tagActiveNum: 0,
        type1:'',
        type2:'',
        type3:'',
        temp_type1:'',
        temp_type2:'',
        temp_type3:'',
        page: 1
      },
      adminInfo:{},
      storeInfo:{},
      permission:0,
      listLoading: true,
      totalPlays: [],
      storePlays: [],
      current: 0,
      totalScrollTop:0,
      storeScrollTop:0,
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
    console.log('show')
    this.state.adminInfo = Taro.getStorageSync(`admin_info`);
    this.state.totalStatus.page = 1;
    this.state.storeStatus.page = 1;
    this.setState({
      showPop:0,
      listLoading: true,
      totalPlays:[],
      storePlays:[],
      totalScrollTop:0,
      storeScrollTop:0,
    })    
    var current = this.state.current;
    this.state.current = 0;
    this.searchTotalPlays();
    this.state.current = 1;
    this.searchTotalPlays();
    this.state.current = current;
  }

  handleAddPlayToStore (id){
    console.log(`Add ${id} to store`)
    let uploadData = {
      adminId: this.state.adminInfo.adminId,
      sessionId: this.state.adminInfo.sessionId,
      play_id: id,
      store_id: this.state.storeInfo.store_id,
      appId: wx.getAccountInfoSync().miniProgram.appId,
      token: (dayjs().unix() + 1000)*2
    }
    let _this = this;
    test_add_play(uploadData).then(function(res) {
      if(res.data.code == 1) {
        console.log(res.data)
        _this.state.adminInfo.sessionId = res.data.data.sessionId;
        Taro.setStorage({
          key: "admin_info",
          data: _this.state.adminInfo
        })
        _this.state.current = 1;
        _this.state.storePlays = [];
        _this.searchTotalPlays();
        _this.state.current = 0;
        wx.showToast({
          title: '已添加',
          icon: 'none',
          duration: 1000,
          mask: false
        })

      } else if (res.data.code == 2){
        wx.showToast({
          title: '请勿重复添加剧本',
          icon: 'none',
          duration: 1000,
          mask: false
        })
      } else {
        console.log(res.data.data)
      }
    })
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

  onScrollToLowerYStore() {
    this.state.storeStatus.page = this.state.storeStatus.page+1;
    this.searchTotalPlays();
  }

  // or 使用箭头函数
  // onScrollToUpper = () => {}

  onScrollY(e){
    console.log(e.detail.scrollTop)
    if (this.state.current == 0) {
      this.state.totalScrollTop = e.detail.scrollTop
    } else {
      this.state.storeScrollTop = e.detail.scrollTop
    }
  }

  onChange (value) {
    if (this.state.current == 0 ){
      this.state.totalStatus.value = value;
      this.setState({
        totalStatus: this.state.totalStatus
      })
    } else {
      this.state.storeStatus.value = value;
      this.setState({
        storeStatus: this.state.storeStatus
      })
    }
  }

  handleNavBack(){
    this.state.showPop = 0;
    Taro.navigateBack()
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
      title = this.state.totalStatus.value;
      hd = this.state.totalStatus.tagActiveNum;
      type1 = this.state.totalStatus.type1;
      type2 = this.state.totalStatus.type2;
      type3 = this.state.totalStatus.type3;
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
      let store_id = this.state.storeInfo.store_id;
      title = this.state.storeStatus.value;
      hd = this.state.storeStatus.tagActiveNum;
      type1 = this.state.storeStatus.type1;
      type2 = this.state.storeStatus.type2;
      type3 = this.state.storeStatus.type3;
      page = this.state.storeStatus.page;

      let _this = this;

      test_store_plays_search(cert_data, 
        `store_id=${store_id}&title=${title}&hd=${hd}&type1=${type1}&type2=${type2}&type3=${type3}&page=${page}`).then(
        function(res){
          console.log(res.data)
          _this.setState({
            listLoading: false,
            storePlays: _this.state.storePlays.concat(res.data)
          })
        }
      )
    }
  }

  onActionClick () {
    if (this.state.current == 0){
      this.state.totalStatus.page = 1;
      this.setState({
        showPop:0,
        listLoading: true,
        totalPlays:[]
      })
      this.searchTotalPlays();
    } else {
      this.state.storeStatus.page = 1;
      this.setState({
        showPop:0,
        listLoading: true,
        storePlays:[]
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
      this.state.storeStatus.page = 1;
      this.setState({
        listLoading: true,
        storePlays:[]
      })
      this.searchTotalPlays();
    }
    
  }

  handleClick (value) {
    console.log(this.state.totalScrollTop)
    console.log(this.state.storeScrollTop)

    this.setState({
      current: value,
      storeScrollTop: this.state.storeScrollTop+0.000000001,
      totalScrollTop: this.state.totalScrollTop+0.000000001
    })
    this.state.current=value;

  }

  handleClickCover () {
    this.setState({
      showPop:0
    })
  }

  handleMoreOptions (id) {
    this.setState({
      showPop:id
    })
  }

  handleDeletePlay (id, Idx) {
    this.state.clickDelete = true;
    console.log(`delete play_id_${id} in ${Idx}`)
    let tempPlay = Taro.getStorageSync(`play_id_${id}`)
    let _this = this;
    wx.showModal({
      title: '删除剧本',
      content: `确定删除 ${tempPlay.play_name} (${tempPlay.play_headcount}人本) 吗？`,
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          let uploadData = {
            adminId: _this.state.adminInfo.adminId,
            sessionId: _this.state.adminInfo.sessionId,
            play_id: id,
            store_id: _this.state.storeInfo.store_id,
            appId: wx.getAccountInfoSync().miniProgram.appId,
            token: (dayjs().unix() + 1000)*2
          }
          test_delete_plays_search(uploadData).then(function(result){
            console.log(result.data)
            if (result.data.code == 1){
              _this.state.storePlays.splice(Idx,1);
              _this.setState({
                storePlays:_this.state.storePlays,
                clickDelete: false
              })
            } else {
              _this.setState({
                clickDelete: false
              })
              console.log(result.data.data)
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
          _this.setState({
            clickDelete: false
          })
        }
      }
    })
  }

  handleModifyPlay (id) {
    if (this.state.clickDelete == true) {
      console.log('clicked the delete')
    } else {
      console.log(`modify play_id_${id}`)
      Taro.navigateTo({url: `../formPage/index?page=3&play_id=${id}`})
    }
  }

  createNewPlay() {
    Taro.navigateTo({url: `../formPage/index?page=3&play_id=0`})
  }
  

  onLabelClick(label, num) {
    console.log(label)
    console.log(num)
    console.log(this.state.totalStatus)
    if (this.state.current == 0 ){
      if (num == 1) {
        if (label == this.state.totalStatus.temp_type1) {
          this.state.totalStatus.temp_type1 = '';
        } else {
          this.state.totalStatus.temp_type1 = label
        }
        this.setState({
          totalStatus: this.state.totalStatus
        })
      } else if (num == 2) {
        if (label == this.state.totalStatus.temp_type2) {
          this.state.totalStatus.temp_type2 = '';
        } else {
          this.state.totalStatus.temp_type2 = label
        }
        this.setState({
          totalStatus: this.state.totalStatus
        })
      } else if (num == 3) {
        if (label == this.state.totalStatus.temp_type3) {
          this.state.totalStatus.temp_type3 = '';
        } else {
          this.state.totalStatus.temp_type3 = label
        }
        this.setState({
          totalStatus: this.state.totalStatus
        })
      }

    } else {
      if (num == 1) {
        if (label == this.state.storeStatus.temp_type1) {
          this.state.storeStatus.temp_type1 = '';
        } else {
          this.state.storeStatus.temp_type1 = label
        }
        this.setState({
          storeStatus: this.state.storeStatus
        })
      } else if (num == 2) {
        if (label == this.state.storeStatus.temp_type2) {
          this.state.storeStatus.temp_type2 = '';
        } else {
          this.state.storeStatus.temp_type2 = label
        }
        this.setState({
          storeStatus: this.state.storeStatus
        })
      } else if (num == 3) {
        if (label == this.state.storeStatus.temp_type3) {
          this.state.storeStatus.temp_type3 = '';
        } else {
          this.state.storeStatus.temp_type3 = label
        }
        this.setState({
          storeStatus: this.state.storeStatus
        })
      }

    }
  }

  resetLabels() {
    if (this.state.current == 0) {
      this.state.totalStatus.temp_type1 = '';
      this.state.totalStatus.temp_type2 = '';
      this.state.totalStatus.temp_type3 = '';
      this.state.totalStatus.type1 = '';
      this.state.totalStatus.type2 = '';
      this.state.totalStatus.type3 = '';
      this.state.totalPlays = [];
      this.state.totalStatus.showSelected = false;
      this.setState({
        totalStatus:this.state.totalStatus
      })
    } else {
      this.state.storeStatus.temp_type1 = '';
      this.state.storeStatus.temp_type2 = '';
      this.state.storeStatus.temp_type3 = '';
      this.state.storeStatus.type1 = '';
      this.state.storeStatus.type2 = '';
      this.state.storeStatus.type3 = '';
      this.state.storePlays = [];
      this.state.storeStatus.showSelected = false;
      this.setState({
        storeStatus:this.state.storeStatus
      })
    }
    this.setState({
      listLoading:true
    })
    this.searchTotalPlays();
  }

  showSelect() {
    if (this.state.current == 0) {
      this.state.totalStatus.showSelectTab = !this.state.totalStatus.showSelectTab;

      this.setState({
        totalStatus:this.state.totalStatus
      })
    } else {
      this.state.storeStatus.showSelectTab = !this.state.storeStatus.showSelectTab;

      this.setState({
        storeStatus:this.state.storeStatus
      })
    }
  }

  hideSelect() {
    if (this.state.current == 0) {
      this.state.totalStatus.showSelectTab = false;

      this.setState({
        totalStatus:this.state.totalStatus
      })
    } else {
      this.state.storeStatus.showSelectTab = false;

      this.setState({
        storeStatus:this.state.storeStatus
      })
    }
  }

  confirmLabels() {
    if (this.state.current == 0) {
      this.state.totalStatus.showSelectTab = false;
      this.state.totalStatus.showSelected = true;
      this.state.totalPlays = [];
      this.state.totalStatus.type1 = this.state.totalStatus.temp_type1;
      this.state.totalStatus.type2 = this.state.totalStatus.temp_type2;
      this.state.totalStatus.type3 = this.state.totalStatus.temp_type3;
      this.setState({
        totalStatus:this.state.totalStatus
      })
    } else {
      this.state.storeStatus.showSelectTab = false;
      this.state.storeStatus.showSelected = true;
      this.state.storePlays = [];
      this.state.storeStatus.type1 = this.state.storeStatus.temp_type1;
      this.state.storeStatus.type2 = this.state.storeStatus.temp_type2;
      this.state.storeStatus.type3 = this.state.storeStatus.temp_type3;
      this.setState({
        storeStatus:this.state.storeStatus
      })
    }
    this.setState({
      listLoading: true
    })
    this.searchTotalPlays();
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

    var scrollStyleTotal = {
      height: `${screenHeight_rpx - top_height_rpx - 320}rpx`
    }

    var scrollStyleY = {
      height: `${screenHeight_rpx - top_height_rpx - 320 - 100}rpx`
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

          let score_list = [];
          for (let index = 0; index < item.play_score; index++) {
            score_list.push(
              <image src={scoreActive} className='play-score-pic-info' style='position:relative;left:-0px;'></image>
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
                <View className='at-col play-name-position-info'>
                  <text style='text-overflow:ellipsis;overflow:hidden;white-space:nowrap;'>{item.play_name}</text>
                </View>
                <View className='at-row' /* =- 这一部分是这样，两列，第一列有两行文字，第二列用来放按钮 */>
                  <View className='at-col' /* 第一列 有两行*/>
                    <View className='play-score-position-info'>难度
                      <View style='display:flex;align-items:flex-end;padding-left:3%;position:relative;bottom:0%'>
                        {score_list}
                      </View>
                    </View>
                    <View className='at-row play-headcount-position-info' /* 这一部分有三列 */>
                      <View className='play-headcount-info'><text decode="{{true}}">{item.play_headcount}人本</text></View>
                        {male_female_display}
                    </View>
                  </View>
                  <View className='at-row' style='width:20vw' /*第二列是用来放按钮 */>
                    {/* Button  激活与不激活 具体看taroui中的文档*/}
                    <AtButton type='primary' circle='true' className='join-button' onClick={this.handleAddPlayToStore.bind(this, item.play_id)}>添加</AtButton>
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
        this.state.storePlays.map((item, itemIdx)=>{

          Taro.setStorage({
            key:`play_id_${item.play_id}`,
            data:item
          })

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

          let score_list = [];
          for (let index = 0; index < item.play_score; index++) {
            score_list.push(
              <image src={scoreActive} className='play-score-pic-info' style='position:relative;left:-0px;'></image>
            )
          }

          storePlayTabs.push(
            <View className='at-row queue-tab-info' onClick={this.handleModifyPlay.bind(this, item.play_id)}>
              <View className='at-row play-pic-position-info' style='width:21vw' /* 这里写的是 每个tab上剧本图片的位置*/>
                <image className='play-pic-info' src={base+item.play_img}>
                <text className='play-pic-label-info'>本格</text>
                </image>
              </View>
              <View className='at-col play-intro-info' /*这里的信息是每个tab上 剧本的一些文字信息 */>
                <View className='at-col play-name-position-info'>
                  <text style='text-overflow:ellipsis;overflow:hidden;white-space:nowrap;'>{item.play_name}</text>
                </View>
                <View className='at-row' /* =- 这一部分是这样，两列，第一列有两行文字，第二列用来放按钮 */>
                  <View className='at-col' /* 第一列 有两行*/>
                    <View className='play-score-position-info'>难度
                      <View style='display:flex;align-items:flex-end;padding-left:3%;position:relative;bottom:0%'>
                        {score_list}
                      </View>
                    </View>
                    <View className='at-row play-headcount-position-info' /* 这一部分有三列 */>
                      <View className='play-headcount-info'><text decode="{{true}}">{item.play_headcount}人本</text></View>
                        {male_female_display}
                    </View>
                  </View>
                </View>
                <View className='at-col play-label-position-info'>
                  {play_label_display}
                </View>
              </View>
              {/*这里实现一个气泡组件*/}
              <View style='position:absolute;right:50rpx;margin-top:20rpx;display:flex;flex-direction:column;align-items:flex-end;'>
                <image src={deleteIcon} style='height:40rpx;width:40rpx;' onClick={this.handleDeletePlay.bind(this, item.play_id, itemIdx)}></image>
              </View>

            </View>
          )
        })
      }

      if (totalPlayTabs.length == 0) {
        totalPlayTabs.push(
          <View>
            <image src={emptyResult} style='width:100vw;height:600rpx;'></image>
          </View>
        )
      }

      if (storePlayTabs.length == 0) {
        storePlayTabs.push(
          <View>
            <image src={emptyResult} style='width:100vw;height:600rpx;'></image>
          </View>
        )
      }
    } else {
      if(this.state.current==0){
        totalPlayTabs.push(
          <View>
            <AtActivityIndicator mode='center' size={64} content='Loading...' className='load'></AtActivityIndicator>
          </View>
        )
      }else{
        storePlayTabs.push(
          <View>
            <AtActivityIndicator mode='center' size={64} content='Loading...' className='load'></AtActivityIndicator>
          </View>
        )
      }
    }

    let type1_list = [];
    for (let index = 0; index < type1.length; index++) {
      type1_list.push(
        <AtTag 
          className='tag-label-button-info'
          name={type1[index]}
          type='primary' 
          active={this.state.current==0? (this.state.totalStatus.temp_type1==type1[index]? true:false):(this.state.storeStatus.temp_type1==type1[index]? true:false)} 
          onClick={this.onLabelClick.bind(this, type1[index], 1)}
          >
            {type1[index]}
        </AtTag>
      )
    }

    let type2_list = [];
    for (let index = 0; index < type2.length; index++) {
      type2_list.push(
        <AtTag 
          className='tag-label-button-info'
          name={type2[index]}
          type='primary' 
          active={this.state.current==0? (this.state.totalStatus.temp_type2==type2[index]? true:false):(this.state.storeStatus.temp_type2==type2[index]? true:false)} 
          onClick={this.onLabelClick.bind(this, type2[index], 2)}
          >
            {type2[index]}
        </AtTag>
      )
    }

    let type3_list = [];
    for (let index = 0; index < type3.length; index++) {
      type3_list.push(
        <AtTag 
          className='tag-label-button-info'
          name={type3[index]}
          type='primary' 
          active={this.state.current==0? (this.state.totalStatus.temp_type3==type3[index]? true:false):(this.state.storeStatus.temp_type3==type3[index]? true:false)} 
          onClick={this.onLabelClick.bind(this, type3[index], 3)}
          >
            {type3[index]}
        </AtTag>
      )
    }

    return (
      <View className='JoinQueueSelectInfo'>
        <View className='at-col' style={{padding: `${top_height}px 0px 0px 0px`}}>
          <AtNavBar className='nav-bar-info'
              onClickLeftIcon={this.handleNavBack.bind(this)}
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
              scrollTop={this.state.totalScrollTop}
              style={scrollStyleTotal}
              lowerThreshold={Threshold}
              upperThreshold={Threshold}
              onScrollToUpper={this.onScrollToUpperY.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
              onScrollToLower={this.onScrollToLowerYTotal.bind(this)}
              onScroll={this.onScrollY.bind(this)}
              >

              <View style='height:30rpx;width:100vw;'></View>
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
              scrollTop={this.state.storeScrollTop}
              style={scrollStyleY}
              lowerThreshold={Threshold}
              upperThreshold={Threshold}
              onScrollToUpper={this.onScrollToUpperY.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
              onScrollToLower={this.onScrollToLowerYStore.bind(this)}
              onScroll={this.onScrollY.bind(this)}
              >
                <View style='height:30rpx;width:100vw;'></View>
                {storePlayTabs}

                <View className='at-row tab-blank'></View> {/*切记，每个AtTabsPane最下面要加一小条空白，否则阴影部分显示不全，会很难看 */}

              </ScrollView>
              <View style='height:100rpx;width:750rpx;'>
                <AtButton type='primary' circle='true' className='create-new-play' onClick={this.createNewPlay.bind(this)}>上传剧本</AtButton> 
              </View>
            </AtTabsPane>
          </AtTabs>
          <View className='at-col' style={{height:`150rpx`, backgroundColor:`#FFFEFFFF`, position:`absolute`, top:`${top_height_rpx + 150 + 20}rpx`}} /* 这里是*/>
            <AtSearchBar
                className='search-bar-info'
                showActionButton
                value={this.state.current==0? this.state.totalStatus.value:this.state.storeStatus.value}
                onChange={this.onChange.bind(this)}
                onActionClick={this.onActionClick.bind(this)}
              />
            <View className='at-row' style='margin-top: 2%;'>
              <View className='' style='width:15vw;align-items:center;display:flex;justify-content:flex-end;'>
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
                <image src={selectIcon} style='height:50rpx;width:50rpx;' onClick={this.showSelect.bind(this)}></image>
              </View>
            </View>
            {this.state.current==0? this.state.totalStatus.showSelected==false? null:
            <View 
              style={{
                width:`100vw`,
                height:`auto`,
                background:`#FDF9F3`,
                display:`flex`,
                alignItems:`center`,
                marginLeft: `30rpx`
                }}>
              {this.state.current==0?
                [
                this.state.totalStatus.type1.length == 0? null:<AtTag className='tag-label-display-info' name={this.state.totalStatus.type1} type='primary' circle >{this.state.totalStatus.type1}</AtTag>,
                this.state.totalStatus.type2.length == 0? null:<AtTag className='tag-label-display-info' name={this.state.totalStatus.type2} type='primary' circle >{this.state.totalStatus.type2}</AtTag>,
                this.state.totalStatus.type3.length == 0? null:<AtTag className='tag-label-display-info' name={this.state.totalStatus.type3} type='primary' circle >{this.state.totalStatus.type3}</AtTag>
                ]:[
                this.state.storeStatus.type1.length == 0? null:<AtTag className='tag-label-display-info' name={this.state.storeStatus.type1} type='primary' circle >{this.state.storeStatus.type1}</AtTag>,
                this.state.storeStatus.type2.length == 0? null:<AtTag className='tag-label-display-info' name={this.state.storeStatus.type2} type='primary' circle >{this.state.storeStatus.type2}</AtTag>,
                this.state.storeStatus.type3.length == 0? null:<AtTag className='tag-label-display-info' name={this.state.storeStatus.type3} type='primary' circle >{this.state.storeStatus.type3}</AtTag>
                ]
              }
            </View>: this.state.storeStatus.showSelected==false? null:
            <View 
              style={{
                width:`100vw`,
                height:`auto`,
                background:`#FDF9F3`,
                display:`flex`,
                alignItems:`center`,
                marginLeft: `30rpx`
                }}>
              {this.state.current==0?
                [
                this.state.totalStatus.type1.length == 0? null:<AtTag className='tag-label-display-info' name={this.state.totalStatus.type1} type='primary' circle >{this.state.totalStatus.type1}</AtTag>,
                this.state.totalStatus.type2.length == 0? null:<AtTag className='tag-label-display-info' name={this.state.totalStatus.type2} type='primary' circle >{this.state.totalStatus.type2}</AtTag>,
                this.state.totalStatus.type3.length == 0? null:<AtTag className='tag-label-display-info' name={this.state.totalStatus.type3} type='primary' circle >{this.state.totalStatus.type3}</AtTag>
                ]:[
                this.state.storeStatus.type1.length == 0? null:<AtTag className='tag-label-display-info' name={this.state.storeStatus.type1} type='primary' circle >{this.state.storeStatus.type1}</AtTag>,
                this.state.storeStatus.type2.length == 0? null:<AtTag className='tag-label-display-info' name={this.state.storeStatus.type2} type='primary' circle >{this.state.storeStatus.type2}</AtTag>,
                this.state.storeStatus.type3.length == 0? null:<AtTag className='tag-label-display-info' name={this.state.storeStatus.type3} type='primary' circle >{this.state.storeStatus.type3}</AtTag>
                ]
              }
            </View>
            }
            <View 
              style={{
                width:`100vw`,
                height:`auto`,
                background:`#FDF9F3`,
                display:`flex`,
                flexDirection:`column`,
                visibility: this.state.current==0? (this.state.totalStatus.showSelectTab==true? 'visible':'hidden'):(this.state.storeStatus.showSelectTab==true? 'visible':'hidden')
                }}>
              <View style='width:100vw;height:auto;display:flex;flex-direction:column;'>
                <View style='width:100vw;height:100rpx;display:flex;align-items:center;'>
                  <text style='margin-left:30rpx;font-size:40rpx;font-weight:550;'>题材</text>
                  <View style='position:absolute;right:50rpx;' onClick={this.hideSelect.bind(this)}>
                    <text style='font-size:28rpx;color:#A5A5A5;'>收起</text>
                    <AtIcon value='chevron-up' size='18' color='#A5A5A5'></AtIcon>
                  </View>
                </View>
                <View style='width:700rpx;margin-left:50rpx;display:flex;flex-wrap:wrap;'>
                  {type1_list}
                </View>
              </View>
              <View style='width:100vw;height:auto;display:flex;flex-direction:column;'>
                <View style='width:100vw;height:100rpx;display:flex;align-items:center;'>
                  <text style='margin-left:30rpx;font-size:40rpx;font-weight:550;'>类型</text>
                </View>
                <View style='width:700rpx;margin-left:50rpx;display:flex;flex-wrap:wrap;'>
                  {type2_list}
                </View>
              </View>
              <View style='width:100vw;height:auto;display:flex;flex-direction:column;'>
                <View style='width:100vw;height:100rpx;display:flex;align-items:center;'>
                  <text style='margin-left:30rpx;font-size:40rpx;font-weight:550;'>背景</text>
                </View>
                <View style='width:700rpx;margin-left:50rpx;display:flex;flex-wrap:wrap;'>
                  {type3_list}
                </View>
              </View>
              <View style='width:100vw;height:100rpx;display:flex;align-items:center;border: 0rpx solid #A5A5A599;border-top-width:2rpx;'>
                <AtButton type='second' circle='true' className='label-reset-button' onClick={this.resetLabels.bind(this)} >重置</AtButton>
                <AtButton type='primary' circle='true' className='label-confirm-button' onClick={this.confirmLabels.bind(this)}>确定</AtButton>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
