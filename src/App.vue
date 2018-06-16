<template>
    <div class="hello">
        <h1>{{ message }}</h1>
        <p>{{ lorem }}</p>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: "{Шергали Эмиль} запустил проект, какой он молодец!",
                lorem: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            }
        }
    }
</script>

<style>
    .hello > p {
        font-size: 2em;
        color: rebeccapurple;
    }
</style>