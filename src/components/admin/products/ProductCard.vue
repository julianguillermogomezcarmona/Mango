<template>
    <section class="bg-first my- w-[230px] px-[25px] rounded-[15px] pt-[10px] pb-[30px] flex gap-[15px] items-center  flex-col">
        <h2 class="font-bold text-[22px]">{{ product.name }}</h2>
        <img class="w-[45%]" :src="getProductImageUrl(product.image)" :alt="product.name">
        <h3 class="bg-green-500 px-[10px] rounded-full text-[14px] py-[2px] text-white font-semibold">{{
            product.category[0].name }}</h3>
        <div class="text-[10px] flex gap-[10px] w-full ">
            <div class="flex flex-col items-center">
                <h3 class="font-bold">Precio por kilo</h3>
                <span>{{ product.price }}</span>
            </div>
            <div class="flex flex-col items-center">
                <h3 class="font-bold">Cantidad disponible</h3>
                <span>{{ product.numProducts }}</span>
            </div>
        </div>
        <div class="flex gap-[15px] mt-[10px] font-semibold">
            <button
                class="bg-[#fab005] text-[14px] py-[8px] rounded-full px-[9px] text-white hover:bg-[#f0bc00] hover:text-gray-100 flex items-center gap-[5px]">
                <fa icon="pen-to-square"></fa>
            </button>
            <button
                class="bg-red-700 text-[14px] py-[8px] rounded-full hover:bg-red-600 px-[9px] flex items-center gap-[5px]">
                <fa icon="trash"></fa>
            </button>
        </div>
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
