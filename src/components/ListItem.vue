<template>
    <tr>
        <td>{{ item.title }}</td>
        <td>{{ item.content }}</td>
        <td>{{ item.slug }}</td>
        <td><button class="btn waves-effect waves-light red lighten-2" type="submit" @click="removeItem">Удалить
        </button></td>
    </tr>
</template>

<script>
    export default {
        name: "ListItem",
        props: ['item'],
        methods: {
            removeItem() {
                this.$emit('remove', this.item.title);
            }
        }
    }
</script>