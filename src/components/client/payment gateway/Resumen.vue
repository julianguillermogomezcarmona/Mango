<template>
    <div v-if="showRender" class=" text-white bg-black w-96 h-64 py-2">
        <div class=" w-4/5 m-auto">
            <h3 class=" text-2xl font-bold my-2">Resumen</h3>
            <button class="">
                <RouterLink :to="{ name: 'shoppingCart' }" class=" bg-yellow-400 text-black w-full p-2 rounded-lg font-bold my-2">Continuar con la compra</RouterLink>
            </button>
            <div class=" flex justify-between">
                <div>
                    <p>1 producto</p>
                    <p>Tarifa Servicio</p>
                </div>
                <div>
                    <p>Precio</p>
                    <p>xddd</p>
                </div>
            </div>
        </div>
        <div class=" p-2 border-y border-white w-full flex justify-center my-2">
            <p class=" text-xl">Total: <span class=" text-2xl font-bold">40000 COP</span></p>
        </div>
        <p class=" text-center">Leer opiniones</p>
    </div>
    <div v-if="!showRender" class=" text-white bg-black w-xxl h-96 py-2 ">
        <div class=" w-4/5 m-auto">
           <div>
                <h3 class=" text-2xl font-bold my-2 text-center">Nombre del Producto</h3>
                <div class=" flex space-x-5">
                    <div class=" w-32 h-20 bg-white"></div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque laudantium soluta</p>
                </div>
           </div>
            <div class=" flex justify-between">
                <div>
                    <p>1 producto</p>
                    <p>Tarifa Servicio</p>
                </div>
                <div>
                    <p>Precio</p>
                    <p>xddd</p>
                </div>
            </div>
        </div>
        <div class=" p-2 border-y border-white w-full flex flex-col items-center justify-center my-2">
            <p class=" text-xl">Sub Total: <span class=" text-xl font-bold">40000 COP</span></p>
            <p class=" text-xl">Tarifa servicio: <span class=" text-xl font-bold">40000 COP</span></p>
        </div>
        <div class=" w-4/5 flex flex-col items-center justify-center my-2 m-auto">
            <p class=" text-xl">Total: <span class=" text-2xl font-bold">40000 COP</span></p>
            <button @click="handleActiveModal" class=" bg-yellow-400 text-black w-full p-2 rounded-lg font-bold my-2">
                Continuar
            </button>
        </div>
    </div>
    <ModalResumen v-if="isActiveModal"/>
</template>


<script>

import { RouterLink } from 'vue-router';
import ModalResumen from './ModalResumen.vue';

export default{
    data(){
        return{
            isActiveModal: false
        }
    },
    props: ['showRender'],
    components:{
        ModalResumen
    },
    methods:{
        handleActiveModal: function() {
            this.isActiveModal = !this.isActiveModal
        }
    }
}

</script>