(wx["webpackJsonp"]=wx["webpackJsonp"]||[]).push([[14],{296:function(e,t,a){},303:function(e,t,a){"use strict";a.r(t);var s=a(6),n=a(9),i=a(11),c=a(16),o=a(17),l=a(2),r=a(3),d=a.n(r),u=a(0),h=a(5),p=a(10),j=a.n(p),y=(a(41),a(296),a(26)),m=a.n(y),x=a(39),f=a.n(x),g=(a(78),a(32)),b=a.n(g),_=a(33),q=a.n(_),O=a(73),S=a.n(O),w=a(35),v=a.n(w),k=a(12),L=a(14),I=a(1),N=function(e){Object(c["a"])(a,e);var t=Object(o["a"])(a);function a(){var e;return Object(n["a"])(this,a),e=t.apply(this,arguments),e.state={value:"",tagActiveNum:0,plays_num:0,plays_list:[],current:0,currentDay:0,adminInfo:{},storeInfo:{},permission:0,queueList:[],queueListIdx:[],lockedQueueList:[],playInfo:{play_name:"\u6728\u516e\u50e7\u4e4b\u620f",play_headcount:7,play_male_num:4,play_female_num:3},clickButton:!1,tabLoading:!0,infoLoading:!0},e}return Object(i["a"])(a,[{key:"componentWillMount",value:function(){this.state.adminInfo=d.a.getStorageSync("admin_info"),this.state.storeInfo=d.a.getStorageSync("store_info"),this.state.permission=d.a.getStorageSync("permission")}},{key:"componentDidShow",value:function(){var e=this;this.setState({storeInfo:d.a.getStorageSync("store_info")});var t=this;Object(k["j"])(this.state.storeInfo.store_id).then((function(a){console.log(a.data.data.play_data),a.data.data.play_data.map((function(t,a){e.isInStorage("play_id_".concat(t.play_id))?console.log("the play is in cache"):d.a.setStorage({key:"play_id_".concat(t.play_id),data:t})})),t.setState({queueList:a.data.data.queue_data,queueListIdx:a.data.data.queue_num,tabLoading:!1,infoLoading:!1})})),t=this;var a={showDays:0};Object(k["g"])(this.state.storeInfo.store_id,a).then((function(a){console.log(a.data.data),a.data.data.play_data.map((function(t,a){e.isInStorage("play_id_".concat(t.play_id))?console.log("the play is in cache"):d.a.setStorage({key:"play_id_".concat(t.play_id),data:t})})),t.setState({lockedQueueList:a.data.data.queue_data,tabLoading:!1,infoLoading:!1})}))}},{key:"isInStorage",value:function(e){var t=d.a.getStorageInfoSync(),a=t.keys,s=a.find((function(t){return t==e}));return s}},{key:"handleClick",value:function(e){var t=this;if(this.setState({tabLoading:!0}),0==e){var a=this;Object(k["j"])(this.state.storeInfo.store_id).then((function(e){console.log(e.data.data.play_data),e.data.data.play_data.map((function(e,a){t.isInStorage("play_id_".concat(e.play_id))?console.log("the play is in cache"):d.a.setStorage({key:"play_id_".concat(e.play_id),data:e})})),a.setState({queueList:e.data.data.queue_data,queueListIdx:e.data.data.queue_num,tabLoading:!1,infoLoading:!1})}))}else if(1==e){var s=this,n={showDays:0};Object(k["g"])(this.state.storeInfo.store_id,n).then((function(e){console.log(e.data.data),e.data.data.play_data.map((function(e,a){t.isInStorage("play_id_".concat(e.play_id))?console.log("the play is in cache"):d.a.setStorage({key:"play_id_".concat(e.play_id),data:e})})),s.setState({lockedQueueList:e.data.data.queue_data,tabLoading:!1,infoLoading:!1})}))}this.setState({current:e})}},{key:"handleDayTabsClick",value:function(e){var t=this;this.setState({tabLoading:!0});var a=this;Object(k["j"])(this.state.storeInfo.store_id).then((function(e){console.log(e.data.data.play_data),e.data.data.play_data.map((function(e,a){t.isInStorage("play_id_".concat(e.play_id))?console.log("the play is in cache"):d.a.setStorage({key:"play_id_".concat(e.play_id),data:e})})),a.setState({queueList:e.data.data.queue_data,queueListIdx:e.data.data.queue_num,tabLoading:!1,infoLoading:!1})})),this.setState({currentDay:e})}},{key:"lockTheQueue",value:function(e){this.state.clickButton=!0;var t=this.state.queueList[e],a=this;console.log(t),wx.showModal({title:"\u9501\u5b9a\u8f66\u961f",content:"\u786e\u5b9a\u9501\u5b9a ".concat(t.queue_end_time.slice(0,10)+" "+t.queue_end_time.slice(11,-3)," \u4eba\u6570\u4e3a").concat(t.queue_current_num,"\u4eba\u7684\u8f66\u961f\u5417\uff1f"),success:function(s){if(s.confirm){console.log("\u7528\u6237\u70b9\u51fb\u786e\u5b9a");var n={adminId:a.state.adminInfo.adminId,sessionId:a.state.adminInfo.sessionId,store_id:a.state.storeInfo.store_id,queue_id:t.queue_id,appId:wx.getAccountInfoSync().miniProgram.appId,token:2*(j()().unix()+1e3)};Object(k["m"])(n).then((function(t){1==t.data.code?(a.state.queueList[e].queue_status=1,a.setState({queueList:a.state.queueList,clickButton:!1})):(console.log(t.data.data),a.setState({clickButton:!1}))}))}else s.cancel&&(console.log("\u7528\u6237\u70b9\u51fb\u53d6\u6d88"),a.setState({clickButton:!1}))}})}},{key:"manageQueue",value:function(e){console.log("click tab"),1==this.state.clickButton?console.log("click button"):(d.a.setStorage({key:"queue_info",data:this.state.queueList[e]}),d.a.navigateTo({url:"../queueManagePage/index"}))}},{key:"handleNavBack",value:function(){d.a.navigateBack()}},{key:"onScrollToUpper",value:function(){}},{key:"onScroll",value:function(e){}},{key:"render",value:function(){var e=this,t=wx.getSystemInfoSync().statusBarHeight,a=(wx.getSystemInfoSync().screenWidth,wx.getSystemInfoSync().screenHeight,wx.getSystemInfoSync().screenWidth),s=wx.getSystemInfoSync().windowHeight,n=s/a*750,i=t/a*750,c=0,o=20,l={height:"".concat(n-i-90-80-100,"rpx")},r={height:"".concat(n-i-80-100,"rpx")},p=[],y=["\u5468\u4e00","\u5468\u4e8c","\u5468\u4e09","\u5468\u56db","\u5468\u4e94","\u5468\u516d","\u5468\u65e5"];p.push({title:"\u4eca\u5929 "+j()().format("MM-DD")});for(var x=1;x<14;x++)p.push({title:y[x%7]+" "+j()().add(x,"day").format("MM-DD")});if(1==this.state.infoLoading)return Object(I["jsxs"])(u["q"],{className:"queueInfoPage",style:{height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start"},children:[Object(I["jsx"])("image",{src:m.a,style:"width:100vw;height:100vh;position:absolute;size:100%;z-index:-1;"}),Object(I["jsx"])(u["q"],{children:Object(I["jsx"])(h["a"],{mode:"center",size:64,content:"Loading...",className:"load"})})]});var g=[],_=[],O=0;return this.state.queueListIdx.map((function(t,a){var s=[];if(1==e.state.tabLoading)g.push(Object(I["jsx"])(h["j"],{current:e.state.currentDay,index:a,children:Object(I["jsx"])(u["j"],{className:"scrollview",scrollY:!0,scrollWithAnimation:!0,"show-scrollbar":"false",scrollTop:c,style:l,lowerThreshold:o,upperThreshold:o,onScrollToUpper:e.onScrollToUpper.bind(e),onScroll:e.onScroll,children:Object(I["jsx"])(u["q"],{className:"queueInfoPage",style:{height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start"},children:Object(I["jsx"])(u["q"],{children:Object(I["jsx"])(h["a"],{mode:"center",size:64,content:"Loading...",className:"load"})})})})}));else{if(0==t)g.push(Object(I["jsx"])(h["j"],{current:e.state.currentDay,index:a,children:Object(I["jsx"])(u["j"],{className:"scrollview",scrollY:!0,scrollWithAnimation:!0,"show-scrollbar":"false",scrollTop:c,style:l,lowerThreshold:o,upperThreshold:o,onScrollToUpper:e.onScrollToUpper.bind(e),onScroll:e.onScroll,children:Object(I["jsx"])(u["q"],{children:Object(I["jsx"])("image",{src:v.a,style:"width:675rpx;"})})})}));else{for(var n=O;n<O+t;n++){var i=d.a.getStorageSync("play_id_".concat(e.state.queueList[n].play_id)),r=[];999==i.play_male_num||999==i.play_female_num?r=[]:(r.push(Object(I["jsxs"])(u["q"],{className:"play-male-position-info",children:[Object(I["jsx"])("image",{className:"gender-icon-info",src:q.a}),Object(I["jsxs"])("text",{children:[e.state.queueList[n].queue_current_male_num,"/",i.play_male_num]})]})),r.push(Object(I["jsxs"])(u["q"],{className:"play-female-position-info",children:[Object(I["jsx"])("image",{className:"gender-icon-info",src:b.a}),Object(I["jsxs"])("text",{children:[e.state.queueList[n].queue_current_female_num,"/",i.play_female_num]})]}))),s.push(Object(I["jsxs"])(u["q"],{className:"at-row queue-tab-info",onClick:e.manageQueue.bind(e,n),children:[Object(I["jsx"])("image",{src:f.a,mode:"widthFix",style:"width:675rpx;z-index:-1;position:absolute;"}),Object(I["jsx"])("text",{style:e.state.queueList[n].queue_current_num==i.play_headcount?"background-color:rgba(252, 95, 47, 0.5);position:absolute;right:37.5rpx;;font-size:24rpx;padding:10rpx;border-radius:0 20rpx 0 20rpx;":"background-color:rgba(252, 166, 47, 0.5);position:absolute;right:37.5rpx;;font-size:24rpx;padding:10rpx;border-radius:0 20rpx 0 20rpx;",children:e.state.queueList[n].queue_current_num==i.play_headcount?"\u5df2\u62fc\u6ee1":"\u672a\u62fc\u6ee1"}),Object(I["jsx"])(u["q"],{className:"at-row play-pic-position-info",style:"width:21vw",children:Object(I["jsx"])("image",{className:"play-pic-info",src:L["a"]+i.play_img,children:Object(I["jsx"])("text",{className:"play-pic-label-info",children:"\u672c\u683c"})})}),Object(I["jsxs"])(u["q"],{className:"at-col play-intro-info",children:[Object(I["jsx"])(u["q"],{className:"at-col play-name-position-info",children:i.play_name}),Object(I["jsxs"])(u["q"],{className:"at-row",children:[Object(I["jsxs"])(u["q"],{className:"at-col",children:[Object(I["jsx"])(u["q"],{className:"at-row play-time-position-info",children:Object(I["jsx"])("text",{decode:"{{true}}",children:e.state.queueList[n].queue_end_time.slice(0,10)+" "+e.state.queueList[n].queue_end_time.slice(11,-3)})}),Object(I["jsxs"])(u["q"],{className:"at-row play-headcount-position-info",children:[Object(I["jsx"])(u["q"],{className:"play-headcount-info",children:Object(I["jsxs"])("text",{decode:"{{true}}",children:["\u4eba\u6570\uff1a",e.state.queueList[n].queue_current_num,"/",i.play_headcount]})}),r]})]}),Object(I["jsx"])(u["q"],{className:"at-row",style:"width:20vw;margin-right:20rpx;",children:Object(I["jsx"])(h["b"],{type:"primary",circle:"true",className:"confirm-button",disabled:1==e.state.queueList[n].queue_status,onClick:e.lockTheQueue.bind(e,n),children:"\u786e\u8ba4\u9501\u5c40"})})]}),Object(I["jsx"])(u["q"],{className:"at-col",style:"margin-top:2%;",children:Object(I["jsx"])("text",{style:"font-size:24rpx;font-weight:550;",children:"\u623f\u95f4\uff1a\u9ed8\u8ba4"})})]})]}))}g.push(Object(I["jsx"])(h["j"],{current:e.state.currentDay,index:a,children:Object(I["jsx"])(u["j"],{className:"scrollview",scrollY:!0,scrollWithAnimation:!0,"show-scrollbar":"false",scrollTop:c,style:l,lowerThreshold:o,upperThreshold:o,onScrollToUpper:e.onScrollToUpper.bind(e),onScroll:e.onScroll,children:s})}))}O+=t}})),1==this.state.tabLoading?_.push(Object(I["jsx"])(u["q"],{className:"queueInfoPage",style:{height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start"},children:Object(I["jsx"])(u["q"],{children:Object(I["jsx"])(h["a"],{mode:"center",size:64,content:"Loading...",className:"load"})})})):(this.state.lockedQueueList.map((function(e,t){var a=d.a.getStorageSync("play_id_".concat(e.play_id));_.push(Object(I["jsxs"])(u["q"],{className:"at-row queue-tab-info",children:[Object(I["jsx"])("image",{src:f.a,mode:"widthFix",style:"width:675rpx;z-index:-1;position:absolute;"}),Object(I["jsx"])(u["q"],{className:"at-row play-pic-position-info",style:"width:21vw",children:Object(I["jsx"])("image",{className:"play-pic-info",src:L["a"]+a.play_img,children:Object(I["jsx"])("text",{className:"play-pic-label-info",children:a.play_labels[0]})})}),Object(I["jsxs"])(u["q"],{className:"at-col play-intro-info",children:[Object(I["jsx"])(u["q"],{className:"at-col play-name-position-info",children:a.play_name}),Object(I["jsx"])(u["q"],{className:"at-row",children:Object(I["jsx"])(u["q"],{className:"at-col",children:Object(I["jsx"])(u["q"],{className:"at-row",style:"font-size:26rpx;font-weight:550;height:70rpx;display:flex;align-items:flex-end;",children:Object(I["jsx"])("text",{decode:"{{true}}",children:e.queue_end_time.slice(0,10)+" "+e.queue_end_time.slice(11,-3)})})})}),Object(I["jsx"])(u["q"],{className:"at-col",style:"margin-top:10%;",children:Object(I["jsx"])("text",{style:"font-size:24rpx;font-weight:550;",children:"\u623f\u95f4\uff1a\u9ed8\u8ba4"})})]}),Object(I["jsx"])(u["q"],{className:"at-row",style:"width:20vw;display:flex;align-items:center;",children:Object(I["jsx"])("image",{src:S.a,style:"height:160rpx;width:160rpx;"})})]}))})),0==this.state.lockedQueueList.length&&_.push(Object(I["jsx"])(u["q"],{children:Object(I["jsx"])("image",{src:v.a,style:"width:675rpx;"})}))),Object(I["jsxs"])(u["q"],{className:"queueInfoPage",children:[Object(I["jsx"])("image",{src:m.a,style:"width:100vw;height:100vh;position:absolute;size:100%;z-index:-1;"}),Object(I["jsxs"])(u["q"],{className:"at-col",style:{padding:"".concat(i,"rpx 0rpx 0rpx 0rpx")},children:[Object(I["jsx"])(h["g"],{className:"nav-bar-info",onClickLeftIcon:this.handleNavBack,color:"#ffff",leftIconType:"chevron-left",children:Object(I["jsx"])(u["q"],{style:"color:#fff;font-size:18px",children:"\u8f66\u961f\u7ba1\u7406"})}),Object(I["jsxs"])(h["i"],{className:"tabs-info",current:this.state.current,scroll:!0,tabList:[{title:"\u5728\u62fc\u8f66\u961f"},{title:"\u5b8c\u6210\u8f66\u961f"}],onClick:this.handleClick.bind(this),children:[Object(I["jsx"])(h["j"],{current:this.state.current,index:0,children:Object(I["jsx"])(u["q"],{style:"background:#FEF9F4;",children:Object(I["jsx"])(h["i"],{className:"day-tabs-info",current:this.state.currentDay,scroll:!0,tabList:p,onClick:this.handleDayTabsClick.bind(this),children:g})})}),Object(I["jsx"])(h["j"],{current:this.state.current,index:1,children:Object(I["jsx"])(u["q"],{style:"background:#FEF9F4;",children:Object(I["jsx"])(u["j"],{className:"scrollview",scrollY:!0,scrollWithAnimation:!0,"show-scrollbar":"false",scrollTop:c,style:r,lowerThreshold:o,upperThreshold:o,onScrollToUpper:this.onScrollToUpper.bind(this),onScroll:this.onScroll,children:_})})})]})]})]})}}]),a}(l["Component"]),T={navigationBarTitleText:"\u8f66\u961f\u7ba1\u7406",disableScroll:!0};Page(Object(s["createPageConfig"])(N,"pages/queueInfoPage/index",{root:{cn:[]}},T||{}))}},[[303,0,1,2,3]]]);