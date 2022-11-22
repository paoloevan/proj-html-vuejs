<script>
import AppNav from './AppNav.vue'
import { state } from '../state.js'

export default {
    name: 'AppFooter',
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
    <footer>
        <div class="container py-5">
            <div class="row row-cols-5 justify-content-between">
                <div class="col">

                    <div class="logo mb-5">
                        <img src="../assets/img/mobile-light-pet-logo-2x-200x52.png" alt="">
                    </div>

                    <address class="text-white text">
                        1234 Avada Avenue Avadaville <br>
                        info@your-company.com <br>
                        Call us: (1) 234 5678
                    </address>
                </div>

                <div class="col">
                    <h5>Shop by brand</h5>
                    <a href="#">Bed</a>
                    <a href="#">Food</a>
                    <a href="#">Toys</a>
                    <a href="#">Transport</a>
                </div>

                <div class="col">
                    <h5>Useful links</h5>
                    <a href="#">My account</a>
                    <a href="#">Orders</a>
                    <a href="#">Checkout</a>
                    <a href="#">Cart</a>
                </div>

                <div class="col call_to_action">
                    <h5>Subscribe to our newsletter</h5>
                    <input type="email" placeholder="Insert your email">
                    <button>Subscribe</button>
                </div>


            </div>

            <hr>

            <AppNav :navBar="state.footerNav" />
            <!-- / navbar -->

            <div class="social text-white text-center">
                <span> <i class="fa-brands fa-facebook-f"></i></span>
                <span> <i class="fa-brands fa-twitter"></i></span>
                <span> <i class="fa-brands fa-instagram"></i></span>
                <span> <i class="fa-brands fa-youtube"></i></span>
            </div>

        </div>
        <div class="boottom_footer d-flex justify-content-center align-items-center">
            &#169; Copyright 2012 - 2022 | Avada Theme by Themefusion | All right reserved | Powered by Paoloevan
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use '../assets/sass/partials/palette' as *;

footer {
    background-color: $median--primary;

    hr {
        background-color: $median--light-primary;
        border: none;
        height: 1px;
        margin: 3rem 0;
    }

    address {
        line-height: 2rem;
    }

    .call_to_action {
        padding: 2rem 1rem 1rem 1rem;
        border-radius: 5px;
        background-color: #365f36;
        background-image: url(../assets/img/bg-transparent-3.png);
        background-repeat: no-repeat;

        input {
            border: none;
            margin-bottom: 2rem;
            border-radius: 30px;
            width: 100%;
            padding: 1rem 1rem;
        }

        button {
            color: white;
            background-color: #427542;
            border: none;
            border-radius: 30px;
            width: 100%;
            padding: 1rem 1rem;
            margin-bottom: 2rem;
        }
    }

    .social {
        span {
            margin: 0 0.5rem;
        }
    }

    h5,
    a {
        color: $cube--light;
        text-decoration: none;
        display: block;
        margin-bottom: 1rem;
    }

    h5 {
        margin-bottom: 2rem;
    }


    .boottom_footer {
        font-size: 0.75rem;
        padding: 1.5rem;
        color: $cube--light;
        background-color: black;
    }
}
</style>