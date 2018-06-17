<template>
    <li><h3>{{ item.title }}</h3><p>{{ item.content }}</p><p>Slug: {{ item.slug }}</p></li>
</template>

<script>
    export default {
        name: "List",
        props: ["item"]
    }
</script>