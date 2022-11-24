<script>
export default {
    name: 'AppHeader'
}
</script>

<template>

    <header>
        <div class="container d-flex justify-content-between align-items-center">
            <!-- logo -->
            <div class="logo">
                <img src="../../assets/img/dark-pet-logo.png" alt="">
            </div>
            <!-- search -->
            <div class="input_container">
                <i class="fa-solid fa-magnifying-glass pe-2"></i>
                <input type="search" placeholder="Search...">
            </div>
            <!-- call us -->
            <div class="text">
                <strong>Questions? </strong>Call us: 1.800.123.4567
            </div>
            <!-- account -->
            <div class="personal">
                <i class="fa-solid fa-check-to-slot me-2"></i>
                <i class="fa-regular fa-user ms-2"></i>
            </div>

        </div>
    </header>
</template>


<style lang="scss" scoped>
@use '../../assets/sass/partials/palette' as *;

header {
    padding: 1rem;
    border-bottom: 1px solid $material--light-vibrant;

    .input_container {
        color: $cube--gray;
        background-color: $material--light-vibrant;
        padding: 0.5rem 1rem;
        border-radius: 20px;

        input {
            color: $cube--gray;
            border: none;
            background-color: $material--light-vibrant;

        }
    }
}
</style>
