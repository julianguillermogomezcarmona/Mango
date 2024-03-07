<template>
    <section class="w-full flex justify-center">
        <div
            class="z-[50] backdrop-blur-[5px] pt-[20px] flex flex-col items-center pb-[15px] px-[10px] border-white border-[1px] bg-white/5 w-[29%] rounded-[15px] h-[320px] ">
            <h2 class="text-white text-[24px] text-center font-bold">Inicio de sesión</h2>
            <form action="" class="w-full mt-[15px] flex flex-col items-center ">
                <div class="w-[80%] text-center h-[40px] relative overflow-hidden text-[15px]">
                    <input type="text" required class="fields" v-model="email">
                    <label class="lbl-nombre">
                        <span class="text-nomb font-semibold ">Correo electronico</span>
                    </label>
                </div>
                <div class="w-[80%] h-[40px] relative mt-[10px] mb-[8px] overflow-hidden text-[15px]">
                    <input required class="fields" :type="inputType" v-model="password" id="password">
                    <label class="lbl-nombre">
                        <span class="text-nomb font-semibold">Contraseña</span>
                    </label>
                    <fa class="text-white text-[12px] absolute right-0 bottom-3" @click.prevent="togglePasswordVisibility"
                        :icon="buttonLabel"></fa>
                </div>
                <div class="flex  items-center font-semibold justify-start px-[10px] w-[85%] text-[13px]">
                    <div class="flex gap-[5px]">
                        <input class="" type="checkbox" id="recordar">
                        <label for="recordar" class="check text-white">Recordar Contraseña</label>
                    </div>
                </div>
                <button @click.prevent="login()"
                    class="bg-first mt-[30px] mb-[25px] w-[50%] rounded-full py-[5px] text-white    ">Iniciar
                    sesión</button>
            </form>
            <h3 class="text-[14px] text-white">¿Aún no tienes cuenta?
                <RouterLink :to="{ name: 'register' }" class="text-[16px] ml-[3px] font-semibold ">Registrate</RouterLink>
            </h3>
        </div>
    </section>
</template>

<script>
import { useMeta } from 'vue-meta'
import LoginUser from '../../services/users'
import jwt_decode from 'jwt-decode'
export default {
    setup() {
        useMeta({
            title: 'Inicio de sesión'
        })
    },
    data() {
        return {
            showPassword: false,
            password: "",
            email: "",
            role: 'admin'
        }
    },
    methods: {
        togglePasswordVisibility() {
            this.showPassword = !this.showPassword;
        },
        async login() {
            const body = {
                email: this.email,
                password: this.password,
                role: this.role
            }
            let response = await LoginUser.userAuth(body)
            try {
                console.log(response.data);
                const token = response.data.token;
                // localStorage.setItem("user", JSON.stringify(response.data.data));
                localStorage.setItem("token", token)
                const decodedToken = jwt_decode(token);
                const role = decodedToken.role;
                console.log(role)
                if (role === 'admin') {
                    this.$router.push( { name: 'dashboard' } ); // Redirigir a la ruta del panel de administración
                } else if (role === 'client') {
                    this.$router.push({name: 'home'}); // Redirigir a la ruta de redirección para clientes
                }
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