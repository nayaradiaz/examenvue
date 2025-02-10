<template>
    <div>
        <form @submit.prevent="handleLogin" class="form">
            <input type="text" v-model="username" placeholder="Nombre" />
            <input type="submit" value="iniciar sesion">
        </form>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useUserStore } from '../stores/user';
import { useTaskStore } from '../stores/task';

import { useRouter } from 'vue-router'; // Para la navegación entre rutas

const router = useRouter();
const userStore = useUserStore();
const taskStore = useTaskStore();

let username = ref('');
const handleLogin = async () => {
    userStore.login(username.value);
    taskStore.api();
    router.push('/task');

};


</script>