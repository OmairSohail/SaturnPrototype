<template>
  <div id="app">
    <nav>
    <div class="nav-wrapper #b388ff deep-purple accent-1">
      <router-link class="brand-logo center" to="/"><img src="./assets/Saturn.png" width="50" height="50" class="img"/></router-link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
       
      </ul>
    </div>
  </nav>
  <div class="container">
    <router-view/>
  </div>
    
  </div>
</template>

<script>

export default {
  components:{
    
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
