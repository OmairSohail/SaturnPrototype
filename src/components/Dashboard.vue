<template>
    <div id="Dashboard">
       <ul class="collection with-header">
           <li class="collection-header"><h2>Dashboard</h2></li>

           <li class="collection-item" v-for="employee in employees" v-bind:key="employee.id">
             <div class="chip left-align">{{employee.dept}}</div>       
             {{employee.employee_id}} - {{employee.name}}
             <router-link v-bind:to="{name:'view-employee',params:{employee_id:employee.employee_id}}" class="right">
                 <i class="fa fa-eye"></i>
             </router-link>
           </li>

       </ul>
       <div class="fixed-action-btn">
           <router-link to="/new" class="btn-floating btn-large #b388ff deep-purple accent-1">
           <i class="fa fa-plus"></i>
           </router-link>
       </div>
    </div>
</template>

<script>
import db from '../config/firebaseinit'
export default {
   name:'Dashboard' ,
   data(){
       return{
          employees:[]
       }
      
   },
   created(){
        db
        .collection('Users')
        .orderBy('dept')
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const userdata = {
                    "id":doc.id,
                    "employee_id":doc.data().employee_id,
                    "name":doc.data().name,
                    "email":doc.data().email,
                    "dept":doc.data().dept,
                    "per_hour_salary":doc.data().per_hour_salary,
                }
                this.employees.push(userdata)

            }); 
            })
                        
   }   
}
</script>

<style scoped>
#Dashboard{
    margin-top:1rem;
}
</style>