<script>
import { state } from '../../state.js'
import CardItem from '../main/CardItem.vue';

export default {
    name: 'NewproductsItem',
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
    <section class="text-center pt-5 mb-5">
        <div class="container pt-5">
            <h3>New products arrival</h3>
            <div class="row justify-content-center">

                <p class="small_text col-6 pb-5">Lastest products
                </p>
            </div>
            <div class="row row-cols-3 pb-5 gx-3 gy-5">

                <template v-for="item in state.NewproductsItem">
                    <CardItem :card="item" />
                </template>

            </div>
        </div>
    </section>
</template>
