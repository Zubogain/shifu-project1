<template>
    <h3 v-if="notFound">Элемент не найден!</h3>
    <form @submit="formValidate" v-else>
        <div class="form-group">
            <label for="title">Заголовок</label>
            <input id="title" class="form-control col-12" type="text" v-model="item.title">
        </div>
        <div class="form-group">
            <label for="content">Текст</label>
            <input id="content" class="form-control col-12" type="text" v-model="item.content">
        </div>
        <div class="form-group">
            <label for="slug">Слаг</label>
            <input id="slug" class="form-control col-12" type="text" v-model="item.slug">
        </div>
        <input class="btn btn-primary col-12" type="submit" value="Сохранить">
    </form>
</template>

<script>
    export default {
        name: "EditItem",
        props: ['list'],
        data() {
            return {
                item: null,
                notFound: false,
            }
        },
        methods: {
            formValidate(e) {
                e.preventDefault();
                const index = this.list.findIndex(el => el.id === this.item.id);
                this.item.title = this.item.title.trim();
                if(index !== -1 && this.item.title !== '') {
                    this.list.splice(index, 1, this.item);
                    this.$router.push('/admin');
                }
            }
        },
        created() {
            const item = this.list.find(el => el.id === Number(this.$route.params.id));
            if(item) {
                this.item = item;
            } else {
                this.notFound = true;
            }
        }
    }
</script>