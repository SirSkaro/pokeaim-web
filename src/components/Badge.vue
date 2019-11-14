<template>
    <h1>Badge Page</h1>
</template>

<script>
import { BContainer, BRow, BCol, BButton } from 'bootstrap-vue'
export default {
    name: 'Badge',
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