<template>
    <div>
        <h1>Badge Editor</h1>
        <b-container class="form-container">
            <b-row class="form-top">
                <b-col></b-col>
            </b-row>
            <b-row align-v="center">
                <b-col sm="8">
                    <b-form>
                        <b-form-group id="1" label="Title:" label-for="badge-title" label-cols-sm="2">
                            <b-form-input id="badge-title" v-model="$v.badge.title.$model"
                                :state="$v.badge.title.$dirty ? !$v.badge.title.$error : null"
                                placeholder="Enter badge title">
                            </b-form-input>
                        </b-form-group>

                        <b-form-group id="5" label="Icon URL:" label-for="badge-icon" label-cols-sm="2">
                            <b-form-input id="badge-icon" type="url"
                                v-model="$v.badge.imageUri.$model"
                                :state="$v.badge.imageUri.$dirty ? !$v.badge.imageUri.$error : null"
                                placeholder="Enter URL to badge icon">
                            </b-form-input>
                        </b-form-group>

                        <b-form-group id="2" label="Description:" label-for="badge-description" label-cols-sm="2">
                            <b-form-textarea required id="badge-description" v-model="badge.description"
                                placeholder="Enter badge description">
                            </b-form-textarea>
                        </b-form-group>

                        <b-form-group id="3" label="Rewardability:" label-for="badge-rewardablity" label-cols-sm="2">
                            <b-form-checkbox id="earnable" v-model="badge.canBeEarnedWithPoints" 
                                :unchecked-value="false" :value="true">
                                Earnable via points
                            </b-form-checkbox>
                            <b-form-input v-if="badge.canBeEarnedWithPoints"
                                id="badge-threshold" v-model="badge.threshold"
                                type="number" required placeholder="Enter point threshold to earn badge">
                            </b-form-input>
                        </b-form-group>

                        <b-form-group id="4" label="Discord Role:" label-for="discord-role" label-cols-sm="2">
                            <b-form-select id="discord-role" v-model="selectedRole">
                                <option :value="{}">Select a Discord Role to associate with this badge</option>
                                <option v-for="role in unassignedRoles" v-bind:key="role.id"> {{role.name}} </option>
                            </b-form-select>
                        </b-form-group>

                    </b-form>
                </b-col>
                <b-col class="icon" sm="4" id="icon-column"> 
                    <b-img :src="badgeIcon" fluid alt="Invalid image reference - check URL"
                        width="200" height="200">
                    </b-img>
                </b-col>
            </b-row>
            <b-row class="form-bottom">
                <b-col></b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { BForm, BFormInput, BFormGroup, BFormCheckbox, BFormSelect } from 'bootstrap-vue'
import { BContainer, BRow, BCol, BButton } from 'bootstrap-vue'
import { required, minLength, url } from 'vuelidate/lib/validators'
export default {
    name: 'Badge',
    mixins: [validationMixin],
    data() {
        return {
            badge: { 
                title: null,
                imageUri: null,
                description: null,
                canBeEarnedWithPoints: null,
                threshold: 0,
            },
            selectedRole: {}
        }
    },
    props: {
        id: Number
    },
    validations: {
        badge: {
            title: {
                required,
                minLength: minLength(5)
            },
            imageUri: {
                required,
                url
            }
        },
        selectedRole: {
            required
        }
    },
    components: {
        BForm, BFormInput, BFormGroup, 
        BFormCheckbox, BFormSelect,
        BContainer, BRow, BCol
    },
    created: function() {
        //this.$store.dispatch('fetchBadges')
    },
    computed: {
        badgeIcon: function() {
            return (this.badge.imageUri != null && !this.$v.badge.imageUri.$error) 
                ? this.badge.imageUri 
                : "https://icon-library.net/images/placeholder-image-icon/placeholder-image-icon-2.jpg"
        },
        unassignedRoles: function() {
            return this.$store.getters.getUnassignedRoles
        }
    }
}
</script>

<style scoped>

.icon {
    border-radius: 25px;
    background: rgb(34, 34, 34);
    padding: 4px;
    color: #FAB4B2;
}
.form-container {
    border-radius: 25px 25px 25px 25px;
    background:#B5E9F6;
}
.form-top {
    padding: 10px;
}
.form-bottom {
    height: 5px;
}

</style>