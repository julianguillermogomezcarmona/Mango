<template>
    <div v-for="pagos in MetodosPagos" :key="MetodosPagos.id" class=" flex space-x-10 items-center bg-gray-500 w-2xxl h-20 text-white p-6">
        <img class=" w-20 bg-white rounded-lg p-2" :src="pagos.ruta" alt="">
        <div class=" w-64 flex flex-col justify-start ">
            <span class=" text-xl">{{ pagos.metodo }}</span>
            <p class=" text-gray-800">{{ pagos.descripcion }}</p>
        </div>
        <div class=" w-32  flex justify-end">
            <input class=" w-6 h-6" type="checkbox" name="" id="">
        </div>
    </div>
</template>

<script>

   export default{
        data(){
            return{
                MetodosPagos : [
                   {
                       id: 1,
                       ruta: '../../src/assets/pagos/Paypal.png',
                       metodo: 'PayPal',
                       descripcion: 'Pague atravez de paypal'
                   },
                   {
                       id: 2,
                       ruta: '../../src/assets/pagos/nequi.jpg',
                       metodo: 'Nequi',
                       descripcion: 'Pague atravez de nequi'
                   },
                   {
                       id: 3,
                       ruta: '../../src/assets/pagos/visa.png',
                       metodo: 'Visa',
                       descripcion: 'Pague atravez de Visa'
                   },
                   {
                       id: 4,
                       ruta: '../../src/assets/pagos/efecty.png',
                       metodo: 'Efecty',
                       descripcion: 'Pague atravez de Efecty'
                   },
                   {
                       id: 5,
                       ruta: '../../src/assets/pagos/visa.png',
                       metodo: 'Visa',
                       descripcion: 'Pague atravez de Visa'
                   },
                   {
                       id: 6,
                       ruta: '../../src/assets/pagos/visa.png',
                       metodo: 'Visa',
                       descripcion: 'Pague atravez de Visa'
                   },
               ]
           }
       }
   }


</script>


