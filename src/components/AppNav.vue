<script>

export default {
    name: 'AppNav',
    props: {
        navBar: Array
    }
}
</script>

<template>
    <nav>
        <ul class="text d-flex justify-content-center">
            <a :class="link.active ? 'active' : ''" v-for="(link, i) in navBar">
                {{ link.text }}
                <span
                    v-if="navBar.length === 6 && link.text === 'Home' | link.text === 'Shop' | link.text === 'Show by brand'">
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