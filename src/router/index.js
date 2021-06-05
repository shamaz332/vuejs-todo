import Todo from '../views/Todo.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes =[

{
    path:'/',
    name:'Todo',
    component:Todo
}

]

const router = new VueRouter ({
    routes
})


export default router;