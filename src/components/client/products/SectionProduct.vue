<template>
    <section class="overflow-hidden flex flex-col px-[210px] items-center scroll-m-8 ">
        <h2 class="text-[30px] font-bold mb-[40px]">Nuestros productos</h2>
        <div class="grid gap-[40px]  grid-cols-3 rounded-[15px]">
            <!-- <Loading v-if="loading"></Loading> -->
            <h3 v-if="products.length == 0 && loading == false">No hay productos por el momento</h3>
            
           <Product class="" v-for="product in products" :key="product._id" :product="product"></Product>
            
        </div>
    </section>
</template>
<script>
// import Loading from '../Loading.vue'
import Product from './CardsProducts.vue';
import ProductsServices from '../../../services/products'
export default {
    data() {
        return {
            loading: false,
            products: [],
        }
    },
    components: {
        Product,
    },
    methods: {
        
        async getProducts() {
            // this.loading = true
            const response = await ProductsServices.getProduct()
            // console.log(response);
            if (response.data.error) {
                console.log('error');
            } else {
                // this.loading = false
                this.products = response.data.products
                // console.log(this.product);
                // console.log('todo bien');
            }

        },
    },
    mounted() {
        this.getProducts()
        
    },
    

}
</script>