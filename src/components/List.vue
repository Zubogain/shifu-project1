<template>
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
        }
    }
</script>