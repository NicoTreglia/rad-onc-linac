<template>
  <b-container class="content-center">
    <!-- Links to all Locations with Linac Carts -->
    <!-- Populated using the Status-Item -->
    <h1 class="text-info">{{Navigation[this.$route.params.ad].value}}</h1>
    <StatusAdminItem class="col-10 font-weight" v-for="(item,i) in NetworksObj[this.$route.params.ad]" :status="item" :loc="i" :key="item.key"/>
    <b-button variant="danger" class="col-5 border border-warning" @click="Reset()">RESET ALL</b-button>
  </b-container>
</template>

<script>
// 
import StatusAdminItem from '@/components/Status-Admin-Item.vue'; 
// Connection to generic Database Instance
import { db } from '../Config/firebase';

export default {
  name: 'Status-Admin',
  data () {
    return { }//RETURN
  },//DATA
  components:{
      StatusAdminItem
  },//COMPONENT
  firebase: function() {
    return {
      NetworksObj: {
        source:  db.ref('Networks'), // --> Connecting to the items networks object holding its status
        asObject: true
      },//NETWORKOBJ
      Navigation:{
        source: db.ref('Navigation'), // --> Connecting to the navigation object holding its paths
        asObject: true
      }//NAVIGATION
    }//RETURN
  },//FIREBASE
  methods:{
      Reset: function(){ // --> Will reset all items at selected location to "On Time"
        for(var Obj in this.NetworksObj[this.$route.params.ad]){
          db.ref('Networks/' + this.$route.params.ad + '/' + Obj).update({Status: 0, Description: "On Time"})}
          db.ref('Logs').push({'Time_Stamp' : Date(), 'Info':'UPDATING: Delivery Network:' + this.$route.params.ad + ' , ALL Linac have been RESET to On Time'})
      }//CHANGESTATUS
  }//METHODS
}//EXPORT
</script>

