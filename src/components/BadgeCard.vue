<template>
    <div>
        {{ badge.title }} <br/>
    </div>
</template>

<script>
export default {
    name: 'BadgeCard',
    props: {
        id: Number
    },
    computed: {
        badge: function() {
            return this.$store.getters.getBadge(this.id)
        }
    }
}
</script>

<style scoped>
    
</style>