<template>
    <form class="w-100" @submit.prevent="signIn">
        <SharedPageHeader title="تسجيل الدخول" desc="أهلاً بك وبعودتك" class="mb-5" />

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

        <!-- Remember Password -->
        <NuxtLink to="/Auth/RestorePassword" class="input-g fs13">
            هل نسيت كلمة المرور؟
        </NuxtLink>

        <!-- Login -->
        <button type="submit" class="btn btn-primary minw-100 lg" :disabled="loading">
            دخول
            <span class="spinner-border spinner-border-sm" v-if="loading" role="status" aria-hidden="true"></span>
        </button>

        <!-- Create Account -->
        <div class="d-flex mt-3 justify-content-center">
            <NuxtLink to="/Auth/createAccount" class="gap-1 fs13">
                <span class="c-gray_mid">ليس لديك حساب؟</span>
                <span class="text-decoration-underline">إنشاء حساب</span>
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