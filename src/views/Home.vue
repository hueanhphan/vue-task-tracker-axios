<template>
  <AddTask v-show="showAddTask" />
  <Tasks />
</template>

<script>
import Tasks from "../components/Tasks.vue";
import AddTask from "../components/AddTask.vue";
export default {
  name: "Home",
  props: {
    showAddTask: Boolean,
  },
  components: {
    Tasks,
    AddTask,
  },
};
</script>