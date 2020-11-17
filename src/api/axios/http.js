import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import QS from 'qs';
// import {
//     // Message,
// } from 'element-ui';
// baseURL
if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = CONFIG.remote;
} else if (process.env.NODE_ENV === 'debug') {
    axios.defaults.baseURL = CONFIG.remote;
} else if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = CONFIG.remote;
}
// 超时时间
axios.defaults.timeout = 20000;
// 跨域请求
axios.defaults.withCredentials = true;
// 请求拦截器
// token这里不用先注释了
// axios.interceptors.request.use(
//     config => {
//         // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
//         // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
//         const token = store.state.token;
//         token && (config.headers.Authorization = token);
//         return config;
//     },
//     error => {
//         return Promise.error(error);
//     });
// 拦截返回
axios.interceptors.response.use(
    (response) => {
        // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
        // 否则的话抛出错误
        if (response.status === 200) {
            return Promise.resolve(response);
        }
        return Promise.reject(response);
    },
    // 后续自定义扩展
    error => Promise.reject(error.response),
);

// get请求
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                params,
            })
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err.data);
            });
    });
}

// post 请求的字符串拼接方式
export function postStr(url, params) {
    const par = params;
    return new Promise((resolve, reject) => {
        axios.post(url, QS.stringify(par), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
        }).then((res) => {
            resolve(res.data);
        }).catch((err) => {
            reject(err);
        });
    });
}

// 请求体为json
export function postJson(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params, {
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
        }).then((res) => {
            resolve(res.data);
        }).catch((err) => {
            reject(err);
        });
    });
}
