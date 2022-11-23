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
                <div>
                    <img src="../../assets/img/product-8.jpg" alt="">
                    <div>Colored pet bed</div>
                    <div class="price smaller_text">
                        $18.00 - $26.00
                    </div>
                </div>
                <div>
                    <img src="../../assets/img/product-2.jpg" alt="">
                    <div>Colorful ball set</div>
                    <div class="price smaller_text">
                        $29.00
                    </div>
                </div>
                <div>
                    <img src="../../assets/img/product-3.jpg" alt="">
                    <div>Dog bone</div>
                    <div class="price smaller_text">
                        <del>$29.00</del> $18.00
                    </div>
                </div>
                <div>
                    <img src="../../assets/img/product-4.jpg" alt="">
                    <div>Animal transport bag</div>
                    <div class="price smaller_text">
                        $29.00
                    </div>
                </div>
                <div>
                    <img src="../../assets/img/product-5.jpg" alt="">
                    <div>Animal transport cage</div>
                    <div class="price smaller_text">
                        $35.00
                    </div>
                </div>
                <div>
                    <img src="../../assets/img/product-10.jpg" alt="">
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

img {
    margin-bottom: 1rem;
}

.price {
    margin-top: 0.5rem;
    color: $median--light-primary;

    del {
        font-size: 0.75rem;
        color: black;
    }
}
</style>