<script>
export default {
    name: 'FoodItem',
    props: {
        item: Object
    }
}
</script>

<template>
    <div class="col">
        <div class="food_item">
            <h3>{{ item.title }}</h3>
            <div class="text">
                {{ item.text }}
            </div>
            <img :src="'/src/assets/img/' + item.img" alt="">
            <button>{{ item.button }}</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/sass/partials/palette' as *;

.food_item {
    background-color: $cube--primary;
    background-image: url(../../assets/img/bg-transparent-3.png);
    background-repeat: repeat-x;
    padding: 5rem;

    &:hover {
        scale: 1.05;
        background-color: $median--primary;
        transition: scale 0.25s;
    }

    button {
        background-color: $median--light-primary;
        color: white;
        border: none;
        padding: 0.5rem 2rem;
        border-radius: 20px;
    }

    .text {
        color: $median--light-primary;
    }
}
</style>