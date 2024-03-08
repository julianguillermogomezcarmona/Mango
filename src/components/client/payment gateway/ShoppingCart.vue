<template>
    <div class=" flex flex-col items-center justify-center p-4 bg-red-500 w-xxl h-40 border-2 border-black">
        <h2></h2>
        <div class=" flex items-center space-x-4  p-1 text-white">
            <img class=" w-28 h-full " src="../../../assets/pollo.svg" alt="">
            <div class=" h-full flex flex-col justify-around">
                <h3 class=" text-lg font-bold">Nombre del Producto</h3>
                <p class=" text-base">Lorem lorem insu insu descripcion descripcion
                    ghfhuif jshajdhd
                </p>
            </div>
            <div class=" flex flex-col justify-around items-end h-full text-black">
                <button class=" bg-white w-6 h-6 flex justify-center rounded-lg">X</button>
                <div class=" flex space-x-4">
                    <button class=" bg-white">MENOS</button>
                    <p>$4000</p>
                    <button class=" bg-white">MAS</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default{

    data() {
        return{
            precio: 4000
        }
    },
   methods: {
      
   }
}
</script>