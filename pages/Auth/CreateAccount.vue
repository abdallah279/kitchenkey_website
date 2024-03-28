<template>
    <form class="w-100" @submit.prevent="createAccount">
        <SharedPageHeader :title="$t('pagesTitle.register')" :desc="$t('sectionDesc.register')" class="mb-5" />

        <!-- Name -->
        <div class="input-g">
            <label for="" class="main-label">
                {{ $t('auth.name.text') }}
                <span class="c-red">*</span>
            </label>

            <div class="main-input">
                <input type="text" class="input-me" name="name" :placeholder="$t('auth.name.placeholder')">
            </div>
        </div>

        <!-- Email -->
        <div class="input-g">
            <label for="" class="main-label">
                {{ $t('auth.email.text') }}
                <span class="c-red">*</span>
            </label>

            <div class="main-input">
                <input type="email" class="input-me" name="email" :placeholder="$t('auth.email.placeholder')">
            </div>
        </div>

        <!-- Phone Number -->
        <div class="input-g">

            <label for="" class="main-label">
                {{ $t('auth.phone.text') }}
                <span class="c-red">*</span>
            </label>

            <div class="main-input">
                <input type="number" class="input-me" name="phone" :placeholder="$t('auth.phone.placeholder')">

                <FormCountryCode @changeCountry="changeCountry" />

            </div>

        </div>

        <!-- Password -->
        <div class="input-g">
            <label for="" class="main-label">
                {{ $t('auth.password.text') }}
                <span class="c-red">*</span>
            </label>

            <div class="main-input">
                <input type="password" class="input-me" name="password" :placeholder="$t('auth.password.placeholder')">
            </div>
        </div>

        <!-- Confirm Password -->
        <div class="input-g">
            <label for="" class="main-label">
                {{ $t('auth.confirmPassword.text') }}
                <span class="c-red">*</span>
            </label>

            <div class="main-input">
                <input type="password" class="input-me" name="password" :placeholder="$t('auth.password.placeholder')">
            </div>
        </div>

        <!-- Terms and Conditions -->
        <div class="form-check input-g fs13">
            <input class="form-check-input" type="checkbox" value="" id="terms">
            <div class="d-flex gap-1">
                <label class="form-check-label c-gray" for="terms">
                    {{ $t('auth.agree') }}
                </label>
                <NuxtLink to="/Auth/Terms" class="text-decoration-underline">{{ $t('auth.terms') }}</NuxtLink>
            </div>
        </div>

        <!-- Submit -->
        <button type="submit" class="btn btn-primary minw-100 lg" :disabled="loading">
            {{ $t('formBtns.create') }}
            <span class="spinner-border spinner-border-sm" v-if="loading" role="status" aria-hidden="true"></span>
        </button>

        <!-- Login -->
        <div class="d-flex mt-3 justify-content-center">
            <NuxtLink to="/Auth/login" class="gap-1 fs13">
                <span class="c-gray_mid">{{ $t('auth.havAccount') }}</span>
                <span class="text-decoration-underline">{{ $t('auth.login') }}</span>
            </NuxtLink>
        </div>

    </form>
</template>

<script setup>
/*************** Plugins **************** */
definePageMeta({
    layout: 'auth'
});

/*************** DATA **************** */

// loading
const loading = ref(false);

/*************** Computed **************** */

/*************** Props **************** */

/*************** Methods **************** */

// changeCountry
const changeCountry = (country) => {
    console.log(country);
};

// createAccount
const createAccount = () => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;

        // redirect
        navigateTo('/Auth/AccountCode');

    }, 1000);
}

/*************** Mounted **************** */

</script>

<style lang="scss" scoped></style>