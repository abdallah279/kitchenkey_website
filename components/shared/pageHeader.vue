<template>
    <div class="mb-4">
        <h1 class="fs15 ff-med c-dark text-center">{{ title }}</h1>
        <p class="c-gray_mid text-center fs13 mt-3" v-if="desc">{{ desc }}</p>
    </div>
</template>


<script setup>
/******************* Import *******************/

/******************* Data *******************/

/******************* Props *******************/
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String
    }
});


/******************* Methods *******************/

/******************* Computed *******************/

/******************* Watch *******************/

/******************* Mounted *******************/

</script>

<style></style>