<script>
import { store } from "../store";
import Todo from "./Todo.vue";
export default {
  data() {
    return {
      store,
    };
  },
  components: { Todo },
  methods: {
    handleDelete() {
      this.store.todos.splice(this.store.clickedTodo, 1);
    },
  },
};
</script>

<template>
  <div>
    <h2>Todos</h2>
    <ul>
      <li v-for="(todo, index) in store.todos">
        <Todo :todo="todo" :todoIndex="index" @delete="handleDelete" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  max-width: 300px;
}
</style>
