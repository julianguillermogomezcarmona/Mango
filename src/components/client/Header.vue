<template>
    <section class="bg-white">
        <header class="flex w-full px-[210px] py-[10px] h-[80px] items-center gap-[30px] border-b-[1px]">
            <div class="flex items-center gap-[10px]">
                <img class="h-[50px]" src="../../assets/carne.png" alt="logo">
                <img class="h-[100%]" src="../../assets/logo.svg" alt="nombre_logo">

            </div>
            <div class="flex border-gray-400 border-[1px] w-[40%] font-semibold rounded-[50px] pl-[20px]">
                <input class="h-[100%] outline-none w-[87%] bg-white py-[7px]" type="search"
                    placeholder="Encuentra tu producto">
                <button class="bg-second text-white rounded-r-[50px] px-[20px] w-[13%]">
                    <fa icon="search"></fa>
                </button>
            </div>
        </header>
        <Nav></Nav>
    </section>
</template>
<script>
import Nav from './Nav.vue';
export default {
    components: {
        Nav
    }
}
</script>