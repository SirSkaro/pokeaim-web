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
                            <b-form-invalid-feedback id="badge-title-feedback">
                                Badge title must be at least 5 characters
                            </b-form-invalid-feedback>
                        </b-form-group>

                        <b-form-group id="5" label="Icon URL:" label-for="badge-icon" label-cols-sm="2">
                            <b-form-input id="badge-icon" type="url"
                                v-model="$v.badge.imageUri.$model"
                                :state="$v.badge.imageUri.$dirty ? !$v.badge.imageUri.$error : null"
                                placeholder="Enter URL to badge icon">
                            </b-form-input>
                            <b-form-invalid-feedback id="badge-icon-feedback">
                                Please specify a valid URL
                            </b-form-invalid-feedback>
                        </b-form-group>

                        <b-form-group id="2" label="Description:" label-for="badge-description" label-cols-sm="2">
                            <b-form-textarea required id="badge-description" 
                                v-model="$v.badge.description.$model"
                                :state="$v.badge.description.$dirty ? !$v.badge.description.$error : null"
                                placeholder="Enter badge description">
                            </b-form-textarea>
                            <b-form-invalid-feedback id="badge-description-feedback">
                                Badge description must be between 10 and 2048 characters
                            </b-form-invalid-feedback>
                        </b-form-group>

                        <b-form-group id="3" label="Rewardability:" label-for="badge-rewardablity" label-cols-sm="2">
                            <b-form-checkbox id="earnable" v-model="badge.canBeEarnedWithPoints" 
                                :unchecked-value="false" :value="true"
                                @input="resetThreshold">
                                Earnable via points
                            </b-form-checkbox>
                            <b-form-input v-if="badge.canBeEarnedWithPoints"
                                id="badge-threshold" v-model="$v.badge.threshold.$model"
                                :state="$v.badge.threshold.$dirty ? !$v.badge.threshold.$error : null"
                                type="number" placeholder="Enter point threshold to earn badge">
                            </b-form-input>
                            <b-form-invalid-feedback id="badge-description-feedback">
                                Threshold must be between 1 and 2,147,483,647
                            </b-form-invalid-feedback>
                        </b-form-group>

                        <b-form-group id="4" label="Discord Role:" label-for="discord-role" label-cols-sm="2">
                            <b-form-select id="discord-role" v-model="$v.selectedRole.$model"
                                :state="$v.selectedRole.$dirty ? !$v.selectedRole.$error : null">
                                <option :value="{}">Select a Discord Role to associate with this badge</option>
                                <option v-for="role in unassignedRoles" v-bind:key="role.id"> {{role.name}} </option>
                            </b-form-select>
                            <b-form-invalid-feedback id="badge-description-feedback">
                                Please select a Discord Role
                            </b-form-invalid-feedback>
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
                <b-col sm="4" align-self="end">
                    <b-button variant="success" size="md" :disabled="$v.$invalid"> <v-icon name="save"/> Save </b-button>
                    <b-button variant="secondary" size="md"> <v-icon name="undo"/> Cancel </b-button> 
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { BForm, BFormInput, BFormGroup, BFormCheckbox, BFormSelect } from 'bootstrap-vue'
import { BContainer, BRow, BCol, BButton } from 'bootstrap-vue'
import { required, minLength, maxLength, url, requiredIf, between } from 'vuelidate/lib/validators'
export default {
    name: 'Badge',
    mixins: [validationMixin],
    data() {
        return {
            badge: { 
                title: null,
                imageUri: null,
                description: null,
                canBeEarnedWithPoints: false,
                threshold: 0,
            },
            selectedRole: {}
        }
    },
    props: {
        id: Number
    },
    validations() {
        return {
            badge: {
                title: {
                    required,
                    minLength: minLength(5)
                },
                imageUri: {
                    required,
                    url
                },
                description: {
                    required,
                    minLength: minLength(10),
                    maxLength: maxLength(2048)
                },
                threshold: {
                    requiredIf: requiredIf(function() {
                        return this.badge.canBeEarnedWithPoints
                    }),
                    between: this.badge.canBeEarnedWithPoints ? between(1, Math.pow(2,32) - 1)
                        : between(0, 0)
                }
            },
            selectedRole: {
                required
            }
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
    },
    methods: {
        resetThreshold: function(checked) {
            if(!checked) {
                this.badge.threshold = 0
            }
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
    padding: 0px 0px 10px 0px;
    height: auto;
}

</style>