import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useTaskStore = defineStore('task', () => {
  const array = ref([]);  // Aquí almacenaremos las tareas

  // Función para obtener las tareas desde la API
  const api = async () => {
    
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await response.json();
      array.value = data;  // Guardar las tareas en el array
    
  };
  const logout = () => {
    array.value = [];  // Limpiar las tareas cuando el usuario cierre sesión
  }
  return {
    array,
    api,
    logout,
  };
});
