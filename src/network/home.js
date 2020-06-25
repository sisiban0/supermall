import {request} from './request';

export function getHomeMultidata() {
  return request({
    url:'/api/home/multidata'
  })
}

export function getHomeGoods(type,page) {
  return request({
    url:'/api/home/data',
    params:{
      type,
      page
    }
  })
}