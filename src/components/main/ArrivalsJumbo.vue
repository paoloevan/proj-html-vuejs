<script>
export default {
    name: 'ArrivalsJumbo'
}
</script>

<template>
    <section class="main_jumbo position-relative mb-5">
        <div class="container">
            <img class="" src="../../assets/img/banner-3-2x-scaled.jpg" alt="">
            <div class="row position-absolute align-items-center justify-content-center">
                <div class="col text-center">
                    <div class="h-100 text-white">
                        <div class="small_text text-uppercase mb-5">find the best animal supplies</div>
                        <h1>New arrivals weekly</h1>
                        <button class="small_text mt-3" type="button">Lear more about us</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/sass/partials/palette' as *;

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