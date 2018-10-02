<template>
  <b-container class="content-center">
    <h3 class="text-info">{{Network}}</h3>
    <StatusAdminItem class="col-10 font-weight" v-for="item in NetworksObj[this.$route.params.ad]" :status="item" :key="item.key"/>
    <!-- <b-row v-for="item in NetworksObj[this.$route.params.ad]" :status="item" :key="item.key">{{item}}</b-row> -->
    <b-button variant="danger" class="col-5 border border-warning" @click="Reset()">RESET ALL</b-button>
  </b-container>
</template>

<script>
import StatusAdminItem from '@/components/Status-Admin-Item.vue';
import { db } from '../Config/firebase';

export default {
  name: 'Status-Admin',
  data () {
    return { }//RETURN
  },//DATA
    computed:{
    Network: function() {
      if(this.$route.params.ad == 'GH'){ return "Smilow - Greenwich Hospital";}
      else if(this.$route.params.ad == 'Hamden'){ return "Smilow - Hamden";}
      else if(this.$route.params.ad == 'LM'){ return "Smilow - Lawerence Memorial Hospital";}
      else if(this.$route.params.ad == 'SMC'){ return "Smilow - Shoreline Medical Center";}
      else if(this.$route.params.ad == 'Trumbull'){ return "Smilow - Trumbull";}
      else if(this.$route.params.ad == 'YSC'){ return "Smilow - New Haven";}
    }//NETWORK
  },//COMPUTED
  components:{
      StatusAdminItem
  },//COMPONENT
  firebase: function() {
    return {
      NetworksObj: {
        source:  db.ref('Networks'),
        asObject: true
      }//NETWORKOBJ
    }//RETURN
  },//FIREBASE
  methods:{
      Reset: function(){
        for(var Obj in this.NetworksObj[this.$route.params.ad]){
          db.ref('Networks/' + this.$route.params.ad + '/' + Obj).update({Status: 0, Description: "On Time"})
          }
        db.ref('Logs').push({'Time_Stamp' : Date(), 'Info':'UPDATING: Delivery Network:' + this.$route.params.ad + ' , ALL Linac have been RESET to On Time'})
      }//CHANGESTATUS
  }//METHODS
}//EXPORT
</script>

