import '../css/style.css';
import Vue from 'vue';
import Router from 'vue-router';
import App from '../App.vue';
import Main from '../components/Main.vue';
import List from '../components/List.vue';
import InsertItem from '../components/InsertItem.vue';
import PageNotFound from '../components/PageNotFound.vue';
import json from '../../list.json';
Vue.use(Router);

const list = localStorage.getItem('list');
if(!list && typeof list !== "string") {
    try {
        json.forEach((el, index) => el.id = index);
        localStorage.setItem('list', JSON.stringify(json));
    } catch (e) {
        console.log(`${e.name}: ${e.message}`);
    }
}

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
            children: [
                {
                    path: 'add',
                    name: 'insertItem',
                    component: InsertItem
                }
            ]
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