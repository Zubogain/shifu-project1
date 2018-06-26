<template>
    <form @submit="validateForm">
        <label for="title">Заголовок</label>
        <input id="title" class="form-control col-12" type="text" v-model="item.title">
        <input class="btn btn-primary col-12" type="submit" value="Добавить">
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