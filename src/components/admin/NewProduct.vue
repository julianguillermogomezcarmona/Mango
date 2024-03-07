<script>
import vSelect from "vue-select";
import CategoriesServices from '../../services/categories'
import CreateProduct from '../../services/products'
import "vue-select/dist/vue-select.css";
export default {
    data() {
        return {
            categories: [],
            category: '',
            name: '',
            price: '',
            description: '',
            amount: '',
            image: null,

        };
    },
    mounted() {
        this.getCategoriesAll()
    },
    components: {
        vSelect
    },
    methods: {
        clicked() {
            this.$emit("clicked", false);
        },
        changeImage(e) {
            let archivo = e.target.files[0]
            let objeto = URL.createObjectURL(archivo)
            let filename = document.getElementById('image')
            filename.src = objeto
            if (archivo) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    this.image = reader.result;
                    console.log(this.image);

                };
                reader.readAsDataURL(archivo)
            } else {
                console.log('No se ha cargado una imagen');
            }
            // let image = document.getElementById('upload')
            // this.image = image
        },

        async getCategoriesAll() {
            let response = await CategoriesServices.CategoriesAll()
            // console.log(response.data.category);
            this.categories = response.data.category
            // console.log(this.categories);
        },
        async createProduct() {
            const body = {
                name: this.name,
                category: this.category._id,
                description: this.description,
                price: this.price,
                numProducts: this.amount,
                image: this.image
            }
            let response = await CreateProduct.createProduct(body)
            console.log(response);
            if (response.data.error) {
                console.log('error');
            } else {
                console.log('todo bien');
                this.clicked()
            }
        }

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
            <div
                class="z-10 flex justify-center gap-[25px] items-center  fixed flex-col w-[34%] py-[25px] bg-white rounded-[10px]">
                <!--modal header-->
                <div class="w-full relative flex justify-center text-first font-bold">
                    <h3 class="text-[25px]">Agregar nuevo producto</h3>
                    <fa @click.prevent="clicked" class="cursor-pointer absolute right-4 top-[-5px]" icon="xmark"></fa>
                </div>

                <!--modal body-->
                <div
                    class="z-[10] after:content-[''] relative after:absolute after:top-0 after:left-0 after:bg-modal after:bg-no-repeat after:bg-cover after:bg-center after:w-[200px] after:h-[200px] after:z-[-5] gap-[10px] text-[13px] px-[25px] w-full flex flex-wrap text-first">
                    <div class="w-[48%] h-[35px] relative  overflow-hidden text-[15px]">
                        <input type="text" required class="fields" v-model="name" id="name" autocomplete="off">
                        <label class="lbl-nombre">
                            <span class="text-nomb font-semibold">Nombre del producto</span>
                        </label>
                    </div>
                    <div class="w-[48%] text-[15px] .custom-placeholder">
                        <v-select id="category" placeholder="Seleccionar categoria" v-model="category" :options="categories"
                            label="name" class="vselect text-first menu"></v-select>
                    </div>
                    <div class="w-[48%] h-[35px] relative overflow-hidden text-[15px]">
                        <input type="number" required class="fields" v-model="price" id="price" autocomplete="off">
                        <label class="lbl-nombre">
                            <span class="text-nomb font-semibold">Precio</span>
                        </label>
                    </div>
                    <div class="w-[48%] h-[35px] relative overflow-hidden text-[15px]">
                        <input type="number" required class="fields" v-model="amount" id="price" autocomplete="off">
                        <label class="lbl-nombre">
                            <span class="text-nomb font-semibold">Cantidad</span>
                        </label>
                    </div>
                    <div class="w-[48%] h-[150px] relative overflow-hidden text-[15px]">
                        <textarea required class="fields" id="price" v-model="description" autocomplete="off"></textarea>
                        <label class="lbl-nombre">
                            <span class="text-nomb2 font-semibold">Descripción</span>
                        </label>
                    </div>
                    <div class="w-[48%] flex gap-2 flex-col items-center h-full relative">
                        <label
                            class="custom-file-upload border-[1px] rounded-[5px] border-first w-full font-semibold text-center">
                            <input id="upload" required type="file" @change="changeImage" accept="image/png, image/jpeg"
                                class="hidden" />
                            <fa icon="upload" /> Imagen del producto
                        </label>
                        <img class="w-[80%] h-[110px] " id="image" alt="">
                    </div>

                </div>

                <!--modal footer-->
                <div class="text-[17px] font-[semibol] w-full flex gap-5 justify-center">
                    <button class="bg-2 px-5 py-[5px] text-white bg-[#fab005] rounded-lg focus:ring-2"
                        @click="createProduct()">
                        Agregar
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.custom-file-upload {
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
}

.vselect {
    --vs-border-color: #02161D;
    font-weight: 400;
    --vs-dropdown-bg: #ffffff;
    --vs-selected-color: #000000;
    --vs-search-input-color: #000000;
    --vs-dropdown-max-height: 230px;
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
    transform: translateY(-65%);
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

.menu {
    max-height: 10px;
}
</style>
    
