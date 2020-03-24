import jsonp from 'assets/js/jsonp';
import {jsonpOptions} from './config';

export const getProductDetails = id => {
  const url = 'https://unszacs.m.taobao.com/h5/mtop.taobao.detail.getdetail/6.0/';
  const params = {
    api: 'mtop.taobao.detail.getdetail',
    ttid: '2017@taobao_h5_6.6.0',
    data: `{"itemNumId":"${id}"}`,
    appKey: 12574478,
    dataType: 'jsonp',
    type: 'jsonp',
    v: '6.0'
  };
  return jsonp(url, params, jsonpOptions).then(res => {
    if (res) {
      return res;
    }
    throw new Error('没有获取数据');
  }).then(res => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(res);
      }, 1000);
    });
  });
};
