<script>
import AppNav from './AppNav.vue'
import FooterTop from '../footer/FooterTop.vue'
import FooterNav from '../footer/FooterNav.vue'
import FooterBottom from '../footer/FooterBottom.vue'

export default {
    name: 'AppFooter',
    components: {
        AppNav,
        FooterTop,
        FooterNav,
        FooterBottom
    }
}
</script>

<template>
    <footer class="pt-5">

        <FooterTop />
        <!-- / FooterTop -->

        <hr>

        <FooterNav />
        <!-- / FooterNav -->


        <FooterBottom />
        <!-- / FooterBottom -->

    </footer>
</template>

<style lang="scss" scoped>
@use '../../assets/sass/partials/palette' as *;

footer {
    background-color: $cube--primary;


    hr {
        background-color: $median--light-primary;
        border: none;
        height: 1px;
        margin: 3rem 0;
    }

}
</style>