<script>
export default {
    name: 'TipsItem'
}
</script>

<template>
    <section class="pt-5">
        <div class="container pt-5">
            <h3 class="text-center ">Get the best tips & tricks</h3>
            <div class="row justify-content-center">

                <p class="small_text text-center col-6 pb-5">
                    Recent articles
                </p>
            </div>

            <div class="row row-cols-4 pb-5 g-5">
                <div class="card_item">
                    <div class="position-relative mb-3">
                        <div
                            class="view_cart text-white position-absolute d-flex flex-column justify-content-center align-items-center">
                            <div class="text">
                                How to 'loose leash walk' your dog
                            </div>
                            <div class="smaller_text">Tip & Tricks</div>
                        </div>
                        <img src="../../assets/img/blog-1.jpg" alt="">
                    </div>
                    <div class="text p-4">How to 'loose leash walk' your dog
                        <div class="small_text">
                            Apr 21st, 2020
                        </div>
                    </div>
                </div>
                <div class="card_item">
                    <div class="position-relative mb-3">
                        <div
                            class="view_cart text-white position-absolute d-flex flex-column justify-content-center align-items-center">
                            <div class="text">
                                Stop cats from stratching forniture
                            </div>
                            <div class="smaller_text">Tip & Tricks</div>
                        </div>
                        <img src="../../assets/img/blog-2.jpg" alt="">
                    </div>
                    <div class="text p-4">Stop cats from stratching forniture
                        <div class="small_text">
                            Apr 19th, 2020
                        </div>
                    </div>
                </div>
                <div class="card_item">
                    <div class="position-relative mb-3">
                        <div
                            class="view_cart text-white position-absolute d-flex flex-column justify-content-center align-items-center">
                            <div class="text">
                                Where to buy the best pet food
                            </div>
                            <div class="smaller_text">Tip & Tricks</div>
                        </div>
                        <img src="../../assets/img/blog-3.jpg" alt="">
                    </div>
                    <div class="text p-4">Where to buy the best pet food
                        <div class="small_text">
                            Apr 18th, 2020
                        </div>
                    </div>
                </div>
                <div class="card_item">
                    <div class="position-relative mb-3">
                        <div
                            class="view_cart text-white position-absolute d-flex flex-column justify-content-center align-items-center">
                            <div class="text">
                                Proper care for you pet toys
                            </div>
                            <div class="smaller_text">Tip & Tricks</div>
                        </div>
                        <img src="../../assets/img/blog-4.jpg" alt="">
                    </div>
                    <div class="text p-4">Proper care for you pet toys
                        <div class="small_text">
                            Apr 17th, 2020
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center">
                <button class="smaller_text text-white">Read All articles</button>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/sass/partials/palette' as *;


button {
    background-color: #427542;
    border: none;
    border-radius: 30px;
    padding: 0.5rem 1.5rem;
    margin-bottom: 2rem;

}

.small_text {
    color: $median--light-primary;
}

.text .small_text {
    color: black;
    font-size: 0.75rem;
    padding-top: 0.75rem;
    font-weight: 300;
}

.card_item {

    &:hover .view_cart {
        visibility: visible;
        cursor: pointer;
        background-color: #b9783785;
    }


    .view_cart {
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        visibility: hidden;



        .text {
            text-align: center;
            padding: 0 0.5rem;
            margin-bottom: 0.25rem;
        }

        .smaller_text {
            font-size: 0.75rem;
        }
    }

}
</style>