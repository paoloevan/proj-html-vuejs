<script>
import { state } from '../state.js'

export default {
    name: 'AppNav',
    data() {
        return {
            state
        }
    }
}
</script>

<template>
    <nav>
        <ul class="text d-flex justify-content-center">
            <a :class="i === 0 ? 'active' : ''" v-for="(link, i) in state.navbarLinks">
                {{ link.text }}
                <span
                    v-if="link.text === 'Home' | link.text === 'Shop' | link.text === 'Show by brand' && this.mainNav">
                    <i class="fa-solid fa-angle-down"></i>
                </span>
            </a>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
@use '../assets/sass/partials/palette' as *;

nav {
    padding: 1rem;

    .active {
        color: black;

        span {

            filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(145deg) brightness(98%) contrast(101%);
        }
    }

    ul {
        list-style-type: none;
        font-weight: 500;

        a {
            color: $cube--gray;
            margin: 0 1rem;
            text-decoration: none;
            cursor: pointer;

            span {

                font-size: 0.75rem;
                color: black;
                filter: invert(59%) sepia(1%) saturate(2274%) hue-rotate(348deg) brightness(99%) contrast(81%);
            }
        }
    }
}
</style>