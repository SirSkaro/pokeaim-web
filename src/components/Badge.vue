<template>
    <div>
        <h1>Badge Editor</h1>
        <b-container class="content">
            <b-row align-v="center">
                <b-col sm="8">
                    <b-form>
                        <b-form-group id="1" label="Title:" label-for="badge-title" label-cols-sm="2">
                            <b-form-input id="badge-title" v-model="badge.title"
                                required placeholder="Enter badge title">
                            </b-form-input>
                        </b-form-group>
                        <b-form-group id="5" label="Icon URL:" label-for="badge-icon" label-cols-sm="2">
                            <b-form-input id="badge-icon" v-model="badge.imageUri" type="url"
                                required placeholder="Enter URL to badge icon">
                            </b-form-input>
                        </b-form-group>
                        <b-form-group id="2" label="Description:" label-for="badge-description" label-cols-sm="2">
                            <b-form-textarea required id="badge-description" v-model="badge.description"
                                placeholder="Enter badge description">
                            </b-form-textarea>
                        </b-form-group>
                        <b-form-group id="3" label="Rewardability:" label-for="badge-rewardablity" label-cols-sm="2">
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
                        <b-form-group id="4" label="Discord Role:" label-for="discord-role" label-cols-sm="2">
                            <b-form-select id="discord-role" v-model="badge.discordRoleId" :options="options"></b-form-select>
                        </b-form-group>
                    </b-form>
                </b-col>
                <b-col class="icon" sm="4" id="icon-column"> 
                    <b-img :src="badgeIcon" fluid alt="No image - check URL"
                        width="200" height="200">
                    </b-img>
                </b-col>
            </b-row>
        </b-container>
    </div>
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
        badgeIcon: function() {
            return this.badge.imageUri ? this.badge.imageUri 
                : "https://icon-library.net/images/placeholder-image-icon/placeholder-image-icon-2.jpg"
        }
    }
}
</script>

<style scoped>

.icon {
    background: rgb(34, 33, 34);
}
.content {
    background:#B5E9F6;
    border-style: solid;
    border-width: 0px 0px 1px 0px;
}
.actions {
    border-radius: 0px 25px 25px 0px;
}

</style>