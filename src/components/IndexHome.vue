<template>
    <section class="bg-[#e7e7e7]">
        <Header></Header>
        <Promotion></Promotion>
        <Categories></Categories>
        <Offer></Offer>
        <SectionProduct></SectionProduct>
        
    </section>
</template>
<script>
import Header from './client/Header.vue';
import Promotion from './client/Promotion.vue'
import Categories from './client/category/Categorys.vue';
import Offer from './client/Offer.vue';
import SectionProduct from './client/products/SectionProduct.vue';
export default {
    data() {
        return {
            username: " ",
        };
    },
    methods: {

    },
    components: {
        Header,Promotion,Categories, Offer, SectionProduct
    },
    mounted(){
        // this.username = JSON.parse(localStorage.getItem("user"));
        console.log(this.username);
    }
}
</script>