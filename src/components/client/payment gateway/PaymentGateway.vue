<template>
   <div>
        <div class=" w-10/12 m-auto flex space-x-8">
            <div class=" p-4 bg-slate-400 flex flex-col space-y-4 rounded-lg">
                <Shopping/>
                <Shopping/>
            </div>
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