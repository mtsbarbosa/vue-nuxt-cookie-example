<template>
  <section class="container">
    <div class="container-fluid">
      <div class="row">
        <p class="main_title">Language Ritual</p>
      </div>
      <div class="row">
        <p class="main_desc">The language training helper by Papa Legba</p>
      </div>
      <div class="row">
        <b-form id="loginForm" @submit.prevent="onSubmit" v-if="show">
          <div id="loginFormContainer" class="container-fluid">
            <div class="row">
              <b-form-input id="emailInput"
                            type="email"
                            v-model="form.email"
                            required
                            placeholder="Enter email">
              </b-form-input>
            </div>
            <br/>
            <div class="row">
              <b-form-input id="passwordInput"
                            type="password"
                            v-model="form.password"
                            required
                            placeholder="Password">
              </b-form-input>
            </div>
            <br/>
            <div class="row">
              <b-button type="submit" variant="primary">Login</b-button>
            </div>
          </div>
        </b-form>
      </div>
    </div>
  </section>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "login",
    data() {
      return {
        form: {
          email: '',
          password: ''
        },
        show: true
      }
    },
    methods: {
      async onSubmit(evt) {
        evt.preventDefault();
        localStorage.setItem('user-email', this.form.email);
        localStorage.setItem('user-pwd', this.form.password);
        try {
          /*let response = await axios.get(process.env.API_URL + "/login", {
            auth: {
              username: this.form.email, password: this.form.password
            },
            withCredentials: true
          });
          if (response.status !== 200){
            this.$router.go({
              name: "login",
              params: {
                username: this.form.email, password: this.form.password
              }
            });
          }else{
            this.$router.go({
              name: "language_list"
            });
          }*/
          this.$cookies.set('JSESSIONID','O1V3OGY0TJG0CMB38Y8X7ZIDJTU643ZC', {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
          });
          this.$router.go({
            name: "language_list"
          });
        }catch(e){
          this.$router.go({
            name: "login"
          });
        }
      }
    }
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Staatliches');
  .main_title{
    font-family: 'Staatliches', cursive;
    font-size: 5vw;
    text-align: left;
    margin-bottom: 0vw;
  }
  .main_desc{
    font-family: 'Staatliches', cursive;
    font-size: 1.2vw;
    text-align: left;
  }
  #loginForm {
    width: 100%;
  }
</style>
