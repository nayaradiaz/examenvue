<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useTaskStore } from '../stores/task';
import { ref } from 'vue';
const taskStore = useTaskStore();

const title=ref('');
const add =  () => {
    taskStore.addTask(title.value);
    title.value='';
}


</script>

<template>
    <nav>
        <router-link to="/task">Ver Tareas</router-link>
        <router-link to="/add-task">Agregar Tarea</router-link>
    </nav>

    <div>
        <h2>Añadir tarea</h2>
        <form action="" @submit.prevent="add">
            <input type="text" v-model="title" id="">
            <input type="submit" value="añadir">
        </form>
    </div>
    <router-view />
</template>
