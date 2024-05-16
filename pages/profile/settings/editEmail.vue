<template>
    <form class="row" @submit.prevent="editEmail">

        <!-- Password -->
        <div class="col-sm-6">
            <div class="input-g">

                <label class="main-label">
                    {{ $t('profileForms.currentPassword.text') }}
                    <span class="c-red">*</span>
                </label>

                <div class="main-input">
                    <input type="password" class="input-me" name="email" :placeholder="$t('profileForms.currentPassword.placeholder')">

                </div>

            </div>
        </div>

        <!-- Email -->
        <div class="col-sm-6">
            <div class="input-g">

                <label class="main-label">
                    {{ $t('profileForms.newEmail.text') }}
                    <span class="c-red">*</span>
                </label>

                <div class="main-input">
                    <input type="email" class="input-me" name="email" :placeholder="$t('profileForms.newEmail.placeholder')">

                </div>

            </div>
        </div>

        <!-- Submit -->
        <div class="col-sm-6 mx-auto">
            <button type="submit" class="btn btn-primary minw-100 lg" :disabled="loading">
                {{ $t('formBtns.confirm') }}
                <span class="spinner-border spinner-border-sm" v-if="loading" role="status" aria-hidden="true"></span>
            </button>
        </div>
    </form>
</template>

<script setup>
/*************** Plugins **************** */

/*************** DATA **************** */

// loading
const loading = ref(false);

/*************** Computed **************** */

/*************** Props **************** */

/*************** Methods **************** */

// edit Email
const editEmail = () => {
    navigateTo('/profile/settings/activatePhone')
}

/*************** Mounted **************** */

</script>

<style lang="scss" scoped></style>