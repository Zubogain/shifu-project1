<template>
    <form @submit="validateForm">
        <input type="text" placeholder="Введите заголовок" v-model="item.title">
        <input type="submit" value="Добавить" class="col s12 btn">
    </form>
</template>

<script>
    export default {
        name: "InsertItem",
        props: ['list'],
        data: function () {
            return {
                item: {
                    title: '',
                    content: '',
                    slug: '',
                    id: this.list.length
                }
            }
        },
        methods: {
            validateForm: function (e) {
                e.preventDefault();
                this.item.title = this.item.title.trim();
                if(this.item.title !== '') {
                    this.list.push(this.item);
                    this.$router.push('/admin');
                }
            }
        }
    }
</script>