<template>
    <b-container class="content-center">
        <b-row :class="styler" style="border-radius: 20px">
            <!--Creating item for admin to edit status of machine(s) at selected site-->
            <b-col class="border border-info bg-light mx-3" style="border-radius: 20px"><h4><strong>{{status.Name}}</strong></h4></b-col>
            <b-col class="border border-info bg-light mx-3" style="border-radius: 20px">
                <b-select v-model="State">
                    <!--Listing possible choices for change in status-->
                    <option disabled value="">Please select one</option>
                    <option v-for="status in Status" :key="status.key">{{status.value}}|{{status.name}}</option>
                </b-select>
            </b-col>
            <!--Button to confirm status change-->
            <b-col><b-button variant="primary sm" @click="ChangeStatus(status.Name,State)">UPDATE</b-button></b-col>
        </b-row>

    </b-container>
</template>

<script>
import { db } from '../Config/firebase';
// Connection to generic Database Instance
export default {
    name: 'Status-Admin-Item',
    props: ['status','loc'], //Data consumed by its parent view, Status-Admin
    data: function() {
        return {
            State:'',
            Base: "justify-content-md-center p-3 m-3 bg-", //Creates the base style for the items
            Status: [ //Possible Status Values to update with
                {name:'On Time',value:'0'},{name:'15 Minutes',value:'15'},{name:'30 Minutes',value:'30'},
                {name:'45 Minutes',value:'45'},{name:'1 Hour',value:'60'},{name:'1 Hour 15 Minutes',value:'75'},
                {name:'1 Hour 30 Minutes',value:'90'},{name:'1 Hour 45 Minutes',value:'105'},
                {name:'2 Hours',value:'120'},{name:'Down All Day',value:'1440'},{name:'Out of Clinic',value:'1441'}
            ]//STATUS
        }//RETURN
    },//DATA
    computed:{
        styler: function(){ //Selects color of row based on currect machine status
            if(this.status.Status <= 30){ return this.Base + "success";} //Green
            else if(this.status.Status <= 90){ return this.Base + "warning";} //Yellow
            else if(this.status.Status <= 120){ return this.Base + "danger";} //Red
            else if(this.status.Status <= 1440){ return this.Base + "dark";} //Black
            else if(this.status.Status <= 1441){ return this.Base + "secondary";} //Grey
        }//STYLER
    },//COMPUTED
    methods:{
        ChangeStatus: function(Name,State){ // (Triggered by update buttton) --> Will update the status of selected machine at selected location
            db.ref('Networks/' + this.$route.params.ad + '/' + this.loc).update({Status: State.split("|")[0],Description:State.split("|")[1]})
            db.ref('Logs').push({'Time_Stamp' : Date(), 'Info':'UPDATING: Delivery Network:' + this.$route.params.ad + ', Machine: ' + Name +', New Status:' + this.State})
        }//CHANGESTATUS
    }//METHODS
}//EXPORT
</script>
