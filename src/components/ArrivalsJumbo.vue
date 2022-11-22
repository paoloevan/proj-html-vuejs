<script>
export default {
    name: 'ArrivalsJumbo'
}
</script>

<template>
    <div class="main_jumbo position-relative mb-5">
        <div class="container">
            <img class="" src="../assets/img/banner-3-2x-scaled.jpg" alt="">
            <div class="row position-absolute align-items-center justify-content-center">
                <div class="col text-center">
                    <div class="h-100 text-white">
                        <div class="text text-uppercase mb-5">find the best animal supplies</div>
                        <h1>New arrivals weekly</h1>
                        <button class="mt-3" type="button">Lear more about us</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/sass/partials/palette' as *;

.top_jumbo,
.bottom_jumbo {
    background-color: $cube--primary;
    background-image: url(../assets/img/bg-transparent-3.png);

    strong {
        font-weight: 800;
    }

    a {
        font-weight: 200;
        color: white;
    }

    .banner_jumbo {
        z-index: 999;

        .banner_demos,
        .on_sale {
            background-color: white;
            margin: 0.25rem 0;
        }
    }
}

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