<template>
        <section class="w-full flex justify-center">
            <div
                class="z-[50] backdrop-blur-[5px] pt-[20px] flex flex-col items-center  px-[10px] pb-[15px] border-white border-[1px] bg-white/5 w-[29%] rounded-[15px] h-[340px] ">
                <h2 class="text-white text-[24px] text-center font-bold">Crear cuenta</h2>
                <form class="w-full flex mt-[15px] flex-col items-center ">
                    <div class="w-[80%] text-center h-[40px] relative overflow-hidden text-[15px]">
                        <input type="text" required class="fields" v-model="name">
                        <label class="lbl-nombre">
                            <span class="text-nomb font-semibold ">Nombre de usuario</span>
                        </label>
                    </div>
                    <div class="w-[80%] text-center my-[10px] h-[40px] relative overflow-hidden text-[15px]">
                        <input type="email" required class="fields" v-model="email">
                        <label class="lbl-nombre">
                            <span class="text-nomb font-semibold ">Correo electronico</span>
                        </label>
                    </div>
                    <div class="w-[80%] h-[40px] relative overflow-hidden text-[15px]">
                        <input required class="fields" :type="inputType" v-model="password" id="password">
                        <label class="lbl-nombre">
                            <span class="text-nomb font-semibold">Contraseña</span>
                        </label>
                        <fa class="text-white text-[12px] absolute right-0 bottom-3" @click.prevent="togglePasswordVisibility"
                            :icon="buttonLabel"></fa>
                    </div>
                    <button @click.prevent="singUp()"
                        class="bg-first mt-[30px] mb-[25px] w-[50%] rounded-full py-[5px] text-white hover:bg-[#052b38]">Registrarse</button>
                </form>

                <h3 class="text-[14px] text-white">¿Ya estás registrado?
                    <RouterLink :to="{ name: 'login' }" class="text-[16px] ml-[3px] font-semibold ">Inicia sesión</RouterLink>
                </h3>
            </div>
        </section>
</template>

<script>
import { useMeta } from 'vue-meta'
import UserServices from '../../services/users'
import axios from 'axios'
import { routerKey } from 'vue-router'
export default {
    setup() {
        useMeta({
            title: 'Registro'
        })
    },
    data() {
        return {
            showPassword: false,
            // password: '123',
            name: '',
            email: '',
            password: '',
        }
    },
    mounted() {
    },
    methods: {
        togglePasswordVisibility() {
            this.showPassword = !this.showPassword;
        },

        async singUp () {
            const body = {
                name: this.name,
                email: this.email,
                password: this.password
            }
            let response = await UserServices.createUser(body)
            console.log(response.data.name);
            try {
                console.log(response.data);
                this.$router.push({ name: 'login' })
            } catch (error) {
                console.log(error);
                console.error(error)
            }

        }

    },
    computed: {
        inputType() {
            return this.showPassword ? 'text' : 'password';
        },
        buttonLabel() {
            return this.showPassword ? 'eye-slash' : 'eye';
        }
    },
}
</script>
<style scoped>
.lbl-nombre {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding-bottom: 20px;
    height: 100%;
    pointer-events: none;
    color: #ffffff;
    border-bottom: 2px solid #022735;
}

.lbl-nombre:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 100%;
    border-bottom: 2px solid #ffffff;
    transform: translateX(-100%);
    transition: all 0.3s ease;
}

.text-nomb {
    position: absolute;
    bottom: 5px;
    left: 0;
    transition: all 0.3s ease;
}

.fields {
    width: 100%;
    height: 100%;
    background: none;
    padding-top: 20px;
    border: none;
    padding-bottom: 10px;
    outline: 0px;
}

.fields:focus+.lbl-nombre .text-nomb,
.fields:valid+.lbl-nombre .text-nomb {
    transform: translateY(-90%);
    font-size: 13px;
    color: #ffffff;
}

.fields:focus+.lbl-nombre:after,
.fields:valid+.lbl-nombre:after {
    transform: translateX(0%);
}
</style>