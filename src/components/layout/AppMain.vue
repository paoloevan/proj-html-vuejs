<script>
import { state } from '../../state.js'
import AppNav from './AppNav.vue'
import JubotronApp from '../main/JubotronApp.vue'
import CategoryItem from '../main/CategoryItem.vue'
import CategoryFood from '../main/CategoryFood.vue'
import ArrivalsJumbo from '../main/ArrivalsJumbo.vue'
import BestItem from '../main/BestItem.vue'
import TestimonialsItem from '../main/TestimonialsItem.vue'
import NewsletterItem from '../main/NewsletterItem.vue'
import TipsItem from '../main/TipsItem.vue'
import BannerItem from '../main/BannerItem.vue'
import CalltoactionItem from '../main/CalltoactionItem.vue'
import NewproductsItem from '../main/NewproductsItem.vue'

export default {
    name: 'AppMain',
    components: {
        AppNav,
        JubotronApp,
        CategoryItem,
        CategoryFood,
        ArrivalsJumbo,
        BestItem,
        TestimonialsItem,
        NewsletterItem,
        TipsItem,
        BannerItem,
        CalltoactionItem,
        NewproductsItem
    },
    data() {
        return {
            state
        }
    }
}
</script>

<template>
    <main>
        <AppNav :navBar="state.mainNav" />
        <!-- / navbar -->

        <JubotronApp />
        <!-- / jumbotron -->

        <CategoryItem />
        <!-- / Category -->

        <CategoryFood />
        <!-- / Category food -->

        <ArrivalsJumbo />
        <!-- / ArrivalsJumbo -->

        <BestItem />
        <!-- /  BestItem-->

        <TestimonialsItem />
        <!-- / TesttimonialsItem -->

        <NewsletterItem />
        <!-- / NewsletterItem -->

        <TipsItem />
        <!-- / TipsItem -->

        <BannerItem />
        <!-- / BannerItem -->

        <CalltoactionItem />
        <!-- / CalltoactionItem -->

        <NewproductsItem />
        <!-- / NewproductsItem -->
    </main>
</template>
