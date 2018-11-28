<template>
    <!--Will Create Admin items to navigate to the individual site that can have its status changed-->
    <b-list-group-item style="border-radius: 20px" :class="styler" :to="this.Paths.admin"><h5><strong>{{this.Paths.value}}</strong></h5></b-list-group-item>
</template>

<script>
// Connection to generic Database Instance
import { db } from '../Config/firebase';

export default {
    name: 'Home-Admin-Item',
    props: ['item','index'], //Data consumed by its parent view, Home-Admin
    data: function() {
        return {
            sty: 0,
            Base: " my-2 text-light" //Creates the base style for the items
        }//RETURN
    },//DATA Testing
    firebase: function() {
        return {
        NetworksObj: { // --> Connecting to the items networks object holding its status
                source:  db.ref('Networks/' + this.item ),
                asObject: true
            },//NETWORKOBJ
        Paths: { // --> Connecting to the items navigation object holding its paths
                source:  db.ref('Navigation/' + this.item),
                asObject: true
            }//PATHS
        }//RETURN
    },//FIREBASE
computed:{
        styler: function(){
            if(this.index%2==0){return 'bg-info' + this.Base} //Turns item light blue if even
            else{return 'bg-secondary' + this.Base} //turns item grey if odd
        }//STYLER
    },//COMPUTED
}//EXPORT
</script>
