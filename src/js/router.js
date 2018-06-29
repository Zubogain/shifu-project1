import Main from './components/Main.vue';
import List from './components/List.vue';
import InsertItem from './components/InsertItem.vue';
import EditItem from  './components/EditItem.vue';
import PageNotFound from './components/PageNotFound.vue';
const routes = [
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
            },
            {
                path: 'edit/:id',
                name: 'editItem',
                component: EditItem
            }
        ]
    },
    {
        path: '*',
        name: 'PageNotFound',
        component: PageNotFound
    }
];
export { routes };