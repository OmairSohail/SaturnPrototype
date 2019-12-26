<template>
 <div>
    <div class="container">
    <div class="row">
      <div class="col s12 m8 offset-m2">
        <div class="signup card-panel #eceff1 blue-grey lighten-1  center">
          <h3>SignUp</h3>
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
            <button v-on:click="register()" class="btn btn-large btn-extended grey lighten-4 black-text">Signup</button>
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
    name:'signup',
    data(){
        return{
            email:null,
            password:null
        }
    },
    methods:{
        register(){
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
            .createUserWithEmailAndPassword(this.email,this.password)
            .then(()=>{
               alert(`Account Created For ${this.email}`);
               this.$router.go({path : this.$router.path})
            }).catch((error)=>{alert(error.message)})
        }
    }
}
</script>

<style scoped>

</style>