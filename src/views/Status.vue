<template>
  <b-container class="content-center">
    <h3 class="text-info">{{Network}}</h3>
    <h5 class="text-info">FOR HELP: (203)-200-2001</h5>
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
  computed:{
    Network: function() {
      if(this.$route.params.id == 'GH'){ return "Smilow - Greenwich Hospital";}
      else if(this.$route.params.id == 'Hamden'){ return "Smilow - Hamden";}
      else if(this.$route.params.id == 'LM'){ return "Smilow - Lawerence Memorial Hospital";}
      else if(this.$route.params.id == 'SMC'){ return "Smilow - Shoreline Medical Center";}
      else if(this.$route.params.id == 'Trumbull'){ return "Smilow - Trumbull";}
      else if(this.$route.params.id == 'YSC'){ return "Smilow - New Haven";}
    }//NETWORK
  },//COMPUTED
  components:{
      StatusItem
  },//COMPONENT
  firebase:{
      NetworksObj: {
        source:  db.ref('Networks'),
        asObject: true
      }//NETWORKOBJ
  }//FIREBASE
}//EXPORT
</script>

