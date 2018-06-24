<template>
        <div class="row">
            <article v-if="this.$route.fullPath !== '/admin/add'">
                <router-link to="/admin/add" class="col s12 btn">Добавление элемента</router-link>
                <table class="col s12 striped">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Slug</th>
                    </tr>
                    </thead>

                    <tbody>
                    <ListItem
                            v-for="item in list"
                            v-bind:item="item"
                            v-bind:key="item.title"
                    ></ListItem>
                    </tbody>
                </table>
            </article>
            <article v-else>
                <router-view
                    v-on:insertItem="insertItemInList"
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
            },
            insertItemInList: function (title) {
                const sortedList = this.list.filter(item => item.title !== title);
                sortedList.push({ title: title, content: '', slug: '' });
                localStorage.setItem("list", JSON.stringify(sortedList));
                this.list = this.getList();
            }
        }
    }
</script>