import '../css/style.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import { routes } from './router.js';
import App from './App.vue';
Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
    mode: "history",
    linkExactActiveClass: 'active',
    routes: routes
});

new Vue({
    el: '#app',
    methods: {
        getAllPosts() {
            const list = localStorage.getItem("list");
            if(!list && typeof list !== "string") {
                const options = {
                    params: {
                        _start: 0,
                        _limit: 10,
                    }
                };
                this.$http.get('https://jsonplaceholder.typicode.com/posts', options).then(response => {
                    localStorage.setItem('list', JSON.stringify(response.data));
                }, error => console.log(error));
            }
        },
    },
    created() {
        this.getAllPosts();
    },
    render: h => h(App),
    router
});
// alert("{Шергали Эмиль} запустил проект, какой он молодец!");