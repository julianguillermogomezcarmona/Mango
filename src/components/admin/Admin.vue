<template>
    <section class="flex relative bg-gradient-to-b from-first to-[#0a222b] h-screen text-white">
        <div class="w-[15%] relative px-[50px] flex flex-col pt-[40px] items-center text-center">
            <h2 class="flex flex-col items-center font-bold">
                <fa class="text-[30px]" icon="snowflake"></fa>
                Mango
            </h2>
            <nav class="flex flex-col mb-[50px] h-[450px] justify-center gap-[15px]">
                <RouterLink
                    class=" font-semibold flex items-center gap-[10px] hover:text-first hover:bg-white rounded-[10px] p-[5px] px-[10px]"
                    :to="{ name: 'dashboard' }">
                    <fa class="" icon="chart-line"></fa>
                    Dashboard
                </RouterLink>
                <RouterLink
                    class=" font-semibold flex items-center gap-[10px] hover:text-first hover:bg-white rounded-[10px] p-[5px] px-[10px]"
                    :to="{ name: 'products' }">
                    <fa icon="drumstick-bite"></fa>
                    Productos
                </RouterLink>
                <RouterLink
                    class=" font-semibold flex items-center gap-[10px] hover:text-first hover:bg-white rounded-[10px] p-[5px] px-[10px]"
                    :to="{ name: 'categories' }">
                    <fa icon="bars"></fa>
                    Categorias
                </RouterLink>
                <RouterLink
                    class=" font-semibold flex items-center gap-[10px] hover:text-first hover:bg-white rounded-[10px] p-[5px] px-[10px]"
                    :to="{ name: 'setting' }">
                    <fa icon="gears"></fa>
                    Configuración
                </RouterLink>
            </nav>
            <button @click.prevent="closetSecion()"
                class="text-left font-semibold flex items-center justify-start gap-[10px] hover:text-first hover:bg-white rounded-[10px] p-[5px] px-[10px]">
                <fa icon="fa-solid fa-right-from-bracket"></fa>
                Salir
            </button>

        </div>
        <div class="w-[85%] p-[30px]">
            <RouterView class="bg-white rounded-[20px] h-[100%] p-[20px]"></RouterView>
        </div>
    </section>
</template>
<script>
import { useMeta } from 'vue-meta'
export default {
    // setup() {
    //     useMeta: ({
    //         title: 'register'
    //     })
    // },
    methods: {
        closetSecion() {
            localStorage.removeItem('token')
            localStorage.removeItem('accessToken')
            this.$router.push({ name: 'home' })
        },
    }
}
</script>