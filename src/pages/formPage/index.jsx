import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Input, Switch} from '@tarojs/components'
import { AtButton, AtNavBar, AtInput, AtImagePicker, AtActivityIndicator, AtTextarea, AtIcon } from 'taro-ui'
import './index.scss'

import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

import SparkMD5 from 'spark-md5'

import CryptoJS from 'crypto-js'

import bk from '../../img/image-13.png'
import mapIcon from '../../img/mapIcon.svg'
import confirmIcon from '../../img/confirmIcon.svg'
import editorIcon from '../../img/editorIcon.svg'

import {test_send_sms, test_upload_play, test_get_storeAdmin, test_save_storeInfo} from '../../service/api'
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
      // 姓名 身份证号 手机号
      this.state.adminInfo = Taro.getStorageSync('admin_info');
      let tempAdminStoreInfo = Taro.getStorageSync('adminStoreInfo');
      if(tempAdminStoreInfo){
        this.state.adminStoreInfo = tempAdminStoreInfo
      }
      console.log('phone Numbers')
      this.setState({
        pageKind:pageKind
      })
    } else if (pageKind == "1") {
      // 店铺信息
      this.setState({
        pageKind:pageKind
      })
    } else if (pageKind == "2") {
      // 注册完成页
      this.setState({
        pageKind:pageKind
      })
    } else if (pageKind == "3") {
      // 编辑剧本
      let playId = pages_option.play_id;
      this.state.playInfo = Taro.getStorageSync(`play_id_${playId}`);
      this.setState({
        pageKind:pageKind,
        storeInfo: Taro.getStorageSync('store_info'),
        adminInfo: Taro.getStorageSync('admin_info'),
        imgFile: [{url: base+this.state.playInfo.play_img}],
        imgUploadIcon: false,
        infoLoading: false
      })
    } else if (pageKind == "4") {
      // 店铺管理
      console.log("店铺管理页面")
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
      // 编辑店铺信息页面
      console.log("编辑店铺信息页面")
      this.state.storeInfo = Taro.getStorageSync(`store_info`);
      this.setState({
        pageKind:pageKind,
        imgFile: [{url: base+this.state.storeInfo.store_logo}],
        adminInfo:Taro.getStorageSync(`admin_info`),
        permission:Taro.getStorageSync(`permission`),
        imgUploadIcon: false
      })
    } else if (pageKind == "6") {
      // 添加管理员页面
    } else if (pageKind == "7") {
      // 编辑管理员信息页面
    }
  }

  componentWillUnmount () {
    clearInterval(this.timer);
  }

  componentDidShow () { 
    if (this.state.useLocation == true) {
      console.log('use location')
      const location = chooseLocation.getLocation(); // 如果点击确认选点按钮，则返回选点结果对象，否则返回null
      if (location) {
        this.setState({
          storeInfo: {
            store_name: this.state.storeInfo.store_name,
            store_position: location.name,
            store_address: location.address,
            store_longitude: location.longitude,
            store_latitude: location.latitude,
            store_tel1: this.state.storeInfo.store_tel1,
            store_tel2: this.state.storeInfo.store_tel2
          },
          useLocation: false
        })
      }
    }
    

    if (this.state.pageKind & (this.state.pageKind  == "4")) {
      // 店铺管理
      console.log("店铺管理页面")
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
    }
  return value
  }

  handleNextStep () { 
    if (this.state.pageKind == "0"){
      var input_code = this.state.validate_code[0]*100000+this.state.validate_code[1]*10000+this.state.validate_code[2]*1000+this.state.validate_code[3]*100+this.state.validate_code[4]*10+this.state.validate_code[5]*1
      console.log(this.state.validate_code)
      console.log(input_code)
      console.log(this.state.server_validate_code)
      if (this.state.adminStoreInfo.name.length == 0) {
        console.log('name length is 0')
      } else if (this.state.adminStoreInfo.idCard.length !== 18) {
        console.log('id card length is not 18')
      } else if (this.state.adminStoreInfo.phone.length !== 11) {
        console.log('phone num length is not 11')
      } else if (this.state.server_validate_code != input_code) {
        console.log('valid code is wrong')
      } else {
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
        } else if (this.state.storeInfo.store_latitude == 0 | this.state.storeInfo.store_longitude == 0) {
          console.log("Store position did not set")
        } else if (this.state.storeInfo.store_address.length == 0) {
          console.log("Store position did not set")
        } else if (this.state.storeInfo.store_position.length == 0) {
          console.log("Store address did not set")
        } else if (this.state.storeInfo.store_tel1.length <8) {
          console.log("telephone number length is wrong")
        } else {
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
            url: base+'/test/uploadImg', //仅为示例，非真实的接口地址
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
        url: base+'/test/uploadImg', //仅为示例，非真实的接口地址
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
                  const category = '生活服务,娱乐休闲';
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
              const category = '生活服务,娱乐休闲';
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
    
    /*
    var spark = new SparkMD5()
    var ClientImgMD5, ServerImgMD5;
    var imgFile = wx.getFileSystemManager().readFileSync(this.state.imgFile[0].url, 'binary');
    spark.appendBinary(imgFile);
    ClientImgMD5 = spark.end();

    spark = new SparkMD5()
    imgFile = wx.getFileSystemManager().readFileSync(base+this.state.playInfo.play_img, 'binary');
    spark.appendBinary(imgFile);
    ServerImgMD5 = spark.end();
    */
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
          }
        })
      }
    } else {
      console.log('the imgs are not same')
    }
    
    /*
    Taro.uploadFile({
      url: base+'/test/uploadPlay', //仅为示例，非真实的接口地址
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
      } else if (this.state.storeInfo.store_latitude == 0 | this.state.storeInfo.store_longitude == 0) {
        console.log("Store position did not set")
      } else if (this.state.storeInfo.store_address.length == 0) {
        console.log("Store position did not set")
      } else if (this.state.storeInfo.store_position.length == 0) {
        console.log("Store address did not set")
      } else if (this.state.storeInfo.store_tel1.length <8) {
        console.log("telephone number length is wrong")
      } else {
        var spark = new SparkMD5()
        var imgMD5;
        var imgFile = wx.getFileSystemManager().readFileSync(this.state.imgFile[0].file.path, 'binary');
        spark.appendBinary(imgFile);
        imgMD5 = spark.end();
        
        let _this = this;
        Taro.uploadFile({
          url: base+'/test/saveStoreWithImg', //仅为示例，非真实的接口地址
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
            Taro.navigateBack()
          }
        })
      }
    } else {
      console.log("the img is same")
      if (this.state.storeInfo.store_name.length == 0) {
        console.log("Store name length is 0")
      } else if (this.state.storeInfo.store_latitude == 0 | this.state.storeInfo.store_longitude == 0) {
        console.log("Store position did not set")
      } else if (this.state.storeInfo.store_address.length == 0) {
        console.log("Store position did not set")
      } else if (this.state.storeInfo.store_position.length == 0) {
        console.log("Store address did not set")
      } else if (this.state.storeInfo.store_tel1.length <8) {
        console.log("telephone number length is wrong")
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
          Taro.navigateBack()
        })
      }
    }
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

    let stepsBar = [];
    let formContent = [];

    if (this.state.pageKind == "0") {
      stepsBar.push(
        <View style='height:70rpx;width:100%;background:#FEFFFF;border-radius:8px 8px 0px 0px;display:flex;align-items:flex-start;justify-content:center;padding-top:30rpx;'> 
          <View style='width:33%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;'>
            <View style='height:10rpx;width:10rpx;border-radius:50%;border: 1px solid #FCA62F;margin-bottom:10rpx;'></View>
            <text style='font-size:12px;'>实名注册</text>
          </View>
          
          <View style='height:7.5rpx;width:28%;position:absolute;left:21%;border: 0px solid #A5A5A5;border-bottom-width:1px;'></View>

          <View style='width:33%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;'>
            <View style='height:10rpx;width:10rpx;border-radius:50%;border: 1px solid #A5A5A5;margin-bottom:10rpx;background:#A5A5A5;'></View>
            <text style='font-size:12px;'>补充店铺信息</text>
          </View>

          <View style='height:7.5rpx;width:28%;position:absolute;right:21%;border: 0px solid #A5A5A5;border-bottom-width:1px;'></View>

          <View style='width:33%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;'>
            <View style='height:10rpx;width:10rpx;border-radius:50%;border: 1px solid #A5A5A5;margin-bottom:10rpx;background:#A5A5A5;'></View>
            <text style='font-size:12px;'>认证店铺</text>
          </View>
        </View>
      )

      formContent.push(
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
              value={this.state.adminStoreInfo.name}
              onChange={this.handleChange.bind(this, 'adminStoreInfo_name')}
              className='name-input-css'
            />
          </View>

          <View style='height:75rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
            <AtInput
              name='value1'
              title='身份证号'
              type='idcard'
              placeholder='修改'
              value={this.state.adminStoreInfo.idCard}
              onChange={this.handleChange.bind(this, 'adminStoreInfo_idCard')}
              className='name-input-css'
            />
          </View>

          <View style='height:75rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
            <AtInput
              name='value2'
              title='手机号'
              type='phone'
              placeholder='修改'
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
          {this.state.countDownNum <= 0? '发送验证码':this.state.countDownNum+'s'}
        </text>
      )

      formContent.push(
        <View style='height:auto;width:100%;background:#FEFFFF;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;margin-top:30rpx;'>
          <View style='height:20rpx;'></View>
          <text style='font-size:20px;font-weight:530;margin-left:5%;'>短信验证</text>
          <View style='width:100%;'>
            <text style='font-size:14px;color:#A5A5A5;margin-left:5%;margin-top:5rpx;'>验证码发送至</text>
            <text style='font-size:14px;color:#FCA62F;margin-top:5rpx;'>{this.state.adminStoreInfo.phone}</text>
            <text style='font-size:14px;color:#A5A5A5;margin-top:5rpx;'>，请查收</text>
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

          <View style='width:80%;height:130rpx;margin-left:10%;'><AtButton type='primary' circle='true' className='confirm-button' onClick={this.handleNextStep.bind(this)}>下一步</AtButton></View>
        </View>
      )
    } else if (this.state.pageKind == "1"){
      
      stepsBar.push(
        <View style='height:70rpx;width:100%;background:#FEFFFF;border-radius:8px 8px 0px 0px;display:flex;align-items:flex-start;justify-content:center;padding-top:30rpx;'> 
          <View style='width:33%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;'>
            <View style='height:10rpx;width:10rpx;border-radius:50%;border: 1px solid #FCA62F;margin-bottom:10rpx;background:#FCA62F;'></View>
            <text style='font-size:12px;'>实名注册</text>
          </View>
          
          <View style='height:7.5rpx;width:28%;position:absolute;left:21%;border: 0px solid #FCA62F;border-bottom-width:1px;'></View>

          <View style='width:33%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;'>
            <View style='height:10rpx;width:10rpx;border-radius:50%;border: 1px solid #FCA62F;margin-bottom:10rpx;background:#A5A5A500;'></View>
            <text style='font-size:12px;'>补充店铺信息</text>
          </View>

          <View style='height:7.5rpx;width:28%;position:absolute;right:21%;border: 0px solid #A5A5A5;border-bottom-width:1px;'></View>

          <View style='width:33%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;'>
            <View style='height:10rpx;width:10rpx;border-radius:50%;border: 1px solid #A5A5A5;margin-bottom:10rpx;background:#A5A5A500;'></View>
            <text style='font-size:12px;'>认证店铺</text>
          </View>
        </View>
      )

      formContent.push(
        <View style='height:auto;width:100%;background:#FEFFFF;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;margin-top:30rpx;'>
          <View style='height:20rpx;'></View>
          <text style='font-size:20px;font-weight:530;margin-left:5%;'>店铺信息</text>
          <View style='height:150rpx;width:90%;margin-left:5.5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
            <text style='font-size:15px;width:70%;'>店铺头像</text>
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
            <text style='font-size:15px;width:150rpx;'>店铺名称</text>
            <AtInput
              name='value3'
              title=''
              type='text'
              placeholderStyle='font-size:13px;'
              placeholder='需与门店名称一致'
              value={this.state.storeInfo.store_name}
              onChange={this.handleChange.bind(this, 'storeInfo_store_name')}
              className='storeInfo-input-css'
              required
            />
          </View>

          <View style='height:75rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
            <text style='font-size:15px;width:150rpx;'>店铺地区</text>
            <AtInput
              editable={false}
              name='value4'
              title=''
              type='text'
              placeholderStyle='font-size:13px;'
              placeholder='点击图标选择地址'
              value={this.state.storeInfo.store_position}
              onChange={this.handleChange.bind(this, 'storeInfo_store_position')}
              className='storeInfo-input-css'
            />
            <image src={mapIcon} style='height:80rpx;width:80rpx;' onClick={this.handleSelectPos.bind(this)}></image>
          </View>

          <View style='height:75rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
            <text style='font-size:15px;width:150rpx;'>详细门牌号</text>
            <AtInput
              name='value5'
              title=''
              type='text'
              placeholderStyle='font-size:13px;'
              placeholder='详细地址，例1层101室'
              value={this.state.storeInfo.store_address}
              onChange={this.handleChange.bind(this, 'storeInfo_store_address')}
              className='storeInfo-input-css'
              required
              adjustPosition
            />
          </View>

          <View style='height:75rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
            <text style='font-size:15px;width:150rpx;'>客服电话1</text>
            <AtInput
              name='value6'
              title=''
              type='phone'
              placeholderStyle='font-size:13px;'
              placeholder='如有区号，请在区号后加“-”'
              value={this.state.storeInfo.store_tel1}
              onChange={this.handleChange.bind(this, 'storeInfo_store_tel1')}
              className='storeInfo-input-css'
              required
              adjustPosition
            />
          </View>

          <View style='height:75rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
            <text style='font-size:15px;width:150rpx;'>客服电话2</text>
            <AtInput
              name='value7'
              title=''
              type='phone'
              placeholderStyle='font-size:13px;'
              placeholder='如有区号，请在区号后加“-”'
              value={this.state.storeInfo.store_tel2}
              onChange={this.handleChange.bind(this, 'storeInfo_store_tel2')}
              className='storeInfo-input-css'
              required
              adjustPosition
            />
          </View>


          <View style='width:80%;height:130rpx;margin-left:10%;'><AtButton type='primary' circle='true' className='confirm-button' onClick={this.handleNextStep.bind(this)}>下一步</AtButton></View>
        </View>
      )

    } else if (this.state.pageKind == "2") {
      formContent.push(
        <View style='height:250rpx;width:100%;background:#FEFFFF;border-radius:8px 8px 0px 0px;display:flex;flex-direction:column;align-items:center;justify-content:center;padding-top:100rpx;'>
          <image src={confirmIcon} style='height:200rpx;width:200rpx;'></image>
          <text style='font-size:18px;font-weight:520;'>您已完成商家注册</text>
        </View>
      )

      formContent.push(
        <View style='height:70rpx;width:100%;background:#FEFFFF;border-radius:8px 8px 0px 0px;display:flex;align-items:flex-start;justify-content:center;padding-top:50rpx;'> 
          <View style='width:33%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;'>
            <View style='height:10rpx;width:10rpx;border-radius:50%;border: 1px solid #FCA62F;margin-bottom:10rpx;background:#FCA62F;'></View>
            <text style='font-size:12px;'>实名注册</text>
          </View>
          
          <View style='height:7.5rpx;width:28%;position:absolute;left:21%;border: 0px solid #FCA62F;border-bottom-width:1px;'></View>

          <View style='width:33%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;'>
            <View style='height:10rpx;width:10rpx;border-radius:50%;border: 1px solid #FCA62F;margin-bottom:10rpx;background:#A5A5A500;'></View>
            <text style='font-size:12px;'>补充店铺信息</text>
          </View>

          <View style='height:7.5rpx;width:28%;position:absolute;right:21%;border: 0px solid #A5A5A5;border-bottom-width:1px;'></View>

          <View style='width:33%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;'>
            <View style='height:10rpx;width:10rpx;border-radius:50%;border: 1px solid #A5A5A5;margin-bottom:10rpx;background:#A5A5A500;'></View>
            <text style='font-size:12px;'>认证店铺</text>
          </View>
        </View>
      )

      formContent.push(
        <View style='height:auto;width:100%;background:#FEFFFF;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;padding-top:30rpx;padding-bottom:30rpx;'>
          <View style='width:80%;height:130rpx;margin-left:10%;'><AtButton type='primary' circle='true' className='confirm-button' disabled>继续认证</AtButton></View>
          <View style='width:80%;height:70rpx;margin-left:10%;'><AtButton type='secondary' circle='true' className='try-button' onClick={this.handleShowStore.bind(this)}>先体验，稍后认证</AtButton></View>
        </View>
      )
    } else if (this.state.pageKind == "3") {
      if (this.state.infoLoading == false){
        formContent.push(
          <View style='height:auto;width:100%;background:#FEFFFF;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;margin-top:30rpx;'>
            <View style='height:20rpx;'></View>
            <text style='font-size:20px;font-weight:530;margin-left:5%;'>剧本信息</text>
            <View style='height:150rpx;width:90%;margin-left:5.5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
              <text style='font-size:15px;width:70%;'>剧本封面</text>
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
              <text style='font-size:15px;width:150rpx;'>剧本名称</text>
              <AtInput
                name='play_name'
                title=''
                type='text'
                placeholderStyle='font-size:13px;'
                placeholder='请填写剧本名称'
                value={this.state.playInfo.play_name}
                onChange={this.handleChange.bind(this, 'playInfo_play_name')}
                className='storeInfo-input-css'
                required
              />
            </View>

            <View style='height:75rpx;width:90%;margin-left:5%;margin-top:10rpx;display:flex;align-items:center;justify-content:flex-start;'>
              <text style='font-size:15px;width:150rpx;'>剧本人数</text>
              <AtInput
                name='play_headcount'
                title=''
                type='number'
                placeholderStyle='font-size:13px;'
                placeholder='请输入剧本总人数'
                value={this.state.playInfo.play_headcount}
                onChange={this.handleChange.bind(this, 'playInfo_play_headcount')}
                className='storeInfo-input-css'
                required
              />
            </View>

            <View style='height:30rpx;width:90%;margin-left:5%;display:flex;align-items:center;justify-content:flex-start;'>
              <text style='font-size:13px;width:140rpx;margin-left:10rpx;'>男性角色</text>
              <AtInput
                name='play_male_num'
                title=''
                type='number'
                placeholderStyle='font-size:11px;'
                placeholder='男性角色人数'
                value={this.state.playInfo.play_male_num}
                onChange={this.handleChange.bind(this, 'playInfo_play_male_num')}
                className='playInfo-num-input-css'
                required
              />
            </View>

            <View style='height:30rpx;width:90%;margin-left:5%;margin-top:5rpx;padding-bottom:20rpx;display:flex;align-items:center;justify-content:flex-start;border: 0px solid #97979755;border-bottom-width:1.5px;'>
              <text style='font-size:13px;width:140rpx;margin-left:10rpx;'>女性角色</text>
              <AtInput
                name='play_female_num'
                title=''
                type='number'
                placeholderStyle='font-size:11px;'
                placeholder='女性角色人数'
                value={this.state.playInfo.play_female_num}
                onChange={this.handleChange.bind(this, 'playInfo_play_female_num')}
                className='playInfo-num-input-css'
                required
              />
            </View>

            <View style='height:75rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
              <text style='font-size:15px;width:150rpx;'>剧本价格</text>
              <AtInput
                name='play_price'
                title=''
                type='number'
                placeholderStyle='font-size:13px;'
                placeholder='请填写剧本价格'
                value={this.state.playPrice}
                onChange={this.handleChange.bind(this, 'playPrice')}
                className='storeInfo-input-css'
                required
              />
            </View>

            <View style='height:90rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
              <View style='width:400rpx;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;'>
                <text style='font-size:15px;width:400rpx;'>建议不可反串</text>
                <text style='font-size:11px;width:400rpx;color:#777777;'>开启后玩家收到"不建议反串"提醒</text>
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
              <text style='font-size:15px;width:150rpx;margin-bottom:10rpx;'>剧本简介</text>
              <AtTextarea
                count={false}
                value={this.state.playInfo.play_intro.split('/n').join('\n')}
                onChange={this.handleChange.bind(this, 'playInfo_play_intro')}
                maxLength={1000}
                placeholder='请输入剧本简介'
                className='playIntro-css'
              />
            </View>
  
            
  
  
            <View style='width:80%;height:130rpx;margin-left:10%;'><AtButton type='primary' circle='true' className='confirm-button' onClick={this.handleUploadPlay.bind(this)}>上传剧本</AtButton></View>
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
              <text style='font-size:20px;font-weight:530;margin-left:5%;'>店铺信息</text>
              <text style='font-size:13px;font-weight:530;margin-left:5%;color:#FCA62F;text-decoration:underline;margin-left:350rpx;' onClick={this.handleModifyStoreInfo.bind(this)}>修改</text>
            </View>
            <View style='height:150rpx;width:90%;margin-left:5.5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
              <text style='font-size:15px;width:70%;'>店铺头像</text>
              <image style='height:150rpx;width:150rpx;' src={this.state.imgFile[0].url }></image>
            </View>

            <View style='height:75rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
              <text style='font-size:15px;width:150rpx;'>店铺名称</text>
              <AtInput
                editable={false}
                name='value3'
                title=''
                type='text'
                placeholderStyle='font-size:13px;'
                placeholder='需与门店名称一致'
                value={this.state.storeInfo.store_name}
                onChange={this.handleChange.bind(this, 'storeInfo_store_name')}
                className='storeInfo-input-css'
                required
              />
            </View>

            <View style='height:75rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
              <text style='font-size:15px;width:150rpx;'>店铺地区</text>
              <AtInput
                editable={false}
                name='value4'
                title=''
                type='text'
                placeholderStyle='font-size:13px;'
                placeholder='点击图标选择地址'
                value={this.state.storeInfo.store_position}
                onChange={this.handleChange.bind(this, 'storeInfo_store_position')}
                className='storeInfo-input-css'
              />
              <image src={mapIcon} style='height:80rpx;width:80rpx;' ></image>
            </View>

            <View style='height:75rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
              <text style='font-size:15px;width:150rpx;'>详细门牌号</text>
              <AtInput
                editable={false}
                name='value5'
                title=''
                type='text'
                placeholderStyle='font-size:13px;'
                placeholder='详细地址，例1层101室'
                value={this.state.storeInfo.store_address}
                onChange={this.handleChange.bind(this, 'storeInfo_store_address')}
                className='storeInfo-input-css'
                required
                adjustPosition
              />
            </View>

            <View style='height:75rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
              <text style='font-size:15px;width:150rpx;'>客服电话1</text>
              <AtInput
                editable={false}
                name='value6'
                title=''
                type='phone'
                placeholderStyle='font-size:13px;'
                placeholder='如有区号，请在区号后加“-”'
                value={this.state.storeInfo.store_tel1}
                onChange={this.handleChange.bind(this, 'storeInfo_store_tel1')}
                className='storeInfo-input-css'
                required
                adjustPosition
              />
            </View>

            <View style='height:75rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:0px;display:flex;align-items:center;justify-content:flex-start;'>
              <text style='font-size:15px;width:150rpx;'>客服电话2</text>
              <AtInput
                editable={false}
                name='value7'
                title=''
                type='phone'
                placeholderStyle='font-size:13px;'
                placeholder='如有区号，请在区号后加“-”'
                value={this.state.storeInfo.store_tel2}
                onChange={this.handleChange.bind(this, 'storeInfo_store_tel2')}
                className='storeInfo-input-css'
                required
                adjustPosition
              />
            </View>
          </View>
        )

        let adminContent = [];

        this.state.adminList.map((item, itemIdx)=> {
          if (item.adminStore_permission == 1){
            adminContent.unshift(
              <View style='height:90rpx;width:90%;margin-left:5%;margin-top:50rpx;border: 0px solid #97979755;border-bottom-width:0px;display:flex;align-items:flex-start;;justify-content:flex-start;'>
                <text style='font-size:13px;width:150rpx;font-weight:550;'>店长</text>
                <View style='height:90rpx;width:400rpx;margin-left:10rpx;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;'>
                  <text style='font-size:13px;font-weight:530;'>{item.admin_nickName}</text>
                  <text style='font-size:11px;color:#797979;margin-top:10rpx'>手机号 {item.adminStore_phone}</text>
                </View>
              </View>
            )
          } else {
            adminContent.push(
              <View style='height:90rpx;width:90%;margin-left:5%;padding-top:10rpx;border: 0px solid #97979755;border-top-width:1.5px;display:flex;align-items:flex-start;;justify-content:flex-start;'>
                <View style='height:90rpx;width:150rpx;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;'>
                  <text style='font-size:13px;font-weight:550;'>管理员</text>
                  <View style={{visibility:`${item.adminStore_verify==1? `hidden`:`visible`}`}}>
                    <AtIcon value='alert-circle' size='12' color='#F00'></AtIcon>
                    <text style='font-size:10px;color:#797979;'>身份待确认</text>
                  </View>
                </View>
                
                <View style='height:90rpx;width:400rpx;margin-left:10rpx;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;'>
                  <text style='font-size:13px;font-weight:530;'>{item.admin_nickName}</text>
                  <text style='font-size:11px;color:#797979;margin-top:10rpx'>手机号 {item.adminStore_phone}</text>
                </View>

                <image style='height:50rpx;width:50rpx;margin-top:20rpx;' src={editorIcon}></image>
              </View>
            )
          }
        })

        formContent.push(
          <View style='height:auto;width:100%;background:#FEFFFF;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;margin-top:30rpx;'>
            <View style='height:20rpx;'></View>
            <View style='width:100%;'>
              <text style='font-size:20px;font-weight:530;margin-left:5%;'>店铺管理员</text>
              <text style='font-size:13px;font-weight:530;margin-left:5%;color:#FCA62F;text-decoration:underline;margin-left:250rpx;'>添加管理员</text>
            </View>
            {adminContent}
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
      // 编辑店铺信息
      formContent.push(
        <View style='height:auto;width:100%;background:#FEFFFF;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;margin-top:30rpx;'>
          <View style='height:20rpx;'></View>
          <text style='font-size:20px;font-weight:530;margin-left:5%;'>店铺信息</text>
          <View style='height:150rpx;width:90%;margin-left:5.5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
            <text style='font-size:15px;width:70%;'>店铺头像</text>
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
            <text style='font-size:15px;width:150rpx;'>店铺名称</text>
            <AtInput
              name='value3'
              title=''
              type='text'
              placeholderStyle='font-size:13px;'
              placeholder='需与门店名称一致'
              value={this.state.storeInfo.store_name}
              onChange={this.handleChange.bind(this, 'storeInfo_store_name')}
              className='storeInfo-input-css'
              required
            />
          </View>

          <View style='height:75rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
            <text style='font-size:15px;width:150rpx;'>店铺地区</text>
            <AtInput
              editable={false}
              name='value4'
              title=''
              type='text'
              placeholderStyle='font-size:13px;'
              placeholder='点击图标选择地址'
              value={this.state.storeInfo.store_position}
              onChange={this.handleChange.bind(this, 'storeInfo_store_position')}
              className='storeInfo-input-css'
            />
            <image src={mapIcon} style='height:80rpx;width:80rpx;' onClick={this.handleSelectPos.bind(this)}></image>
          </View>

          <View style='height:75rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
            <text style='font-size:15px;width:150rpx;'>详细门牌号</text>
            <AtInput
              name='value5'
              title=''
              type='text'
              placeholderStyle='font-size:13px;'
              placeholder='详细地址，例1层101室'
              value={this.state.storeInfo.store_address}
              onChange={this.handleChange.bind(this, 'storeInfo_store_address')}
              className='storeInfo-input-css'
              required
              adjustPosition
            />
          </View>

          <View style='height:75rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
            <text style='font-size:15px;width:150rpx;'>客服电话1</text>
            <AtInput
              name='value6'
              title=''
              type='phone'
              placeholderStyle='font-size:13px;'
              placeholder='如有区号，请在区号后加“-”'
              value={this.state.storeInfo.store_tel1}
              onChange={this.handleChange.bind(this, 'storeInfo_store_tel1')}
              className='storeInfo-input-css'
              required
              adjustPosition
            />
          </View>

          <View style='height:75rpx;width:90%;margin-left:5%;margin-top:10rpx;border: 0px solid #97979755;border-bottom-width:1.5px;display:flex;align-items:center;justify-content:flex-start;'>
            <text style='font-size:15px;width:150rpx;'>客服电话2</text>
            <AtInput
              name='value7'
              title=''
              type='phone'
              placeholderStyle='font-size:13px;'
              placeholder='如有区号，请在区号后加“-”'
              value={this.state.storeInfo.store_tel2}
              onChange={this.handleChange.bind(this, 'storeInfo_store_tel2')}
              className='storeInfo-input-css'
              required
              adjustPosition
            />
          </View>


          <View style='width:80%;height:130rpx;margin-left:10%;'><AtButton type='primary' circle='true' className='confirm-button' onClick={this.SaveStoreInfo.bind(this)}>保存店铺信息</AtButton></View>
        </View>
      )
    } else if (this.state.pageKind == "6") {
      // 增加管理人员信息
    } else if (this.state.pageKind == "7") {
      // 修改管理员信息信息
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
