<script>
export default {
    name: 'TestimonialsItem'
}
</script>

<template>
    <section class="testimonials">

        <div class="container text-center">
            <h3>Users Testimonials</h3>
            <div class="row row-cols-3 mt-5">
                <div class="col px-5">
                    <img width="100" src="../assets/img/avatar-4-200x200.jpg" alt="">
                    <p class="small_text text-white my-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sunt modi dolor blanditiis sequi
                        quo iure magni atque et fuga?
                    </p>
                    <div class="sign small_text">
                        Lisa Smith, ThemeFusion
                    </div>
                </div>
                <div class="col px-5">
                    <img width="100" src="../assets/img/avatar-1-200x200.jpg" alt="">
                    <p class="small_text text-white my-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia praesentium dolores numquam,
                        amet adipisci esse nulla ipsum sint modi aperiam.
                    </p>
                    <div class="sign small_text">
                        Melissa Green, ThemeFusion
                    </div>
                </div>
                <div class="col px-5">
                    <img width="100" src="../assets/img/avatar-3-200x200.jpg" alt="">
                    <p class="small_text text-white my-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse exercitationem accusantium
                        mollitia. Eaque cumque labore excepturi maiores dolor est amet?
                    </p>
                    <div class="sign small_text">
                        Sam Lewis, ThemeFusion
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/sass/partials/palette' as *;

.testimonials {
    background-color: $cube--primary;
    background-image: url(../assets/img/bg-transparent-3.png);
    background-repeat: repeat-x;
    padding-bottom: 12rem;

    h3 {
        color: white;
        padding-top: 8.5rem;
    }

    img {
        border-radius: 50%;
    }

    .sign {
        color: $cube--gray;
    }
}
</style>