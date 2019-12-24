<template>
<div id="edit-employee">
<h3>Edit Employee</h3>
<div class="row">
<form @submit.prevent="editEmployee()" class="col s12">
    <div class="row">
        <div class="input-field col s12">
          <input id="empid" type="text" disabled v-model="employee_id" class="validate">
          <label for="empid">Employee ID#</label>
        </div>
      </div>

    <div class="row">
    <div class="input-field col s12">
    <input type="text" v-model="name" required/>
    <label>Employee Name</label>
    </div>
    </div>

    <div class="row">
    <div class="input-field col s12">
    <input type="text" v-model="email" required/>
    <label>Email</label>
    </div>
    </div>

    <div class="row">
    <div class="input-field col s12">
    <input type="text" v-model="dept" required/>
    <label>Department</label>
    </div>
    </div>

    <div class="row">
    <div class="input-field col s12">
    <input type="text" v-model="per_hour_salary" required/>
    <label>Per Hour Salary</label>
    </div>
    </div>

    <div class="row">
        <button class="btn grey hoverable" type="submit">
         Edit Employee
        </button>
        <router-link class="btn red hoverable right" to="/">Cancel</router-link>
    </div>
</form>
</div>

</div>    
</template>

<script>
import db from '../config/firebaseinit'
export default {
    name:'edit-employee',
    data(){
        return{
            employee_id:null,
            name:null,
            email:null,
            dept:null,
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
        editEmployee(){
           db
           .collection('Users')
           .where('employee_id','==',this.$route.params.employee_id)
           .get()
           .then((querySnapshot)=>{
             querySnapshot.forEach((doc)=>{
                 doc.ref.update({
                     employee_id:this.employee_id,
                     name:this.name,
                     dept:this.dept,
                     email:this.email,
                     per_hour_salary:this.per_hour_salary
                 }).then(()=>{
                     this.$router.push({name:'view-employee',params:{employee_id:this.employee_id}})
                 }).catch(()=>{

                 }) 
             })
           })
        }
       
    }
    

}
</script>

<style scoped>

</style>