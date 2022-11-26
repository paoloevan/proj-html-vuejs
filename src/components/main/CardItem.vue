<script>
export default {
    name: 'CardItem',
    props: {
        card: Object
    }
}
</script>

<template>
    <div class="card_item">
        <div class="position-relative mb-3">
            <div
                class="view_cart text-white position-absolute d-flex flex-column justify-content-center align-items-center">
                <div class="text_hover">
                    <i class="fa-solid fa-square-check"></i>
                </div>
                <div class="smaller_text text-uppercase">view cart</div>
            </div>
            <div v-if="card.imgPath === 'product-3.jpg'" class="sale position-absolute">Sale!</div>
            <img :src="'/src/assets/img/' + card.imgPath" alt="">
        </div>
        <div>{{ card.text }}</div>
        <div class="price smaller_text">
            <del>{{ card.sale }}</del> {{ card.price }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/sass/partials/palette' as *;
@use '../../assets/sass/partials/hoverCard.scss';

.price {
    margin-top: 0.5rem;
    color: $median--light-primary;

    del {
        color: black;
        font-size: 0.75rem;
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
</style>