<template>
    <form class="w-100" @submit.prevent="activeAccount">
        <SharedPageHeader title="كود التحقق" desc="ادخل كود التحقق المرسل إليك" />

        <v-otp-input ref="otpInput" v-model:value="bindModal" dir="ltr" class="justify-content-center mb-4"
            input-classes="otp-input" separator="" :num-inputs="6" :should-auto-focus="true" input-type="letter-numeric" />

        <!-- Submit -->
        <button type="submit" class="btn btn-primary minw-100 lg" :disabled="loading">
            إرسال
            <span class="spinner-border spinner-border-sm" v-if="loading" role="status" aria-hidden="true"></span>
        </button>

        <!-- Resend Code -->
        <div class="d-flex mt-3 justify-content-center">
            <button type="button" class="bg-transparent c-gray_mid fs13 border-0">لم يصلك الكود؟</button>
        </div>

    </form>
</template>

<script setup>
/*************** Plugins **************** */
definePageMeta({
    layout: 'auth'
});

// OTP
import VOtpInput from "vue3-otp-input";

/*************** DATA **************** */

// loading
const loading = ref(false);

/*************** Computed **************** */

/*************** Props **************** */

/*************** Methods **************** */

// active Account
const activeAccount = () => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;

        // redirect
        navigateTo('/');

    }, 1000);
}

/*************** Mounted **************** */

</script>

<style lang="scss" scoped></style>