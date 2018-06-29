<template>
    <h3 v-if="isWait">Загрузка...</h3>
    <div v-else>
        <form @submit="validateForm">
            <label for="title">Заголовок</label>
            <input id="title" class="form-control col-12" type="text" v-model="item.title">
            <input class="btn btn-primary col-12" type="submit" value="Добавить">
        </form>
    </div>
</template>

<script>
    export default {
        name: "InsertItem",
        props: ['list', 'isWait'],
        data: function () {
            return {
                item: {},
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
        },
        watch: {
            isWait: function () {
                this.item = {
                    title: '',
                    content: '',
                    slug: '',
                    id: this.list.length
                };
            }
        }
    }
</script>