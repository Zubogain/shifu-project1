import '../css/style.css';
import Vue from 'vue';
import Router from 'vue-router';
import App from '../App.vue';
import List from '../components/List.vue';
import Home from '../components/Home.vue';
import PageNotFound from '../components/PageNotFound.vue';

Vue.use(Router);
localStorage.clear();

const router = new Router({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/admin',
            name: 'admin',
            component: List
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
})
// alert("{Шергали Эмиль} запустил проект, какой он молодец!");