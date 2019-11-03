<template>
    <div>
        <h1>Badges</h1>
        <BadgeCard v-for="badge in badges" v-bind:key="badge.id" v-bind:id="badge.id"/>
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
h1 {
  color: #FAB4B2;
}
</style>