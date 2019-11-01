<template>
    <div class="card">
        <div class="image-tag"> 
            <img :src="badge.imageUri" height="50" width="50"/> 
        </div>
        <div class="card-content">
            {{ badge.title }}
        </div>
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
.image-tag {
    border-radius: 25px 0px 0px 25px;
    background: rgb(34, 33, 34);
    float: left;
    padding: 8px;
}
.card-content {
    background: rgb(156, 155, 156);
    height: 70px;
    overflow: hidden;
}
.card {
    border-style: solid;
    border-width: 0px 0px 2px 0px;
    overflow: hidden;
    border-radius: 25px 0px 0px 25px;
    width: 75%;
    margin:0 auto;
}
</style>