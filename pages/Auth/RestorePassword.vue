<template>
    <form class="w-100" @submit.prevent="restorePassword">
        <SharedPageHeader title="استعادة كلمة المرور" desc="ادخل رقم جوالك" class="mb-5" />

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

        <!-- Submit -->
        <button type="submit" class="btn btn-primary minw-100 lg" :disabled="loading">
            إرسال
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