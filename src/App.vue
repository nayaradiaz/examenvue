<script setup>
import { ref, onMounted } from 'vue';
import { useUserStore } from './stores/user';
import { useTaskStore } from './stores/task';

import { useRouter } from 'vue-router';
const router = useRouter();
const userStore = useUserStore();
const taskStore = useTaskStore();
const logout = () => {
  userStore.userName = '';  // Limpiar el nombre de usuario
  taskStore.logout();
  router.push('/') // Limpiar las tareas
};

</script>

<template>
  <button @click="logout">Cerrar sesion</button>

  <router-view></router-view>
</template>

<style scoped></style>
