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

export const test_store_plays_search = (body, params) => {
    let url = `/test/store/search?`+params
    return request.get(url, body)
}

export const test_delete_plays_search = (body) => {
    let url = `/test/store/delete`
    return request.get(url, body)
}

export const test_upload_play = (play_data) => {
    let url = '/test/uploadPlay'
    return request.post(url, play_data, 'application/json')
}

export const test_add_play = (body) => {
    let url = `/test/store/add`
    return request.get(url, body)
}

export const test_get_storeAdmin = (body) => {
    let url = `/test/store/admins`
    return request.get(url, body)
}

export const test_save_storeInfo = (body) => {
    let url = `/test/saveStoreWithoutImg`
    return request.post(url, body, 'application/json')
}

export const test_get_phonenum_info = (phone_data) => {
    let url = '/test/getPhoneNum'
    return request.post(url, phone_data, 'application/json')
}

export const test_get_store_list = (body) => {
    let url = `/test/admin/stores`
    return request.get(url, body)
}