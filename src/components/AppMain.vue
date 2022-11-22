<script>
import { state } from '../state.js'
import AppNav from '../components/AppNav.vue'
import JubotronApp from '../components/JubotronApp.vue'
import CategoryItem from '../components/CategoryItem.vue'
import CategoryFood from '../components/CategoryFood.vue'
import ArrivalsJumbo from '../components/ArrivalsJumbo.vue'
import BestItem from '../components/BestItem.vue'
import TestimonialsItem from '../components/TestimonialsItem.vue'
import NewsletterItem from '../components/NewsletterItem.vue'
import TipsItem from '../components/TipsItem.vue'
import BannerItem from '../components/BannerItem.vue'
import CalltoactionItem from '../components/CalltoactionItem.vue'

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
        CalltoactionItem
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
    </main>
</template>

<style lang="scss" scoped>

</style>