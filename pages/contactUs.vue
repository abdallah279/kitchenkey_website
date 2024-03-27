<template>
    <main class="contact main_padding">
        <div class="container">

            <div class="row">

                <!-- Contact Us Socials -->
                <div class="col-lg-6">
                    <div class="section_style pd">

                        <h3 class="fs15 ff-reg mb-3 c-dark">{{ $t('contact.title') }}</h3>

                        <div class="tel_link mt-4">
                            <img src="~/assets/imgs/icons/tel.png" alt="" class="ic">
                            <a href="https://wa.me/01234456678" target="_blank" class="c-dark"> 01234456678</a>
                        </div>

                        <!-- Social -->
                        <div class="foot-social mt-4">
                            <a :href="social.link" target="_blank" class="social-icon socail_hover"
                                v-for="social in socials" :key="social.id">
                                <img :src="social.icon" alt="socail icon" class="ic">
                            </a>
                        </div>

                    </div>
                </div>

                <!-- Contact Us Form -->
                <div class="col-lg-6">
                    <form class="section_style pd">

                        <!-- Name -->
                        <div class="input-g">
                            <label for="" class="main-label">
                                {{ $t('contact.form.name.text') }}
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">
                                <input type="text" :placeholder="$t('contact.form.name.placeholder')" class="input-me">
                            </div>
                        </div>

                        <!-- Phone Number -->
                        <div class="input-g">

                            <label for="" class="main-label">
                                {{ $t('contact.form.phone.text') }}
                                <span class="c-red">*</span>
                            </label>

                            <div class="main-input">
                                <input type="number" class="input-me" name="phone" :placeholder="$t('contact.form.phone.placeholder')">

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

                        <!-- Title -->
                        <div class="input-g">
                            <label for="" class="main-label">
                                {{ $t('contact.form.title.text') }}
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">
                                <input type="text" :placeholder="$t('contact.form.title.placeholder')" class="input-me">
                            </div>
                        </div>

                        <!-- Image -->
                        <div class="input-g">
                            <label for="" class="main-label">{{ $t('contact.form.image.text') }}</label>
                            <SharedUploadInput @update="updatedImages" :placeholder="$t('contact.form.image.placeholder')" :images="images" />
                        </div>

                        <!-- Message -->
                        <div class="input-g">
                            <label for="" class="main-label">
                                {{ $t('contact.form.message.text') }}
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">
                                <textarea name="" :placeholder="$t('contact.form.message.placeholder')"
                                    class="input-me text-area"></textarea>
                            </div>
                        </div>

                        <!-- Send -->
                        <button type="submit" class="btn btn-primary minw-100 lg" :disabled="loading">
                            {{ $t('formBtns.send') }}
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
import socail1 from '~/assets/imgs/icons/socail1.png';
import socail2 from '~/assets/imgs/icons/socail2.png';
import socail3 from '~/assets/imgs/icons/socail3.png';
import socail4 from '~/assets/imgs/icons/socail4.png';

const socials = ref([
    {
        id: 1,
        icon: socail1,
        link: 'https://wa.me/01234456678'
    },
    {
        id: 2,
        icon: socail2,
        link: 'https://wa.me/01234456678'
    },
    {
        id: 3,
        icon: socail3,
        link: 'https://wa.me/01234456678'
    },
    {
        id: 4,
        icon: socail4,
        link: 'https://wa.me/01234456678'
    },
]);


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

// images
const images = ref([]);

// loading
const loading = ref(false);

/*************** Computed **************** */

/*************** Props **************** */

/*************** Methods **************** */

const updatedImages = (data) => {
    images.value = data;
}

/*************** Mounted **************** */

</script>

<style lang="scss" scoped></style>