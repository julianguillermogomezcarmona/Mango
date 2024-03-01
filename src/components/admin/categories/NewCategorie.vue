<script>
import CategoriesServices from '../../../services/categories'
export default {
    data() {
        return {
            name: ''
        };
    },
    mounted() {
    },
    components: {
    },
    methods: {
        clicked() {
            this.$emit("clicked", false);
        },
        async createCategorys() {
            // const body = {
            //     name: this.name
            //     // description: 'hola'
            // }
            let response = await CategoriesServices.CreateCategories({name: this.name})
            // console.log(response);
            // console.log(response);
            if (response) {
                this.clicked()
            } else {
                console.log(error);
                console.error(error)
            }
            // try {
            // } catch (error) {
            //      }
        },


    },
    props: {
        modal: Boolean,
    },
};
</script>
<template>
    <section class="flex fixed items-center justify-center h-screen w-full " v-show="modal">
        <div id="modal"
            class="z-[1000] w-full h-screen flex justify-center items-center flex-col after:content-[''] after:bg-slate-900 after:w-full after:h-screen after:absolute after:block after:opacity-70">
            <form
                class="z-10 flex justify-center gap-[25px] items-center  fixed flex-col w-[34%] py-[25px] bg-white rounded-[10px]">
                <!--modal header-->
                <div class="w-full relative flex justify-center text-first font-bold">
                    <h3 class="text-[25px]">Agregar nueva categoria</h3>
                    <fa @click.prevent="clicked" class="cursor-pointer absolute right-4 top-[-5px]" icon="xmark"></fa>
                </div>

                <!--modal body-->
                <div class="z-[10]  gap-[10px] text-[13px] px-[25px] w-full flex justify-center text-first">
                    <div class="w-[68%]  h-[38px] relative  overflow-hidden text-[15px]">
                        <input type="text" required class="fields" v-model="name" id="name" autocomplete="off">
                        <label class="lbl-nombre">
                            <span class="text-nomb font-semibold">Nombre de la categoria</span>
                        </label>
                    </div>


                </div>

                <!--modal footer-->
                <div class="text-[17px] font-[semibol] w-full flex gap-5 justify-center">
                    <button class="bg-2 px-5 py-[5px] text-white bg-[#fab005] rounded-lg focus:ring-2"
                        @click.prevent="createCategorys()">
                        Agregar
                    </button>
                </div>
            </form>
        </div>
    </section>
</template>

<style scoped>
.vselect {
    --vs-border-color: #02161D;
    font-weight: 400;
    --vs-dropdown-bg: #ffffff;
    --vs-selected-color: #000000;
    --vs-search-input-color: #000000;
}

.custom-placeholder ::placeholder {
    font-weight: 700;
    color: #979797;
    /* Cambiar el color a tu preferencia */
}

.fields {
    width: 100%;
    height: 100%;
    background: none;
    padding-top: 20px;
    border: none;
    padding-bottom: 10px;
    outline: 0px;
    font-size: 15px;
    padding-left: 10px;
}

.lbl-nombre {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding-bottom: 20px;
    height: 100%;
    pointer-events: none;
    border: 1px solid #02161D;
    border-radius: 5px;

}



.text-nomb {
    position: absolute;
    bottom: 5px;
    left: 10px;
    transition: all 0.3s ease;

}

.text-nomb2 {
    position: absolute;
    top: 5px;
    left: 10px;
    transition: all 0.3s ease;

}

.fields:focus+.lbl-nombre .text-nomb,
.fields:valid+.lbl-nombre .text-nomb {
    transform: translateY(-80%);
    font-size: 11px;
    font-weight: 500;
    color: #0d2222;
}

.fields:focus+.lbl-nombre .text-nomb2,
.fields:valid+.lbl-nombre .text-nomb2 {
    transform: translateY(-20%);
    font-size: 11px;
    font-weight: 500;
    color: #0d2222;
}

.fields:focus+.lbl-nombre:after,
.fields:valid+.lbl-nombre:after {
    transform: translateX(0%);
}
</style>
    
