<template>
    <b-container fluid>
        <b-row>
            <b-col sm="2" class="icon"> <img :src="badge.imageUri" height="50" width="50"/> </b-col>
            <b-col sm="3" class="content"> {{ badge.title }} </b-col>
            <b-col sm="2" class="content"> {{ threshold }} </b-col>
            <b-col sm="3" class="content"> {{ badge.description }} </b-col> 
            <b-col sm="2" class="content actions"> 
                <b-button variant="primary"> <v-icon name="edit"/> </b-button> 
                <b-button variant="info"> <v-icon name="eye"/> </b-button>
                <b-button variant="danger"> <v-icon name="trash"/> </b-button> 
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { BContainer, BRow, BCol, BButton } from 'bootstrap-vue'
export default {
    name: 'BadgeCard',
    props: {
        id: Number
    },
    components: {
        BContainer,
        BRow,
        BCol,
        BButton
    },
    computed: {
        badge: function() {
            return this.$store.getters.getBadge(this.id)
        },
        threshold: function() {
            if(this.badge.canBeEarnedWithPoints) {
                return this.badge.pointThreshold + 
                    (this.badge.pointThreshold > 1 ? ' points' : ' point')
            } else {
                return 'Reward Only'
            }
        }
    }
}
</script>

<style scoped>

.icon {
    border-radius: 25px 0px 0px 25px;
    background: rgb(34, 33, 34);
    float: left;
    padding: 4px;
}
.content {
    background:#B5E9F6;
    border-style: solid;
    border-width: 0px 0px 1px 0px;
}
.content:hover {
    background: #FAB4B2;
}
.actions {
    border-radius: 0px 25px 25px 0px;
}

</style>