import Config from './config';

export default class Request {
  static get(path, data) {
    let args = {
      method: 'GET',
      // mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    }
    if(path[path.length - 1] !== "/")
      path += "/"

    return fetch(Config.url + path, args)
      .then((res) => {
        return res.json();
      })
  }
}