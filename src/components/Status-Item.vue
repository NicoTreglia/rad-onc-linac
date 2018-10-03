<template>
<b-container class="content-center">
    <b-row :class="styler" style="border-radius: 20px">
        <b-col class="border border-info bg-light mx-3" style="border-radius: 20px"><strong><h4>{{status.Name}}</h4></strong></b-col>
        <b-col class="border border-info bg-light mx-3" style="border-radius: 20px"><strong><h4>{{status.Description}}</h4></strong></b-col>
    </b-row>
</b-container>
</template>

<script>
export default {
    name: 'Status-Item',
    props: ['status'],
    data: function() {
        return {
             Base: "justify-content-md-center p-3 m-3 bg-",//for use in styler computed class
        }//RETURN
    },//DATA
     computed:{
        styler: function(){  //Selects color of row based on currect machine status
            if(this.status.Status <= 30){ return this.Base + "success";}
            else if(this.status.Status <= 90){ return this.Base + "warning";}
            else if(this.status.Status <= 120){ return this.Base + "danger";}
            else if(this.status.Status <= 1440){ return this.Base + "dark";}
            else if(this.status.Status <= 1441){ return this.Base + "secondary";}
        }//STYLER
    },//COMPUTED
}//EXPORT
</script>
