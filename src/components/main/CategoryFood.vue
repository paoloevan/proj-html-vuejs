<script>
import FoodItem from '../../components/main/FoodItem.vue'
import { state } from '../../state.js'

export default {
    name: 'CategoryFood',
    components: {
        FoodItem
    },
    data() {
        return {
            state
        }
    }
}
</script>

<template>
    <section class="container">
        <div class="row row-cols-3 pt-5 text-center text-white mb-5">

            <template v-for="item in state.categoryFood">

                <FoodItem :item="item" />

            </template>

        </div>
    </section>
</template>

