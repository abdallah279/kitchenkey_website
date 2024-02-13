<template>
    <main class="contact main_padding">
        <div class="container">

            <SharedPageHeader title="إضافة عنوان" class="mb-5" />

            <div class="row">

                <!-- Map -->
                <div class="col-lg-6">
                    الخريطة
                </div>

                <!-- Form -->
                <div class="col-lg-6">
                    <form class="section_style pd">

                        <!-- Name -->
                        <div class="input-g">
                            <label for="" class="main-label">
                                اسم العنوان
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">
                                <input type="text" placeholder="ادخل اسم العنوان" class="input-me">
                            </div>
                        </div>

                        <!-- City -->
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

                        <!-- Street Name -->
                        <div class="input-g">
                            <label for="" class="main-label">
                                اسم الشارع
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">
                                <input type="text" placeholder="ادخل اسم الشارع" class="input-me">
                            </div>
                        </div>

                        <!-- Building Number -->
                        <div class="input-g">
                            <label for="" class="main-label">
                                رقم المبنى
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">
                                <input type="text" placeholder="ادخل رقم المبنى" class="input-me">
                            </div>
                        </div>

                        <!-- Save -->
                        <button type="submit" class="btn btn-primary minw-100 lg" :disabled="loading">
                            حفظ
                            <span class="spinner-border spinner-border-sm" v-if="loading" role="status"
                                aria-hidden="true"></span>
                        </button>

                    </form>
                </div>

            </div>

        </div>
    </main>
</template>

<script setup>
/*************** Plugins **************** */

/*************** DATA **************** */

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

/*************** Computed **************** */

/*************** Props **************** */

/*************** Methods **************** */

/*************** Mounted **************** */

</script>

<style lang="scss" scoped></style>