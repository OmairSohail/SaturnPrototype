(function(e){function t(t){for(var i,o,s=t[0],l=t[1],u=t[2],c=0,p=[];c<s.length;c++)o=s[c],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);d&&d(t);while(p.length)p.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],i=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(i=!1)}i&&(n.splice(t--,1),e=s(s.s=a[0]))}return e}var i={},r={app:0},n=[];function o(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"d01d2086"}[e]+".js"}function s(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,i){a=r[e]=[t,i]}));t.push(a[2]=i);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=o(e);var u=new Error;n=function(t){l.onerror=l.onload=null,clearTimeout(c);var a=r[e];if(0!==a){if(a){var i=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+n+")",u.name="ChunkLoadError",u.type=i,u.request=n,a[1](u)}r[e]=void 0}};var c=setTimeout((function(){n({type:"timeout",target:l})}),12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=i,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(a,i,function(t){return e[t]}.bind(null,i));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=u;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var i=a("85ec"),r=a.n(i);r.a},"054b":function(e,t,a){e.exports=a.p+"img/Saturn.c489ab19.png"},"275f":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("navbar"),a("div",{staticClass:"container"},[a("router-view")],1)],1)},n=[],o=a("d178"),s={components:{navbar:o["a"]}},l=s,u=(a("034f"),a("2877")),c=Object(u["a"])(l,r,n,!1,null,null,null),d=c.exports,p=(a("d3b7"),a("8c4f")),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("Dashboard")],1)},f=[],v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"Dashboard"}},[a("ul",{staticClass:"collection with-header"},[e._m(0),e._l(e.employees,(function(t){return a("li",{key:t.id,staticClass:"collection-item"},[a("div",{staticClass:"chip left-align"},[e._v(e._s(t.dept))]),e._v(" "+e._s(t.employee_id)+" - "+e._s(t.name)+" "),a("router-link",{staticClass:"right",attrs:{to:{name:"view-employee",params:{employee_id:t.employee_id}}}},[a("i",{staticClass:"fa fa-eye"})])],1)}))],2),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large #b388ff deep-purple accent-1",attrs:{to:"/new"}},[a("i",{staticClass:"fa fa-plus"})])],1)])},h=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{staticClass:"collection-header"},[a("h2",[e._v("Dashboard")])])}],_=(a("b0c0"),a("159b"),{apiKey:"AIzaSyB0aE5qu0qCiKMvNDvr9vWKmdZHP8Hzb4Y",authDomain:"vue-firestore-d7eff.firebaseapp.com",databaseURL:"https://vue-firestore-d7eff.firebaseio.com",projectId:"vue-firestore-d7eff",storageBucket:"vue-firestore-d7eff.appspot.com",messagingSenderId:"78189723727",appId:"1:78189723727:web:5b01512e92dcd918706a3a",measurementId:"G-EE1RCTLLZ1"}),y=_,g=a("8aa5"),b=a.n(g);a("e71f");if(!b.a.apps.length)var w=b.a.initializeApp(y);var C=w.firestore(),E={name:"Dashboard",data:function(){return{employees:[]}},created:function(){var e=this;C.collection("Users").orderBy("dept").get().then((function(t){t.forEach((function(t){var a={id:t.id,employee_id:t.data().employee_id,name:t.data().name,email:t.data().email,dept:t.data().dept,per_hour_salary:t.data().per_hour_salary};e.employees.push(a)}))}))}},x=E,P=(a("e7f9"),Object(u["a"])(x,v,h,!1,null,"51033b94",null)),q=P.exports,$={name:"home",components:{Dashboard:q}},k=$,O=Object(u["a"])(k,m,f,!1,null,null,null),j=O.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"new-employee"}},[a("h3",[e._v("Employee")]),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.saveEmployee()}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],staticClass:"validate",attrs:{id:"empid",type:"text"},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}}),a("label",{attrs:{for:"empid"}},[e._v("Employee ID#")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),a("label",[e._v("Employee Name")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),a("label",[e._v("Email")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{type:"text",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}}),a("label",[e._v("Department")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.per_hour_salary,expression:"per_hour_salary"}],attrs:{type:"text",required:""},domProps:{value:e.per_hour_salary},on:{input:function(t){t.target.composing||(e.per_hour_salary=t.target.value)}}}),a("label",[e._v("Per Hour Salary")])])]),a("div",{staticClass:"row"},[a("button",{staticClass:"btn blue hoverable",attrs:{type:"submit"}},[e._v(" Create Employee ")]),a("router-link",{staticClass:"btn red hoverable right",attrs:{to:"/"}},[e._v("Cancel")])],1)])])])},U=[],L={name:"new-employee",data:function(){return{employee_id:null,name:null,email:null,dept:null,per_hour_salary:null}},methods:{saveEmployee:function(){var e=this;C.collection("Users").add({employee_id:this.employee_id,name:this.name,email:this.email,dept:this.dept,per_hour_salary:this.per_hour_salary,created_At:Date().toLocaleUpperCase()}).then((function(){e.$router.push("/")})).catch((function(e){console.log(e)}))}}},N=L,S=Object(u["a"])(N,D,U,!1,null,"70ad189c",null),A=S.exports,I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"edit-employee"}},[a("h3",[e._v("Edit Employee")]),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.editEmployee()}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],staticClass:"validate",attrs:{id:"empid",type:"text",disabled:""},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}}),a("label",{attrs:{for:"empid"}},[e._v("Employee ID#")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),a("label",[e._v("Employee Name")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),a("label",[e._v("Email")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{type:"text",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}}),a("label",[e._v("Department")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.per_hour_salary,expression:"per_hour_salary"}],attrs:{type:"text",required:""},domProps:{value:e.per_hour_salary},on:{input:function(t){t.target.composing||(e.per_hour_salary=t.target.value)}}}),a("label",[e._v("Per Hour Salary")])])]),a("div",{staticClass:"row"},[a("button",{staticClass:"btn grey hoverable",attrs:{type:"submit"}},[e._v(" Edit Employee ")]),a("router-link",{staticClass:"btn red hoverable right",attrs:{to:"/"}},[e._v("Cancel")])],1)])])])},T=[],F={name:"edit-employee",data:function(){return{employee_id:null,name:null,email:null,dept:null,per_hour_salary:null}},beforeRouteEnter:function(e,t,a){C.collection("Users").where("employee_id","==",e.params.employee_id).get().then((function(e){e.forEach((function(e){a((function(t){t.employee_id=e.data().employee_id,t.name=e.data().name,t.email=e.data().email,t.dept=e.data().dept,t.per_hour_salary=e.data().per_hour_salary}))}))}))},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;C.collection("Users").where("employee_id","==",this.$route.params.employee_id).get().then((function(t){t.forEach((function(t){e.employee_id=t.data().employee_id,e.name=t.data().name,e.email=t.data().email,e.dept=t.data().dept,e.per_hour_salary=t.data().per_hour_salary}))}))},editEmployee:function(){var e=this;C.collection("Users").where("employee_id","==",this.$route.params.employee_id).get().then((function(t){t.forEach((function(t){t.ref.update({employee_id:e.employee_id,name:e.name,dept:e.dept,email:e.email,per_hour_salary:e.per_hour_salary}).then((function(){e.$router.push({name:"view-employee",params:{employee_id:e.employee_id}})})).catch((function(){}))}))}))}}},G=F,H=Object(u["a"])(G,I,T,!1,null,"de480394",null),M=H.exports,B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"view-employee"}},[a("ul",{staticClass:"collection with-header"},[a("li",{staticClass:"collection-header"},[a("h4",[e._v(e._s(e.name))])]),a("li",{staticClass:"collection-item"},[e._v("Employee ID# :"+e._s(e.employee_id)+" ")]),a("li",{staticClass:"collection-item"},[e._v("Employee Name : "+e._s(e.name))]),a("li",{staticClass:"collection-item"},[e._v("Employee Email : "+e._s(e.email))]),a("li",{staticClass:"collection-item"},[e._v("Employee Department : "+e._s(e.dept))]),a("li",{staticClass:"collection-item"},[e._v("Employee Per Hour Salary : "+e._s(e.per_hour_salary))])]),a("button",{staticClass:"btn red left hoverable",on:{click:function(t){return e.deleteemployee()}}},[e._v("Delete")]),a("router-link",{staticClass:"btn grey hoverable right",attrs:{to:"/"}},[e._v("Back")]),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large #b388ff deep-purple accent-1",attrs:{to:{name:"edit-employee",params:{employee_id:this.employee_id}}}},[a("i",{staticClass:"fa fa-pencil"})])],1)],1)},R=[],z={name:"view-employee",data:function(){return{employee_id:null,name:null,dept:null,email:null,per_hour_salary:null}},beforeRouteEnter:function(e,t,a){C.collection("Users").where("employee_id","==",e.params.employee_id).get().then((function(e){e.forEach((function(e){a((function(t){t.employee_id=e.data().employee_id,t.name=e.data().name,t.email=e.data().email,t.dept=e.data().dept,t.per_hour_salary=e.data().per_hour_salary}))}))}))},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;C.collection("Users").where("employee_id","==",this.$route.params.employee_id).get().then((function(t){t.forEach((function(t){e.employee_id=t.data().employee_id,e.name=t.data().name,e.email=t.data().email,e.dept=t.data().dept,e.per_hour_salary=t.data().per_hour_salary}))}))},deleteemployee:function(){var e=this;confirm("Are you Sure ?")&&C.collection("Users").where("employee_id","==",this.$route.params.employee_id).get().then((function(t){t.forEach((function(t){t.ref.delete(),e.$router.push("/")}))}))}}},K=z,W=Object(u["a"])(K,B,R,!1,null,"6a648d3b",null),J=W.exports,Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m8 offset-m2"},[a("div",{staticClass:"login card-panel #b388ff deep-purple accent-1 white-text center"},[a("h3",[e._v("Login")]),a("form",[a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[e._v("email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"Email ....",id:"email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[e._v("lock")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"password",placeholder:"Password ...",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),a("button",{staticClass:"btn btn-large btn-extended grey lighten-4 black-text",on:{click:function(t){return e.login()}}},[e._v("Login")])])])])])])])},Z=[],Q={name:"login",data:function(){return{email:"",password:""}},methods:{login:function(){var e=this;""==this.email&&alert("Please Enter Email First..."),""==this.password&&alert("Please Enter Password First..."),b.a.auth().signInWithEmailAndPassword(this.email,this.password).then((function(){alert("Login Successfull"),e.$router.go({path:e.$router.path})})).catch((function(e){alert(e.message)}))}}},V=Q,X=Object(u["a"])(V,Y,Z,!1,null,"33fee579",null),ee=X.exports,te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m8 offset-m2"},[a("div",{staticClass:"signup card-panel #eceff1 blue-grey lighten-1  center"},[a("h3",[e._v("SignUp")]),a("form",[a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[e._v("email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"Email ....",id:"email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[e._v("lock")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"password",placeholder:"Password ...",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),a("button",{staticClass:"btn btn-large btn-extended grey lighten-4 black-text",on:{click:function(t){return e.register()}}},[e._v("Signup")])])])])])])])},ae=[],ie={name:"signup",data:function(){return{email:null,password:null}},methods:{register:function(){var e=this;""==this.email&&alert("Please Enter Email First..."),""==this.password&&alert("Please Enter Password First..."),b.a.auth().createUserWithEmailAndPassword(this.email,this.password).then((function(){alert("Account Created For ".concat(e.email)),e.$router.go({path:e.$router.path})})).catch((function(e){alert(e.message)}))}}},re=ie,ne=Object(u["a"])(re,te,ae,!1,null,"15a4011c",null),oe=ne.exports;i["a"].use(p["a"]);var se=[{path:"/",name:"home",component:j,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:ee,meta:{requiresGuest:!0}},{path:"/signup",name:"signup",component:oe,meta:{requiresGuest:!0}},{path:"/about",name:"about",meta:{requiresGuest:!0},component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/new",name:"new-employee",component:A,meta:{requiresAuth:!0}},{path:"/edit/:employee_id",name:"edit-employee",component:M,meta:{requiresAuth:!0}},{path:"/:employee_id",name:"view-employee",component:J,meta:{requiresAuth:!0}}],le=new p["a"]({routes:se});le.beforeEach((function(e,t,a){e.matched.some((function(e){return e.meta.requiresAuth}))?b.a.auth().currentUser?a():a({path:"/login",query:{redirect:e.fullPath}}):e.matched.some((function(e){return e.meta.requiresGuest}))&&b.a.auth().currentUser?a({path:"/",query:{redirect:e.fullPath}}):a()}));var ue,ce=le;i["a"].config.productionTip=!1,b.a.auth().onAuthStateChanged((function(){ue||(ue=new i["a"]({router:ce,render:function(e){return e(d)}}).$mount("#app"))}))},"85ec":function(e,t,a){},d178:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"navbar"}},[i("nav",[i("div",{staticClass:"nav-wrapper #b388ff deep-purple accent-1"},[i("router-link",{staticClass:"brand-logo center",attrs:{to:"/"}},[i("img",{staticClass:"img",attrs:{src:a("054b"),width:"50",height:"50"}})]),i("ul",{staticClass:"left"},[e.isLoggedin?i("li",[i("button",{staticClass:"btn default"},[e._v(e._s(e.CurrentUser))])]):e._e()]),i("ul",{staticClass:"right hide-on-med-and-down",attrs:{id:"nav-mobile"}},[e.isLoggedIn?e._e():i("li",[i("router-link",{attrs:{to:"/login"}},[e._v("Login")])],1),e.isLoggedIn?e._e():i("li",[i("router-link",{attrs:{to:"/signup"}},[e._v("Signup")])],1),e.isLoggedIn?i("li",[i("button",{staticClass:"btn default",attrs:{id:"logoutbtn"},on:{click:function(t){return e.logout()}}},[e._v("Logout")])]):e._e()])],1)])])},r=[],n=a("8aa5"),o=a.n(n),s={name:"navbar",data:function(){return{isLoggedIn:!1,CurrentUser:!1}},created:function(){o.a.auth().currentUser&&(this.isLoggedIn=!0,this.CurrentUser=o.a.auth().currentUser.email)},methods:{logout:function(){var e=this;setTimeout((function(){o.a.auth().signOut().then((function(){alert("You Logged Out Successfully"),e.$router.go({path:e.$router.path})})).catch((function(e){alert(e.message)}))}),3e3)}}},l=s,u=a("2877"),c=Object(u["a"])(l,i,r,!1,null,"070be84f",null);t["a"]=c.exports},e7f9:function(e,t,a){"use strict";var i=a("275f"),r=a.n(i);r.a}});
//# sourceMappingURL=app.eb04345a.js.map