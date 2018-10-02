<template>
<div>
    <b-list-group-item style="border-radius: 20px" :class="styler" :to="this.Paths.path"><strong>{{this.Paths.value}}</strong></b-list-group-item>
</div>
</template>

<script>
import { db } from '../Config/firebase';
export default {
    name: 'Home-Item',
    props: ['item'],
    data: function() {
        return {
            sty: 0,
            Base: " my-2 text-light",
        }//RETURN
    },//DATA
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
            for(var Obj in this.NetworksObj){
                if(this.sty < parseInt(this.NetworksObj[Obj].Status)){ 
                    // eslint-disable-next-line
                    this.sty = parseInt(this.NetworksObj[Obj].Status);      
                }
            } 
            if(this.sty <= 30){ return "bg-success" + this.Base;}
            else if(this.sty <= 90){ return "bg-warning" + this.Base;}
            else if(this.sty <= 120){ return "bg-danger" + this.Base;}
            else if(this.sty <= 1440){ return "bg-dark" + this.Base;}
            else if(this.sty <= 1441){ return "bg-secondary" + this.Base;}  
        }//STYLER
    },//COMPUTED
}//EXPORT
</script>
