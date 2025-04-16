<template>

    <div class="task">
        <h3>{{ task.title }}</h3>
        <div class="icons">
            <i class="material-icons">DELETE</i>
            <i class="material-icons">FAVOURITE</i>

        </div>

    </div>
    
</template>

<script setup>

defineProps({
    task:{
        type:Object,
        required:true,
    }
})


</script>