<script>
export default {
    name: 'CategoryItem'
}
</script>

<template>
    <section class="text-center pt-5">
        <div class="container pt-5">
            <h3>Browse by category</h3>
            <div class="row justify-content-center">

                <p class="small_text col-6 pb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
                    error
                    quam
                    quaerat
                    obcaecati a ipsa perspiciatis ab.
                </p>
            </div>
            <div class="row row-cols-4 pb-5">
                <div class="card_item">
                    <div class="position-relative mb-3">
                        <div
                            class="view_cart text-white position-absolute d-flex flex-column justify-content-center align-items-center">
                            <div class="text">
                                <i class="fa-solid fa-square-check"></i>
                            </div>
                            <div class="smaller_text text-uppercase">view cart</div>
                        </div>
                        <img src="../../assets/img/product-9.jpg" alt="">
                    </div>
                    <div>Bed (1)</div>
                </div>
                <div class="card_item">
                    <div class="position-relative mb-3">
                        <div
                            class="view_cart text-white position-absolute d-flex flex-column justify-content-center align-items-center">
                            <div class=" text">
                                <i class="fa-solid fa-square-check"></i>
                            </div>
                            <div class="smaller_text text-uppercase">view cart</div>
                        </div>
                        <img src="../../assets/img/product-3.jpg" alt="">
                    </div>
                    <div>Food (6)</div>

                </div>
                <div class="card_item">
                    <div class="position-relative mb-3">
                        <div
                            class="view_cart text-white position-absolute d-flex flex-column justify-content-center align-items-center">
                            <div class=" text">
                                <i class="fa-solid fa-square-check"></i>
                            </div>
                            <div class="smaller_text text-uppercase">view cart</div>
                        </div>
                        <img src="../../assets/img/product-2.jpg" alt="">
                    </div>
                    <div>Toys (6)</div>
                </div>
                <div class="card_item">
                    <div class="position-relative mb-3">
                        <div
                            class="view_cart text-white position-absolute d-flex flex-column justify-content-center align-items-center">
                            <div class=" text">
                                <i class="fa-solid fa-square-check"></i>
                            </div>
                            <div class="smaller_text text-uppercase">view cart</div>
                        </div>
                        <img src="../../assets/img/product-4.jpg" alt="">
                    </div>
                    <div>Transport (6)</div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
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