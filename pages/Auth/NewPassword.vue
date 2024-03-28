<template>
    <form class="w-100" @submit.prevent="newPassword">
        <SharedPageHeader :title="$t('pagesTitle.restorePass')" :desc="$t('sectionDesc.confirmPass')" class="mb-5" />

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

        <!-- Submit -->
        <button type="submit" class="btn btn-primary minw-100 lg" :disabled="loading">
            {{ $t('formBtns.confirm') }}
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

// restorePassword
const newPassword = () => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;

        // redirect
        navigateTo('/Auth/login');    
    }, 1000);
};

/*************** Mounted **************** */

</script>

<style lang="scss" scoped></style>