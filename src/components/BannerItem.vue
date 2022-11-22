<script>
export default {
    name: 'BannerItem'
}
</script>

<template>
    <section class="banner d-flex mt-5">
        <div class="col-6 banner_left">
            <div class="main_jumbo position-relative mb-5">
                <div class="container-fluid g-0">
                    <img class="" src="../assets/img/banner-8-2x.jpg" alt="">
                    <div class="row position-absolute align-items-center justify-content-center">
                        <div class="col text-center">
                            <div class="h-100 text-white">
                                <div class="small_text text-uppercase mb-4">find the best animal supplies</div>
                                <h4>New arrivals weekly</h4>
                                <button class="smaller_text mt-3" type="button">View all toys accessories</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-6 banner_right">
            <div class="main_jumbo position-relative mb-5">
                <div class="container-fluid g-0">
                    <img class="" src="../assets/img/banner-9-2x.jpg" alt="">
                    <div class="row position-absolute align-items-center justify-content-center g-0">
                        <div class="col text-center">
                            <div class="h-100 text-white">
                                <div class="small_text text-uppercase mb-4">find the best animal supplies</div>
                                <h4>New arrivals weekly</h4>
                                <button class="smaller_text mt-3" type="button">View all food products</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/sass/partials/palette' as *;

.main_jumbo {

    img {
        filter: brightness(70%);
    }

    .row {
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
    }

    button {
        border: none;
        background-color: white;
        border-radius: 20px;
        padding: 0.5rem 1.5rem;
    }
}
</style>