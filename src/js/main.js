import '../css/style.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import Vue from 'vue';
import Router from 'vue-router';
import App from '../App.vue';
import List from '../components/List.vue';
import Home from '../components/Home.vue';
Vue.use(Router);
localStorage.clear();

const router = new Router({
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
        }
    ]
});

new Vue({
    el: '#app',
    render: h => h(App),
    router
})
// alert("{Шергали Эмиль} запустил проект, какой он молодец!");