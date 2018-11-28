<template>
  <div>
    <b-row class="text-center text-info">
      <b-col class="col-3"/>
      <b-col class="col-6"><h1>Please Select a Location:</h1></b-col>
      <b-col class="col-3"></b-col> 
    </b-row>
    <div class="col-7 mx-auto">
      <b-list-group style="border-radius: 20px">
        <!-- Links to all Locations with Linac Carts -->
        <!-- Populated using the Home-Item -->
        <HomeItem style="border-radius: 20px" v-for="(item,i) in this.Networks" :item="item" :index="i" :key="item"/>
      </b-list-group>
    </div>
  </div>
</template>

<script>
import HomeItem from '@/components/Home-Item.vue'; //Imported from Components Folder
export default {
  name: 'home',
  data () {
    return { 
      Networks: ['YSC','Trumbull','LM','SMC','Hamden','GH']
    }//RETURN
  },//DATA
  components: {
    HomeItem
  }//COMPONENTS
}//EXPORT
</script>


