<template>
    <b-card class="content">
        <b-card-title class="mb-2">{{badge.title}}</b-card-title>
        <b-card-img class="icon mb-3" :src="badge.imageUri"/>
        <b-card-text class="mb-0">{{threshold}}</b-card-text>
        <template v-slot:footer>
            <b-button variant="info"> <v-icon name="eye"/> </b-button>
            <b-button :to="editUrl" variant="primary"> <v-icon name="edit"/> </b-button> 
            <b-button variant="danger" @click="deleteBadge(badge)"> <v-icon name="trash"/> </b-button>
        </template>
    </b-card>
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
        },
        editUrl: function() {
            return "/badge/"+this.badge.id
        },
        threshold: function() {
            if(this.badge.canBeEarnedWithPoints) {
                return this.badge.pointThreshold + 
                    (this.badge.pointThreshold > 1 ? ' points' : ' point')
            } else {
                return 'Reward Only'
            }
        }
    },
    methods: {
        deleteBadge: function(badge) {
            this.$store.dispatch('deleteBadge', badge)
        }
    }
}
</script>

<style scoped>

.icon {
    border-radius: 25px;
    background: rgb(34, 34, 34);
}
.content {
    background:#B5E9F6;
    border-radius: 25px;
}
.content:hover {
    background: rgb(181, 215, 246);
}

</style>