<script>
export default {
    name: 'FooterTop'
}
</script>

<template>
    <div class="container">
        <section class="footer_top">
            <div class="row row-cols-5 justify-content-between">
                <div class="col">
                    <!-- logo - address -->
                    <div class="logo mb-5">
                        <img src="../../assets/img/mobile-light-pet-logo-2x-200x52.png" alt="">
                    </div>

                    <address class="text-white text">
                        1234 Avada Avenue Avadaville <br>
                        info@your-company.com <br>
                        Call us: (1) 234 5678
                    </address>
                </div>
                <!-- links -->
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
                <!-- newsletter -->
                <div class="col call_to_action">
                    <h5>Subscribe to our newsletter</h5>
                    <input type="email" placeholder="Insert your email">
                    <button>Subscribe</button>
                </div>


            </div>
        </section>
    </div>

</template>

<style lang="scss" scoped>
@use '../../assets/sass/partials/palette' as *;

.footer_top {


    address {
        line-height: 2rem;
        font-size: 14px;
    }

    .call_to_action {
        padding: 2rem 1.25rem 0.5rem 1.25rem;
        border-radius: 5px;
        background-color: #365f36;
        background-image: url(../../assets/img/bg-transparent-3.png);
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

    h5,
    a {
        color: $cube--light;
        text-decoration: none;
        display: block;
        margin-bottom: 1rem;
    }

    a {
        font-size: 14px;
    }

    h5 {
        margin-bottom: 2rem;
    }

}
</style>