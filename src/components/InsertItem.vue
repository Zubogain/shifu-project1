<template>
    <form @submit="validateForm">
        <input type="text" placeholder="Введите заголовок" v-model="title">
        <input type="submit" value="Добавить" class="col s12 btn">
    </form>
</template>

<script>
    export default {
        name: "InsertItem",
        data: function () {
            return {
                title: ''
            }
        },
        methods: {
            validateForm: function (e) {
                e.preventDefault();
                if(this.title.trim() !== '') {
                    this.$emit('insertItem', this.title.trim());
                    this.$router.push('/admin');
                }
            }
        }
    }
</script>