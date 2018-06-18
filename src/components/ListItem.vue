<template>
    <tr>
        <td>{{ item.title }}</td>
        <td>{{ item.content }}</td>
        <td>{{ item.slug }}</td>
        <td><button class="btn" type="submit" @click="removeItem">Delete
        </button></td>
    </tr>
</template>

<script>
    export default {
        name: "ListItem",
        props: ['item'],
        methods: {
            removeItem() {
                this.$emit('remove', this.item.slug);
            }
        }
    }
</script>