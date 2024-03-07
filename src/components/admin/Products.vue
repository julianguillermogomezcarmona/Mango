<template>
    <section class="overflow-hidden scroll-m-8 ">
        <div class="flex gap-[20px] items-center mb-[30px]">
            <div class="w-[180px] text-center my-[10px] h-[40px] relative overflow-hidden text-[15px]">
                <label for="search" class="">
                    <fa icon="magnifying-glass" class="text-first absolute bottom-3 left-4"></fa>
                </label>
                <input type="text" id="search" required autocomplete="off" class="fields text-first text-[14px]">
                <label class="lbl-nombre ">
                    <span class="text-nomb font-semibold ">Buscar productos</span>
                </label>
            </div>
            <button @click.prevent="modal = true"
                class="text-gray-100 text-[14px] flex items-center gap-[5px] hover:bg-[#3ac041] py-[7px] font-semibold px-[15px] bg-green-600 hover:text-white  rounded-[25px]">
                <fa class="text-[20px]" icon="plus"></fa> Producto
            </button>
        </div>
        <div class="flex  gap-[10px] overflow-auto h-[82%] flex-wrap rounded-[15px]">
            <Loading v-if="loading"></Loading>
            <h3 v-if="products.length == 0 && loading == false">No tienes productos creados</h3>
            
           <Product class="h-[66%]" v-for="product in products" :key="product._id" :product="product"></Product>
            
        </div>
        <NewProduct class="absolute top-0 left-0" :modal="modal" @clicked="close(value)"></NewProduct>

    </section>
</template>
<script>
import Loading from '../Loading.vue'
import {watch} from 'vue'
import {useMeta} from 'vue-meta'
import NewProduct from './NewProduct.vue';
import Product from './products/ProductCard.vue';
import ProductsServices from '../../services/products'
export default {
    setup() {
        useMeta({
            title: 'Products'
        })
    },
    data() {
        return {
            loading: false,
            modal: false,
            products: [],
        }
    },
    components: {
        Product, NewProduct, Loading
    },
    methods: {
        close(value) {
            this.modal = value;
        },
        async getProducts() {
            this.loading = true
            const response = await ProductsServices.getProduct()
            // console.log(response);
            if (response.data.error) {
                console.log('error');
            } else {
                this.loading = false
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
<style scoped>
.lbl-nombre {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding-bottom: 20px;
    height: 100%;
    pointer-events: none;
    color: #02161D;
    border: 2px solid #02161D;
    border-radius: 25px;
}



.text-nomb {
    position: absolute;
    bottom: 7px;
    left: 37px;
    transition: all 0.3s ease;
}

.fields {
    width: 100%;
    height: 100%;
    background: inherit;
    padding-top: 20px;
    padding-bottom: 14px;
    padding-left: 37px;
    padding-right: 10px;
    outline: 0px;
}

.fields:focus+.lbl-nombre .text-nomb,
.fields:valid+.lbl-nombre .text-nomb {
    transform: translateY(-70%);
    font-size: 11px;
    font-weight: 700;
    color: #02161D;
}
</style>