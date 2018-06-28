<template>
        <div class="row">
            <article v-if="this.$route.fullPath === '/admin'" class="col-12">
                <router-link to="/admin/add" class="col-12 btn btn-dark">Добавление элемента</router-link>
                <table class="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Content</th>
                        <th scope="col">Slug</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>

                    <tbody>
                    <ListItem
                            v-for="item in list"
                            v-bind:item="item"
                            v-bind:list="list"
                            v-bind:key="item.id"
                    ></ListItem>
                    </tbody>
                </table>
            </article>
            <article v-else class="col-12">
                <router-view
                    v-bind:list="list"
                ></router-view>
            </article>
        </div>
</template>

<script>
    import ListItem from './ListItem.vue';
    export default {
        name: "List",
        components: {
            ListItem
        },
        data() {
            return {
                list: this.getList(),
            }
        },
        methods: {
            getList: function () {
                return JSON.parse(localStorage.getItem("list"));
            }
        },
        watch: {
            list: function (val) {
                val.forEach((el, index) => el.id = index);
                localStorage.setItem('list', JSON.stringify(val));
            }
        }
    }
</script>