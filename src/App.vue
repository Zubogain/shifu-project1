<template>
    <ol>
        <List
            v-for="item in list"
            v-bind:item="item"
            v-bind:key="item.slug"
        ></List>
    </ol>
</template>

<script>
    import List from "./components/List.vue";
    import jsonFile from '../list.json';
    export default {
        components: {
            List
        },
        data () {
            return {
                list: jsonFile
            }
        }
    }
</script>