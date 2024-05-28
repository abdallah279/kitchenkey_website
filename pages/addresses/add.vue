<template>
    <main class="contact main_padding">
        <div class="container">

            <SharedPageHeader :title="addressId ? $t('pagesTitle.editAddress') : $t('pagesTitle.addAddress')"
                class="mb-5" />

            <div class="row gy-4">

                <!-- Map -->
                <div class="col-lg-6">
                    <div>
                        <GMapMap :center="center" :zoom="13" map-type-id="terrain" style="width: 100%; height: 400px">
                            <GMapMarker :position="center" :draggable="true" />
                        </GMapMap>
                    </div>
                </div>

                <!-- Form -->
                <div class="col-lg-6">
                    <form class="section_style pd">

                        <!-- Name -->
                        <div class="input-g">
                            <label for="" class="main-label">
                                {{ $t('address.name.text') }}
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">
                                <input type="text" :placeholder="$t('address.name.placeholder')" class="input-me">
                            </div>
                        </div>

                        <!-- City -->
                        <div class="input-g">
                            <label for="" class="main-label">
                                {{ $t('address.city.text') }}
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">

                                <Dropdown v-model="city" :placeholder="$t('address.city.placeholder')" :options="cities"
                                    optionLabel="name" class="input-me">
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
                                {{ $t('address.street.text') }}
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">
                                <input type="text" :placeholder="$t('address.street.placeholder')" class="input-me">
                            </div>
                        </div>

                        <!-- Building Number -->
                        <div class="input-g">
                            <label for="" class="main-label">
                                {{ $t('address.building.text') }}
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">
                                <input type="text" :placeholder="$t('address.building.placeholder')" class="input-me">
                            </div>
                        </div>

                        <!-- Save -->
                        <button type="submit" class="btn btn-primary minw-100 lg" :disabled="loading">
                            {{ $t('formBtns.save') }}
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
const center = { lat: 37.7749, lng: -122.4194 } // San Francisco coordinates
const zoom = 8

// loading
const loading = ref(false);

// addressId
const addressId = useRoute().query.id;

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