<script>
import { state } from '../../state.js'

export default {
    name: 'FooterBottom',
    data() {
        return {
            state
        }
    }
}
</script>

<template>
    <section class="boottom_footer d-flex justify-content-center align-items-center">
        &#169; Copyright 2012 - {{ state.getYear() }} | Avada Theme by Themefusion | All right reserved | Powered by
        Paoloevan
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/sass/partials/palette' as *;

.boottom_footer {
    font-size: 0.75rem;
    padding: 1.5rem;
    color: $cube--light;
    background-color: black;
}
</style>