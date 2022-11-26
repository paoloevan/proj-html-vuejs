<script>
export default {
    name: 'TopJumbo',
    props: {
        ads: Object
    }
}
</script>

<template>
    <div>
        <i :class="ads.symbol"></i> {{ ads.text }}
    </div>
</template>

