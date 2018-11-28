<template>
  <b-container class="content-center">
    <!-- Links to all Locations with Linac Carts -->
    <!-- Populated using the Status-Item -->
    <h1 class="text-info">{{Navigation[this.$route.params.id].value}}</h1>
    <h2 class="text-info">FOR HELP: {{Navigation[this.$route.params.id].contact}}</h2>
    <StatusItem class="col-8 font-weight" v-for="item in NetworksObj[this.$route.params.id]" :status="item" :key="item.key"/>
  </b-container>
</template>

<script>
import StatusItem from '@/components/Status-Item.vue';
import { db } from '../Config/firebase';

export default {
  name: 'Status',
  data () {
    return { }//RETURN
  },//DATA
  components:{
      StatusItem
  },//COMPONENT
  firebase:{
      NetworksObj: {
        source:  db.ref('Networks'), // --> Connecting to the networks object holding its status
        asObject: true
      },//NETWORKOBJ
      Navigation:{
        source: db.ref('Navigation'), // --> Connecting to the navigation object holding its paths
        asObject: true
      }//NAVIGATION
  }//FIREBASE
}//EXPORT
</script>

