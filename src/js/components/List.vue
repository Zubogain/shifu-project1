<template>
        <div class="row">
            <article v-if="this.$route.fullPath === '/admin'" class="col-12">
                <router-link to="/admin/add" class="col-12 btn btn-dark">Добавление элемента</router-link>
                <h3 v-if="isWait">Загрузка...</h3>
                <table class="table table-striped" v-else>
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Body</th>
                        <th scope="col"></th>
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
            <article v-else-if="this.$route.fullPath === '/admin/add'" class="col-12">
                <router-view
                    v-bind:list="list"
                    v-bind:isWait="isWait"
                ></router-view>
            </article>
            <article v-else class="col-12">
                <router-view
                    v-bind:list="list"
                    v-bind:isWait="isWait"
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
                isWait: true
            }
        },
        methods: {
            getList: function () {
                const self = this;
                let timer = setTimeout(function getList() {
                    const list = JSON.parse(localStorage.getItem("list"));
                    (list) ? (self.list = list) && (self.isWait = false): timer = setTimeout(getList, 250);
                });
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