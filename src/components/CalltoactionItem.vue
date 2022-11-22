<script>
export default {
    name: 'CalltoactionItem'
}
</script>

<template>
    <section>
        <div class="container">
            <div class="row row-cols-4 text-white text-center">
                <div class="col">
                    <i class="fa-solid fa-truck"></i>
                    <div class="smaller_text mt-3">Free worldwide deliveries</div>
                </div>
                <div class="col">
                    <i class="fa-regular fa-map"></i>
                    <div class="smaller_text mt-3">Find store near you</div>
                </div>
                <div class="col">
                    <i class="fa-solid fa-dollar-sign"></i>
                    <div class="smaller_text mt-3">Best prices guarranteed</div>
                </div>
                <div class="col">
                    <i class="fa-regular fa-credit-card"></i>
                    <div class="smaller_text mt-3">All credit card accepted</div>
                </div>
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
@use '../assets/sass/partials/palette' as *;

section {
    background-color: $cube--primary;
    background-image: url(../assets/img/bg-transparent-3.png);
    background-repeat: repeat-x;
    padding: 6rem 0;

    .col {
        font-size: 2rem;

        .smaller_text {
            color: $cube--gray;
        }
    }
}
</style>