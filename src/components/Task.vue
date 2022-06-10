<template>
  <div
    @dblclick="updateToggle(task)"
    :class="[task.reminder ? 'reminder' : '', 'task']"
  >
    <h3>
      {{ task.text }}
      <i @click="deleteTask(task.id)" class="fas fa-times"></i>
    </h3>
    <p>{{ task.day }}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Task",
  props: {
    task: Object,
  },
  methods: {
    ...mapActions(["deleteTask", "updateTask"]),
    updateToggle(task) {
      const updTask = { ...task, reminder: !task.reminder };
      this.updateTask(updTask);
    },
  },
};
</script>

<style scope>
.fas {
  color: red;
}
.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.task.reminder {
  border-left: 5px solid green;
}
.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>