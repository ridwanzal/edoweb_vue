<template>
  <div>
    <Navbar/>
    <div class="signin_container">
        <div class="col-lg-3">
            <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
            <p>{{ username }}</p>
            <p>{{ password }}</p>
            <label for="username" class="sr-only">Username</label>
            <input v-model="username" type="text" id="username" class="form-control" placeholder="Please Provide a Username" required >
            <label for="inputPassword" class="sr-only">Password</label>
            <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Please Provide a Password" required>
            <div class="checkbox mb-3">
                <label>
                <input type="checkbox" value="remember-me"> Remember me
                </label>
            </div>
            <button class="button1_outline_small btn-block" type="submit">Sign in</button>
        </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
    import Navbar from '../../components/Navbar.vue'
    import Footer from '../../components/Footer.vue'

    export default {
      name: 'About',
          components: {
              Navbar,
              Footer
          },
    }
</script>
<style scoped>
.signin_container{
    padding : 150px;
}
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 0px;
  margin: 0 auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>