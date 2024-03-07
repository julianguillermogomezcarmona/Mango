<template>
   <div>
        <div class=" w-10/12 m-auto flex space-x-8">
            <Shopping/>
            <Resumen :showRender="isFeaturedEnable"/>
        </div>
   </div>
</template>


<script>
import Shopping from './ShoppingCart.vue'
import Resumen from './Resumen.vue'
import Process from '../ProcessHeader.vue'
 export default {
    components: {
        Shopping,
        Resumen,
        Process
    },

    data(){
        return{
            isFeaturedEnable: true
        }
    }
 }
</script>./ProcessHeader.vue