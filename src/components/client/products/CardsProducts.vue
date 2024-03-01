<template>
    <section class="bg-gradient-to-r from-[#fdd5df] to-[#ff8a99]  h-[180px] relative text-first px-[25px] justify-between rounded-[15px] pt-[10px] pb-[30px] flex gap-[30px] flex-col">
        <div class="relative flex  justify-end items-start w-full h-[60px]">
            <img class="w-[150px] h-[] absolute left-[-15px] top-[-40px]" src="../../../assets/pollo.svg"
                :alt="product.name">
            <!-- <img class="w-[95%] h-[] absolute left-[-50px] top-[-40px]" :src="getProductImageUrl(product.image)" :alt="product.name"> -->

            <button>
                <fa icon="cart-plus" class="text-firts mt-[10px] bg-white  rounded-full px-[7px] py-[9px] text-[18px] ">
                </fa>
            </button>

        </div>
        <div class="flex justify-between items-center gap-[10px]">
            <h2 class="font-bold text-[20px]">{{ product.name }}</h2>
            <div class="w-[30%] font-bold items-center flex flex-col text-[10px]">
                <span class="  text-[12px]">$10.000</span>
                <span >20 en stock</span>
            </div>
        </div>
        <p class="absolute bottom-2 text-[10px] font-semibold">Importados de la granda del tio juaco</p>

        <!-- <h3 class="bg-green-500 px-[10px] rounded-full text-[14px] py-[2px] text-white font-semibold">{{
            product.category[0].name }}</h3>
        <div class="text-[10px] flex gap-[10px] w-full ">
           
            <div class="flex flex-col items-center">
                <h3 class="font-bold">Cantidad disponible</h3>
                <span>{{ product.numProducts }}</span>
            </div>
        </div> -->
    </section>
</template>

<script>

export default {
    data() {
        return {
        }
    },
    methods: {
        getProductImageUrl(image) {
            // Si la imagen es una URL válida, la retornamos tal cual
            if (image.startsWith('http')) {
                return image;

            }
            return image;
        },
    },
    mounted() {
        // console.log(this.product);
    },
    props: {
        product: {
            Type: Object,
            required: true
        },
    }
}
</script>