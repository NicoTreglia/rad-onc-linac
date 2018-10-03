<template>
  <div id="app">
    <b-navbar>
      <b-button variant="info" v-if="this.$route.name!='home'" to="/"><h4>Locations</h4></b-button>
      <b-button variant="info" to="/Admin"><h4>Admin</h4></b-button>
    </b-navbar>
    <img Class="mt-5" alt="YNHH Logo" src="./assets/logo.png">
    <!-- <b-jumbotron class="text-center" style="height: 150px">
      <template slot="header">Linac Status</template>
    </b-jumbotron> -->
    <router-view/>   
    <b-card-footer>{{date}}</b-card-footer>
  </div> 
</template>
<script>
import { Midnight, Switch, db } from './Config/firebase';
export default {
  data: function() {
    return {
      timer:'',
      date: Date(),
    }
  },
  firebase:{
    Midnight: {
      source:  Midnight,
      asObject: true
    },//NetworkObj
    Switch: {
      source:  Switch,
      asObject: true
    }//NetworkObj
  },//firebase
  created: function(){
    this.timer = setInterval(this.getTime,30000)
    var d = parseInt(Date().split(" ")[2]);
    if(this.Midnight['value'] != d){
      Midnight.update({value: d})
      this.Reset()
    }
  },
  beforeDestroy: function() {
    clearInterval(this.timer)
  },
  methods:{
    getTime: function() {
        this.date = Date();
    },
    Reset: function(){
    for(var loc in this.Switch){
      if(loc != '.key'){
        for(var n in this.Switch[loc]){
          db.ref('Networks/' + loc + '/' + n).update({Status: 0, Description: "On Time"})
        }
      }
    }
    db.ref('Logs').push({'Time_Stamp' : Date(), 'Info':'RESETING: ALL Delivery Network to ON TIME'})
    }//ChangeStatus
  },

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
