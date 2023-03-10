import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Input, Switch, ScrollView} from '@tarojs/components'
import { AtButton, AtNavBar, AtInput, AtImagePicker, AtActivityIndicator, AtTextarea, AtIcon } from 'taro-ui'
import './index.scss'

import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

import SparkMD5 from 'spark-md5'

import CryptoJS from 'crypto-js'

import bk from '../../img/image-13.jpg'
import mapIcon from '../../img/mapIcon.svg'
import confirmIcon from '../../img/confirmIcon.svg'
import editorIcon from '../../img/deleteIcon.svg'

import {test_send_sms, test_upload_play, test_get_storeAdmin, test_save_storeInfo, test_add_admin, test_delete_admin} from '../../service/api'
import { base, map_KEY } from '../../service/config'
import {encrypt} from '../../utils/aes'

const chooseLocation = requirePlugin('chooseLocation');

export default class Formpage extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      showSteps: false,
      adminStoreInfo: {
        name:'',
        idCard:'',
        phone:''
      },
      storeInfo: {
        store_id: 0,
        store_name: '',
        store_logo: '',
        store_status: '',
        store_info: '',
        store_deposit: '',
        store_position: '',
        store_address: '',
        store_longitude: 0,
        store_latitude: 0,
        store_tel1: '',
        store_tel2: ''
      },
      adminInfo:{},
      adminList:[],
      playInfo:{},
      playPrice:0,
      validate_code: ['','','','','',''],
      validate_code_focus:9,
      server_validate_code:'111111',
      countDownStart: 59,
      countDownNum: 0,
      pageKind:4,
      imgFile:[],
      newAdminPhone: '',
      useLocation: false,
      imgUploadIcon: true,
      infoLoading: true
    }
  }

  componentWillMount () { 
    var pages = getCurrentPages();
    let currentPage = pages[pages.length-1];
    let pages_option = currentPage.options;
    let pageKind = pages_option.page;
    console.log(pageKind)
    if (pageKind == "0"){
      // ?????? ???????????? ?????????
      this.state.adminInfo = Taro.getStorageSync('admin_info');
      let tempAdminStoreInfo = Taro.getStorageSync('adminStoreInfo');
      if(tempAdminStoreInfo){
        this.state.adminStoreInfo = tempAdminStoreInfo
      }
      if(this.state.adminInfo.phoneNumber) {
        console.log(this.state.adminInfo.phoneNumber)
        this.state.adminStoreInfo.phone = this.state.adminInfo.phoneNumber
        this.setState({
          adminStoreInfo: this.state.adminStoreInfo
        })
      }
      console.log('phone Numbers')
      this.setState({
        pageKind:pageKind
      })
    } else if (pageKind == "1") {
      // ????????????
      this.setState({
        pageKind:pageKind
      })
    } else if (pageKind == "2") {
      // ???????????????
      this.setState({
        pageKind:pageKind
      })
    } else if (pageKind == "3") {
      // ????????????
      let playId = pages_option.play_id;
      if (playId == 0) {
        this.state.playInfo = {
          play_labels:[],
          play_id:0, 
          play_name:"",
          play_headcount:0,
          play_male_num:0,
          play_female_num:0,
          play_score:0,
          play_intro:"",
          play_img:"",
          play_antigender:false,
          play_duration:0
        }
        this.setState({
          pageKind:pageKind,
          storeInfo: Taro.getStorageSync('store_info'),
          adminInfo: Taro.getStorageSync('admin_info'),
          imgFile: [],
          imgUploadIcon: true,
          infoLoading: false
        })
      } else {
        this.state.playInfo = Taro.getStorageSync(`play_id_${playId}`);
        this.setState({
          pageKind:pageKind,
          storeInfo: Taro.getStorageSync('store_info'),
          adminInfo: Taro.getStorageSync('admin_info'),
          imgFile: [{url: base+this.state.playInfo.play_img}],
          imgUploadIcon: false,
          infoLoading: false
        })
      }
    } else if (pageKind == "4") {
      // ????????????
      console.log("??????????????????")
      this.state.adminInfo = Taro.getStorageSync(`admin_info`);
      this.state.storeInfo = Taro.getStorageSync(`store_info`);
      this.state.permission = Taro.getStorageSync(`permission`);
      this.setState({
        pageKind:pageKind,
        imgFile: [{url: base+this.state.storeInfo.store_logo}],
        imgUploadIcon: false
      })
      let uploadData = {
        adminId: this.state.adminInfo.adminId,
        sessionId: this.state.adminInfo.sessionId,
        store_id: this.state.storeInfo.store_id,
        appId: wx.getAccountInfoSync().miniProgram.appId,
        token: (dayjs().unix() + 1000)*2
      }
      let _this = this;
      test_get_storeAdmin(uploadData).then(function(res) {
        console.log(res.data)
        Taro.setStorage({
          key: "store_info",
          data: res.data.data.storeInfo
        })
        _this.setState({
          adminList: res.data.data.adminList,
          storeInfo: res.data.data.storeInfo,
          imgFile: [{url: base+res.data.data.storeInfo.store_logo}],
          infoLoading: false
        })
      })
    } else if (pageKind == "5") {
      // ????????????????????????
      console.log("????????????????????????")
      this.state.storeInfo = Taro.getStorageSync(`store_info`);
      this.setState({
        pageKind:pageKind,
        imgFile: [{url: base+this.state.storeInfo.store_logo}],
        adminInfo:Taro.getStorageSync(`admin_info`),
        permission:Taro.getStorageSync(`permission`),
        imgUploadIcon: false
      })
    } else if (pageKind == "6") {
      // ?????????????????????
      console.log("?????????????????????")
      this.state.storeInfo = Taro.getStorageSync(`store_info`);
      this.setState({
        pageKind:pageKind
      })
    } else if (pageKind == "7") {
      // ???????????????????????????
    }
  }

  componentWillUnmount () {
    clearInterval(this.timer);
  }

  componentDidShow () { 

    if (this.state.useLocation == true) {
      console.log('use location')
      const location = chooseLocation.getLocation(); // ???????????????????????????????????????????????????????????????????????????null
      if (location) {
        this.state.storeInfo.store_address = location.address;
        this.state.storeInfo.store_position = location.name;
        this.state.storeInfo.store_longitude = location.longitude;
        this.state.storeInfo.store_latitude = location.latitude;
        this.setState({
          storeInfo: this.state.storeInfo,
          useLocation: false
        })
      }
    }
    
    if ((this.state.pageKind) && (this.state.pageKind  == "4")) {
      // ????????????
      console.log("??????????????????")
      this.state.adminInfo = Taro.getStorageSync(`admin_info`);
      this.state.storeInfo = Taro.getStorageSync(`store_info`);
      this.state.permission = Taro.getStorageSync(`permission`);
      this.setState({
        imgFile: [{url: base+this.state.storeInfo.store_logo}],
        imgUploadIcon: false
      })
      let uploadData = {
        adminId: this.state.adminInfo.adminId,
        sessionId: this.state.adminInfo.sessionId,
        store_id: this.state.storeInfo.store_id,
        appId: wx.getAccountInfoSync().miniProgram.appId,
        token: (dayjs().unix() + 1000)*2
      }
      console.log(this.state)
      let _this = this;
      test_get_storeAdmin(uploadData).then(function(res) {
        console.log(res.data)
        Taro.setStorage({
          key: "store_info",
          data: res.data.data.storeInfo
        })
        _this.setState({
          adminList: res.data.data.adminList,
          storeInfo: res.data.data.storeInfo,
          infoLoading: false
        })
      })
    }
  }

  componentDidHide () { }

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
      phone: this.state.adminStoreInfo.phone,
      watermark: {
        appId: wx.getAccountInfoSync().miniProgram.appId,
        token: (dayjs().unix() + 1000 ) * 2
      }
    }
    console.log(admin_data);
    if (this.state.adminStoreInfo.phone.length !== 11) {
      console.log('phone num length is not 11')
    } else {
      let _this = this;
      test_send_sms(admin_data).then(function(res) {
        let validCode = (res.data.data.token - 1000) >> 1;
        _this.state.server_validate_code = validCode;
        _this.state.adminInfo.sessionId = res.data.data.sessionId;
        Taro.setStorage({key:'admin_info', data:_this.state.adminInfo});
      })
      console.log(this.state.server_validate_code)
    }
  }
  

  handleNavBack() { 
    if (this.state.pageKind == 5) {
      this.state.pageKind = 4
    }
    Taro.removeStorage({key:'adminStoreInfo'});
    Taro.navigateBack();
  }

  handleChange (type, value) {
    if (type == 'adminStoreInfo_name') {
      this.state.adminStoreInfo.name = value;
      this.setState({
        adminStoreInfo:this.state.adminStoreInfo
      })
    } else if (type == 'adminStoreInfo_idCard') {
      this.state.adminStoreInfo.idCard = value;
      this.setState({
        adminStoreInfo:this.state.adminStoreInfo
      })
    } else if (type == 'adminStoreInfo_phone') {
      this.state.adminStoreInfo.phone = value;
      this.setState({
        adminStoreInfo:this.state.adminStoreInfo
      })
    } else if (type == 'storeInfo_store_name') {
      this.state.storeInfo.store_name = value;
      this.setState({
        storeInfo: this.state.storeInfo
      })
    } else if (type == 'storeInfo_store_address') {
      this.state.storeInfo.store_address = value;
      this.setState({
        storeInfo: this.state.storeInfo
      })
    } else if (type == 'storeInfo_store_tel1') {
      this.state.storeInfo.store_tel1 = value;
      this.setState({
        storeInfo: this.state.storeInfo
      })
    } else if (type == 'storeInfo_store_tel2') {
      this.state.storeInfo.store_tel2 = value;
      this.setState({
        storeInfo: this.state.storeInfo
      })
    } else if (type == 'playInfo_play_intro') {
      var temp = value;
      temp = temp.split('/n').join('\n');
      this.state.playInfo.play_intro = temp;
    } else if (type == 'playInfo_play_name') {
      this.state.playInfo.play_name = value;
    } else if (type == 'playInfo_play_headcount') {
      this.state.playInfo.play_headcount = Number(value);
    } else if (type == 'playInfo_play_male_num') {
      this.state.playInfo.play_male_num = Number(value);
    } else if (type == 'playInfo_play_female_num') {
      this.state.playInfo.play_female_num = Number(value);
    } else if (type == 'playPrice') {
      this.state.playPrice = Number(value);
    } else if (type == 'playInfo_play_antigender') {
      this.state.playInfo.play_antigender = value.detail.value;
    } else if (type == 'newAdminPhone') {
      this.state.newAdminPhone = value;
    }
  return value
  }

  handleNextStep () { 
    if (this.state.pageKind == "0"){
      //var input_code = this.state.validate_code[0]*100000+this.state.validate_code[1]*10000+this.state.validate_code[2]*1000+this.state.validate_code[3]*100+this.state.validate_code[4]*10+this.state.validate_code[5]*1
      //console.log(this.state.validate_code)
      //console.log(input_code)
      //console.log(this.state.server_validate_code)
      if (this.state.adminStoreInfo.name.length == 0) {
        console.log('name length is 0')
      } else if (this.state.adminStoreInfo.idCard.length !== 18) {
        console.log('id card length is not 18')
      } else if (this.state.adminStoreInfo.phone.length !== 11) {
        console.log('phone num length is not 11')
      }  else {
        Taro.setStorage({key:'adminStoreInfo', data:this.state.adminStoreInfo})
        this.setState({
          pageKind:1
        })
      }
    } else if (this.state.pageKind == "1") {
      console.log(this.state.imgFile);
      if (this.state.imgFile.length == 1) {
        if (this.state.imgFile[0].file.size > 600000) {
          console.log("Img size is over 600KB")
        } else if (this.state.storeInfo.store_name.length == 0) {
          console.log("Store name length is 0")
        } else if (this.state.storeInfo.store_name.length > 15) {
          console.log("Store name length is more than 15")
        } else if (this.state.storeInfo.store_latitude == 0 | this.state.storeInfo.store_longitude == 0) {
          console.log("Store position did not set")
        } else if (this.state.storeInfo.store_address.length == 0) {
          console.log("Store position did not set")
        } else if (this.state.storeInfo.store_position.length == 0) {
          console.log("Store address did not set")
        } else if (this.state.storeInfo.store_tel1.length <8) {
          console.log("telephone number length is wrong")
        } else if (isNaN(this.state.storeInfo.store_tel1.split('-')[0])) {
          console.log("telephone number is not number")
        }else {
          var spark = new SparkMD5()
          var imgMD5;
          var imgFile = wx.getFileSystemManager().readFileSync(this.state.imgFile[0].file.path, 'binary');
          spark.appendBinary(imgFile);
          imgMD5 = spark.end();
          
          let _this = this;
          var sendTime = dayjs().unix();
          var key = (this.state.storeInfo.store_latitude+this.state.storeInfo.store_longitude).toString()+sendTime.toString();
          let name = encrypt(key, this.state.adminStoreInfo.name);
          let idCard = encrypt(key, this.state.adminStoreInfo.idCard);
          Taro.uploadFile({
            url: base+'/test/uploadImg', //???????????????????????????????????????
            filePath: this.state.imgFile[0].file.path,
            name: 'file',
            formData: {
              'phone': this.state.adminStoreInfo.phone,
              'name': name,
              'idCard': idCard,
              'store_name': this.state.storeInfo.store_name,
              'store_position': this.state.storeInfo.store_position,
              'store_address': this.state.storeInfo.store_address,
              'store_latitude': this.state.storeInfo.store_latitude,
              'store_longitude': this.state.storeInfo.store_longitude,
              'store_tel': this.state.storeInfo.store_tel1,
              'store_tel2': this.state.storeInfo.store_tel2,
              'imgMD5': imgMD5,
              'adminId': this.state.adminInfo.adminId,
              'sessionId': this.state.adminInfo.sessionId,
              'appId': wx.getAccountInfoSync().miniProgram.appId,
              'token': (sendTime + 1000 ) * 2
            },
            success (res){
              const receiveData = JSON.parse(res.data);
              console.log(receiveData)
              _this.state.adminStoreInfo.name = '';
              _this.state.adminStoreInfo.idCard = '';
              Taro.setStorage({
                key:'adminStoreInfo',
                data: _this.state.adminStoreInfo
              })
              _this.state.adminInfo.sessionId = receiveData.data.sessionId;
              _this.state.storeInfo = receiveData.data.storeInfo;
              Taro.setStorage({key:'store_info', data:_this.state.storeInfo});
              Taro.setStorage({key:'admin_info', data:_this.state.adminInfo});
              Taro.setStorage({key:'permission', data:1});
              _this.setState({
                pageKind:2
              })
            }
          })
        }
      } else {
        console.log("this file list is empty")
      }
      
      /*
      Taro.uploadFile({
        url: base+'/test/uploadImg', //???????????????????????????????????????
        filePath: this.state.imgFile[0],
        name: 'file',
        formData: {
          'user': 'test'
        },
        success (res){
          const data = res.data
          //do something
        }
      })
      */
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
    
    
    console.log('focus: '+this.state.validate_code_focus)
  }

  handleEmpty() { }

  onImgChange (files, operationType, index) {
    if (operationType=='add') {
      this.setState({
        imgFile: files,
        imgUploadIcon: false
      })
    } else if (operationType=='remove') {
      this.setState({
        imgFile: files,
        imgUploadIcon: true
      })
    }
  }

  handleSelectPos () {
    this.state.useLocation = true;
    let _this = this;
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.userLocation']) {
          wx.authorize({
            scope: 'scope.userLocation',
            success () {
              wx.getLocation({
                type: 'gcj02',
                success (res) {
                  console.log(res);
                  _this.state.storeInfo.latitude = res.latitude;
                  _this.state.storeInfo.longitude = res.longitude;
                  const referer = 'ecouOrange';
                  const location = JSON.stringify({
                    latitude: _this.state.storeInfo.latitude,
                    longitude: _this.state.storeInfo.longitude
                  });
                  const category = '????????????,????????????';
                  Taro.navigateTo({
                    url: `plugin://chooseLocation/index?key=${map_KEY}&referer=${referer}&location=${location}&category=${category}`
                  })
                }
              })
            }
          })
        } else {
          wx.getLocation({
            type: 'gcj02',
            success (res) {
              console.log(res);
              _this.state.storeInfo.latitude = res.latitude;
              _this.state.storeInfo.longitude = res.longitude;
              const referer = 'ecouOrange';
              const location = JSON.stringify({
                latitude: _this.state.storeInfo.latitude,
                longitude: _this.state.storeInfo.longitude
              });
              const category = '????????????,????????????';
              Taro.navigateTo({
                url: `plugin://chooseLocation/index?key=${map_KEY}&referer=${referer}&location=${location}&category=${category}`
              })
            }
          })
        }
      }
    })
    
  }

  handleShowStore () {
    Taro.setStorage({key:'store_info', data:this.state.storeInfo});
    Taro.setStorage({key:'admin_info', data:this.state.adminInfo});
    Taro.setStorage({key:'permission', data:1});
    Taro.removeStorage({key:'adminStoreInfo'});
    Taro.navigateTo({url:'../storeMainPage/storeMainPage'});
  }

  handleUploadPlay () {
    console.log('upload play')
    if (this.state.playInfo.play_name.length == 0) {
      console.log("Play name length is 0")
    } else if (this.state.playInfo.play_name.length > 15) {
      console.log("Play name length is more than 15")
    } else {
    
      if (this.state.imgFile[0].url == base+this.state.playInfo.play_img){
        console.log('the imgs are same')
        let temp_play = Taro.getStorageSync(`play_id_${this.state.playInfo.play_id}`)
        console.log(temp_play)
        console.log(this.state.playInfo)
        var ClientPlayMD5 = SparkMD5.hash(JSON.stringify(this.state.playInfo));
        var ServerPlayMD5 = SparkMD5.hash(JSON.stringify(temp_play));
        if (ClientPlayMD5 == ServerPlayMD5) {
          console.log('nothing modified')
        } else {
          console.log(ClientPlayMD5)
          console.log(ServerPlayMD5)
          let upload_data = {
            adminId: this.state.adminInfo.adminId,
            sessionId: this.state.adminInfo.sessionId,
            store_id: this.state.storeInfo.store_id,
            play_info: this.state.playInfo,
            price: this.state.playPrice,
            appId: wx.getAccountInfoSync().miniProgram.appId,
            token: (dayjs().unix() + 1000 ) * 2
          }

          let _this = this;
          test_upload_play(upload_data).then(function(res){
            console.log(res.data)
            if (res.data.code == 1) {
              Taro.removeStorage({key:`play_id_${_this.state.playInfo.play_id}`})
              _this.setState({
                playInfo:res.data.data
              })
              Taro.navigateBack()
            } else {
              console.log(res.data.data)
            }
          })
        }
      } else {
        console.log('the imgs are not same')

        var spark = new SparkMD5()
        var imgMD5;
        var imgFile = wx.getFileSystemManager().readFileSync(this.state.imgFile[0].file.path, 'binary');
        spark.appendBinary(imgFile);
        imgMD5 = spark.end();
        let _this = this;
        Taro.uploadFile({
          url: base+'/test/uploadPlayWithImg', //???????????????????????????????????????
          filePath: this.state.imgFile[0].file.path,
          name: 'file',
          formData: {
            'imgMD5': imgMD5,
            'play_id': this.state.playInfo.play_id,
            'play_name': this.state.playInfo.play_name,
            'play_headcount': this.state.playInfo.play_headcount,
            'play_male_num': this.state.playInfo.play_male_num,
            'play_female_num': this.state.playInfo.play_female_num,
            'play_score': this.state.playInfo.play_score,
            'play_intro': this.state.playInfo.play_intro,
            'play_duration': this.state.playInfo.play_duration,
            'play_antigender': this.state.playInfo.play_antigender==true? 1:0,
            'play_labels': this.state.playInfo.play_labels,
            'store_id': this.state.storeInfo.store_id,
            'price': this.state.playPrice,
            'adminId': this.state.adminInfo.adminId,
            'sessionId': this.state.adminInfo.sessionId,
            'appId': wx.getAccountInfoSync().miniProgram.appId,
            'token': (dayjs().unix() + 1000 ) * 2
          },
          success (res){
            const receiveData = JSON.parse(res.data);
            console.log(receiveData)
            if (receiveData.code == 1) {
              Taro.removeStorage({key:`play_id_${_this.state.playInfo.play_id}`})
              _this.state.adminInfo.sessionId = receiveData.data.sessionId;
              _this.state.playInfo = receiveData.data.playInfo;
              Taro.setStorage({
                key: `admin_info`,
                data: _this.state.adminInfo
              })
              Taro.navigateBack()
            } else {
              console.log(receiveData.data)
            }
          }
        })
      }
    }
    /*
    Taro.uploadFile({
      url: base+'/test/uploadPlay', //???????????????????????????????????????
      filePath: this.state.imgFile[0].file.path,
      name: 'file',
      formData: {
        'imgMD5': imgMD5,
        'adminId': this.state.adminInfo.adminId,
        'sessionId': this.state.adminInfo.sessionId,
        'appId': wx.getAccountInfoSync().miniProgram.appId,
        'token': (sendTime + 1000 ) * 2
      },
      success (res){
        const receiveData = JSON.parse(res.data);
        console.log(receiveData)
        _this.state.adminInfo.sessionId = receiveData.data.sessionId;
        _this.state.storeInfo = receiveData.data.storeInfo;
        Taro.setStorage({key:'store_info', data:_this.state.storeInfo});
        Taro.setStorage({key:'admin_info', data:_this.state.adminInfo});
        Taro.setStorage({key:'permission', data:1});
        _this.setState({
          pageKind:2
        })
      }
    })*/
  }

  handleModifyStoreInfo() {
    Taro.navigateTo({
      url: 'index?page=5'
    })
  }

  SaveStoreInfo() {
    console.log(this.state.imgFile);
    console.log(base+this.state.storeInfo.store_logo)
    if (this.state.imgFile[0].url !== (base+this.state.storeInfo.store_logo)) {
      if (this.state.imgFile[0].file.size > 600000) {
        console.log("Img size is over 600KB")
      } else if (this.state.storeInfo.store_name.length == 0) {
        console.log("Store name length is 0")
      } else if (this.state.storeInfo.store_name.length > 15) {
        console.log("Store name length is more than 15")
      } else if (this.state.storeInfo.store_latitude == 0 | this.state.storeInfo.store_longitude == 0) {
        console.log("Store position did not set")
      } else if (this.state.storeInfo.store_address.length == 0) {
        console.log("Store position did not set")
      } else if (this.state.storeInfo.store_position.length == 0) {
        console.log("Store address did not set")
      } else if (this.state.storeInfo.store_tel1.length <8) {
        console.log("telephone number length is wrong")
      } else if (isNaN(this.state.storeInfo.store_tel1.split('-')[0])) {
        console.log("telephone number is not number")
      } else {
        var spark = new SparkMD5()
        var imgMD5;
        var imgFile = wx.getFileSystemManager().readFileSync(this.state.imgFile[0].file.path, 'binary');
        spark.appendBinary(imgFile);
        imgMD5 = spark.end();
        
        let _this = this;
        Taro.uploadFile({
          url: base+'/test/saveStoreWithImg', //???????????????????????????????????????
          filePath: this.state.imgFile[0].file.path,
          name: 'file',
          formData: {
            'store_id': this.state.storeInfo.store_id,
            'store_name': this.state.storeInfo.store_name,
            'store_position': this.state.storeInfo.store_position,
            'store_address': this.state.storeInfo.store_address,
            'store_latitude': this.state.storeInfo.store_latitude,
            'store_longitude': this.state.storeInfo.store_longitude,
            'store_tel': this.state.storeInfo.store_tel1,
            'store_tel2': this.state.storeInfo.store_tel2,
            'imgMD5': imgMD5,
            'adminId': this.state.adminInfo.adminId,
            'sessionId': this.state.adminInfo.sessionId,
            'appId': wx.getAccountInfoSync().miniProgram.appId,
            'token': (dayjs().unix() + 1000 ) * 2
          },
          success (res){
            const receiveData = JSON.parse(res.data);
            console.log(receiveData)
            _this.state.adminInfo.sessionId = receiveData.data.sessionId;
            _this.state.storeInfo = receiveData.data.storeInfo;
            Taro.setStorage({
              key: `admin_info`,
              data: _this.state.adminInfo
            })
            Taro.setStorage({
              key: `store_info`,
              data: _this.state.storeInfo
            })
            if (_this.state.pageKind == 5) {
              _this.state.pageKind = 4
            }
            Taro.navigateBack()
          }
        })
      }
    } else {
      console.log("the img is same")
      if (this.state.storeInfo.store_name.length == 0) {
        console.log("Store name length is 0")
      } else if (this.state.storeInfo.store_name.length > 15) {
        console.log("Store name length is more than 15")
      } else if (this.state.storeInfo.store_latitude == 0 | this.state.storeInfo.store_longitude == 0) {
        console.log("Store position did not set")
      } else if (this.state.storeInfo.store_address.length == 0) {
        console.log("Store position did not set")
      } else if (this.state.storeInfo.store_position.length == 0) {
        console.log("Store address did not set")
      } else if (this.state.storeInfo.store_tel1.length <8) {
        console.log("telephone number length is wrong")
      } else if (isNaN(this.state.storeInfo.store_tel1.split('-')[0])) {
        console.log("telephone number is not number")
      } else {
        let formData = {
          'store_id': this.state.storeInfo.store_id,
          'store_name': this.state.storeInfo.store_name,
          'store_position': this.state.storeInfo.store_position,
          'store_address': this.state.storeInfo.store_address,
          'store_latitude': this.state.storeInfo.store_latitude,
          'store_longitude': this.state.storeInfo.store_longitude,
          'store_tel': this.state.storeInfo.store_tel1,
          'store_tel2': this.state.storeInfo.store_tel2,
          'adminId': this.state.adminInfo.adminId,
          'sessionId': this.state.adminInfo.sessionId,
          'appId': wx.getAccountInfoSync().miniProgram.appId,
          'token': (dayjs().unix() + 1000 ) * 2
        }
        
        let _this = this;

        test_save_storeInfo(formData).then(function(res) {
          console.log(res.data)
          _this.state.adminInfo.sessionId = res.data.data.sessionId;
          _this.state.storeInfo = res.data.data.storeInfo;
          Taro.setStorage({
            key: `admin_info`,
            data: _this.state.adminInfo
          })
          Taro.setStorage({
            key: `store_info`,
            data: _this.state.storeInfo
          })
          if (_this.state.pageKind == 5) {
            _this.state.pageKind = 4
          }
          Taro.navigateBack()
        })
      }
    }
  }

  addAdmin() {
    Taro.navigateTo({
      url: 'index?page=6'
    })
  }

  deleteAdmin(id) {
    let temp = this.state.adminList[id]
    console.log(temp)
    let body = {
      adminId: this.state.adminInfo.adminId,
      sessionId: this.state.adminInfo.sessionId,
      store_id: this.state.storeInfo.store_id,
      adminStore_id: temp.adminStore_id,
      appId: wx.getAccountInfoSync().miniProgram.appId,
      token: (dayjs().unix() + 1000 ) * 2
    }
    let _this = this;
    test_delete_admin(body).then(function(res) {
      console.log(res.data)
      if (res.data.code == 1) {
        console.log('delete successed')
        _this.state.adminList.splice(id,1)
        _this.setState({
          adminList:_this.state.adminList
        })
      } else {
        console.log(res.data.data)
      }
    })
  }

  SaveNewAdminInfo() {
    let storeInfo = Taro.getStorageSync('store_info')
    let adminInfo = Taro.getStorageSync('admin_info')
    if ( this.state.newAdminPhone.length!==11){
      console.log('Phone number error')
    } else if ( this.state.newAdminPhone == adminInfo.phoneNumber) {
      console.log('Dont Allow Add Store Owner')
    } else if ( isNaN(this.state.newAdminPhone)) {
      console.log('Phone number is not number')
    }else {
      let body = {
        adminId: adminInfo.adminId,
        sessionId: adminInfo.sessionId,
        store_id: storeInfo.store_id,
        phone: this.state.newAdminPhone,
        appId: wx.getAccountInfoSync().miniProgram.appId,
        token: (dayjs().unix() + 1000 ) * 2
      }
      test_add_admin(body).then(function(res){
        if (res.data.code == 1){
          Taro.navigateBack()
        } else {
          console.log(res.data.data)
        }
      })
    }
  }

  onScrollToUpper() {}

  // or ??????????????????
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
      height: `400rpx;`
    }

    let stepsBar = [];
    let formContent = [];

    if (this.state.pageKind == "0") {
      stepsBar.push(
        <View style='height:70rpx;width:100%;background:#FEFFFF;border-radius:8px 8px 0px 0px;display:flex;align-items:flex-start;justify-content:center;padding-top:30rpx;'> 
          <View style='width:33%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;'>
            <View style='height:10rpx;width:10rpx;border-radius:50%;border: 1px solid #FCA62F;margin-bottom:10rpx;'></View>
            <text style='font-size:12px;'>????????????</text>
          </View>
          
          <View style='height:7.5rpx;width:28%;position:absolute;left:21%;border: 0px solid #A5A5A5;border-bottom-width:1px;'></View>

          <View style='width:33%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;'>
            <View style='height:10rpx;width:10rpx;border-radius:50%;border: 1px solid #A5A5A5;margin-bottom:10rpx;background:#A5A5A5;'></View>
            <text style='font-size:12px;'>??????????????????</text>
          </View>

          <View style='height:7.5rpx;width:28%;position:absolute;right:21%;border: 0px solid #A5A5A5;border-bottom-width:1px;'></View>

          <View style='width:33%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;'>
            <View style='height:10rpx;width:10rpx;border-radius:50%;border: 1px solid #A5A5A5;margin-bottom:10rpx;background:#A5A5A5;'></View>
            <text style='font-size:12px;'>????????????</text>
          </View>
        </View>
      )

      formContent.push(
        <View style='height:auto;width:100%;background:#FEFFFF;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;margin-top:30rpx;'>
          <View style='height:20rpx;'></View>
          <text style='font-size:20px;font-weight:530;margin-left:5%;'>????????????????????????</text>
          <text style='font-size:14px;color:#A5A5A5;margin-left:5%;margin-top:5rpx;'>??????????????????????????????????????????</text>
          <View style='height:75rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
            <AtInput
              name='value0'
              title='??????'
              type='text'
              placeholder='??????'
              value={this.state.adminStoreInfo.name}
              onChange={this.handleChange.bind(this, 'adminStoreInfo_name')}
              cursor={this.state.adminStoreInfo.name.length}
              className='name-input-css'
            />
          </View>

          <View style='height:75rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
            <AtInput
              name='value1'
              title='????????????'
              type='idcard'
              placeholder='??????'
              value={this.state.adminStoreInfo.idCard}
              onChange={this.handleChange.bind(this, 'adminStoreInfo_idCard')}
              cursor={this.state.adminStoreInfo.idCard.length}
              className='name-input-css'
            />
          </View>

          <View style='height:75rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
            <AtInput
              editable={false}
              name='value2'
              title='?????????'
              type='phone'
              placeholder='??????'
              value={this.state.adminStoreInfo.phone}
              onChange={this.handleChange.bind(this, 'adminStoreInfo_phone')}
              className='name-input-css'
            />
          </View>
          <View style='width:80%;height:20rpx;margin-left:10%;'></View>
        </View>
      )
      
      let reSendSMS = [];
      console.log(this.state.countDownNum)
      reSendSMS.push(
        <text style={{fontSize:`14px`,color:this.state.countDownNum <= 0? '#5394ff':'#A5A5A5',marginTop:`5rpx`,position:`absolute`,right:`60rpx`}} onClick={this.state.countDownNum <= 0?this.handleSendSMS.bind(this):this.handleEmpty}>
          {this.state.countDownNum <= 0? '???????????????':this.state.countDownNum+'s'}
        </text>
      )

      formContent.push(
        <View style='height:auto;width:100%;background:#FEFFFF;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;'>
          <View style='height:20rpx;'></View>
          {/*
          <text style='font-size:20px;font-weight:530;margin-left:5%;'>????????????</text>
          <View style='width:100%;'>
            <text style='font-size:14px;color:#A5A5A5;margin-left:5%;margin-top:5rpx;'>??????????????????</text>
            <text style='font-size:14px;color:#FCA62F;margin-top:5rpx;'>{this.state.adminStoreInfo.phone}</text>
            <text style='font-size:14px;color:#A5A5A5;margin-top:5rpx;'>????????????</text>
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
          */}

          <View style='width:80%;height:130rpx;margin-left:10%;'><AtButton type='primary' circle='true' className='confirm-button' onClick={this.handleNextStep.bind(this)}>?????????</AtButton></View>
        </View>
      )
      
    } else if (this.state.pageKind == "1"){
      
      stepsBar.push(
        <View style='height:70rpx;width:100%;background:#FEFFFF;border-radius:8px 8px 0px 0px;display:flex;align-items:flex-start;justify-content:center;padding-top:30rpx;'> 
          <View style='width:33%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;'>
            <View style='height:10rpx;width:10rpx;border-radius:50%;border: 1px solid #FCA62F;margin-bottom:10rpx;background:#FCA62F;'></View>
            <text style='font-size:12px;'>????????????</text>
          </View>
          
          <View style='height:7.5rpx;width:28%;position:absolute;left:21%;border: 0px solid #FCA62F;border-bottom-width:1px;'></View>

          <View style='width:33%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;'>
            <View style='height:10rpx;width:10rpx;border-radius:50%;border: 1px solid #FCA62F;margin-bottom:10rpx;background:#A5A5A500;'></View>
            <text style='font-size:12px;'>??????????????????</text>
          </View>

          <View style='height:7.5rpx;width:28%;position:absolute;right:21%;border: 0px solid #A5A5A5;border-bottom-width:1px;'></View>

          <View style='width:33%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;'>
            <View style='height:10rpx;width:10rpx;border-radius:50%;border: 1px solid #A5A5A5;margin-bottom:10rpx;background:#A5A5A500;'></View>
            <text style='font-size:12px;'>????????????</text>
          </View>
        </View>
      )

      formContent.push(
        <View style='height:auto;width:100%;background:#FEFFFF;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;margin-top:30rpx;'>
          <View style='height:20rpx;'></View>
          <text style='font-size:20px;font-weight:530;margin-left:5%;'>????????????</text>
          <View style='height:150rpx;width:90%;margin-left:5.5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
            <text style='font-size:15px;width:70%;'>????????????</text>
            <View style='height:100%;width:150rpx;'>
              <AtImagePicker
                length={1}
                files={this.state.imgFile}
                onChange={this.onImgChange.bind(this)}
                mode='scaleToFill'
                count={1}
                showAddBtn={this.state.imgUploadIcon}
              />
            </View>
          </View>

          <View style='height:75rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
            <text style='font-size:15px;width:150rpx;'>????????????</text>
            <AtInput
              name='value3'
              title=''
              type='text'
              placeholderStyle='font-size:13px;'
              placeholder='????????????????????????'
              value={this.state.storeInfo.store_name}
              onChange={this.handleChange.bind(this, 'storeInfo_store_name')}
              cursor={this.state.storeInfo.store_name.length}
              className='storeInfo-input-css'
              required
            />
          </View>

          <View style='height:75rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
            <text style='font-size:15px;width:150rpx;'>????????????</text>
            <AtInput
              editable={false}
              name='value4'
              title=''
              type='text'
              placeholderStyle='font-size:13px;'
              placeholder='????????????????????????'
              value={this.state.storeInfo.store_position}
              onChange={this.handleChange.bind(this, 'storeInfo_store_position')}
              cursor={this.state.storeInfo.store_position.length}
              className='storeInfo-input-css'
            />
            <image src={mapIcon} style='height:80rpx;width:80rpx;' onClick={this.handleSelectPos.bind(this)}></image>
          </View>

          <View style='height:75rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
            <text style='font-size:15px;width:150rpx;'>???????????????</text>
            <AtInput
              name='value5'
              title=''
              type='text'
              placeholderStyle='font-size:13px;'
              placeholder='??????????????????1???101???'
              value={this.state.storeInfo.store_address}
              onChange={this.handleChange.bind(this, 'storeInfo_store_address')}
              cursor={this.state.storeInfo.store_address.length}
              className='storeInfo-input-css'
              required
              adjustPosition
            />
          </View>

          <View style='height:75rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
            <text style='font-size:15px;width:150rpx;'>????????????1</text>
            <AtInput
              name='value6'
              title=''
              type='text'
              placeholderStyle='font-size:13px;'
              placeholder='????????????????????????????????????-???'
              value={this.state.storeInfo.store_tel1}
              onChange={this.handleChange.bind(this, 'storeInfo_store_tel1')}
              cursor={this.state.storeInfo.store_tel1.length}
              className='storeInfo-input-css'
              required
              adjustPosition
            />
          </View>

          <View style='height:75rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
            <text style='font-size:15px;width:150rpx;'>????????????2</text>
            <AtInput
              name='value7'
              title=''
              type='text'
              placeholderStyle='font-size:13px;'
              placeholder='????????????????????????????????????-???'
              value={this.state.storeInfo.store_tel2}
              onChange={this.handleChange.bind(this, 'storeInfo_store_tel2')}
              cursor={this.state.storeInfo.store_tel2.length}
              className='storeInfo-input-css'
              required
              adjustPosition
            />
          </View>


          <View style='width:80%;height:130rpx;margin-left:10%;'><AtButton type='primary' circle='true' className='confirm-button' onClick={this.handleNextStep.bind(this)}>?????????</AtButton></View>
        </View>
      )

    } else if (this.state.pageKind == "2") {
      formContent.push(
        <View style='height:250rpx;width:100%;background:#FEFFFF;border-radius:8px 8px 0px 0px;display:flex;flex-direction:column;align-items:center;justify-content:center;padding-top:100rpx;'>
          <image src={confirmIcon} style='height:200rpx;width:200rpx;'></image>
          <text style='font-size:18px;font-weight:520;'>????????????????????????</text>
        </View>
      )

      formContent.push(
        <View style='height:70rpx;width:100%;background:#FEFFFF;border-radius:8px 8px 0px 0px;display:flex;align-items:flex-start;justify-content:center;padding-top:50rpx;'> 
          <View style='width:33%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;'>
            <View style='height:10rpx;width:10rpx;border-radius:50%;border: 1px solid #FCA62F;margin-bottom:10rpx;background:#FCA62F;'></View>
            <text style='font-size:12px;'>????????????</text>
          </View>
          
          <View style='height:7.5rpx;width:28%;position:absolute;left:21%;border: 0px solid #FCA62F;border-bottom-width:1px;'></View>

          <View style='width:33%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;'>
            <View style='height:10rpx;width:10rpx;border-radius:50%;border: 1px solid #FCA62F;margin-bottom:10rpx;background:#A5A5A500;'></View>
            <text style='font-size:12px;'>??????????????????</text>
          </View>

          <View style='height:7.5rpx;width:28%;position:absolute;right:21%;border: 0px solid #A5A5A5;border-bottom-width:1px;'></View>

          <View style='width:33%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;'>
            <View style='height:10rpx;width:10rpx;border-radius:50%;border: 1px solid #A5A5A5;margin-bottom:10rpx;background:#A5A5A500;'></View>
            <text style='font-size:12px;'>????????????</text>
          </View>
        </View>
      )

      formContent.push(
        <View style='height:auto;width:100%;background:#FEFFFF;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;padding-top:30rpx;padding-bottom:30rpx;'>
          <View style='width:80%;height:130rpx;margin-left:10%;'><AtButton type='primary' circle='true' className='confirm-button' disabled>????????????</AtButton></View>
          <View style='width:80%;height:70rpx;margin-left:10%;'><AtButton type='secondary' circle='true' className='try-button' onClick={this.handleShowStore.bind(this)}>????????????????????????</AtButton></View>
        </View>
      )
    } else if (this.state.pageKind == "3") {
      if (this.state.infoLoading == false){
        formContent.push(
          <View style='height:auto;width:100%;background:#FEFFFF;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;margin-top:30rpx;'>
            <View style='height:20rpx;'></View>
            <text style='font-size:20px;font-weight:530;margin-left:5%;'>????????????</text>
            <View style='height:150rpx;width:90%;margin-left:5.5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
              <text style='font-size:15px;width:70%;'>????????????</text>
              <View style='height:100%;width:150rpx;'>
                <AtImagePicker
                  length={1}
                  files={this.state.imgFile}
                  onChange={this.onImgChange.bind(this)}
                  mode='scaleToFill'
                  count={1}
                  showAddBtn={this.state.imgUploadIcon}
                />
              </View>
            </View>
  
            <View style='height:75rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
              <text style='font-size:15px;width:150rpx;'>????????????</text>
              <AtInput
                name='play_name'
                title=''
                type='text'
                placeholderStyle='font-size:13px;'
                placeholder='?????????????????????'
                value={this.state.playInfo.play_name}
                onChange={this.handleChange.bind(this, 'playInfo_play_name')}
                className='storeInfo-input-css'
                required
              />
            </View>

            <View style='height:75rpx;width:90%;margin-left:5%;margin-top:10rpx;display:flex;align-items:center;justify-content:flex-start;'>
              <text style='font-size:15px;width:150rpx;'>????????????</text>
              <AtInput
                name='play_headcount'
                title=''
                type='number'
                placeholderStyle='font-size:13px;'
                placeholder='????????????????????????'
                value={this.state.playInfo.play_headcount}
                onChange={this.handleChange.bind(this, 'playInfo_play_headcount')}
                className='storeInfo-input-css'
                required
              />
            </View>

            <View style='height:30rpx;width:90%;margin-left:5%;display:flex;align-items:center;justify-content:flex-start;'>
              <text style='font-size:13px;width:140rpx;margin-left:10rpx;'>????????????</text>
              <AtInput
                name='play_male_num'
                title=''
                type='number'
                placeholderStyle='font-size:11px;'
                placeholder='??????????????????'
                value={this.state.playInfo.play_male_num==999? '':this.state.playInfo.play_male_num}
                onChange={this.handleChange.bind(this, 'playInfo_play_male_num')}
                className='playInfo-num-input-css'
                required
              />
            </View>

            <View style='height:30rpx;width:90%;margin-left:5%;margin-top:5rpx;padding-bottom:20rpx;display:flex;align-items:center;justify-content:flex-start;border: 0px solid #97979755;border-bottom-width:1.5px;'>
              <text style='font-size:13px;width:140rpx;margin-left:10rpx;'>????????????</text>
              <AtInput
                name='play_female_num'
                title=''
                type='number'
                placeholderStyle='font-size:11px;'
                placeholder='??????????????????'
                value={this.state.playInfo.play_female_num==999? '':this.state.playInfo.play_female_num}
                onChange={this.handleChange.bind(this, 'playInfo_play_female_num')}
                className='playInfo-num-input-css'
                required
              />
            </View>

            <View style='height:75rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
              <text style='font-size:15px;width:150rpx;'>????????????</text>
              <AtInput
                name='play_price'
                title=''
                type='number'
                placeholderStyle='font-size:13px;'
                placeholder='?????????????????????'
                value={this.state.playPrice}
                onChange={this.handleChange.bind(this, 'playPrice')}
                className='storeInfo-input-css'
                required
              />
            </View>

            <View style='height:90rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
              <View style='width:400rpx;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;'>
                <text style='font-size:15px;width:400rpx;'>??????????????????</text>
                <text style='font-size:11px;width:400rpx;color:#777777;'>?????????????????????"???????????????"??????</text>
              </View>
              <Switch 
                id='antigender' 
                className='switch-info' 
                color='#FCA62FFF' 
                checked={this.state.playInfo.play_antigender} 
                onChange={this.handleChange.bind(this, 'playInfo_play_antigender')} 
              />
            </View>

            <View style='height:300rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;'>
              <text style='font-size:15px;width:150rpx;margin-bottom:10rpx;'>????????????</text>
              <AtTextarea
                count={false}
                value={this.state.playInfo.play_intro.split('/n').join('\n')}
                onChange={this.handleChange.bind(this, 'playInfo_play_intro')}
                maxLength={1000}
                placeholder='?????????????????????'
                className='playIntro-css'
              />
            </View>
  
            
  
  
            <View style='width:80%;height:130rpx;margin-left:10%;'><AtButton type='primary' circle='true' className='confirm-button' onClick={this.handleUploadPlay.bind(this)}>????????????</AtButton></View>
          </View>
        )
      } else {
        formContent.push(
          <View style={{height:`100vh`, display:`flex`, flexDirection:`column`,alignItems:`center`, justifyContent:`flex-start`}}>
            <image src={bk} style='width:100vw;height:100vh;position:absolute;size:100%;z-index:-1;'></image>
            <View><AtActivityIndicator mode='center' size={64} content='Loading...' className='load'></AtActivityIndicator></View>
          </View>
        )
      }
    } else if (this.state.pageKind == "4") {
      if (this.state.infoLoading == false){
        formContent.push(
          <View style='height:auto;width:100%;background:#FEFFFF;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;margin-top:30rpx;'>
            <View style='height:20rpx;'></View>
            <View style='width:100%;'>
              <text style='font-size:20px;font-weight:530;margin-left:5%;'>????????????</text>
              <text style='font-size:13px;font-weight:530;margin-left:5%;color:#FCA62F;text-decoration:underline;margin-left:350rpx;' onClick={this.handleModifyStoreInfo.bind(this)}>??????</text>
            </View>
            <View style='height:150rpx;width:90%;margin-left:5.5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
              <text style='font-size:15px;width:70%;'>????????????</text>
              <image style='height:120rpx;width:120rpx;border-radius:10rpx;' src={this.state.imgFile[0].url }></image>
            </View>

            <View style='height:75rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
              <text style='font-size:15px;width:150rpx;'>????????????</text>
              <AtInput
                editable={false}
                name='value3'
                title=''
                type='text'
                placeholderStyle='font-size:13px;'
                placeholder='????????????????????????'
                value={this.state.storeInfo.store_name}
                onChange={this.handleChange.bind(this, 'storeInfo_store_name')}
                className='storeInfo-input-css'
                required
              />
            </View>

            <View style='height:75rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
              <text style='font-size:15px;width:150rpx;'>????????????</text>
              <AtInput
                editable={false}
                name='value4'
                title=''
                type='text'
                placeholderStyle='font-size:13px;'
                placeholder='????????????????????????'
                value={this.state.storeInfo.store_position}
                onChange={this.handleChange.bind(this, 'storeInfo_store_position')}
                className='storeInfo-input-css'
              />
              <image src={mapIcon} style='height:80rpx;width:80rpx;' ></image>
            </View>

            <View style='height:75rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
              <text style='font-size:15px;width:150rpx;'>???????????????</text>
              <AtInput
                editable={false}
                name='value5'
                title=''
                type='text'
                placeholderStyle='font-size:13px;'
                placeholder='??????????????????1???101???'
                value={this.state.storeInfo.store_address}
                onChange={this.handleChange.bind(this, 'storeInfo_store_address')}
                className='storeInfo-input-css'
                required
                adjustPosition
              />
            </View>

            <View style='height:75rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
              <text style='font-size:15px;width:150rpx;'>????????????1</text>
              <AtInput
                editable={false}
                name='value6'
                title=''
                type='text'
                placeholderStyle='font-size:13px;'
                placeholder='????????????????????????????????????-???'
                value={this.state.storeInfo.store_tel1}
                onChange={this.handleChange.bind(this, 'storeInfo_store_tel1')}
                cursor={this.state.storeInfo.store_tel1.length}
                className='storeInfo-input-css'
                required
                adjustPosition
              />
            </View>

            <View style='height:75rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:0px;display:flex;align-items:center;justify-content:flex-start;'>
              <text style='font-size:15px;width:150rpx;'>????????????2</text>
              <AtInput
                editable={false}
                name='value7'
                title=''
                type='text'
                placeholderStyle='font-size:13px;'
                placeholder='????????????????????????????????????-???'
                value={this.state.storeInfo.store_tel2}
                onChange={this.handleChange.bind(this, 'storeInfo_store_tel2')}
                cursor={this.state.storeInfo.store_tel2.length}
                className='storeInfo-input-css'
                required
                adjustPosition
              />
            </View>
          </View>
        )

        let adminContent = [];

        this.state.adminList.map((item, itemIdx)=> {
          console.log(this.state.permission)
          if (item.adminStore_permission == 1){
            adminContent.unshift(
              <View style='height:90rpx;width:90%;margin-left:5%;border: 0px solid #97979755;border-bottom-width:0px;display:flex;align-items:flex-start;;justify-content:flex-start;'>
                <text style='font-size:13px;width:150rpx;font-weight:550;'>??????</text>
                <View style='height:90rpx;width:400rpx;margin-left:10rpx;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;'>
                  <text style='font-size:13px;font-weight:530;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;'>{item.admin_nickName}</text>
                  <text style='font-size:11px;color:#797979;margin-top:10rpx'>????????? {item.adminStore_phone}</text>
                </View>
              </View>
            )
          } else {
            adminContent.push(
              <View style='height:90rpx;width:90%;margin-left:5%;padding-top:10rpx;border: 0px solid #97979755;border-top-width:1.5px;display:flex;align-items:flex-start;;justify-content:flex-start;'>
                <View style='height:90rpx;width:150rpx;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;'>
                  <text style='font-size:13px;font-weight:550;'>?????????</text>
                  <View style={{visibility:`${item.adminStore_verify==1? `hidden`:`visible`}`}}>
                    <AtIcon value='alert-circle' size='12' color='#F00'></AtIcon>
                    <text style='font-size:10px;color:#797979;'>???????????????</text>
                  </View>
                </View>
                
                <View style='height:90rpx;width:400rpx;margin-left:10rpx;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;'>
                  <text style='font-size:13px;font-weight:530;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;'>{item.admin_nickName}</text>
                  <text style='font-size:11px;color:#797979;margin-top:10rpx'>????????? {item.adminStore_phone}</text>
                </View>

                <image style={this.state.permission==1? 'height:40rpx;width:40rpx;margin-top:20rpx;':'visibility:hidden;height:50rpx;width:50rpx;margin-top:20rpx;'} src={editorIcon} onClick={this.deleteAdmin.bind(this, itemIdx)}></image>
              </View>
            )
          }
        })

        formContent.push(
          <View style='height:auto;width:100%;background:#FEFFFF;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;margin-top:30rpx;'>
            <View style='height:20rpx;'></View>
            <View style='width:100%;margin-bottom:50rpx;'>
              <text style='font-size:20px;font-weight:530;margin-left:5%;'>???????????????</text>
              <text 
                style={this.state.permission==1? 'font-size:13px;font-weight:530;margin-left:5%;color:#FCA62F;text-decoration:underline;margin-left:250rpx;':'visibility:hidden;'}
                onClick={this.addAdmin.bind(this)}
              >???????????????</text>
            </View>
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
              {adminContent}
            </ScrollView>
          </View>
        )
      } else {
        formContent.push(
          <View style={{height:`100vh`, display:`flex`, flexDirection:`column`,alignItems:`center`, justifyContent:`flex-start`}}>
            <image src={bk} style='width:100vw;height:100vh;position:absolute;size:100%;z-index:-1;'></image>
            <View><AtActivityIndicator mode='center' size={64} content='Loading...' className='load'></AtActivityIndicator></View>
          </View>
        )
      }
    } else if (this.state.pageKind == "5") {
      // ??????????????????
      formContent.push(
        <View style='height:auto;width:100%;background:#FEFFFF;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;margin-top:30rpx;'>
          <View style='height:20rpx;'></View>
          <text style='font-size:20px;font-weight:530;margin-left:5%;'>????????????</text>
          <View style='height:150rpx;width:90%;margin-left:5.5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
            <text style='font-size:15px;width:70%;'>????????????</text>
            <View style='height:100%;width:150rpx;'>
              <AtImagePicker
                length={1}
                files={this.state.imgFile}
                onChange={this.onImgChange.bind(this)}
                mode='scaleToFill'
                count={1}
                showAddBtn={this.state.imgUploadIcon}
              />
            </View>
          </View>

          <View style='height:75rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
            <text style='font-size:15px;width:150rpx;'>????????????</text>
            <AtInput
              name='value3'
              title=''
              type='text'
              placeholderStyle='font-size:13px;'
              placeholder='????????????????????????'
              value={this.state.storeInfo.store_name}
              onChange={this.handleChange.bind(this, 'storeInfo_store_name')}
              cursor={this.state.storeInfo.store_name.length}
              className='storeInfo-input-css'
              required
            />
          </View>

          <View style='height:75rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
            <text style='font-size:15px;width:150rpx;'>????????????</text>
            <AtInput
              editable={false}
              name='value4'
              title=''
              type='text'
              placeholderStyle='font-size:13px;'
              placeholder='????????????????????????'
              value={this.state.storeInfo.store_position}
              onChange={this.handleChange.bind(this, 'storeInfo_store_position')}
              className='storeInfo-input-css'
            />
            <image src={mapIcon} style='height:80rpx;width:80rpx;' onClick={this.handleSelectPos.bind(this)}></image>
          </View>

          <View style='height:75rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
            <text style='font-size:15px;width:150rpx;'>???????????????</text>
            <AtInput
              name='value5'
              title=''
              type='text'
              placeholderStyle='font-size:13px;'
              placeholder='??????????????????1???101???'
              value={this.state.storeInfo.store_address}
              onChange={this.handleChange.bind(this, 'storeInfo_store_address')}
              cursor={this.state.storeInfo.store_address.length}
              className='storeInfo-input-css'
              required
              adjustPosition
            />
          </View>

          <View style='height:75rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
            <text style='font-size:15px;width:150rpx;'>????????????1</text>
            <AtInput
              name='value6'
              title=''
              type='text'
              placeholderStyle='font-size:13px;'
              placeholder='????????????????????????????????????-???'
              value={this.state.storeInfo.store_tel1}
              onChange={this.handleChange.bind(this, 'storeInfo_store_tel1')}
              cursor={this.state.storeInfo.store_tel1.length}
              className='storeInfo-input-css'
              required
              adjustPosition
            />
          </View>

          <View style='height:75rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
            <text style='font-size:15px;width:150rpx;'>????????????2</text>
            <AtInput
              name='value7'
              title=''
              type='text'
              placeholderStyle='font-size:13px;'
              placeholder='????????????????????????????????????-???'
              value={this.state.storeInfo.store_tel2}
              onChange={this.handleChange.bind(this, 'storeInfo_store_tel2')}
              cursor={this.state.storeInfo.store_tel2.length}
              className='storeInfo-input-css'
              required
              adjustPosition
            />
          </View>


          <View style='width:80%;height:130rpx;margin-left:10%;'><AtButton type='primary' circle='true' className='confirm-button' onClick={this.SaveStoreInfo.bind(this)}>??????????????????</AtButton></View>
        </View>
      )
    } else if (this.state.pageKind == "6") {
      // ????????????????????????
      formContent.push(
        <View style='height:auto;width:100%;background:#FEFFFF;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;margin-top:30rpx;'>
          <View style='height:20rpx;'></View>
          <text style='font-size:20px;font-weight:530;margin-left:5%;'>???????????????</text>
          <View style='height:75rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
            <text style='font-size:15px;width:150rpx;'>?????????</text>
            <AtInput
              title=''
              type='text'
              placeholderStyle='font-size:13px;'
              placeholder='??????????????????????????????????????????'
              value={this.state.newAdminPhone}
              onChange={this.handleChange.bind(this, 'newAdminPhone')}
              className='storeInfo-input-css'
              required
            />
          </View>
          <View style='width:80%;height:130rpx;margin-left:10%;'><AtButton type='primary' circle='true' className='confirm-button' onClick={this.SaveNewAdminInfo.bind(this)}>???????????????</AtButton></View>
        </View>
      )
    } 

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

            {stepsBar}

            {formContent}

          </View>
        </View>
      </View>
    )
  }
}
