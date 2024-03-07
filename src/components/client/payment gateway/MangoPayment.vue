<template>

<Header></Header>
<RouterView></RouterView>

</template>

<script>

import Header from '../ProcessHeader.vue'
import { RouterView } from 'vue-router';

export default{

    components:{
        Header
    }
}

</script>