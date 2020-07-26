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
  if(path[path.length - 1] !== "/")
    path += "/"

  return fetch(Config.url + path, args)
    .then((res) => {
      return res.json();
    })
}


export default class Request {
  static get(path, data) {
    let args = merge({}, getDefaultArgs(), { method: 'GET' });

    return _fetch(path, args);
  }

  static postForm(path, data) {
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

  static delete(path) {
    let args = merge({}, getDefaultArgs(), { method: 'DELETE' });

    return _fetch(path, args);
  }
}