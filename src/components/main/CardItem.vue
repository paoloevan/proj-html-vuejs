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
            <img :src="'/src/assets/img/' + card.imgPath" alt="">
        </div>
        <div>{{ card.text }}</div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/sass/partials/hoverCard.scss';
</style>