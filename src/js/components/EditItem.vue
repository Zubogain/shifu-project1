<template>
    <h3 v-if="isWait">Загрузка...</h3>
    <div v-else>
        <h3 v-if="notFound">Элемент не найден!</h3>
        <form @submit="formValidate" v-else>
            <div class="form-group">
                <label for="title">Заголовок</label>
                <input id="title" class="form-control col-12" type="text" v-model="item.title">
            </div>
            <div class="form-group">
                <label for="content">Текст</label>
                <input id="content" class="form-control col-12" type="text" v-model="item.body">
            </div>
            <input class="btn btn-primary col-12" type="submit" value="Сохранить">
        </form>
    </div>
</template>

<script>
    export default {
        name: "EditItem",
        props: ['list', 'isWait'],
        data() {
            return {
                item: {},
                notFound: false
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
            const self = this;
            let timer = setTimeout(function wait() {
                if(self.list) {
                    const item = self.list.find(el => el.id === Number(self.$route.params.id));
                    (item) ? self.item = item: self.notFound = true;
                } else {
                    timer = setTimeout(wait, 250);
                }
            })
        }
    }
</script>