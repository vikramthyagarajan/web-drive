import Config from './config';
import merge from 'lodash/merge';
import cloneDeep from 'lodash/cloneDeep';

const getDefaultArgs = () => {
  return {
      // mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    };
}

const _fetch = (path, args) => {
  return fetch(Config.url + path, args)
    .then((res) => {
      return res.json();
    })
}


export default class Request {
  static get(path, query = {}) {
    if(path[path.length - 1] !== "/")
      path += "/"

    let args = merge({}, getDefaultArgs(), { method: 'GET' });
    let qstring = Object.keys(query).reduce((acc, key) => {
      acc = acc + key + '=' + query[key] + '&';
      return acc;
    }, '');
    if(qstring.endsWith('&'))
      qstring = qstring.slice(0, qstring.length - 1);
    if(qstring != '')
      path = path + '?' + qstring;
    console.log('q', query, qstring);

    return _fetch(path, args);
  }

  static postForm(path, data) {
    if(path[path.length - 1] !== "/")
      path += "/"
    let args = cloneDeep(getDefaultArgs());
    args.method = 'POST';
    delete args.headers['Content-Type'];

    let formData = new FormData();
    Object.keys(data).reduce((acc, key) => {
      acc.append(key, data[key]);
      return acc;
    }, formData);

    args.body = formData;

    return _fetch(path, args);
  }

  static post(path, data) {
    if(path[path.length - 1] !== "/")
      path += "/"
    let args = cloneDeep(getDefaultArgs());
    args.method = 'POST';

    args.body = JSON.stringify(data);

    return _fetch(path, args);
  }

  static delete(path) {
    if(path[path.length - 1] !== "/")
      path += "/"
    let args = merge({}, getDefaultArgs(), { method: 'DELETE' });

    return _fetch(path, args);
  }
}