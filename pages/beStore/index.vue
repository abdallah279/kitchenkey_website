<template>
    <main class="beStore main_padding">
        <div class="container">

            <form class="section_style pd" @submit.prevent="$router.push('/beStore/activationCode')">
                <SharedPageHeader :title="$t('pagesTitle.beStore')" class="mb-5" />

                <div class="row gy-2">

                    <!-- Name -->
                    <div class="col-sm-6">
                        <div class="input-g">
                            <label class="main-label">
                                {{ $t('auth.name.text') }}
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">
                                <input type="text" :placeholder="$t('auth.name.placeholder')" class="input-me">
                            </div>
                        </div>
                    </div>

                    <!-- Email -->
                    <div class="col-sm-6">
                        <div class="input-g">
                            <label class="main-label">
                                {{ $t('auth.email.text') }}
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">
                                <input type="email" :placeholder="$t('auth.email.placeholder')" class="input-me">
                            </div>
                        </div>
                    </div>

                    <!-- Phone Number -->
                    <div class="col-sm-6">
                        <div class="input-g">

                            <label class="main-label">
                                {{ $t('auth.phone.text') }}
                                <span class="c-red">*</span>
                            </label>

                            <div class="main-input">
                                <input type="number" class="input-me" name="phone" :placeholder="$t('auth.phone.placeholder')">

                                <FormCountryCode @changeCountry="changeCountry" />

                            </div>

                        </div>
                    </div>

                    <!-- Id -->
                    <div class="col-sm-6">
                        <div class="input-g">
                            <label class="main-label">
                               {{ $t('auth.id.text') }}
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">
                                <input type="number" :placeholder="$t('auth.id.placeholder')" class="input-me">
                            </div>
                        </div>
                    </div>

                    <!-- Commerce Number -->
                    <div class="col-sm-6">
                        <div class="input-g">
                            <label class="main-label">
                                {{ $t('auth.commercialNo.text') }}
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">
                                <input type="number" :placeholder="$t('auth.commercialNo.placeholder')" class="input-me">
                            </div>
                        </div>
                    </div>

                    <!-- Tax Number -->
                    <div class="col-sm-6">
                        <div class="input-g">
                            <label class="main-label">
                               {{ $t('auth.taxNumber.text') }}
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">
                                <input type="number" :placeholder="$t('auth.taxNumber.placeholder')" class="input-me">
                            </div>
                        </div>
                    </div>

                    <!-- arbic name -->
                    <div class="col-sm-6">
                        <div class="input-g">
                            <label class="main-label">
                                {{ $t('auth.arbicName.text') }}
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">
                                <input type="text" :placeholder="$t('auth.arbicName.placeholder')" class="input-me">
                            </div>
                        </div>
                    </div>

                    <!-- english name -->
                    <div class="col-sm-6">
                        <div class="input-g">
                            <label class="main-label">
                                {{ $t('auth.englishName.text') }}
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">
                                <input type="text" :placeholder="$t('auth.englishName.placeholder')" class="input-me">
                            </div>
                        </div>
                    </div>

                    <!-- Store Description -->
                    <div class="col-sm-6">
                        <div class="input-g">
                            <label class="main-label">
                                {{ $t('auth.arbicDesc.text') }}
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">
                                <textarea name="" :placeholder="$t('auth.arbicDesc.placeholder')"
                                    class="input-me text-area"></textarea>
                            </div>
                        </div>
                    </div>

                    <!-- Store Description -->
                    <div class="col-sm-6">
                        <div class="input-g">
                            <label class="main-label">
                                {{ $t('auth.englishDesc.text') }}
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">
                                <textarea name="" :placeholder="$t('auth.englishDesc.placeholder')"
                                    class="input-me text-area"></textarea>
                            </div>
                        </div>
                    </div>

                    <!-- Categories -->
                    <div class="col-12">
                        <div class="input-g">
                            <label class="main-label">
                                {{ $t('auth.departmentsActivity.text') }}
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">

                                <MultiSelect v-model="categoriesChoosed" :options="categories" filter optionLabel="name"
                                    :placeholder="$t('auth.departmentsActivity.placeholder')" display="chip" class="w-100 input-me" />
                                <i class="pi pi-angle-down main-icon"></i>

                            </div>
                        </div>
                    </div>

                    <!-- Image -->
                    <div class="col-sm-6">
                        <div class="input-g">
                            <label class="main-label">
                                {{ $t('auth.logo.text') }}
                                <span class="c-red">*</span>
                            </label>
                            <SharedUploadInput @update="updatedImages" :images="images"
                                :placeholder="$t('auth.logo.placeholder')" />
                        </div>
                    </div>

                    <!-- Whatsapp Number -->
                    <div class="col-sm-6">
                        <div class="input-g">

                            <label class="main-label">
                               {{ $t('auth.watsapp.text') }}
                                <span class="c-red">*</span>
                            </label>

                            <div class="main-input">
                                <input type="number" class="input-me" name="phone" :placeholder="$t('auth.watsapp.placeholder')">

                                <FormCountryCode @changeCountry="changeCountry" />
                            </div>

                        </div>
                    </div>

                    <!-- City -->
                    <div class="col-md-6">
                        <div class="input-g">
                            <label class="main-label">
                                {{ $t('auth.city.text') }}
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">

                                <Dropdown v-model="city" :placeholder="$t('auth.city.placeholder')" :options="cities" optionLabel="name"
                                    class="input-me">
                                    <template #value="slotProps">
                                        <div v-if="slotProps.value" class="selected">
                                            {{ slotProps.value.name }}
                                        </div>
                                        <span v-else>
                                            {{ slotProps.placeholder }}
                                        </span>
                                    </template>
                                    <template #option="slotProps">
                                        <div class="option">
                                            {{ slotProps.option.name }}
                                        </div>
                                    </template>
                                </Dropdown>

                                <i class="pi pi-angle-down main-icon"></i>

                            </div>
                        </div>
                    </div>

                    <!-- Location -->
                    <div class="col-md-6">
                        <div class="input-g">
                            <label class="main-label">
                                {{ $t('auth.storeMap.text') }}
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">
                                <input type="text" class="input-me" name="location" :placeholder="$t('auth.storeMap.placeholder')">
                                <i class="main-icon pi pi-map-marker"></i>
                            </div>
                        </div>
                    </div>

                    <!-- Bank Name -->
                    <div class="col-md-6">
                        <div class="input-g">
                            <label class="main-label">
                                {{ $t('auth.bankName.text') }}
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">
                                <input type="text" class="input-me" name="bank_name" :placeholder="$t('auth.bankName.placeholder')">
                            </div>
                        </div>
                    </div>

                    <!-- Account Name -->
                    <div class="col-md-6">
                        <div class="input-g">
                            <label class="main-label">
                                {{ $t('auth.accountName.text') }}
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">
                                <input type="text" class="input-me" name="account_number"
                                    :placeholder="$t('auth.accountName.placeholder')">
                            </div>
                        </div>
                    </div>

                    <!-- Account Number -->
                    <div class="col-md-6">
                        <div class="input-g">
                            <label class="main-label">
                                {{ $t('auth.accountNumber.text') }}
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">
                                <input type="number" class="input-me" name="account_number"
                                    :placeholder="$t('auth.accountNumber.placeholder')">
                            </div>
                        </div>
                    </div>

                    <!-- Iban Number -->
                    <div class="col-md-6">
                        <div class="input-g">
                            <label class="main-label">
                               {{ $t('auth.iban.text') }}
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">
                                <input type="text" class="input-me" name="account_number"
                                    :placeholder="$t('auth.iban.placeholder')">
                            </div>
                        </div>
                    </div>

                    <!-- Password -->
                    <div class="col-md-6">
                        <div class="input-g">
                            <label class="main-label">
                                {{ $t('auth.password.text') }}
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">
                                <input type="password" class="input-me" name="password" :placeholder="$t('auth.password.placeholder')">
                            </div>
                        </div>
                    </div>

                    <!-- Confirm Password -->
                    <div class="col-md-6">
                        <div class="input-g">
                            <label class="main-label">
                                {{ $t('auth.confirmPassword.text') }}
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">
                                <input type="password" class="input-me" name="password" :placeholder="$t('auth.confirmPassword.placeholder')">
                            </div>
                        </div>
                    </div>

                    <!-- Terms and Conditions -->
                    <div class="col-12">
                        <div class="form-check input-g fs13">
                            <input class="form-check-input" type="checkbox" value="" id="terms">
                            <div class="d-flex gap-1">
                                <label class="form-check-label c-gray" for="terms">
                                    {{ $t('auth.agree') }}
                                </label>
                                <NuxtLink to="/terms" class="text-decoration-underline">{{ $t('auth.terms') }}</NuxtLink>
                            </div>
                        </div>
                    </div>

                    <!-- Submit -->
                    <div class="col-md-4 mx-auto">
                        <button class="btn btn-primary minw-100" type="submit">{{ $t('auth.register') }}</button>
                    </div>

                </div>
            </form>

        </div>
    </main>
</template>

<script setup>
/*************** Plugins **************** */

/*************** DATA **************** */

// Image
const images = ref([]);

// cities
const city = ref(null);
const cities = ref([
    {
        id: 1,
        name: 'اكريلك'
    },
    {
        id: 2,
        name: 'فورميكا'
    },
    {
        id: 3,
        name: 'كلادينج'
    },
]);

// categories
const categoriesChoosed = ref([]);

const categories = ref([
    {
        id: 1,
        name: 'اكريلك'
    },
    {
        id: 2,
        name: 'فورميكا'
    },
    {
        id: 3,
        name: 'كلادينج'
    },
]);

/*************** Computed **************** */

/*************** Props **************** */

/*************** Methods **************** */
// uploadedImages
const updatedImages = (data) => {
    images.value = data;
}

// changeCountry
const changeCountry = (country) => {
    console.log(country);
};

/*************** Mounted **************** */

</script>

<style lang="scss" scoped></style>