<template>
  <div id="app">
    <!--Hold Navigation between views and footer that shows current data/time-->
    <b-navbar>
      <b-button variant="info" v-if="this.$route.name!='home'" to="/"><h4>Locations</h4></b-button>
      <b-button variant="info" to="/Admin"><h4>Admin</h4></b-button>
    </b-navbar>
    <img Class="mt-5" alt="YNHH Logo" src="./assets/logo.png">
    <router-view/>   
    <b-card-footer>{{date}}</b-card-footer>
  </div> 
</template>
<script>
// Connection to Midnight, Switch, and generic Database Instance
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
      source:  Midnight, //Connects to Midnight Connection
      asObject: true
    },//NetworkObj
    Switch: {
      source:  Switch, //Connects to Switch Connection
      asObject: true
    }//NetworkObj
  },//firebase
  created: function() { // --> Purpose to update time stamp for the footer
    this.timer = setInterval(this.getTime,30000)
    var d = parseInt(Date().split(" ")[2]);
    if(this.Midnight['value'] != d) { // -->Will reset all the values to "On Time" on the start of a new day 
      Midnight.update({value: d})
      this.Reset()
    }
  },
  beforeDestroy: function() {
    clearInterval(this.timer) // --> Resets timer
  },
  methods:{
    getTime: function() { // --> Gets the Date
        this.date = Date();
    }, //GETTIME
    Reset: function(){ // --> Resets all locations and machines
    for(var loc in this.Switch){
      if(loc != '.key'){ for(var n in this.Switch[loc]){ db.ref('Networks/' + loc + '/' + n).update({Status: 0, Description: "On Time"})}}
      }
    db.ref('Logs').push({'Time_Stamp' : Date(), 'Info':'RESETING: ALL Delivery Network to ON TIME'})
    }//RESET
  },//METHODS
}//EXPORT
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
