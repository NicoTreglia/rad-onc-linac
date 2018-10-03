<template>
  <div>
    <b-row class="text-center text-info mb-5">
      <b-col class="col-3"/>
      <b-col class="col-6"><h1>Please Select a Location:</h1></b-col>
      <b-col class="col-3"/> 
    </b-row>
    <div class="col-7 mx-auto">
      <b-list-group style="border-radius: 20px">
        <!-- Links to all Locations with Linac Carts -->
        <HomeAdminItem style="border-radius: 20px" v-for="(item,i) in this.Networks" :item="item" :index="i" :key="item"/>
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


