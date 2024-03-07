<template>
    <section class="flex  flex-wrap">
        <div class="h-[70px] w-full flex gap-[10px]">
            <h3 class="bg-[#c54a4a] font-semibold p-[10px] rounded-[10px]">Bienvenido <br><span >Julian Gomez Carmona</span></h3>
            <div class="bg-[#3db4c9] rounded-[10px] w-[35%] flex items-center font-semibold relative overflow-hidden p-[10px]">
                <h4 class="w-full text-left">El tiempo en cartagena hoy es de <span>25°</span></h4>
                <img src="../../assets/admin/sol.png" class="h-[90px] top-0 right-0 absolute" alt="sol">
            </div>
            <div class="bg-first relative flex rounded-[10px] gap-[10px] p-[10px] items-center w-[45%] overflow-hidden font-semibold">
                <h4>La carne de res en el mercado ha aumentado un <span class="text-green-500">5%</span></h4>
                <!-- <img src="../../assets/admin/aumento.png" class="h-[60px] absolute  right-5" alt=""> -->
                <fa class="text-green-500 text-[30px]" icon="fa-solid fa-arrow-up-right-dots"></fa>
            </div>
        </div>
    </section>
</template>
<script>
import {useMeta} from 'vue-meta'
export default{
    setup() {
        useMeta({
            title: 'Dashboard'
        })
    },
}
</script>