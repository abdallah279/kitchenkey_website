<template>
    <form class="row" @submit.prevent="activePhone">

        <p class="c-gray_mid text-center fs13 mb-4">{{ $t('sectionDesc.code') }}</p>

        <v-otp-input ref="otpInput" v-model:value="bindModal" dir="ltr" class="justify-content-center mb-4"
            input-classes="otp-input" separator="" :num-inputs="6" :should-auto-focus="true"
            input-type="letter-numeric" />

        <!-- Submit -->
        <div class="col-sm-6 mx-auto">
            <button type="submit" class="btn btn-primary minw-100 lg" :disabled="loading">
                {{ $t('formBtns.send') }}
                <span class="spinner-border spinner-border-sm" v-if="loading" role="status" aria-hidden="true"></span>
            </button>
        </div>

        <!-- Resend Code -->
        <div class="d-flex mt-3 justify-content-center">
            <button type="button" class="bg-transparent c-gray_mid fs13 border-0">{{ $t('profileForms.dontRecive') }}</button>
        </div>
    </form>
</template>

<script setup>
/*************** Plugins **************** */

// OTP
import VOtpInput from "vue3-otp-input";

/*************** DATA **************** */

// loading
const loading = ref(false);

/*************** Computed **************** */

/*************** Props **************** */

/*************** Methods **************** */

// active phone
const activePhone = () => {
    navigateTo('/profile/settings/editPhone')
}

/*************** Mounted **************** */

</script>

<style lang="scss" scoped></style>