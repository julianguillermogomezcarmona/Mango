<template>
    <section class="flex justify-center overflow-hidden items-center h-screen w-full bg-cover bg-center bg-no-repeat bg-login6 ">
        <transition name="slide-fade" mode="out-in">
            <RouterView></RouterView>
        </transition>
    </section>
</template>
<script>
export default {
    components: {
    },
}
</script>
<style>
.slide-fade-leave-active {
  position: absolute;

}

.slide-fade-enter-active {
  animation: slide-in 1s ease;
}

@keyframes slide-in {
  from {
    transform: translateX(0%) rotateY(150deg);
  }
  to {
    transform: translateX(0) rotateY(0);
  }
}
</style>