<template>
  <div class=" flex justify-around bg-yellow-400 p-4 mb-8">
    <div class=" flex items-center space-x-4">
      <img class=" w-20" src="../../assets/carne.png" alt="no sale">
      <h1 class=" text-4xl font-bold">Mango</h1>
    </div>
    <div class=" flex items-center">
      <RouterLink class="w-8 h-8 rounded-full flex justify-center items-center" :to="{ name: 'payment' }">
        <span>1</span>
      </RouterLink>
      <div class=" w-60 h-1 bg-black mx-4"></div>
      <RouterLink class="w-8 h-8 rounded-full flex justify-center items-center" :to="{ name: 'shoppingCart' }">
        <span>2</span>
      </RouterLink>
      <div class=" w-60 h-1 bg-black mx-4"></div>
      <RouterLink class="w-8 h-8 rounded-full flex justify-center items-center" :to="{ name: 'shoppingCart' }">
        <span>3</span>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
export default {
  methods: {
    isActive(route) {
      return this.$router.currentRoute.path === route;

    }
  }
};
</script>

<style>
.active-dot {
  background-color: blue;
  font-size: 30px;
}
</style>