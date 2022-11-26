<script>
import CardItem from '../main/CardItem.vue'
import { state } from '../../state.js'

export default {
    name: 'CategoryItem',
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

                <template v-for="item in state.categoryItem">

                    <CardItem :card="item" />

                </template>

            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/sass/partials/hoverCard.scss';
</style>