<template>
<div id="view-employee">
<ul class="collection with-header">
 <li class="collection-header">
     <h4>{{name}}</h4>
 </li>
 <li class="collection-item">Employee ID# :{{employee_id}} </li>
 <li class="collection-item">Employee Name : {{name}}</li>
 <li class="collection-item">Employee Email : {{email}}</li>
 <li class="collection-item">Employee Department : {{dept}}</li>
 <li class="collection-item">Employee Per Hour Salary : {{per_hour_salary}}</li>
</ul>
<button class="btn red left hoverable" @click="deleteemployee()">Delete</button>
<router-link class="btn grey hoverable right" to="/">Back</router-link>
  <div class="fixed-action-btn">
           <router-link v-bind:to="{name:'edit-employee',params:{employee_id:this.employee_id}}" class="btn-floating btn-large #b388ff deep-purple accent-1">
           <i class="fa fa-pencil"></i>
           </router-link>
       </div>
</div>    
</template>

<script>
import db from '../config/firebaseinit'
export default {
    name:'view-employee',
    data(){
        return{
            employee_id:null,
            name:null,
            dept:null,
            email:null,
            per_hour_salary:null
        }
    },
    beforeRouteEnter(to,from,next){
      db
      .collection('Users')
      .where('employee_id','==',to.params.employee_id)
      .get()
      .then((querySnapshot)=>{
         querySnapshot.forEach((doc)=>{
            next( vm => {
                vm.employee_id = doc.data().employee_id
                vm.name = doc.data().name
                vm.email = doc.data().email
                vm.dept = doc.data().dept
                vm.per_hour_salary = doc.data().per_hour_salary
            })
         })
      })
    },
    watch:{
        '$route':'fetchData'
    },
    methods:{
        fetchData(){
            db
            .collection('Users')
            .where('employee_id','==',this.$route.params.employee_id)
            .get()
            .then((querySnapshot)=>{
                 querySnapshot.forEach((doc)=>{
                     this.employee_id = doc.data().employee_id
                     this.name = doc.data().name
                     this.email = doc.data().email
                     this.dept = doc.data().dept
                     this.per_hour_salary = doc.data().per_hour_salary
                 })
            })
        },
        deleteemployee(){
           if(confirm('Are you Sure ?'))
           {
            db
            .collection('Users')
            .where('employee_id','==',this.$route.params.employee_id)
            .get()
            .then((querySnapshot)=>{
                 querySnapshot.forEach((doc)=>{
                     doc.ref.delete()
                     this.$router.push('/')
                 })
            })
           }
        }
    }
}
</script>

<style scoped>

</style>