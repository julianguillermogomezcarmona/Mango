<template>
    <nav class="flex px-[120px] justify-center w-full gap-[30px] h-[50px] text-first items-center font-medium shadow-slate-400 shadow-lg">
        <RouterLink class="flex relative z-10 hover:bg-second text-white after:contents-[''] after:bg-second after:z-[-1] after:text-white after:h-[100%] after:w-full after:absolute after:top-0 after:left-0 flex-col w-[100px] text-center justify-center h-[100%]"  :to="{ name: 'home' }">
            <span>Inicio</span>
        </RouterLink>
        <RouterLink class="flex flex-col h-[100%] text-center justify-center px-[10px] hover:text-white hover:bg-second" :to="{ name: 'home' }">
            <span>Servicios</span>
        </RouterLink>
        <RouterLink class="flex flex-col h-[100%] text-center justify-center px-[10px] hover:text-white hover:bg-second" :to="{ name: 'home' }">
            <span>Promociones</span>
        </RouterLink>
        <RouterLink class="flex flex-col h-[100%] text-center justify-center px-[10px] hover:text-white hover:bg-second" :to="{ name: 'home' }">
            <span>Categorias</span>
        </RouterLink>
        <RouterLink class="flex flex-col h-[100%] text-center justify-center px-[10px] hover:text-white hover:bg-second" :to="{ name: 'home' }">
            <span>Sobre Nosotros</span>
        </RouterLink>
        <RouterLink class="flex flex-col h-[100%] text-center justify-center px-[10px] hover:text-white hover:bg-second" :to="{ name: 'home' }">
            <span>Blogs</span>
        </RouterLink>
        <RouterLink class="flex flex-col" :to="{ name: 'payment' }">
            <fa class="text-[25px] text-first hover:text-[#052b38]" icon="cart-shopping"></fa>
        </RouterLink>
        <RouterLink class="flex flex-col ml-[100px] bg-first text-white px-[20px] rounded-[5px] py-[5px] hover:bg-[#052b38]" :to="{ name: 'login' }">
            <span>Iniciar sesión</span>
        </RouterLink>
       
    </nav>
</template>
