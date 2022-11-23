<script>
import { state } from '../../state.js'
import AppNav from '../layout/AppNav.vue';

export default {
    name: 'FooterNav',
    components: {
        AppNav
    },
    data() {
        return {
            state
        }
    }
}
</script>

<template>

    <section class="footer_nav">

        <AppNav :navBar="state.footerNav" />
        <!-- / navbar -->

        <div class="social text-white text-center">
            <span> <i class="fa-brands fa-facebook-f"></i></span>
            <span> <i class="fa-brands fa-twitter"></i></span>
            <span> <i class="fa-brands fa-instagram"></i></span>
            <span> <i class="fa-brands fa-youtube"></i></span>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/sass/partials/palette' as *;


.social {
    span {
        margin: 0 0.5rem;
    }
}
</style>