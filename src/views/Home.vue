<template>
  <div class="home"> 
     <Navbar/>
     <Dashboard/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Dashboard from '../components/Dashboard'

export default {
  name: 'home',
  components: {
    Navbar,
    Dashboard
  }
}
</script>
