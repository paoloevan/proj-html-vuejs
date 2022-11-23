<script>
export default {
    name: 'NewproductsItem'
}
</script>

<template>
    <section class="text-center pt-5 mb-5">
        <div class="container pt-5">
            <h3>New products arrival</h3>
            <div class="row justify-content-center">

                <p class="small_text col-6 pb-5">Lastest products
                </p>
            </div>
            <div class="row row-cols-3 pb-5 gx-3 gy-5">
                <div class="card_item">
                    <div class="position-relative mb-3">
                        <div
                            class="view_cart text-white position-absolute d-flex flex-column justify-content-center align-items-center">
                            <div class="text">
                                <i class="fa-solid fa-square-check"></i>
                            </div>
                            <div class="smaller_text text-uppercase">view cart</div>
                        </div>
                        <img src="../../assets/img/product-8.jpg" alt="">
                    </div>
                    <div>Colored pet bed</div>
                    <div class="price smaller_text">
                        $18.00 - $26.00
                    </div>
                </div>
                <div class="card_item">
                    <div class="position-relative mb-3">
                        <div
                            class="view_cart text-white position-absolute d-flex flex-column justify-content-center align-items-center">
                            <div class="text">
                                <i class="fa-solid fa-square-check"></i>
                            </div>
                            <div class="smaller_text text-uppercase">view cart</div>
                        </div>
                        <img src="../../assets/img/product-2.jpg" alt="">
                    </div>
                    <div>Colorful ball set</div>
                    <div class="price smaller_text">
                        $29.00
                    </div>
                </div>
                <div class="card_item">
                    <div class="position-relative mb-3">
                        <div
                            class="view_cart text-white position-absolute d-flex flex-column justify-content-center align-items-center">
                            <div class="text">
                                <i class="fa-solid fa-square-check"></i>
                            </div>
                            <div class="smaller_text text-uppercase">view cart</div>
                        </div>
                        <div class="sale position-absolute">Sale!</div>
                        <img src="../../assets/img/product-3.jpg" alt="">
                    </div>
                    <div>Dog bone</div>
                    <div class="price smaller_text">
                        <del>$29.00</del> $18.00
                    </div>
                </div>
                <div class="card_item">
                    <div class="position-relative mb-3">
                        <div
                            class="view_cart text-white position-absolute d-flex flex-column justify-content-center align-items-center">
                            <div class="text">
                                <i class="fa-solid fa-square-check"></i>
                            </div>
                            <div class="smaller_text text-uppercase">view cart</div>
                        </div>
                        <img src="../../assets/img/product-4.jpg" alt="">
                    </div>
                    <div>Animal transport bag</div>
                    <div class="price smaller_text">
                        $29.00
                    </div>
                </div>
                <div class="card_item">
                    <div class="position-relative mb-3">
                        <div
                            class="view_cart text-white position-absolute d-flex flex-column justify-content-center align-items-center">
                            <div class="text">
                                <i class="fa-solid fa-square-check"></i>
                            </div>
                            <div class="smaller_text text-uppercase">view cart</div>
                        </div>
                        <img src="../../assets/img/product-5.jpg" alt="">
                    </div>
                    <div>Animal transport cage</div>
                    <div class="price smaller_text">
                        $35.00
                    </div>
                </div>
                <div class="card_item">
                    <div class="position-relative mb-3">
                        <div
                            class="view_cart text-white position-absolute d-flex flex-column justify-content-center align-items-center">
                            <div class="text">
                                <i class="fa-solid fa-square-check"></i>
                            </div>
                            <div class="smaller_text text-uppercase">view cart</div>
                        </div>
                        <img src="../../assets/img/product-10.jpg" alt="">
                    </div>
                    <div>Closable cat litter</div>
                    <div class="price smaller_text">
                        $16.00
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/sass/partials/palette' as *;

.small_text {
    color: $median--light-primary;
}


.price {
    margin-top: 0.5rem;
    color: $median--light-primary;

    del {
        font-size: 0.75rem;
        color: black;
    }
}

.sale {
    top: 15px;
    left: 20px;
    background-color: $median--light-primary;
    padding: 0.25rem;
    border-radius: 50%;
    color: white;
}

.card_item {

    &:hover .view_cart {
        visibility: visible;
        cursor: pointer;
        background-color: #ffa64d85;
    }


    .view_cart {
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        visibility: hidden;



        .text {
            background-color: rgba(0, 0, 0, 0.751);
            padding: 1rem;
            aspect-ratio: 1;
            border-radius: 50%;
        }
    }

}
</style>