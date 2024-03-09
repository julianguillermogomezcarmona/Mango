<template>
    <div class=" flex flex-col space-y-10">
        <div class=" flex w-10/12 m-auto">
            <div class=" flex flex-col space-y-4 w-10/12 m-auto">
                <CardPaymentMethods />
            </div>
            <Resumen :showRender="isFeaturedEnable" />
        </div>
        <Categorys />
    </div>
</template>

<script>
import ProcessHeader from '../ProcessHeader.vue'
import CardPaymentMethods from './CardPaymentMethods.vue'
import Resumen from '../payment gateway/Resumen.vue'
import Loading from '../../Loading.vue'
import Categorys from '../category/Categorys.vue'

export default{
    components: {
        ProcessHeader,
        CardPaymentMethods,
        Resumen,
        Loading,
        Categorys
    },
    data(){
        return{
            isFeaturedEnable: false
        }
    }
}
</script>