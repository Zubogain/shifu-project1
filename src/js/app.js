import '../css/style.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from './router.js';
import App from './App.vue';
import json from '../../list.json';
Vue.use(VueRouter);
localStorage.clear();

try {
    json.forEach((el, index) => el.id = index);
    localStorage.setItem('list', JSON.stringify(json));
} catch (e) {
    console.log(`${e.name}: ${e.message}`);
}

const router = new VueRouter({
    mode: "history",
    linkExactActiveClass: 'active',
    routes: routes
});

new Vue({
    el: '#app',
    render: h => h(App),
    router
});
// alert("{Шергали Эмиль} запустил проект, какой он молодец!");