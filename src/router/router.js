import { createRouter, createWebHistory } from 'vue-router';

import Home from "../layout/Home.vue";
import about from '../views/about.vue';
import getready from '../views/getready.vue';
import talktoher from '../views/talktoher.vue';


const routes = [

    { path: '/', component: Home, name: 'Home' },
    { path: '/about', component: about, name: 'about' },
    { path: '/getready', component: getready, name: 'getready' },
    { path: '/talktoher', component: talktoher, name: 'talktoher' },
        
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,

});


export default router;