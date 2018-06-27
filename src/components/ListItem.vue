<template>
    <tr>
        <td>{{ item.title }}</td>
        <td>{{ item.content }}</td>
        <td>{{ item.slug }}</td>
    </tr>
</template>

<script>
    export default {
        name: "ListItem",
        props: ['item']
    }
</script>