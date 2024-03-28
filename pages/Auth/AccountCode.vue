<template>
    <form class="w-100" @submit.prevent="activeAccount">
        <SharedPageHeader :title="$t('pagesTitle.code')" :desc="$t('sectionDesc.code')" />

        <v-otp-input ref="otpInput" v-model:value="bindModal" dir="ltr" class="justify-content-center mb-4"
            input-classes="otp-input" separator="" :num-inputs="6" :should-auto-focus="true"
            input-type="letter-numeric" />

        <!-- Submit -->
        <button type="submit" class="btn btn-primary minw-100 lg" :disabled="loading">
            {{ $t('formBtns.send') }}
            <span class="spinner-border spinner-border-sm" v-if="loading" role="status" aria-hidden="true"></span>
        </button>

        <!-- Resend Code -->
        <div class="w-100 d-flex gap-1 mt-3 justify-content-center fs13">
            <button type="button" class="cu-auto c-gray_mid border-0 bg-transparent">{{ $t('formBtns.receiveCode')
                }}</button>
            <button type="button" class="text-decoration-underline bg-transparent border-0 cu-pointer text-main"
                :disabled="disabledBtn" @click="resendCode">
                {{ $t('formBtns.resend') }}
            </button>
        </div>

        <div class="mt-3 text-center" dir="ltr">00 : <span v-if="counterNum < 10">0</span>{{ counterNum }}</div>

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

// counter
const counterNum = ref(60);

// disabledBtn
const disabledBtn = ref(false);

// bindModal
const bindModal = ref('');

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


// resendCode Function
const resendCode = async () => {
    disabledBtn.value = true;
    // await axios.get(`resend-code?country_code=${user.value.country_code}&phone=${user.value.phone}`).then(res => {
    //     if (response(res) == "success") {
    //         successToast(res.data.msg);
    //         counterNum.value = 60;
    //         codeCounter();
    //     } else {
    //         errorToast(res.data.msg);
    //     }
    // }).catch(err => console.log(err));

    counterNum.value = 60;
    codeCounter();
}


function codeCounter() {
    disabledBtn.value = true;

    let counter = setInterval(function () {
        counterNum.value--;
        if (counterNum.value == 0) {
            clearInterval(counter);
            disabledBtn.value = false;
        }
    }, 1000);
}


/******************* Computed *******************/

/******************* Watch *******************/

/******************* Mounted *******************/
onMounted(() => {
    codeCounter();
});

</script>

<style lang="scss" scoped></style>