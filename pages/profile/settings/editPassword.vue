<template>
    <form class="row" @submit.prevent="editPassword">

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

        <!-- New Password -->
        <div class="col-sm-6">
            <div class="input-g">

                <label class="main-label">
                    {{ $t('profileForms.newPassword.text') }}
                    <span class="c-red">*</span>
                </label>

                <div class="main-input">
                    <input type="password" class="input-me" name="email" :placeholder="$t('profileForms.newPassword.placeholder')">
                </div>

            </div>
        </div>

        <!-- Confirm Password -->
        <div class="col-sm-6">
            <div class="input-g">

                <label class="main-label">
                    {{ $t('profileForms.confirmNewPassword.text') }}
                    <span class="c-red">*</span>
                </label>

                <div class="main-input">
                    <input type="password" class="input-me" name="email" :placeholder="$t('profileForms.newPassword.placeholder')">

                </div>

            </div>
        </div>

        <!-- Submit -->
        <div class="col-sm-7 mx-auto">
            <button type="submit" class="btn btn-primary minw-100 lg" :disabled="loading">
                {{ $t('formBtns.save') }}
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

// edit phone
const editPassword = () => {
    navigateTo('/profile/settings/editProfile')
}

/*************** Mounted **************** */

</script>

<style lang="scss" scoped></style>