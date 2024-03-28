<template>
    <form class="w-100" @submit.prevent="signIn">
        <SharedPageHeader :title="$t('pagesTitle.login')" :desc="$t('sectionDesc.login')" class="mb-5" />

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

        <!-- Remember Password -->
        <NuxtLink to="/Auth/RestorePassword" class="input-g fs13">
            {{ $t('auth.forgotPass') }}
        </NuxtLink>

        <!-- Login -->
        <button type="submit" class="btn btn-primary minw-100 lg" :disabled="loading">
            {{ $t('auth.enter') }}
            <span class="spinner-border spinner-border-sm" v-if="loading" role="status" aria-hidden="true"></span>
        </button>

        <!-- Create Account -->
        <div class="d-flex mt-3 justify-content-center">
            <NuxtLink to="/Auth/createAccount" class="gap-1 fs13">
                <span class="c-gray_mid">{{ $t('auth.notAccount') }}</span>
                <span class="text-decoration-underline">{{ $t('auth.register') }}</span>
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

// signIn
const signIn = () => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;

        // redirect
        navigateTo('/');    
    }, 1000);
};

/*************** Mounted **************** */

</script>

<style lang="scss" scoped></style>