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
        props: ['item', 'list'],
        methods: {
            removeItem() {
                const index = this.list.findIndex(el => el.id === this.item.id);
                if(index !== -1) {
                    this.list.splice(index, 1);
                }
            }
        }
    }
</script>