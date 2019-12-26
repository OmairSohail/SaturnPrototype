<template>
  <div id="app">
  <navbar/>  
  <div class="container">
    <router-view/>
  </div>
    
  </div>
</template>

<script>
import navbar from './components/Navbar'
export default {
  components:{
    navbar
  }
}
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.img{
  margin-top:4px;
  margin-left:4px;
}
</style>
