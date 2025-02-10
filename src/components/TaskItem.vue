<template>
    <div class="text">
        <p>{{ task.title }}</p>
        <p><strong>Completada:</strong> {{ task.completed ? 'Sí' : 'No' }}</p>
    </div>

</template>

<script setup>
defineProps({
    task: Object,  // Recibir la tarea como prop
});
</script>
<style scope>
.text {
    background-color: rgb(82, 82, 82);
    color: white;
    height: auto;
    width: 80%;
    border-radius: 10px;
}
</style>