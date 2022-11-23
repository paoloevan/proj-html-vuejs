<script>
export default {
    name: 'BestItem'
}
</script>

<template>
    <section class="pt-5">
        <div class="container pt-5">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <div class="text mb-3">All-time best sellers</div>
                    <h3>Items everyone loves</h3>
                </div>
                <div>
                    <button>View all product</button>
                </div>
            </div>

            <div class="row row-cols-4 pb-5 mt-5 text-center">
                <div class="card_item">
                    <div class="position-relative mb-3">
                        <div
                            class="view_cart text-white position-absolute d-flex flex-column justify-content-center align-items-center">
                            <div class="text_hover">
                                <i class="fa-solid fa-square-check"></i>
                            </div>
                            <div class="smaller_text text-uppercase">view cart</div>
                        </div>

                        <img src="../../assets/img/product-21-400x400.jpg" alt="">
                    </div>
                    <div>Transport cage</div>
                    <div class="price smaller_text">
                        $25.00
                    </div>
                </div>
                <div class="card_item">
                    <div class="position-relative mb-3">
                        <div
                            class="view_cart text-white position-absolute d-flex flex-column justify-content-center align-items-center">
                            <div class="text_hover">
                                <i class="fa-solid fa-square-check"></i>
                            </div>
                            <div class="smaller_text text-uppercase">view cart</div>
                        </div>

                        <img src="../../assets/img/product-20-400x400.jpg" alt="">
                    </div>
                    <div>Dog leash</div>
                    <div class="price smaller_text">
                        $25.00
                    </div>
                </div>


                <div class="card_item">
                    <div class="position-relative mb-3">
                        <div
                            class="view_cart text-white position-absolute d-flex flex-column justify-content-center align-items-center">
                            <div class="text_hover">
                                <i class="fa-solid fa-square-check"></i>
                            </div>
                            <div class="smaller_text text-uppercase">view cart</div>
                        </div>

                        <img src="../../assets/img/product-16-400x400.jpg" alt="">
                    </div>
                    <div>Animal transport cage</div>
                    <div class="price smaller_text">
                        <del>$35.00</del> $25.00
                    </div>
                </div>
                <div class="card_item">
                    <div class="position-relative mb-3">
                        <div
                            class="view_cart text-white position-absolute d-flex flex-column justify-content-center align-items-center">
                            <div class="text_hover">
                                <i class="fa-solid fa-square-check"></i>
                            </div>
                            <div class="smaller_text text-uppercase">view cart</div>
                        </div>

                        <img src="../../assets/img/product-11-400x400.jpg" alt="">
                    </div>
                    <div>Colorful cat leash</div>
                    <div class="price smaller_text">
                        $12.00
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/sass/partials/palette' as *;

.text {
    color: $median--light-primary;
}

button {
    background-color: $median--light-primary;
    color: white;
    border: none;
    padding: 0.5rem 2rem;
    border-radius: 20px;
}

.price {
    margin-top: 0.5rem;
    color: $median--light-primary;

    del {
        color: black;
        font-size: 0.75rem;
    }
}

.card_item {

    &:hover .view_cart {
        visibility: visible;
        cursor: pointer;
        background-color: #da8b3b85;
    }


    .view_cart {
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        visibility: hidden;



        .text_hover {
            background-color: rgba(0, 0, 0, 0.751);
            padding: 1rem;
            aspect-ratio: 1;
            border-radius: 50%;
        }
    }

}
</style>