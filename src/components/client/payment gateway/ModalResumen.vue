<template>
    <div id="myModal" class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
        <div class="bg-white p-8 rounded shadow-md w-96 flex">
            <div v-if="mostrarFormulario">
                <h2 class="text-2xl font-bold mb-4">Ingresa tu correo electrónico</h2>

                <!-- Formulario -->
                <form>
                    <label for="email" class="block text-sm font-medium text-gray-600 mb-2">Correo Electrónico:</label>
                    <input type="email" id="email" name="email" class="w-full p-2 border rounded mb-4" required>

                    <!-- Botón de continuar -->
                    <RouterLink :to="{ name: 'home' }">
                        <button type="submit" class="bg-blue-500 text-white p-2 rounded w-full">Continuar</button>
                    </RouterLink>
                    
                </form>

                <!-- Términos de privacidad -->
                <p class="text-xs text-gray-500 mt-4">Al continuar, aceptas nuestros términos de privacidad.</p>
            </div>
            <Loading v-if="!mostrarFormulario" />
        </div>
    </div>
</template>

<script>

import Loading from '../../Loading.vue'
import { RouterLink } from 'vue-router';
export default {
    data() {
        return {
            mostrarFormulario: false
        }
    },
    components: {
        Loading
    },
    mounted() {
        setTimeout(() => {
            this.mostrarFormulario = true;
        }, 3000);
    }
}

</script>