<script>
import AppNav from '../components/AppNav.vue'
import { state } from '../state.js'
import JubotronApp from '../components/JubotronApp.vue'
import CategoryItem from '../components/CategoryItem.vue'

export default {
    name: 'AppMain',
    components: {
        AppNav,
        JubotronApp,
        CategoryItem
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
        <!-- 7 navbar -->

        <JubotronApp />
        <!-- / jumbotron -->

        <CategoryItem />
        <!-- / Category -->
    </main>
</template>

<style lang="scss" scoped>

</style>