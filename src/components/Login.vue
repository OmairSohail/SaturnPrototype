<template>
 <div>
    <div class="container">
    <div class="row">
      <div class="col s12 m8 offset-m2">
        <div class="login card-panel #b388ff deep-purple accent-1 white-text center">
          <h3>Login</h3>
          <form >
            <div class="input-field">
              <i class="material-icons prefix">email</i>
              <input type="email" placeholder="Email ...." id="email" v-model="email" required>
              <!--<label class="white-text" for="email">Email Address</label>-->
            </div>
            <div class="input-field">
              <i class="material-icons prefix">lock</i>
              <input type="password" id="password" placeholder="Password ..." v-model="password" required>
              <!--<label class="white-text" for="password">Password</label>-->
            </div>
            <button class="btn btn-large btn-extended grey lighten-4 black-text" @click="login()">Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name:'login',
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
        login(){
          if(this.email == '')
          {
              alert('Please Enter Email First...')
          }
          if(this.password == '')
          {
              alert('Please Enter Password First...')
          }
           
          firebase
          .auth()
          .signInWithEmailAndPassword(this.email,this.password)
          .then(()=>{ 
              alert('Login Successfull');
              this.$router.go({path : this.$router.path})
              })
          .catch((err)=>{alert(err.message)}) 

        }
    }
}
</script>

<style scoped>

</style>