<script>
export default {
    name: 'CategoryFood'
}
</script>

<template>
    <div class="container">
        <div class="row row-cols-3 pt-5 text-center text-white mb-5">
            <div class="col">
                <div class="food_item">
                    <h3>Kibble</h3>
                    <div class="text">
                        Dry dog food
                    </div>
                    <img src="../assets/img/food-transparent-18-400x420.png" alt="">
                    <button>Shop dry food</button>
                </div>
            </div>
            <div class="col">
                <div class="food_item">
                    <h3>Moist</h3>
                    <div class="text">
                        Canned dog food
                    </div>
                    <img src="../assets/img/food-transparent-17-400x420.png" alt="">
                    <button>Shop moist food</button>
                </div>
            </div>
            <div class="col">
                <div class="food_item">
                    <h3>Frozen</h3>
                    <div class="text">
                        Freeze-dried dog food
                    </div>
                    <img src="../assets/img/food-transparent-16-400x420.png" alt="">
                    <button>Shop frozen food</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/sass/partials/palette' as *;

.food_item {
    background-color: $cube--primary;
    background-image: url(../assets/img/bg-transparent-3.png);
    background-repeat: no-repeat;
    padding: 5rem;

    button {
        background-color: $median--light-primary;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 20px;
    }
}
</style>