<template>
    <main class="beStore main_padding">
        <div class="container">

            <form class="section_style pd" @submit.prevent="$router.push('/beStore/activationCode')">
                <SharedPageHeader title="كن متجر" class="mb-5" />

                <div class="row gy-2">

                    <!-- Name -->
                    <div class="col-sm-6">
                        <div class="input-g">
                            <label for="" class="main-label">
                                الاسم
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">
                                <input type="text" placeholder="ادخل الاسم" class="input-me">
                            </div>
                        </div>
                    </div>

                    <!-- Email -->
                    <div class="col-sm-6">
                        <div class="input-g">
                            <label for="" class="main-label">
                                البريد الإلكتروني
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">
                                <input type="email" placeholder="ادخل البريد الإلكتروني" class="input-me">
                            </div>
                        </div>
                    </div>

                    <!-- Phone Number -->
                    <div class="col-sm-6">
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
                                            <img v-if="slotProps.value.image" :alt="slotProps.value.label"
                                                :src="slotProps.value.image" class="option-img" />
                                            <div>{{ slotProps.value.key }}</div>
                                            <i class="pi pi-angle-down ic"></i>
                                        </div>
                                        <span v-else>
                                            {{ slotProps.placeholder }}
                                        </span>
                                    </template>
                                    <template #option="slotProps">
                                        <div class="option">
                                            <img v-if="slotProps.option.image" alt="" class="option-img"
                                                :src="slotProps.option.image" />
                                            <div>
                                                {{ slotProps.option.key }}
                                            </div>
                                        </div>
                                    </template>
                                </Dropdown>
                            </div>

                        </div>
                    </div>

                    <!-- Id -->
                    <div class="col-sm-6">
                        <div class="input-g">
                            <label for="" class="main-label">
                                رقم الهوية الوطنية
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">
                                <input type="number" placeholder="ادخل رقم الهوية الوطنية" class="input-me">
                            </div>
                        </div>
                    </div>

                    <!-- Commerce Number -->
                    <div class="col-sm-6">
                        <div class="input-g">
                            <label for="" class="main-label">
                                رقم السجل التجاري
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">
                                <input type="number" placeholder="ادخل رقم السجل التجاري" class="input-me">
                            </div>
                        </div>
                    </div>

                    <!-- Tax Number -->
                    <div class="col-sm-6">
                        <div class="input-g">
                            <label for="" class="main-label">
                                الرقم الضريبي
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">
                                <input type="number" placeholder="ادخل الرقم الضريبي" class="input-me">
                            </div>
                        </div>
                    </div>

                    <!-- arbic name -->
                    <div class="col-sm-6">
                        <div class="input-g">
                            <label for="" class="main-label">
                                اسم المتجر باللغة العربية
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">
                                <input type="text" placeholder="ادخل اسم المتجر باللغة العربية" class="input-me">
                            </div>
                        </div>
                    </div>

                    <!-- english name -->
                    <div class="col-sm-6">
                        <div class="input-g">
                            <label for="" class="main-label">
                                اسم المتجر باللغة الانجليزية
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">
                                <input type="text" placeholder="ادخل اسم المتجر باللغة الانجليزية" class="input-me">
                            </div>
                        </div>
                    </div>

                    <!-- Store Description -->
                    <div class="col-sm-6">
                        <div class="input-g">
                            <label for="" class="main-label">
                                وصف المتجر باللغة العربية
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">
                                <textarea name="" placeholder="ادخل وصف المتجر باللغة العربية"
                                    class="input-me text-area"></textarea>
                            </div>
                        </div>
                    </div>

                    <!-- Store Description -->
                    <div class="col-sm-6">
                        <div class="input-g">
                            <label for="" class="main-label">
                                وصف المتجر باللغة الانجليزية
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">
                                <textarea name="" placeholder="ادخل وصف المتجر باللغة الانجليزية"
                                    class="input-me text-area"></textarea>
                            </div>
                        </div>
                    </div>

                    <!-- Categories -->
                    <div class="col-12">
                        <div class="input-g">
                            <label for="" class="main-label">
                                أقسام نشاط المتجر
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">

                                <MultiSelect v-model="categoriesChoosed" :options="categories" filter optionLabel="name"
                                    placeholder="اختر أقسام نشاط المتجر" display="chip" class="w-100 input-me" />
                                <i class="pi pi-angle-down main-icon"></i>

                            </div>
                        </div>
                    </div>

                    <!-- Image -->
                    <div class="col-sm-6">
                        <div class="input-g">
                            <label for="" class="main-label">
                                صورة الشعار
                                <span class="c-red">*</span>
                            </label>
                            <SharedUploadInput @update="updatedImages" :images="images" placeholder="ارفق صورة الشعار" />
                        </div>
                    </div>

                    <!-- Whatsapp Number -->
                    <div class="col-sm-6">
                        <div class="input-g">

                            <label for="" class="main-label">
                                رقم الواتساب
                                <span class="c-red">*</span>
                            </label>

                            <div class="main-input">
                                <input type="number" class="input-me" name="phone" placeholder="ادخل رقم الواتساب">

                                <Dropdown v-model="selectedCountry" :options="countries" optionLabel="name"
                                    class="main-icon selectedCountry">
                                    <template #value="slotProps">
                                        <div v-if="slotProps.value" class="selected">
                                            <img v-if="slotProps.value.image" :alt="slotProps.value.label"
                                                :src="slotProps.value.image" class="option-img" />
                                            <div>{{ slotProps.value.key }}</div>
                                            <i class="pi pi-angle-down ic"></i>
                                        </div>
                                        <span v-else>
                                            {{ slotProps.placeholder }}
                                        </span>
                                    </template>
                                    <template #option="slotProps">
                                        <div class="option">
                                            <img v-if="slotProps.option.image" alt="" class="option-img"
                                                :src="slotProps.option.image" />
                                            <div>
                                                {{ slotProps.option.key }}
                                            </div>
                                        </div>
                                    </template>
                                </Dropdown>
                            </div>

                        </div>
                    </div>

                    <!-- City -->
                    <div class="col-md-6">
                        <div class="input-g">
                            <label for="" class="main-label">
                                المدينة
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">

                                <Dropdown v-model="city" placeholder="اختر المدينة" :options="cities" optionLabel="name"
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
                            <label for="" class="main-label">
                                موقع المتجر
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">
                                <input type="text" class="input-me" name="location" placeholder="ادخل موقع المتجر">
                                <i class="main-icon pi pi-map-marker"></i>
                            </div>
                        </div>
                    </div>

                    <!-- Bank Name -->
                    <div class="col-md-6">
                        <div class="input-g">
                            <label for="" class="main-label">
                                اسم البنك
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">
                                <input type="text" class="input-me" name="bank_name" placeholder="ادخل اسم البنك">
                            </div>
                        </div>
                    </div>

                    <!-- Account Name -->
                    <div class="col-md-6">
                        <div class="input-g">
                            <label for="" class="main-label">
                                اسم صاحب الحساب
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">
                                <input type="text" class="input-me" name="account_number"
                                    placeholder="ادخل اسم صاحب الحساب">
                            </div>
                        </div>
                    </div>

                    <!-- Account Number -->
                    <div class="col-md-6">
                        <div class="input-g">
                            <label for="" class="main-label">
                                رقم الحساب
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">
                                <input type="number" class="input-me" name="account_number" placeholder="ادخل رقم الحساب">
                            </div>
                        </div>
                    </div>

                    <!-- Iban Number -->
                    <div class="col-md-6">
                        <div class="input-g">
                            <label for="" class="main-label">
                                رقم الايبان
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">
                                <input type="text" class="input-me" name="account_number" placeholder="ادخل رقم الايبان">
                            </div>
                        </div>
                    </div>

                    <!-- Password -->
                    <div class="col-md-6">
                        <div class="input-g">
                            <label for="" class="main-label">
                                كلمة المرور
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">
                                <input type="password" class="input-me" name="password" placeholder="ادخل كلمة المرور">
                            </div>
                        </div>
                    </div>

                    <!-- Confirm Password -->
                    <div class="col-md-6">
                        <div class="input-g">
                            <label for="" class="main-label">
                                تأكيد كلمة المرور
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">
                                <input type="password" class="input-me" name="password" placeholder="ادخل كلمة المرور">
                            </div>
                        </div>
                    </div>

                    <!-- Terms and Conditions -->
                    <div class="col-12">
                        <div class="form-check input-g fs13">
                            <input class="form-check-input" type="checkbox" value="" id="terms">
                            <div class="d-flex gap-1">
                                <label class="form-check-label c-gray" for="terms">
                                    أوافق على
                                </label>
                                <NuxtLink to="/terms" class="text-decoration-underline">الشروط والأحكام</NuxtLink>
                            </div>
                        </div>
                    </div>

                    <!-- Submit -->
                    <div class="col-md-4 mx-auto">
                        <button class="btn btn-primary minw-100" type="submit">إنشاء حساب</button>
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

/*************** Mounted **************** */

</script>

<style lang="scss" scoped></style>