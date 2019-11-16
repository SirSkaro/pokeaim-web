<template>
    <b-container>
        <h1>Badge Editor</h1>
        <b-form>
            <b-form-group id="1" label="Title:" label-for="badge-title" label-cols-sm="4">
                <b-form-input id="badge-title" v-model="badge.title"
                    required placeholder="Enter badge title">
                </b-form-input>
            </b-form-group>
            <b-form-group id="2" label="Description:" label-for="badge-description" label-cols-sm="4">
                <b-form-textarea required id="badge-description" v-model="badge.description"
                    placeholder="Enter badge description">
                </b-form-textarea>
            </b-form-group>
            <b-form-group id="3" label="Rewardability:" label-for="badge-rewardablity" label-cols-sm="4">
                <b-form-checkbox id="earnable"
                    v-model="badge.canBeEarnedWithPoints" 
                    :unchecked-value="false" :value="true">
                    Earnable via points
                </b-form-checkbox>
                <b-form-input v-if="badge.canBeEarnedWithPoints"
                    id="badge-threshold" v-model="badge.threshold"
                    type="number" required placeholder="Enter point threshold to earn badge">
                </b-form-input>
            </b-form-group>
             <b-form-group id="4" label="Discord Role:" label-for="discord-role" label-cols-sm="4">
                <b-form-select id="discord-role" v-model="badge.discordRoleId" :options="options"></b-form-select>
            </b-form-group>
        </b-form>
    </b-container>
</template>

<script>
import { BForm, BFormInput, BFormGroup, BFormTextArea, BFormCheckbox, BFormSelect } from 'bootstrap-vue'
import { BContainer, BRow, BCol, BButton } from 'bootstrap-vue'
import { BImage } from 'bootstrap-vue'
export default {
    name: 'Badge',
    data() {
        return {
            badge: {},
            options: ['foo', 'bar']
        }
    },
    props: {
        id: Number
    },
    components: {
        BForm, BFormInput, BFormGroup, 
        BFormTextArea, BFormCheckbox, BFormSelect,
        BContainer, BRow, BCol, BImage
    },
    computed: {
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