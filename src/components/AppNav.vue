<script>
export default {
    name: 'AppNav'
}
</script>

<template>
    <nav>
        <ul class="text d-flex justify-content-center">
            <li class="active">Home <a href="#"><i class="fa-solid fa-angle-down"></i></a></li>
            <li>Shop <a href="#"><i class="fa-solid fa-angle-down"></i></a></li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Show by brand <a href="#"><i class="fa-solid fa-angle-down"></i></a></li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
@use '../assets/sass/partials/palette' as *;

nav {
    padding: 1rem;

    .active {
        color: black;

        a {

            filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(145deg) brightness(98%) contrast(101%);
        }
    }

    ul {
        list-style-type: none;
        color: $cube--gray;
        font-weight: 500;

        li {
            margin: 0 1rem;



            a {

                font-size: 0.75rem;
                color: black;
                filter: invert(59%) sepia(1%) saturate(2274%) hue-rotate(348deg) brightness(99%) contrast(81%);
            }
        }
    }
}
</style>