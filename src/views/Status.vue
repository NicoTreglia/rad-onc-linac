<template>
  <b-container class="content-center">
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
        source:  db.ref('Networks'),
        asObject: true
      },//NETWORKOBJ
      Navigation:{
        source: db.ref('Navigation'),
        asObject: true
      }//NAVIGATION
  }//FIREBASE
}//EXPORT
</script>

