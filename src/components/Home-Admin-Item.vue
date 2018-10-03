<template>
    <b-list-group-item style="border-radius: 20px" :class="styler" :to="this.Paths.admin"><h5><strong>{{this.Paths.value}}</strong></h5></b-list-group-item>
</template>

<script>
import { db } from '../Config/firebase';

export default {
    name: 'Home-Admin-Item',
    props: ['item','index'],
    data: function() {
        return {
            sty: 0,
           Base: " my-2 text-light"
        }//RETURN
    },//DATA Testing
    firebase: function() {
        return {
        NetworksObj: {
                source:  db.ref('Networks/' + this.item ),
                asObject: true
            },//NETWORKOBJ
        Paths: {
                source:  db.ref('Navigation/' + this.item),
                asObject: true
            }//PATHS
        }//RETURN
    },//FIREBASE
computed:{
        styler: function(){
            if(this.index%2==0){return 'bg-info' + this.Base}
            else{return 'bg-secondary' + this.Base}
        }//STYLER
    },//COMPUTED
}//EXPORT
</script>
