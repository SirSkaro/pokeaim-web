<template>
    <div class="background">
        <h1>Badges</h1>
        <b-container fluid class="card-container">
            <b-row class="card-container-top">
                <b-col></b-col>
                <b-col sm="2" align-self="end">
                    <b-button to="badge" variant="success" size="md"> <v-icon name="plus"/> New Badge </b-button> 
                </b-col>
            </b-row>
            <b-row class="card-background">
                <b-col sm="2" class="mb-4" v-for="badge in badges" v-bind:key="badge.id">
                    <BadgeCard v-bind:id="badge.id"/>
                </b-col>
            </b-row>
            <b-row class="card-container-bottom">
                <b-col></b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import BadgeCard from './BadgeCard.vue'
export default {
    name: 'BadgeList',
    components: {
        BadgeCard
    },
    created: function() {
        this.$store.dispatch('fetchBadges')
    },
    computed: {
        badges: function() {
            let allBadges = this.$store.getters.getBadges
            return Object.values(allBadges)
        }
    }
}
</script>

<style scoped>

.background {
    background-color: black;
}
.card-container-top {
    background-color: black;
    border-radius: 25px 25px 0px 0px;
    padding: 5px;
}
.card-container-bottom {
    height: 25px;
    background-color: black;
    border-radius: 0px 0px 25px 25px;
}
.card-container {
    border-radius: 25px;
}
</style>