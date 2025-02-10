import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import TaskView from '../views/TaskView.vue'
import AddTaskView from '../views/AddTaskView.vue'

const routes = [
  { path: '/', component: LoginView },
  { path: '/task', component: TaskView },
  { path: '/add-task', component: AddTaskView },

];
const router = createRouter({
  history: createWebHistory(),
  routes,

})

export default router;
