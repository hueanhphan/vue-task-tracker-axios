import axios from "axios";
const state = {
  tasks: [],
};

const getters = {
  allTasks: (state) => state.tasks,
};

const actions = {
  async fetchTasks({ commit }) {
    const res = await axios.get("api/tasks");
    commit("setTasks", res.data);
  },
  async addTask({ commit }, newTask) {
    const res = await axios.post("api/tasks", newTask);
    commit("newTask", res.data);
  },
  async deleteTask({ commit }, id) {
    await axios.delete(`api/tasks/${id}`);

    commit("deleteTask", id);
  },
  async updateTask({ commit }, updTask) {
    const res = await axios.put(`api/tasks/${updTask.id}`, updTask);
    console.log(res.data);
    commit("updateTask", res.data);
  },
};
const mutations = {
  setTasks: (state, tasks) => (state.tasks = tasks),
  newTask: (state, task) => state.tasks.push(task),
  deleteTask: (state, id) =>
    (state.tasks = state.tasks.filter((task) => task.id !== id)),
  updateTask: (state, task) =>
    (state.tasks = state.tasks.map((t) =>
      t.id === task.id ? { ...t, reminder: task.reminder } : t
    )),
};
export default {
  state,
  getters,
  actions,
  mutations,
};
