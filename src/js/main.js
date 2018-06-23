import '../css/style.css';
import Vue from 'vue';
import Router from 'vue-router';
import App from '../App.vue';
import List from '../components/List.vue';
import Home from '../components/Home.vue';
import PageNotFound from '../components/PageNotFound.vue';
import json from '../../list.json';
Vue.use(Router);
localStorage.clear();

try {
    localStorage.setItem('list', JSON.stringify(json));
} catch (e) {
    console.log(`${e.name}: ${e.message}`);
}

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