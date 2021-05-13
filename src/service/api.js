import { render } from '_@tarojs_taro@3.2.1@@tarojs/taro';
import request from './request'

export const test_wechat_login = (user_data) => {
    //let url = `/test/onlogin?code=${code_data}`
    let url = '/test/adminLogin'
    return request.post(url, user_data, 'application/json')
}

export const test_send_sms = (admin_data) => {
    let url = '/test/adminSendSMS'
    return request.post(url, admin_data, 'application/json')
}
