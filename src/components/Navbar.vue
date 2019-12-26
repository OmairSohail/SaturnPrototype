<template>
<div id="navbar">
  <nav>
    <div class="nav-wrapper #b388ff deep-purple accent-1">
      <router-link class="brand-logo center" to="/"><img src="../assets/Saturn.png" width="50" height="50" class="img"/></router-link>
      <ul class="left">
        <li v-if="isLoggedin"><button class="btn default">{{CurrentUser}}</button></li>
      </ul>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li v-if="!isLoggedIn"><router-link to="/login">Login</router-link></li>
        <li v-if="!isLoggedIn"><router-link to="/signup">Signup</router-link></li>
        <li v-if="isLoggedIn"><button @click="logout()" class="btn default" id="logoutbtn">Logout</button></li>
      </ul>
    </div>
  </nav>


</div>    
</template>

<script>
import firebase from 'firebase'
export default {
  name:'navbar',
  data(){
    return{
      isLoggedIn:false,
      CurrentUser:false
    }
  },
  created(){  
   if(firebase.auth().currentUser)
   {
     this.isLoggedIn = true
     this.CurrentUser = firebase.auth().currentUser.email
   }
  },
  methods:{
    logout(){
      setTimeout(() => {
        firebase
        .auth()
        .signOut()
        .then(()=>{
          alert('You Logged Out Successfully')
          this.$router.go({path : this.$router.path})
        })
        .catch((err)=>{alert(err.message)})
      }, 3000);
    }
  }
}
</script>

<style scoped>
</style>