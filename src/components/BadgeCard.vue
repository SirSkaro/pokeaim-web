<template>
    <b-container fluid>
        <b-row>
            <b-col sm="1"> </b-col>
            <b-col sm="1" class="icon"> <img :src="badge.imageUri" height="50" width="50"/> </b-col>
            <b-col sm="2" class="content"> {{ badge.title }} </b-col>
            <b-col sm="4" class="content"> {{ badge.description }} </b-col> 
            <b-col sm="1" class="content"> {{ threshold }} points </b-col>
            <b-col sm="2" class="content actions"> button </b-col>
            <b-col sm="1"> </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { BContainer, BRow, BCol } from 'bootstrap-vue'
export default {
    name: 'BadgeCard',
    props: {
        id: Number
    },
    components: {
        BContainer,
        BRow,
        BCol
    },
    computed: {
        badge: function() {
            return this.$store.getters.getBadge(this.id)
        },
        threshold: function() {
            if(this.badge.canBeEarnedWithPoints) {
                return this.badge.pointThreshold
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
    background: rgb(156, 155, 156); 
    border-style: solid;
    border-width: 0px 0px 1px 0px;
}
.content:hover {
    background: rgb(209, 206, 206);
}
.actions {
    border-radius: 0px 25px 25px 0px;
}

</style>