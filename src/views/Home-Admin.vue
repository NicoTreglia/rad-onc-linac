<template>
  <div>
    <b-row class="text-center text-info mb-5">
      <b-col class="col-3"/>
      <b-col class="col-6"><h3>Please Select a Location to Edit It's Linac Status</h3></b-col>
      <b-col class="col-3"/> 
    </b-row>
    <div class="col-7 mx-auto">
      <b-list-group style="border-radius: 20px">
        <!-- Links to all Locations with Linac Carts -->
        <HomeAdminItem style="border-radius: 20px" v-for="item in this.Networks" :item="item" :key="item"/>
      </b-list-group>
    </div>
  </div>
</template>

<script>
import HomeAdminItem from '@/components/Home-Admin-Item.vue';
export default {
  name: 'home-admin',
  data () {
    return { 
      Networks: ['YSC','Trumbull','LM','SMC','Hamden','GH']
    }//RETURN
  },//DATA
  components: {
    HomeAdminItem
  }//COMPONENTS
}//EXPORT
</script>


