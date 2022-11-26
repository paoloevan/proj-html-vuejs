<script>
import { state } from '../../state.js'
import CardItem from '../main/CardItem.vue'

export default {
    name: 'BestItem',
    components: {
        CardItem
    },
    data() {
        return {
            state
        }
    }
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

                <template v-for="item in state.bestItem">
                    <CardItem :card="item" />
                </template>

            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/sass/partials/palette' as *;
@use '../../assets/sass/partials/hoverCard.scss';

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
</style>