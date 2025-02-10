import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    const userName = ref('')
    const login = (username) => {
        userName.value = username;

    }
    const logout = () => {
        userStore.userName = '';  // Limpiar el nombre de usuario
         // Limpiar las tareas
      }
    return {
        userName,
        login,
        logout
    }
})
