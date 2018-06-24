import '../css/style.css';
import Vue from 'vue';
import Router from 'vue-router';
import App from '../App.vue';
import Main from '../components/Main.vue';
import List from '../components/List.vue';
import PageNotFound from '../components/PageNotFound.vue';
Vue.use(Router);

const router = new Router({
    mode: "history",
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main
        },
        {
            path: '/admin',
            name: 'admin',
            component: List,
        },
        {
            path: '*',
            name: 'PageNotFound',
            component: PageNotFound
        }
    ]
});

new Vue({
    el: '#app',
    render: h => h(App),
    router
});
// alert("{Шергали Эмиль} запустил проект, какой он молодец!");