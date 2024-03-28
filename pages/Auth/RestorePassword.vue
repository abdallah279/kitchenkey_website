<template>
    <form class="w-100" @submit.prevent="restorePassword">
        <SharedPageHeader :title="$t('pagesTitle.restorePass')" :desc="$t('sectionDesc.restorePass')" class="mb-5" />

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

        <!-- Submit -->
        <button type="submit" class="btn btn-primary minw-100 lg" :disabled="loading">
            {{ $t('formBtns.send') }}
            <span class="spinner-border spinner-border-sm" v-if="loading" role="status" aria-hidden="true"></span>
        </button>

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

// restorePassword
const restorePassword = () => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;

        // redirect
        navigateTo('/Auth/passwordCode');
    }, 1000);
};

/*************** Mounted **************** */

</script>

<style lang="scss" scoped></style>