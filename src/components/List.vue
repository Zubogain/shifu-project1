<template>
        <table class="striped">
            <thead>
            <tr>
                <th>Title</th>
                <th>Content</th>
                <th>Slug</th>
                <th></th>
            </tr>
            </thead>

            <tbody>
                <ListItem
                        v-for="item in list"
                        v-bind:item="item"
                        v-bind:key="item.slug"
                        v-on:remove="removeFromList"
                ></ListItem>
            </tbody>
        </table>
</template>

<script>
    import ListItem from './ListItem.vue';
    import json from './../../list.json';
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
            removeFromList: function (slug) {
                localStorage.setItem("list", JSON.stringify(this.list.filter(item => item.slug !== slug)));
                this.list = this.getList();
            }
        }
    }
</script>