import Vue from 'vue'
import axios from 'axios'

Vue.mixin({
  data() {
    return {
      background_color: [
        'bg-primary',
        'bg-secondary',
        'bg-success',
        'bg-danger',
        'bg-warning',
        'bg-info',
        'bg-light',
        'bg-dark'
      ]
    };
  },
  methods: {
    navigatePath (path) {
      this.$router.go({
        path: path
      });
    },
    navigateName (name, params) {
      this.$router.go({
        name: name,
        params: params
      });
    },
    requestGet (url, config){
      return axios.get(url? process.env.API_URL + url : process.env.API_URL, config)
        .then((response) => {
          return response;
        })
        .catch((e) => {
          return null;
        });
    },
    getCookieFromResponse(response, nameOfCookie) {
      let cookie = response.headers["Cookie"];
      if(cookie){
        let cookies = cookie.split(";");
        if(cookies.length > 0){
          cookies.forEach(function (el) {
            let cookieEntry = el.split("=");
            if(cookieEntry.length > 0 && cookieEntry[0] === nameOfCookie)
              return cookieEntry[1];
          });
        }
      }
    },
    pickRandomBackground(){
      return this.$data.background_color[Math.floor(Math.random() * this.$data.background_color.length)];
    }
  }
})
