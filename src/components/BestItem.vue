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
                <div>
                    <img src="../assets/img/product-21-400x400.jpg" alt="">
                    <div>Transport cage</div>
                    <div class="price smaller_text">
                        $25.00
                    </div>
                </div>
                <div>
                    <img src="../assets/img/product-20-400x400.jpg" alt="">
                    <div>Dog leash</div>
                    <div class="price smaller_text">
                        $25.00
                    </div>
                </div>


                <div>
                    <img src="../assets/img/product-16-400x400.jpg" alt="">
                    <div>Animal transport cage</div>
                    <div class="price smaller_text">
                        <del>$35.00</del> $25.00
                    </div>
                </div>
                <div>
                    <img src="../assets/img/product-11-400x400.jpg" alt="">
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
@use '../assets/sass/partials/palette' as *;

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

img {
    margin-bottom: 1rem;
}

.price {
    margin-top: 0.5rem;
    color: $median--light-primary;

    del {
        color: black;
        font-size: 0.75rem;
    }
}
</style>