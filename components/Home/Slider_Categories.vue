<template>
    <section class="home_slider_cat main_padding bg_main">
        <div class="container">

            <div class="row gy-4 flex-column-reverse flex-lg-row">

                <!-- Categories -->
                <div class="col-xl-3 col-lg-4">
                    <HomeCategories />
                </div>

                <!-- Search And Slider -->
                <div class="col-xl-9 col-lg-8">

                    <!-- Search -->
                    <form action="" class="search_form mb-3" @submit.prevent="search">
                        <div class="main-input">
                            <input type="text" class="input-me" v-model="searchText" :placeholder="$t('search.productPlaceholder')">
                            <button type="submit" class="main-icon sm btn btn-primary">
                                {{ $t('search.btn') }}
                            </button>
                        </div>
                    </form>

                    <!-- Slider -->
                    <div class="slider">
                        <HomeSlider />
                    </div>

                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
/*************** Plugins **************** */

/*************** DATA **************** */
// searchText
const searchText = ref('');

/*************** Computed **************** */

/*************** Props **************** */

/*************** Methods **************** */
const search = () => {
    navigateTo({
        path: '/search',
        query: {
            text: searchText.value,
        }
    });
}

/*************** Mounted **************** */

</script>