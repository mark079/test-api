import axios from 'axios';
const app = document.querySelector("#app");
const request = (method, url, data = []) => {
  axios({
    method: method,
    url: url,
    data: data
  }).then(response => app.innerHTML = `<pre>${JSON.stringify(response.data, null, 2)}</pre>`)
    .catch(e => app.innerHTML = `<pre>${e}</pre>`);
};

request(
  'get',
  'http://localhost:8000/api/',
);