<template>
    <section class="flex flex-col items-center w-full gap-[15px] pb-[45px]">
        <h2 class="text-[35px] font-medium text-center ">Consulta todas las <br>categorias</h2>
        <ProductsCategory></ProductsCategory>
    </section>
</template>
<script>
import ProductsCategory from './ProductsCategory.vue';
export default {
    components: {
        ProductsCategory
    }
}
</script>