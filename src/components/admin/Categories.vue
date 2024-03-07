<template>
    <TableCategories></TableCategories>
</template>
<script>
import {useMeta} from 'vue-meta'
import TableCategories from './categories/TableCategories.vue';
export default{
    setup() {
        useMeta({
            title: 'Categories'
        })
    },
    components:{
        TableCategories
    }

}
</script>