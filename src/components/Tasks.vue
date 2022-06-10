<template>
  <div v-for="task in allTasks" :key="task.id">
    <Task :task="task" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Task from "./Task.vue";

export default {
  name: "Tasks",
  components: { Task },
  computed: {
    ...mapGetters(["allTasks"]),
  },
  methods: {
    ...mapActions(["fetchTasks"]),
  },
  created() {
    this.fetchTasks();
  },
};
</script>

<style>
</style>