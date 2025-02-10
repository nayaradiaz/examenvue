<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { useUserStore } from '../stores/user';
import { useTaskStore } from '../stores/task';
import { onMounted } from 'vue';  // Para ejecutar la carga cuando el componente se monta
import TaskItem from '../components/TaskItem.vue';  // Ajusta la ruta del componente
import { useRouter } from 'vue-router'; // Para la navegación entre rutas

const router = useRouter();
// Acceder al store de tareas
const taskStore = useTaskStore();
const userStore = useUserStore();

onMounted(() => {
    if (taskStore.array.length === 0) {
        taskStore.api();  // Llamar la función que obtiene las tareas
    }
});
</script>

<template>
    <!-- Navegación -->
    <nav>
        <router-link to="/task">Ver Tareas</router-link>
        <router-link to="/add-task">Agregar Tarea</router-link>
    </nav>

    <!-- Mostrar el nombre de usuario (si está disponible) -->
    <p>Nombre Usuario: {{ userStore.userName }}</p>

    <!-- Mostrar tareas con TaskItem -->
    <h1>Listado de tareas</h1>


    <!-- Mostrar mensaje de carga mientras obtenemos las tareas -->
    <div v-if="taskStore.array.length === 0">Cargando tareas...</div>

    <!-- Mostrar las tareas cuando estén disponibles -->
    <div v-else class="container">
        <TaskItem v-for="item in taskStore.array" :key="item.id" :task="item" />
    </div>


    <!-- Renderizar la vista del enrutador -->
    <router-view />
</template>
<style>
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    text-align: center;
}

nav a {
    margin-left: 15px;
    text-decoration: none;
    color: black;
    font-size: large;

}

nav a:hover {
    color: rgb(241, 66, 66);

}

nav {
    display: flex;
    justify-content: center;
}
</style>