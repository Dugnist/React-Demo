import config from './config.json';

const { /* apiURL,*/ apiProductionURL, apiVersion } = config;
// const LOCAL_DOMAINS = ['localhost', '127.0.0.1'];

export class API {
  constructor(entity = '', url = apiProductionURL) {
    // const isLocal = LOCAL_DOMAINS.includes(
    //   (global.window || { location: {} }).location.hostname
    // );
    // if (isLocal) url = apiURL;
    // organize url
    this.URL = `${url}${apiVersion ? '/' : ''}${apiVersion}/${entity}`;
  }

  queriesToURL = (data = {}) => {
    return Object.keys(data)
      .map((key) => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
      })
      .join('&');
  };

  useToken(token) {
    this.token = token;
  }

  request = async ({ url, method, isAuth, body }) => {
    const headers = {};
    const options = { method };

    if (isAuth) headers.authorization = `Bearer ${this.token}`;
    if (body) options.body = JSON.stringify(body);

    headers['content-type'] = 'application/json';
    options.headers = headers;

    return fetch(url, options)
      .then((res) => res.json())
      .catch(() => {
        throw new Error('Cannot connect to server');
      });
  };

  get = (path = '', isAuth = false, queries) => {
    return this.request({
      url: `${this.URL}/${path}${
        queries ? '?' + this.queriesToURL(queries) : ''
      }`,
      method: 'GET',
      isAuth,
    });
  };

  post = (path = '', isAuth = false, body = {}) => {
    return this.request({
      url: `${this.URL}/${path}`,
      method: 'POST',
      isAuth,
      body,
    });
  };

  put = (path = '', isAuth = false, body = {}) => {
    return this.request({
      url: `${this.URL}/${path}`,
      method: 'PUT',
      isAuth,
      body,
    });
  };

  delete = (path = '', isAuth = false) => {
    return this.request({
      url: `${this.URL}/${path}`,
      method: 'DELETE',
      isAuth,
    });
  };
}
