<script>
export default {
    name: 'NewsletterItem.vue'
}
</script>

<template>
    <section class="newsletter">
        <div class="container">
            <div class="row">
                <div class="col-7">
                    <h3>Join our newsletter</h3>
                    <p class="py-3">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed eum, error iste fugit eligendi
                        ducimus quod!
                    </p>
                    <div class="subscription d-flex">
                        <input type="email" placeholder="Insert your email...">
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/sass/partials/palette' as *;

.newsletter {
    margin-top: -5rem;

    .container {
        padding: 8rem 6rem;
        background-image: url(../assets/img/banner-7-2x-scaled.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position-x: right;
    }

    .subscription {
        width: 100%;

        input {
            width: 70%;
            background-color: $medain--light;
            border: none;
            margin-bottom: 2rem;
            margin-right: 1rem;
            border-radius: 30px;
            padding: 1rem 1rem;
        }

        button {
            width: 30%;
            color: white;
            background-color: #427542;
            border: none;
            border-radius: 30px;
            padding: 0.25rem 1rem;
            margin-bottom: 2rem;
        }
    }
}
</style>