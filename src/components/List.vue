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
    import json from './../../list.json';
    export default {
        name: "List",
        components: {
            ListItem
        },
        data() {
            return {
                list: json,
            }
        }
    }
</script>