<template>
    <form class="w-100" @submit.prevent="createAccount">
        <SharedPageHeader title="إنشاء حساب" desc="قم بالانضمام إلينا" class="mb-5" />

        <!-- Name -->
        <div class="input-g">
            <label for="" class="main-label">
                الاسم
                <span class="c-red">*</span>
            </label>

            <div class="main-input">
                <input type="text" class="input-me" name="name" placeholder="ادخل الاسم">
            </div>
        </div>

        <!-- Email -->
        <div class="input-g">
            <label for="" class="main-label">
                البريد الالكتروني
                <span class="c-red">*</span>
            </label>

            <div class="main-input">
                <input type="email" class="input-me" name="email" placeholder="ادخل البريد الالكتروني">
            </div>
        </div>

        <!-- Phone Number -->
        <div class="input-g">

            <label for="" class="main-label">
                رقم الجوال
                <span class="c-red">*</span>
            </label>

            <div class="main-input">
                <input type="number" class="input-me" name="phone" placeholder="ادخل رقم الجوال">

                <Dropdown v-model="selectedCountry" :options="countries" optionLabel="name"
                    class="main-icon selectedCountry">
                    <template #value="slotProps">
                        <div v-if="slotProps.value" class="selected">
                            <img v-if="slotProps.value.image" :alt="slotProps.value.label" :src="slotProps.value.image"
                                class="option-img" />
                            <div>{{ slotProps.value.key }}</div>
                            <i class="pi pi-angle-down ic"></i>
                        </div>
                        <span v-else>
                            {{ slotProps.placeholder }}
                        </span>
                    </template>
                    <template #option="slotProps">
                        <div class="option">
                            <img v-if="slotProps.option.image" alt="" class="option-img" :src="slotProps.option.image" />
                            <div>
                                {{ slotProps.option.key }}
                            </div>
                        </div>
                    </template>
                </Dropdown>
            </div>

        </div>

        <!-- Password -->
        <div class="input-g">
            <label for="" class="main-label">
                كلمة المرور
                <span class="c-red">*</span>
            </label>

            <div class="main-input">
                <input type="password" class="input-me" name="password" placeholder="ادخل كلمة المرور">
            </div>
        </div>

        <!-- Confirm Password -->
        <div class="input-g">
            <label for="" class="main-label">
                تأكيد كلمة المرور
                <span class="c-red">*</span>
            </label>

            <div class="main-input">
                <input type="password" class="input-me" name="password" placeholder="ادخل كلمة المرور">
            </div>
        </div>

        <!-- Terms and Conditions -->
        <div class="form-check input-g fs13">
            <input class="form-check-input" type="checkbox" value="" id="terms">
            <div class="d-flex gap-1">
                <label class="form-check-label c-gray" for="terms">
                    أوافق على
                </label>
                <NuxtLink to="/Auth/Terms" class="text-decoration-underline">الشروط والأحكام</NuxtLink>
            </div>
        </div>

        <!-- Submit -->
        <button type="submit" class="btn btn-primary minw-100 lg" :disabled="loading">
            إنشاء حساب
            <span class="spinner-border spinner-border-sm" v-if="loading" role="status" aria-hidden="true"></span>
        </button>

        <!-- Login -->
        <div class="d-flex mt-3 justify-content-center">
            <NuxtLink to="/Auth/login" class="gap-1 fs13">
                <span class="c-gray_mid">لديك حساب؟</span>
                <span class="text-decoration-underline">تسجيل دخول</span>
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

// countries
const selectedCountry = ref({
    id: 1,
    key: '996',
    image: 'https://flagcdn.com/w320/sa.png',
});

const countries = ref([
    {
        id: 1,
        key: '996',
        image: 'https://flagcdn.com/w320/us.png'
    },
    {
        id: 2,
        key: '996',
        image: 'https://flagcdn.com/w320/sa.png'
    },
    {
        id: 3,
        key: '996',
        image: 'https://flagcdn.com/w320/us.png'
    }
]);

/*************** Computed **************** */

/*************** Props **************** */

/*************** Methods **************** */

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