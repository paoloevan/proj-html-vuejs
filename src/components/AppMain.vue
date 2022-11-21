<script>
import AppNav from '../components/AppNav.vue'
import { state } from '../state.js'

export default {
    name: 'AppMain',
    components: {
        AppNav,
    },
    data() {
        return {
            state
        }
    }
}
</script>

<template>
    <main>
        <AppNav :navBar="state.mainNav" />
    </main>
</template>