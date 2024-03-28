<template>
    <Dropdown v-model="selectedCountry" :options="countries" optionLabel="name" class="main-icon selectedCountry" @change="$emit('changeCountry', selectedCountry.id)">
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
</template>

<script setup>
/*************** Plugins **************** */

/*************** DATA **************** */

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

/*************** Mounted **************** */

</script>

<style lang="scss" scoped></style>