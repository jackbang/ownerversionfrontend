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

export const test_get_queues = (store_id) => {
    let url = `/test/stores/${store_id}/queues/`
    return request.get(url, '')
}

export const test_total_plays_search = (body, params) => {
    let url = `/test/total/search?`+params
    return request.get(url, body)
}
