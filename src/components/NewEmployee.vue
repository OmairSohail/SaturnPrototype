<template>
<div id="new-employee">
<h3>Employee</h3>
<div class="row">
<form @submit.prevent="saveEmployee()" class="col s12">
    <div class="row">
        <div class="input-field col s12">
          <input id="empid" type="text" v-model="employee_id" class="validate">
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
        <button class="btn blue hoverable" type="submit">
         Create Employee
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
    name:'new-employee',
    data(){
        return{
            employee_id:null,
            name:null,
            email:null,
            dept:null,
            per_hour_salary:null
        }
    },
    methods:{
        saveEmployee(){
            db
            .collection('Users')
            .add({
                employee_id:this.employee_id,
                name:this.name,
                email:this.email,
                dept:this.dept,
                per_hour_salary:this.per_hour_salary,
                created_At: Date().toLocaleUpperCase()
            })
            .then(()=>{
                   this.$router.push('/')
            }).catch((error)=>{console.log(error)})
        }
    }

}
</script>

<style scoped>

</style>