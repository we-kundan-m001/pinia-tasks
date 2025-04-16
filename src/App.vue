<template>

  <main>
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia-logo">
      <h1>Pinia tasks {{ taskdetail.name }}</h1>
    </header>

    <!--button-->
    <button @click="filtervalue = 'All'">Show All</button>
    <button @click="filtervalue = 'favs'">Show Favs</button>

    <!---Task form -->
    <TaskForm />
    <!--Task List-->
    <div class="task-list" v-if="filtervalue == 'All'">
      <p>You have {{ taskdetail.totalCount }} task sleft to do</p>
      <div v-for="task in taskdetail.tasks" :key="task.id">
        <TaskDetail :task="task" />
      </div>
    </div>

    <div class="task-list" v-if="filtervalue == 'favs'">
      <p>you have {{ taskdetail.favcount }} task left to do</p>
      <div v-for="task in taskdetail.favs" :key="task.id">
        <TaskDetail :task="task" />
      </div>
    </div>
  </main>
</template>

<script setup >
import {ref } from 'vue';
import  TaskDetail  from './components/TaskDetail.vue';
import TaskForm from './components/TaskForm.vue';
import { usetaskstore } from './store/TaskStore.js';

const taskdetail= usetaskstore();

const filtervalue=ref('');
</script>