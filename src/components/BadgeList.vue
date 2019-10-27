<template>
    <div>
        <h1>Badges</h1>
        <div v-for="badge in badges" v-bind:key="badge.id">
        {{ badge.title }} <br/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BadgeList',
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
    
</style>