<template>
    <h1>Create a Task</h1>

    <form @submit.prevent="handleSubmit">
       <label for="tasktitle">Title<br> <input type="text" v-model="tasktitle"></label><br><br>
       <button>AddTitle</button>
    </form>
</template>

<script setup>
import {ref } from 'vue';
import {usetaskstore} from '../store/TaskStore.js';
import { format } from 'date-fns'
const tasktitle=ref('');

const taskStore=usetaskstore();

const handleSubmit= () =>{
    if(tasktitle.value.length>0){
        const task={
            id:format(new Date(), 'yyyyMMddHHmmss'),
            title:tasktitle.value,
            isFav:false
        }
        taskStore.addTask(task);
        tasktitle.value='';

    }
}

</script>