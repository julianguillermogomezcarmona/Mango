<template>
    <section class="overflow-hidden scroll-m-8 flex flex-col items-center gap-[20px]">
        <div class="w-full flex items-start">
            <button @click.prevent="modal = true"
                class=" bg-blue-400 px-[10px] py-[6px] flex items-center gap-[5px] font-semibold text-[14px] rounded-full text-white hover:bg-blue-600">
                <fa class="text-[20px]" icon="plus" />
                Nueva categoria
            </button>
        </div>
        <div class="border-[1px] overflow-auto h-[80%] border-first rounded-[10px] flex justify-center w-[80%]">

            <table class="table  w-full divide-y-[1px] divide-first text-center  text-first">
                <tr class=" ">
                    <th class="py-[7px] text-[18px]">Id</th>
                    <th class=" text-[18px]">Nombre</th>
                    <th class=" text-[18px]">Acciones</th>
                </tr>

                <tr v-for="category, x in categories" :key="categories._id" class="border-b-[1px] w-full border-slate-500 ">
                    <td class=" text-slate-400">{{ x = x + 1 }}</td>
                    <td class="text-slate-400 font-semibold">{{ category.name }}</td>
                    <td class="text-slate-400 flex gap-[10px] py-[7px] justify-center ">
                        <fa icon="pen-to-square" class="text-yellow-500 hover:text-yellow-700 hover:cursor-pointer" />
                        <fa icon="trash" class="text-red-500 hover:text-red-800 hover:cursor-pointer" />
                    </td>
                </tr>

            </table>

        </div>
        <div class="flex flex-col gap-[10px]">
            <!-- <div class="bg-white fixed top-[29px] rounded-t-[25px] left-[235px] h-[20px] w-[80.5%]">
            </div> -->



            <!-- <div class="bg-white fixed bottom-[29px] rounded-b-[25px] left-[235px] h-[20px] w-[80.5%]">
            </div> -->
        </div>
        <NewCategorie class="absolute top-0 left-0" :modal="modal" @clicked="close(value)"></NewCategorie>

    </section>
</template>
<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import NewCategorie from './NewCategorie.vue';
import CategoriesServices from '../../../services/categories'
export default {
    data() {
        return {
            modal: false,
            categories: []
        }
    },
    methods: {
        close(value) {
            this.modal = value;
        },
        async getCategoriesAll() {
            let response = await CategoriesServices.CategoriesAll()
            // console.log(response.data.category);
            this.categories = response.data.category
            // console.log(this.categories);
        }
    },
    components: {
        NewCategorie, vSelect
    },
    watch: {
        categories: function (newValue, oldValue) {
            console.log('newvalue' + newValue + 'oldvalue' + oldValue);
        }
    },
    mounted() {
        this.getCategoriesAll()
    }
}
</script>
<style>
/* Estilos para la barra de desplazamiento en navegadores webkit (Chrome, Safari) */
.scroll-container::-webkit-scrollbar {
    position: absolute;
    width: 7px;
    border-top-right-radius: 25px;
    height: 5px;
}

.scroll-container::-webkit-scrollbar-thumb {
    background-color: none;
    margin-top: 30px;
    width: 0px;
    border-radius: 5px;
}

.scroll-container::-webkit-scrollbar-track {
    margin-top: 30px;
    margin-bottom: 30px;
    padding-right: 10px;
    height: 50px;
    width: 5px;
    /* background-color: #02161D; */
}
</style>