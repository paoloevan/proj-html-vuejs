<script>
import TopJumbo from '../../components/main/TopJumbo.vue'
import { state } from '../../state.js'

export default {
    name: 'JubotronApp',
    components: {
        TopJumbo
    },
    data() {
        return {
            state
        }
    }
}
</script>

<template>
    <section class="my_jumbotron">

        <div class="top_jumbo position-relative">
            <div class="banner_jumbo  position-absolute text-center">
                <div class="banner_demos">
                    <span><i class="fa-solid fa-folder"></i></span>
                    <div>Demos</div>
                </div>
                <div class="on_sale">
                    <div class="price">$<span>39</span></div>
                    <div>On Sale</div>
                </div>
            </div>

            <div class="container d-flex justify-content-around text-white py-3">
                <template v-for="item in state.topJumbo">

                    <TopJumbo :ads="item" />

                </template>

            </div>

        </div>

        <div class="main_jumbo position-relative">
            <img class="" src="../../assets/img/banner-5-2x-scaled.jpg" alt="">
            <div class="container">
                <div class="row position-absolute align-items-center">
                    <div class="col-6">
                        <div class="h-100 text-white">
                            <div class="small_text text-uppercase mb-5">find the best animal supplies</div>
                            <h1>We know animals are a part of your family, let us help take care of theme</h1>
                            <button class="small_text mt-3" type="button">Lear more about us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bottom_jumbo text-white text-center pt-3 text">
            <img src="../../assets/img/food-transparent-5-200x112.png" alt="">
            <span class="mx-4">
                Get $25 OFF your first purchase of our homemade pet food!
            </span>
            <a href="#">Visit the shop</a>
        </div>
    </section>

</template>

<style lang="scss" scoped>
@use '../../assets/sass/partials/palette' as *;

.top_jumbo,
.bottom_jumbo {
    background-color: $cube--primary;
    background-image: url(../../assets/img/bg-transparent-3.png);

    strong {
        font-weight: 800;
    }

    a {
        font-weight: 200;
        color: white;
    }

    .banner_jumbo {
        z-index: 999;
        top: 10px;
        right: 10px;

        .banner_demos,
        .on_sale {
            font-size: 0.75rem;
            background-color: white;
            margin: 0.25rem 0;
            border-radius: 5px;
            padding: 0.25rem;

            .price {
                color: $cube--apple;
            }

            span {
                font-size: 1.25rem;
            }
        }
    }
}

.main_jumbo {

    img {
        filter: brightness(70%);
    }

    .row {
        top: 0;
        bottom: 0;
        margin: auto 0;
    }

    button {
        border: none;
        background-color: white;
        border-radius: 20px;
        padding: 0.5rem 1.5rem;

        &:hover {
            background-color: $median--light-primary;
            color: white;
        }
    }
}
</style>